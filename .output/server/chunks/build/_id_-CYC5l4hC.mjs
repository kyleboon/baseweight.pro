import { _ as _sfc_main$1 } from './donut-chart-CC7Kb2-u.mjs';
import { withAsyncContext, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { marked } from 'marked';
import { d as dataTypes } from '../_/dataTypes.mjs';
import { w as weightUtils } from '../_/weight.mjs';
import { d as useAsyncData } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'mongodb';
import 'config';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'pinia';
import '@vue/shared';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { Library } = dataTypes;
    const route = useRoute();
    const { data: shareData, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("share", () => $fetch(`/api/share/${route.params.id}`))), __temp = await __temp, __restore(), __temp);
    const library = computed(() => {
      if (!shareData.value) return null;
      const lib = new Library();
      lib.load(shareData.value.library);
      for (const l of lib.lists) {
        if (l.externalId && l.externalId == shareData.value.externalId) {
          lib.defaultListId = l.id;
          break;
        }
      }
      for (const cat of lib.categories) {
        cat.calculateSubtotal();
      }
      return lib;
    });
    const list = computed(() => {
      if (!library.value) return null;
      return library.value.getListById(library.value.defaultListId);
    });
    const categories = computed(() => {
      if (!library.value || !list.value) return [];
      return list.value.categoryIds.map((id) => library.value.getCategoryById(id)).filter(Boolean);
    });
    const totalWeight = computed(() => categories.value.reduce((sum, c) => sum + c.subtotalWeight, 0));
    const totals = computed(() => {
      let totalWeight2 = 0;
      let totalWornWeight = 0;
      let totalConsumableWeight = 0;
      let totalQty = 0;
      let totalPrice = 0;
      let totalConsumablePrice = 0;
      for (const cat of categories.value) {
        totalWeight2 += cat.subtotalWeight;
        totalPrice += cat.subtotalPrice;
        totalWornWeight += cat.subtotalWornWeight;
        totalConsumableWeight += cat.subtotalConsumableWeight;
        totalConsumablePrice += cat.subtotalConsumablePrice;
        totalQty += cat.subtotalQty;
      }
      const totalPackWeight = totalWeight2 - (totalWornWeight + totalConsumableWeight);
      const unit = library.value?.totalUnit ?? "oz";
      return {
        totalWeight: totalWeight2,
        totalWeightDisplay: mgToWeight(totalWeight2, unit),
        totalWornWeight,
        totalWornWeightDisplay: mgToWeight(totalWornWeight, unit),
        totalConsumableWeight,
        totalConsumableWeightDisplay: mgToWeight(totalConsumableWeight, unit),
        totalPackWeight,
        totalPackWeightDisplay: mgToWeight(totalPackWeight, unit),
        shouldDisplayPackWeight: totalPackWeight !== totalWeight2,
        totalQty,
        totalPrice,
        totalPriceDisplay: totalPrice ? totalPrice.toFixed(2) : "",
        totalConsumablePrice,
        totalConsumablePriceDisplay: totalConsumablePrice ? totalConsumablePrice.toFixed(2) : ""
      };
    });
    const renderedDescription = computed(() => {
      if (!list.value?.description) return "";
      return marked(list.value.description);
    });
    function mgToWeight(mg, unit) {
      return weightUtils.MgToWeight(mg, unit);
    }
    function getItem(itemId) {
      return library.value?.getItemById(itemId) ?? {};
    }
    function itemClasses(ci) {
      const item = getItem(ci.itemId);
      return {
        lpItemHasImage: !!(item.image || item.imageUrl),
        lpItemHasPrice: !!item.price
      };
    }
    function starClass(item) {
      return item.star ? `lpStar${item.star}` : "";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_donut_chart = _sfc_main$1;
      if (library.value && list.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          id: "main",
          class: "lpShare"
        }, _attrs))}><div class="${ssrRenderClass([{
          lpShowImages: library.value.optionalFields.images,
          lpShowWorn: library.value.optionalFields.worn,
          lpShowConsumable: library.value.optionalFields.consumable,
          lpShowPrices: library.value.optionalFields.price
        }, "lpList"])}"><h1 class="lpListName">${ssrInterpolate(list.value.name)}</h1><div class="lpListSummary"><div class="lpChartContainer">`);
        _push(ssrRenderComponent(_component_donut_chart, {
          categories: categories.value,
          "total-weight": totalWeight.value,
          library: library.value
        }, null, _parent));
        _push(`</div><div class="lpTotalsContainer"><ul class="lpTotals lpTable lpDataTable"><li class="lpRow lpHeader"><span class="lpCell"> </span><span class="lpCell">Category</span>`);
        if (library.value.optionalFields.price) {
          _push(`<span class="lpCell">Price</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="lpCell">Weight</span></li><!--[-->`);
        ssrRenderList(categories.value, (cat) => {
          _push(`<li class="lpTotalCategory lpRow"${ssrRenderAttr("id", `total_${cat.id}`)}${ssrRenderAttr("category", cat.id)}><span class="lpCell lpLegendCell"><span class="lpLegend" style="${ssrRenderStyle({ backgroundColor: cat.displayColor })}"></span></span><span class="lpCell">${ssrInterpolate(cat.name)}</span>`);
          if (library.value.optionalFields.price) {
            _push(`<span class="lpCell lpNumber">${ssrInterpolate(library.value.currencySymbol)}${ssrInterpolate(cat.subtotalPrice ? cat.subtotalPrice.toFixed(2) : "0.00")}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="lpCell lpNumber"><div class="lpSubtotal"><span class="lpDisplaySubtotal"${ssrRenderAttr("mg", cat.subtotalWeight)}>${ssrInterpolate(mgToWeight(cat.subtotalWeight, library.value.totalUnit))}</span><span class="lpSubtotalUnit">${ssrInterpolate(library.value.totalUnit)}</span></div></span></li>`);
        });
        _push(`<!--]--><li class="lpRow lpFooter lpTotal"><span class="lpCell"></span><span class="lpCell lpSubtotal"${ssrRenderAttr("title", `${totals.value.totalQty} items`)}>Total</span>`);
        if (library.value.optionalFields.price) {
          _push(`<span class="lpCell lpNumber lpSubtotal">${ssrInterpolate(library.value.currencySymbol)}${ssrInterpolate(totals.value.totalPriceDisplay)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="lpCell lpNumber lpSubtotal"><span class="lpTotalValue"${ssrRenderAttr("title", `${totals.value.totalQty} items`)}>${ssrInterpolate(totals.value.totalWeightDisplay)}</span><span class="lpTotalUnit">${ssrInterpolate(library.value.totalUnit)}</span></span></li>`);
        if (totals.value.totalConsumableWeight) {
          _push(`<li class="lpRow lpFooter lpBreakdown lpConsumableWeight"><span class="lpCell"></span><span class="lpCell lpSubtotal">Consumable</span>`);
          if (library.value.optionalFields.price) {
            _push(`<span class="lpCell"></span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="lpCell lpNumber lpSubtotal"><span class="lpDisplaySubtotal"${ssrRenderAttr("mg", totals.value.totalConsumableWeight)}>${ssrInterpolate(totals.value.totalConsumableWeightDisplay)}</span><span class="lpSubtotalUnit">${ssrInterpolate(library.value.totalUnit)}</span></span></li>`);
        } else {
          _push(`<!---->`);
        }
        if (totals.value.totalWornWeight) {
          _push(`<li class="lpRow lpFooter lpBreakdown lpWornWeight"><span class="lpCell"></span><span class="lpCell lpSubtotal">Worn</span>`);
          if (library.value.optionalFields.price) {
            _push(`<span class="lpCell"></span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="lpCell lpNumber lpSubtotal"><span class="lpDisplaySubtotal"${ssrRenderAttr("mg", totals.value.totalWornWeight)}>${ssrInterpolate(totals.value.totalWornWeightDisplay)}</span><span class="lpSubtotalUnit">${ssrInterpolate(library.value.totalUnit)}</span></span></li>`);
        } else {
          _push(`<!---->`);
        }
        if (totals.value.shouldDisplayPackWeight) {
          _push(`<li class="lpRow lpFooter lpBreakdown lpPackWeight"><span class="lpCell"></span><span class="lpCell lpSubtotal">Base Weight</span>`);
          if (library.value.optionalFields.price) {
            _push(`<span class="lpCell"></span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="lpCell lpNumber lpSubtotal"><span class="lpDisplaySubtotal"${ssrRenderAttr("mg", totals.value.totalPackWeight)}>${ssrInterpolate(totals.value.totalPackWeightDisplay)}</span><span class="lpSubtotalUnit">${ssrInterpolate(library.value.totalUnit)}</span></span></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul></div></div><div style="${ssrRenderStyle({ "clear": "both" })}"></div>`);
        if (renderedDescription.value) {
          _push(`<div id="lpListDescription">${renderedDescription.value ?? ""}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<ul class="lpCategories"><!--[-->`);
        ssrRenderList(categories.value, (cat) => {
          _push(`<li class="lpCategory"${ssrRenderAttr("id", cat.id)}><ul class="lpItems lpDataTable"><li class="lpHeader lpItemsHeader"><h2 class="lpCategoryName">${ssrInterpolate(cat.name)}</h2>`);
          if (library.value.optionalFields.price) {
            _push(`<span class="lpPriceCell">Price</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="lpWeightCell">Weight</span><span class="lpQtyCell">qty</span></li><!--[-->`);
          ssrRenderList(cat.categoryItems, (ci) => {
            _push(`<li class="${ssrRenderClass([itemClasses(ci), "lpItem"])}"${ssrRenderAttr("id", ci.itemId)}>`);
            if (library.value.optionalFields.images) {
              _push(`<span class="lpImageCell">`);
              if (getItem(ci.itemId).image) {
                _push(`<img class="lpItemImage"${ssrRenderAttr("src", `https://i.imgur.com/${getItem(ci.itemId).image}s.jpg`)}${ssrRenderAttr("href", `https://i.imgur.com/${getItem(ci.itemId).image}l.jpg`)}>`);
              } else if (getItem(ci.itemId).imageUrl) {
                _push(`<img class="lpItemImage"${ssrRenderAttr("src", getItem(ci.itemId).imageUrl)}${ssrRenderAttr("href", getItem(ci.itemId).imageUrl)}>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<span class="lpName">`);
            if (getItem(ci.itemId).url) {
              _push(`<a${ssrRenderAttr("href", getItem(ci.itemId).url)} class="lpHref">${ssrInterpolate(getItem(ci.itemId).name)}</a>`);
            } else {
              _push(`<!--[-->${ssrInterpolate(getItem(ci.itemId).name)}<!--]-->`);
            }
            _push(`</span><span class="lpDescription">${ssrInterpolate(getItem(ci.itemId).description)}</span><span class="lpActionsCell"><i class="${ssrRenderClass([{ lpActive: ci.worn }, "lpSprite lpWorn"])}" title="This item is worn and not counted in pack weight."></i><i class="${ssrRenderClass([{ lpActive: ci.consumable }, "lpSprite lpConsumable"])}" title="This item is a consumable and not counted in pack weight."></i><i class="${ssrRenderClass([[starClass(getItem(ci.itemId)), { lpHidden: !getItem(ci.itemId).star }], "lpSprite lpStar"])}" title="This item is starred"></i></span>`);
            if (library.value.optionalFields.price) {
              _push(`<span class="lpPriceCell lpNumber">${ssrInterpolate(library.value.currencySymbol)}${ssrInterpolate(getItem(ci.itemId).price ? getItem(ci.itemId).price.toFixed(2) : "0.00")}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<span class="lpWeightCell lpNumber"><span class="lpWeight">${ssrInterpolate(mgToWeight(getItem(ci.itemId).weight, getItem(ci.itemId).authorUnit))}</span><div class="lpUnitSelect"><span class="lpDisplay">${ssrInterpolate(getItem(ci.itemId).authorUnit)}</span></div></span><span class="lpQtyCell lpNumber"${ssrRenderAttr("qty", ci.qty)}>${ssrInterpolate(ci.qty)}</span></li>`);
          });
          _push(`<!--]--><li class="lpFooter lpItemsFooter">`);
          if (library.value.optionalFields.price) {
            _push(`<span class="lpPriceCell lpNumber"><div class="lpPriceSubtotal">${ssrInterpolate(library.value.currencySymbol)}${ssrInterpolate(cat.subtotalPrice ? cat.subtotalPrice.toFixed(2) : "0.00")}</div></span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="lpWeightCell lpNumber"><div class="lpSubtotal"><span class="lpDisplaySubtotal"${ssrRenderAttr("mg", cat.subtotalWeight)}>${ssrInterpolate(mgToWeight(cat.subtotalWeight, library.value.totalUnit))}</span><span class="lpSubtotalUnit">${ssrInterpolate(library.value.totalUnit)}</span></div></span><span class="lpQtyCell lpNumber"><div class="lpSubtotal"><span class="lpQtySubtotal">${ssrInterpolate(cat.subtotalQty)}</span></div></span></li></ul></li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      } else if (unref(error)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          id: "main",
          class: "lpShare"
        }, _attrs))}><p>${ssrInterpolate(unref(error).message || "List not found.")}</p></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/r/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-CYC5l4hC.mjs.map
