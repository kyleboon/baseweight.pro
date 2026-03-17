import { ref, computed, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { c as colorUtils } from '../_/dataTypes.mjs';
import { w as weightUtils } from '../_/weight.mjs';

const CX = 130;
const CY = 130;
const CAT_INNER = 70;
const CAT_OUTER = 120;
const CAT_EXPANDED_INNER = 25;
const CAT_EXPANDED_OUTER = 65;
const ITEM_INNER = 70;
const ITEM_OUTER = 120;
const _sfc_main = /* @__PURE__ */ Object.assign({ name: "DonutChart" }, {
  __name: "DonutChart",
  __ssrInlineRender: true,
  props: {
    categories: {
      type: Array,
      default: null
    },
    totalWeight: {
      type: Number,
      default: 0
    },
    library: {
      type: Object,
      default: null
    }
  },
  emits: ["category-hover"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    function segmentPath(innerR, outerR, startAngle, endAngleIn) {
      const endAngle = endAngleIn - startAngle >= Math.PI * 2 ? startAngle + Math.PI * 2 - 1e-4 : endAngleIn;
      const x1 = CX + outerR * Math.cos(startAngle);
      const y1 = CY + outerR * Math.sin(startAngle);
      const x2 = CX + outerR * Math.cos(endAngle);
      const y2 = CY + outerR * Math.sin(endAngle);
      const x3 = CX + innerR * Math.cos(endAngle);
      const y3 = CY + innerR * Math.sin(endAngle);
      const x4 = CX + innerR * Math.cos(startAngle);
      const y4 = CY + innerR * Math.sin(startAngle);
      const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
      return `M ${x1} ${y1} A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerR} ${innerR} 0 ${largeArc} 0 ${x4} ${y4} Z`;
    }
    const expandedId = ref(null);
    const hovered = ref(null);
    const categorySlices = computed(() => {
      if (!props.totalWeight) return [];
      const innerR = expandedId.value ? CAT_EXPANDED_INNER : CAT_INNER;
      const outerR = expandedId.value ? CAT_EXPANDED_OUTER : CAT_OUTER;
      let angle = -Math.PI / 2;
      return props.categories.filter((cat) => cat.subtotalWeight > 0).map((cat, i) => {
        const catColor = cat.color || colorUtils.getColor(i);
        const fill = colorUtils.rgbToString(catColor);
        const span = cat.subtotalWeight / props.totalWeight * 2 * Math.PI;
        const path = segmentPath(innerR, outerR, angle, angle + span);
        const weight = `${weightUtils.MgToWeight(cat.subtotalWeight, props.library.totalUnit)} ${props.library.totalUnit}`;
        const slice = { id: cat.id, fill, path, name: cat.name, weight, catColor };
        angle += span;
        return slice;
      });
    });
    const itemSlices = computed(() => {
      if (!expandedId.value) return [];
      const catIndex = props.categories.findIndex((c) => c.id === expandedId.value);
      const category = props.library.getCategoryById(expandedId.value);
      if (!category || !category.subtotalWeight) return [];
      const catColor = category.color || colorUtils.getColor(catIndex);
      let angle = -Math.PI / 2;
      return category.categoryItems.map((ci, i) => {
        const item = props.library.getItemById(ci.itemId);
        if (!item || !item.weight) return null;
        const weight = item.weight * ci.qty;
        const span = weight / category.subtotalWeight * 2 * Math.PI;
        const fill = colorUtils.rgbToString(colorUtils.getColor(i, catColor));
        const path = segmentPath(ITEM_INNER, ITEM_OUTER, angle, angle + span);
        const name = ci.qty > 1 ? `${item.name} ×${ci.qty}` : item.name;
        const weightStr = `${weightUtils.MgToWeight(weight, props.library.totalUnit)} ${props.library.totalUnit}`;
        angle += span;
        return { fill, path, name, weight: weightStr };
      }).filter(Boolean);
    });
    watch(
      () => props.categories,
      (newCategories) => {
        if (expandedId.value && !newCategories.find((c) => c.id === expandedId.value)) {
          expandedId.value = null;
        }
      }
    );
    function truncate(str, max = 18) {
      return str.length > max ? `${str.slice(0, max - 1)}…` : str;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        class: "lp-chart",
        viewBox: "0 0 260 260",
        width: "260",
        height: "260"
      }, _attrs))}><!--[-->`);
      ssrRenderList(categorySlices.value, (slice) => {
        _push(`<path${ssrRenderAttr("d", slice.path)}${ssrRenderAttr("fill", slice.fill)} stroke="#f5f5f5" stroke-width="2" class="${ssrRenderClass([{ "is-expanded": expandedId.value === slice.id }, "lp-donut-slice"])}"><title>${ssrInterpolate(slice.name)}: ${ssrInterpolate(slice.weight)}</title></path>`);
      });
      _push(`<!--]-->`);
      if (expandedId.value && itemSlices.value.length) {
        _push(`<g><!--[-->`);
        ssrRenderList(itemSlices.value, (slice, i) => {
          _push(`<path${ssrRenderAttr("d", slice.path)}${ssrRenderAttr("fill", slice.fill)} stroke="#f5f5f5" stroke-width="1" class="lp-donut-slice"><title>${ssrInterpolate(slice.name)}: ${ssrInterpolate(slice.weight)}</title></path>`);
        });
        _push(`<!--]--></g>`);
      } else {
        _push(`<!---->`);
      }
      if (hovered.value) {
        _push(`<g class="lp-center-label"><text x="130" y="123" text-anchor="middle" class="lp-center-name">${ssrInterpolate(truncate(hovered.value.name))}</text><text x="130" y="140" text-anchor="middle" class="lp-center-weight">${ssrInterpolate(hovered.value.weight)}</text></g>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</svg>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/donut-chart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=donut-chart-CC7Kb2-u.mjs.map
