import { ref, computed, mergeProps, withCtx, createTextVNode, resolveDirective, createVNode, withDirectives, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, watch, nextTick, vModelSelect, withModifiers, vModelText, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrGetDirectiveProps, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderStyle, ssrLooseContain, ssrLooseEqual, ssrRenderSlot, ssrGetDynamicModelProps } from 'vue/server-renderer';
import { u as useLighterpackStore } from './store-BCqR5AiP.mjs';
import Sortable from 'sortablejs';
import { w as weightUtils } from '../_/weight.mjs';
import { f as fetchJson } from './utils-j_mMODQ8.mjs';
import { useRouter } from 'vue-router';
import { _ as __nuxt_component_0 } from './nuxt-link-CztNPehg.mjs';
import { c as colorUtils } from '../_/dataTypes.mjs';
import { _ as _sfc_main$r } from './donut-chart-CC7Kb2-u.mjs';
import { _ as _sfc_main$o, a as _sfc_main$1$1 } from './global-alerts-Bo8j0Yf8.mjs';
import { _ as _sfc_main$p } from './modal-CYptURXi.mjs';
import { _ as _sfc_main$q } from './errors-AFvz1_a0.mjs';
import 'pinia';
import './server.mjs';
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
import '@vue/shared';

const _sfc_main$n = /* @__PURE__ */ Object.assign({ name: "LibraryItem" }, {
  __name: "LibraryItems",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    const store = useLighterpackStore();
    const searchText = ref("");
    const library = computed(() => store.library);
    const filteredItems = computed(() => {
      let filteredItemsList = [];
      if (!searchText.value) {
        filteredItemsList = library.value.items.map((libItem) => Object.assign({}, libItem));
      } else {
        const lowerCaseSearchText = searchText.value.toLowerCase();
        for (let i = 0; i < library.value.items.length; i++) {
          const libItem = library.value.items[i];
          if (libItem.name.toLowerCase().indexOf(lowerCaseSearchText) > -1 || libItem.description.toLowerCase().indexOf(lowerCaseSearchText) > -1) {
            filteredItemsList.push(Object.assign({}, libItem));
          }
        }
      }
      const currentListItems = library.value.getItemsInCurrentList();
      for (let i = 0; i < filteredItemsList.length; i++) {
        if (currentListItems.indexOf(filteredItemsList[i].id) > -1) {
          filteredItemsList[i].inCurrentList = true;
        }
      }
      return filteredItemsList;
    });
    ref(null);
    function displayWeight(mg, unit) {
      return weightUtils.MgToWeight(mg, unit) || 0;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "libraryContainer" }, _attrs))}><h2>Gear</h2><input id="librarySearch"${ssrRenderAttr("value", searchText.value)} type="text" placeholder="search items"><ul id="library"><!--[-->`);
      ssrRenderList(filteredItems.value, (libItem) => {
        _push(`<li class="lpLibraryItem"${ssrRenderAttr("data-item-id", libItem.id)}>`);
        if (libItem.url) {
          _push(`<a${ssrRenderAttr("href", libItem.url)} target="_blank" class="lpName lpHref">${ssrInterpolate(libItem.name)}</a>`);
        } else {
          _push(`<!---->`);
        }
        if (!libItem.url) {
          _push(`<span class="lpName">${ssrInterpolate(libItem.name)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="lpWeight">${ssrInterpolate(displayWeight(libItem.weight, libItem.authorUnit))} ${ssrInterpolate(libItem.authorUnit)}</span><span class="lpDescription">${ssrInterpolate(libItem.description)}</span><a class="lpRemove lpRemoveLibraryItem speedbump" title="Delete this item permanently"><i class="lpSprite lpSpriteRemove"></i></a>`);
        if (!libItem.inCurrentList) {
          _push(`<div class="lpHandle lpLibraryItemHandle" title="Reorder this item"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></section>`);
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/library-items.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = /* @__PURE__ */ Object.assign({ name: "Popover" }, {
  __name: "Popover",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      default: null
    },
    shown: {
      type: Boolean,
      required: true
    }
  },
  emits: ["hide"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function hide() {
      emit("hide");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_click_outside = resolveDirective("click-outside");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: { lpPopover: true, lpPopoverShown: __props.shown }
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_click_outside, hide)))}><div class="lpTarget">`);
      ssrRenderSlot(_ctx.$slots, "target", {}, null, _push, _parent);
      _push(`</div><div class="lpContent">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/popover.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = /* @__PURE__ */ Object.assign({ name: "PopoverHover" }, {
  __name: "PopoverHover",
  __ssrInlineRender: true,
  emits: ["shown", "hidden"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const shown = ref(false);
    let hideTimeout = null;
    function show() {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
      shown.value = true;
      emit("shown");
    }
    function hide() {
      shown.value = false;
      emit("hidden");
    }
    function startHideTimeout() {
      hideTimeout = setTimeout(hide, 50);
    }
    __expose({ shown, show, hide, startHideTimeout });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$m, mergeProps({
        shown: shown.value,
        onMouseenter: show,
        onMouseleave: startHideTimeout
      }, _attrs), {
        target: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "target", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "target")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "content", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "content")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/popover-hover.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = /* @__PURE__ */ Object.assign({ name: "LibraryList" }, {
  __name: "LibraryLists",
  __ssrInlineRender: true,
  props: {
    list: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    const store = useLighterpackStore();
    const library = computed(() => store.library);
    function listName(list) {
      return list.name || "New list";
    }
    function newList() {
      store.newList();
    }
    function copyList() {
      store.showModal("copyList");
    }
    function importCSV() {
      store.triggerImportCSV();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "listContainer" }, _attrs))}><div class="listContainerHeader"><h2>Lists</h2>`);
      _push(ssrRenderComponent(_sfc_main$l, { id: "addListFlyout" }, {
        target: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a class="lpAdd"${_scopeId}><i class="lpSprite lpSpriteAdd"${_scopeId}></i>Add new list</a>`);
          } else {
            return [
              createVNode("a", {
                class: "lpAdd",
                onClick: newList
              }, [
                createVNode("i", { class: "lpSprite lpSpriteAdd" }),
                createTextVNode("Add new list")
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a class="lpAdd"${_scopeId}><i class="lpSprite lpSpriteAdd"${_scopeId}></i>Add new list</a><a class="lpAdd"${_scopeId}><i class="lpSprite lpSpriteUpload"${_scopeId}></i>Import CSV</a><a class="lpCopy"${_scopeId}><i class="lpSprite lpSpriteCopy"${_scopeId}></i>Copy a list</a>`);
          } else {
            return [
              createVNode("a", {
                class: "lpAdd",
                onClick: newList
              }, [
                createVNode("i", { class: "lpSprite lpSpriteAdd" }),
                createTextVNode("Add new list")
              ]),
              createVNode("a", {
                class: "lpAdd",
                onClick: importCSV
              }, [
                createVNode("i", { class: "lpSprite lpSpriteUpload" }),
                createTextVNode("Import CSV")
              ]),
              createVNode("a", {
                class: "lpCopy",
                onClick: copyList
              }, [
                createVNode("i", { class: "lpSprite lpSpriteCopy" }),
                createTextVNode("Copy a list")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><ul id="lists"><!--[-->`);
      ssrRenderList(library.value.lists, (libList) => {
        _push(`<li class="${ssrRenderClass([{ lpActive: library.value.defaultListId == libList.id }, "lpLibraryList"])}"><div class="lpHandle" title="Reorder this item"></div><span class="lpLibraryListSwitch lpListName">${ssrInterpolate(listName(libList))}</span><a class="lpRemove" title="Remove this list"><i class="lpSprite lpSpriteRemove"></i></a></li>`);
      });
      _push(`<!--]--></ul></section>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/library-lists.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = /* @__PURE__ */ Object.assign({ name: "Sidebar" }, {
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "sidebar" }, _attrs))}><div id="scrollable"><h1>LighterPack <span>(beta)</span></h1>`);
      _push(ssrRenderComponent(_sfc_main$k, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$n, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sidebar.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ Object.assign({ name: "Share" }, {
  __name: "Share",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useLighterpackStore();
    const shareUrlInput = ref(null);
    const library = computed(() => store.library);
    const list = computed(() => library.value.getListById(library.value.defaultListId));
    const isSignedIn = computed(() => store.loggedIn);
    const externalId = computed(() => list.value.externalId || "");
    const baseUrl = computed(() => {
      const location = (void 0).location;
      return location.origin ? location.origin : `${location.protocol}//${location.hostname}`;
    });
    const shareUrl = computed(() => externalId.value ? `${baseUrl.value}/r/${externalId.value}` : "");
    const csvUrl = computed(() => externalId.value ? `${baseUrl.value}/csv/${externalId.value}` : "");
    const embedCode = computed(
      () => `<script src="${baseUrl.value}/e/${externalId.value}"><\/script><div id="${externalId.value}"></div>`
    );
    function focusShare(_evt) {
      if (!list.value.externalId) {
        fetchJson("/api/external-id", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "same-origin"
        }).then((response) => {
          store.setExternalId({ externalId: response.externalId, list: list.value });
          nextTick(() => {
            if (shareUrlInput.value) shareUrlInput.value.select();
          });
        }).catch((_response) => {
          alert("An error occurred while attempting to get an ID for your list. Please try again later.");
        });
      } else {
        nextTick(() => {
          if (shareUrlInput.value) shareUrlInput.value.select();
        });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_select_on_focus = resolveDirective("select-on-focus");
      let _temp0;
      if (isSignedIn.value) {
        _push(`<span${ssrRenderAttrs(mergeProps({ class: "headerItem hasPopover" }, _attrs))}>`);
        _push(ssrRenderComponent(_sfc_main$l, {
          id: "share",
          onShown: focusShare
        }, {
          target: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="lpSprite lpLink"${_scopeId}></i> Share`);
            } else {
              return [
                createVNode("i", { class: "lpSprite lpLink" }),
                createTextVNode(" Share")
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="lpFields"${_scopeId}><div class="lpField"${_scopeId}><label for="shareUrl"${_scopeId}>Share your list</label><input${ssrRenderAttrs(mergeProps({
                id: "shareUrl",
                ref_key: "shareUrlInput",
                ref: shareUrlInput,
                type: "text",
                value: shareUrl.value
              }, ssrGetDirectiveProps(_ctx, _directive_select_on_focus)))}${_scopeId}></div><div class="lpField"${_scopeId}><label for="embedUrl"${_scopeId}>Embed your list</label><textarea${ssrRenderAttrs(_temp0 = mergeProps({
                id: "embedUrl",
                value: embedCode.value,
                readonly: ""
              }, ssrGetDirectiveProps(_ctx, _directive_select_on_focus)), "textarea")}${_scopeId}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea></div><a id="csvUrl"${ssrRenderAttr("href", csvUrl.value)} target="_blank" class="lpHref"${_scopeId}><i class="lpSprite lpSpriteDownload"${_scopeId}></i>Export to CSV</a></div>`);
            } else {
              return [
                createVNode("div", { class: "lpFields" }, [
                  createVNode("div", { class: "lpField" }, [
                    createVNode("label", { for: "shareUrl" }, "Share your list"),
                    withDirectives(createVNode("input", {
                      id: "shareUrl",
                      ref_key: "shareUrlInput",
                      ref: shareUrlInput,
                      type: "text",
                      value: shareUrl.value
                    }, null, 8, ["value"]), [
                      [_directive_select_on_focus]
                    ])
                  ]),
                  createVNode("div", { class: "lpField" }, [
                    createVNode("label", { for: "embedUrl" }, "Embed your list"),
                    withDirectives(createVNode("textarea", {
                      id: "embedUrl",
                      value: embedCode.value,
                      readonly: ""
                    }, null, 8, ["value"]), [
                      [_directive_select_on_focus]
                    ])
                  ]),
                  createVNode("a", {
                    id: "csvUrl",
                    href: csvUrl.value,
                    target: "_blank",
                    class: "lpHref"
                  }, [
                    createVNode("i", { class: "lpSprite lpSpriteDownload" }),
                    createTextVNode("Export to CSV")
                  ], 8, ["href"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/share.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ Object.assign({ name: "ListSettings" }, {
  __name: "ListSettings",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useLighterpackStore();
    const library = computed(() => store.library);
    const isSignedIn = computed(() => store.loggedIn);
    const optionalFieldsLookup = computed(() => {
      const fields = [
        { name: "images", displayName: "Item images", cssClass: "lpShowImages" },
        { name: "price", displayName: "Item prices", cssClass: "lpShowPrices" },
        { name: "worn", displayName: "Worn items", cssClass: "lpShowWorn" },
        { name: "consumable", displayName: "Consumable items", cssClass: "lpShowConsumable" },
        { name: "listDescription", displayName: "List descriptions", cssClass: "lpShowListDescription" }
      ];
      return fields.map((f) => ({ ...f, value: library.value.optionalFields[f.name] }));
    });
    function toggleOptionalField(_evt, optionalField) {
      store.toggleOptionalField(optionalField);
    }
    function updateCurrencySymbol(evt) {
      store.updateCurrencySymbol(evt.target.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (isSignedIn.value) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          id: "settings",
          class: "headerItem hasPopover"
        }, _attrs))}>`);
        _push(ssrRenderComponent(_sfc_main$l, null, {
          target: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="lpSprite lpSettings"${_scopeId}></i> Settings`);
            } else {
              return [
                createVNode("i", { class: "lpSprite lpSettings" }),
                createTextVNode(" Settings")
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<ul id="lpOptionalFields"${_scopeId}><!--[-->`);
              ssrRenderList(optionalFieldsLookup.value, (optionalField) => {
                _push2(`<li class="lpOptionalField"${_scopeId}><label${_scopeId}><input${ssrIncludeBooleanAttr(optionalField.value) ? " checked" : ""} type="checkbox"${_scopeId}> ${ssrInterpolate(optionalField.displayName)}</label></li>`);
              });
              _push2(`<!--]--></ul>`);
              if (library.value.optionalFields["price"]) {
                _push2(`<div id="lpPriceSettings"${_scopeId}><hr${_scopeId}><label${_scopeId}> Currency: <input id="currencySymbol" type="text" maxlength="4"${ssrRenderAttr("value", library.value.currencySymbol)}${_scopeId}></label></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("ul", { id: "lpOptionalFields" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(optionalFieldsLookup.value, (optionalField) => {
                    return openBlock(), createBlock("li", {
                      key: optionalField.name,
                      class: "lpOptionalField"
                    }, [
                      createVNode("label", null, [
                        createVNode("input", {
                          checked: optionalField.value,
                          type: "checkbox",
                          onChange: ($event) => toggleOptionalField($event, optionalField.name)
                        }, null, 40, ["checked", "onChange"]),
                        createTextVNode(" " + toDisplayString(optionalField.displayName), 1)
                      ])
                    ]);
                  }), 128))
                ]),
                library.value.optionalFields["price"] ? (openBlock(), createBlock("div", {
                  key: 0,
                  id: "lpPriceSettings"
                }, [
                  createVNode("hr"),
                  createVNode("label", null, [
                    createTextVNode(" Currency: "),
                    createVNode("input", {
                      id: "currencySymbol",
                      type: "text",
                      maxlength: "4",
                      value: library.value.currencySymbol,
                      onInput: ($event) => updateCurrencySymbol($event)
                    }, null, 40, ["value", "onInput"])
                  ])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/list-settings.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ Object.assign({ name: "AccountDropdown" }, {
  __name: "AccountDropdown",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useLighterpackStore();
    const router = useRouter();
    const username = computed(() => store.loggedIn);
    function showAccount() {
      store.showModal("account");
    }
    function showHelp() {
      store.showModal("help");
    }
    function signout() {
      store.signout();
      router.push("/signin");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({ class: "headerItem hasPopover" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$l, { id: "headerPopover" }, {
        target: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Signed in as <span class="username"${_scopeId}>${ssrInterpolate(username.value)}</span> <i class="lpSprite lpExpand"${_scopeId}></i>`);
          } else {
            return [
              createTextVNode("Signed in as "),
              createVNode("span", { class: "username" }, toDisplayString(username.value), 1),
              createTextVNode(),
              createVNode("i", { class: "lpSprite lpExpand" })
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a class="lpHref accountSettings"${_scopeId}>Account Settings</a><br${_scopeId}><a class="lpHref"${_scopeId}>Help</a><br${_scopeId}><a class="lpHref signout"${_scopeId}>Sign Out</a>`);
          } else {
            return [
              createVNode("a", {
                class: "lpHref accountSettings",
                onClick: showAccount
              }, "Account Settings"),
              createVNode("br"),
              createVNode("a", {
                class: "lpHref",
                onClick: showHelp
              }, "Help"),
              createVNode("br"),
              createVNode("a", {
                class: "lpHref signout",
                onClick: signout
              }, "Sign Out")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/account-dropdown.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
function revertDOM(item, container, oldIndex, newIndex) {
  if (newIndex < oldIndex) {
    container.insertBefore(item, container.children[oldIndex + 1] ?? null);
  } else {
    container.insertBefore(item, container.children[oldIndex] ?? null);
  }
}
function useItemDrag() {
  const store = useLighterpackStore();
  let sortables = [];
  function setup(list) {
    destroy();
    const containers = (
      /** @type {HTMLElement[]} */
      Array.from((void 0).getElementsByClassName("lpItems"))
    );
    sortables = containers.map(
      (container) => Sortable.create(container, {
        group: {
          name: "items",
          pull: true,
          put: true
        },
        handle: ".lpItemHandle",
        draggable: ".lpItem",
        animation: 150,
        onEnd(evt) {
          if (evt.from !== evt.to) return;
          const oldIdx = evt.oldIndex ?? 0;
          const newIdx = evt.newIndex ?? 0;
          revertDOM(evt.item, evt.from, oldIdx, newIdx);
          store.reorderItem({
            list: list.value,
            itemId: parseInt(evt.item.id),
            categoryId: parseInt(
              /** @type {HTMLElement} */
              evt.to.parentElement.id
            ),
            dropIndex: evt.newDraggableIndex ?? newIdx
          });
        },
        onAdd(evt) {
          const { item, to, newDraggableIndex, newIndex } = evt;
          const categoryId = parseInt(
            /** @type {HTMLElement} */
            to.parentElement.id
          );
          const dropIndex = newDraggableIndex ?? newIndex ?? 0;
          item.parentNode.removeChild(item);
          if (item.dataset.itemId) {
            store.addItemToCategory({
              itemId: parseInt(item.dataset.itemId),
              categoryId,
              dropIndex
            });
          } else {
            store.reorderItem({
              list: list.value,
              itemId: parseInt(item.id),
              categoryId,
              dropIndex
            });
          }
        }
      })
    );
  }
  function destroy() {
    sortables.forEach((s) => s.destroy());
    sortables = [];
  }
  return { setup, destroy };
}
const _sfc_main$f = /* @__PURE__ */ Object.assign({ name: "UnitSelect" }, {
  __name: "UnitSelect",
  __ssrInlineRender: true,
  props: {
    weight: {
      type: Number,
      default: 0
    },
    unit: {
      type: String,
      default: null
    },
    onChange: {
      type: Function,
      default: null
    }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const units = ["oz", "lb", "g", "kg"];
    const isOpen = ref(false);
    const isFocused = ref(false);
    function closeOnEscape(evt) {
      if (evt.keyCode === 27) {
        close();
      }
    }
    function closeOnClick() {
      close();
    }
    function bindCloseListeners() {
      (void 0).addEventListener("keyup", closeOnEscape);
      (void 0).addEventListener("click", closeOnClick);
    }
    function unbindCloseListeners() {
      (void 0).removeEventListener("keyup", closeOnEscape);
      (void 0).removeEventListener("click", closeOnClick);
    }
    function open() {
      isOpen.value = true;
      bindCloseListeners();
    }
    function close() {
      isOpen.value = false;
      unbindCloseListeners();
    }
    function select(unit) {
      if (typeof props.onChange === "function") {
        props.onChange(unit);
      }
    }
    __expose({ isOpen, isFocused, select, close, open });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["lpUnitSelect", { lpOpen: isOpen.value, lpHover: isFocused.value }]
      }, _attrs))}><select class="lpUnit lpInvisible"${ssrRenderAttr("value", __props.unit)}><!--[-->`);
      ssrRenderList(units, (unitOption) => {
        _push(`<option${ssrRenderAttr("value", unitOption)}>${ssrInterpolate(unitOption)}</option>`);
      });
      _push(`<!--]--></select><span class="lpDisplay">${ssrInterpolate(__props.unit)}</span><i class="lpSprite lpExpand"></i><ul class="${ssrRenderClass("lpUnitDropdown " + __props.unit)}"><!--[-->`);
      ssrRenderList(units, (unitOption) => {
        _push(`<li class="${ssrRenderClass(unitOption)}">${ssrInterpolate(unitOption)}</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/unit-select.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ Object.assign({ name: "Item" }, {
  __name: "Item",
  __ssrInlineRender: true,
  props: {
    category: {
      type: Object,
      default: null
    },
    itemContainer: {
      type: Object,
      default: null
    }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const store = useLighterpackStore();
    const displayWeight = ref(0);
    const displayPrice = ref(0);
    const displayQty = ref(0);
    const weightError = ref(false);
    const priceError = ref(false);
    const qtyError = ref(false);
    const numStars = ref(4);
    const library = computed(() => store.library);
    const item = ref({ ...props.itemContainer.item });
    const categoryItem = ref({ ...props.itemContainer.categoryItem });
    const thumbnailImage = computed(() => {
      if (item.value.image) {
        return `https://i.imgur.com/${item.value.image}s.jpg`;
      }
      if (item.value.imageUrl) {
        return item.value.imageUrl;
      }
      return "";
    });
    const fullImage = computed(() => {
      if (item.value.image) {
        return `https://i.imgur.com/${item.value.image}l.jpg`;
      }
      if (item.value.imageUrl) {
        return item.value.imageUrl;
      }
      return "";
    });
    watch(
      () => props.itemContainer.item,
      (newItem) => {
        item.value = { ...newItem };
        setDisplayWeight();
      },
      { deep: true }
    );
    watch(
      () => props.itemContainer.categoryItem,
      (newCategoryItem) => {
        categoryItem.value = { ...newCategoryItem };
        setDisplayQty();
      },
      { deep: true }
    );
    function saveItem() {
      store.updateItem(item.value);
    }
    function saveCategoryItem() {
      store.updateCategoryItem({ category: props.category, categoryItem: categoryItem.value });
    }
    function setUnit(unit) {
      item.value.authorUnit = unit;
      store.updateItemUnit(unit);
      saveWeight();
    }
    function savePrice() {
      const priceFloat = parseFloat(displayPrice.value, 10);
      if (!isNaN(priceFloat)) {
        item.value.price = Math.round(priceFloat * 100) / 100;
        saveItem();
        priceError.value = false;
      } else {
        priceError.value = true;
      }
    }
    function saveQty() {
      const qtyFloat = parseFloat(displayQty.value, 10);
      if (!isNaN(qtyFloat)) {
        categoryItem.value.qty = qtyFloat;
        saveCategoryItem();
        qtyError.value = false;
      } else {
        qtyError.value = true;
      }
    }
    function saveWeight() {
      const weightFloat = parseFloat(displayWeight.value, 10);
      if (!isNaN(weightFloat)) {
        item.value.weight = weightUtils.WeightToMg(weightFloat, item.value.authorUnit);
        saveItem();
        weightError.value = false;
      } else {
        weightError.value = true;
      }
    }
    function setDisplayPrice() {
      if (!priceError.value) {
        displayPrice.value = item.value.price.toFixed(2);
      }
    }
    function setDisplayQty() {
      if (!qtyError.value) {
        displayQty.value = categoryItem.value.qty;
      }
    }
    function setDisplayWeight() {
      displayWeight.value = weightUtils.MgToWeight(item.value.weight, item.value.authorUnit);
    }
    function updateItemLink() {
      store.openItemLinkDialog(item.value);
    }
    function updateItemImage() {
      store.openItemImageDialog(item.value);
    }
    function viewItemImage() {
      store.openViewImageDialog(fullImage.value);
    }
    function toggleWorn() {
      if (categoryItem.value.consumable) {
        return;
      }
      categoryItem.value.worn = !categoryItem.value.worn;
      saveCategoryItem();
    }
    function toggleConsumable() {
      if (categoryItem.value.worn) {
        return;
      }
      categoryItem.value.consumable = !categoryItem.value.consumable;
      saveCategoryItem();
    }
    function cycleStar() {
      if (!categoryItem.value.star) {
        categoryItem.value.star = 0;
      }
      categoryItem.value.star = (categoryItem.value.star + 1) % numStars.value;
      saveCategoryItem();
    }
    function incrementPrice(evt) {
      evt.stopImmediatePropagation();
      if (priceError.value) {
        return;
      }
      item.value.price = item.value.price + 1;
      saveItem();
      setDisplayPrice();
    }
    function decrementPrice(evt) {
      evt.stopImmediatePropagation();
      if (priceError.value) {
        return;
      }
      item.value.price = item.value.price - 1;
      if (item.value.price < 0) {
        item.value.price = 0;
      }
      saveItem();
      setDisplayPrice();
    }
    function incrementQty(evt) {
      evt.stopImmediatePropagation();
      if (qtyError.value) {
        return;
      }
      categoryItem.value.qty = categoryItem.value.qty + 1;
      saveCategoryItem();
    }
    function decrementQty(evt) {
      evt.stopImmediatePropagation();
      if (qtyError.value) {
        return;
      }
      categoryItem.value.qty = categoryItem.value.qty - 1;
      if (categoryItem.value.qty < 0) {
        categoryItem.value.qty = 0;
      }
      saveCategoryItem();
    }
    function incrementWeight(evt) {
      evt.stopImmediatePropagation();
      if (weightError.value) {
        return;
      }
      const newWeight = weightUtils.MgToWeight(item.value.weight, item.value.authorUnit) + 1;
      item.value.weight = weightUtils.WeightToMg(newWeight, item.value.authorUnit);
      saveItem();
    }
    function decrementWeight(evt) {
      evt.stopImmediatePropagation();
      if (weightError.value) {
        return;
      }
      const newWeight = weightUtils.MgToWeight(item.value.weight, item.value.authorUnit) - 1;
      item.value.weight = weightUtils.WeightToMg(newWeight, item.value.authorUnit);
      if (item.value.weight < 0) {
        item.value.weight = 0;
      }
      saveItem();
    }
    function removeItem() {
      store.removeItemFromCategory({ itemId: item.value.id, category: props.category });
    }
    __expose({
      displayWeight,
      displayPrice,
      displayQty,
      weightError,
      priceError,
      qtyError,
      numStars,
      library,
      item,
      categoryItem,
      thumbnailImage,
      fullImage,
      saveItem,
      saveCategoryItem,
      setUnit,
      savePrice,
      saveQty,
      saveWeight,
      setDisplayPrice,
      setDisplayQty,
      setDisplayWeight,
      updateItemLink,
      updateItemImage,
      viewItemImage,
      toggleWorn,
      toggleConsumable,
      cycleStar,
      incrementPrice,
      decrementPrice,
      incrementQty,
      decrementQty,
      incrementWeight,
      decrementWeight,
      removeItem
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_focus_on_create = resolveDirective("focus-on-create");
      const _directive_empty_if_zero = resolveDirective("empty-if-zero");
      let _temp0, _temp1, _temp2;
      _push(`<li${ssrRenderAttrs(mergeProps({
        id: item.value.id,
        class: "lpItem " + item.value.classes
      }, _attrs))}><span class="lpHandleCell"><div class="lpItemHandle lpHandle" title="Reorder this item"></div></span>`);
      if (library.value.optionalFields["images"]) {
        _push(`<span class="lpImageCell">`);
        if (thumbnailImage.value) {
          _push(`<img class="lpItemImage"${ssrRenderAttr("src", thumbnailImage.value)}>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        value: item.value.name,
        type: "text",
        class: "lpName lpSilent",
        placeholder: "Name"
      }, ssrGetDirectiveProps(_ctx, _directive_focus_on_create, categoryItem.value._isNew)), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, item.value.name))))}><input${ssrRenderAttr("value", item.value.description)} type="text" class="lpDescription lpSilent" placeholder="Description"><span class="lpActionsCell"><i class="lpSprite lpCamera" title="Upload a photo or use a photo from the web"></i><i class="${ssrRenderClass([{ lpActive: item.value.url }, "lpSprite lpLink"])}" title="Add a link for this item"></i>`);
      if (library.value.optionalFields["worn"]) {
        _push(`<i class="${ssrRenderClass([{ lpActive: categoryItem.value.worn }, "lpSprite lpWorn"])}" title="Mark this item as worn"></i>`);
      } else {
        _push(`<!---->`);
      }
      if (library.value.optionalFields["consumable"]) {
        _push(`<i class="${ssrRenderClass([{ lpActive: categoryItem.value.consumable }, "lpSprite lpConsumable"])}" title="Mark this item as a consumable"></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<i class="${ssrRenderClass("lpSprite lpStar lpStar" + categoryItem.value.star)}" title="Star this item"></i></span>`);
      if (library.value.optionalFields["price"]) {
        _push(`<span class="lpPriceCell"><input${ssrRenderAttrs((_temp1 = mergeProps({
          value: displayPrice.value,
          type: "text",
          class: { lpPrice: true, lpNumber: true, lpSilent: true, lpSilentError: priceError.value }
        }, ssrGetDirectiveProps(_ctx, _directive_empty_if_zero)), mergeProps(_temp1, ssrGetDynamicModelProps(_temp1, displayPrice.value))))}></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="lpWeightCell lpNumber"><input${ssrRenderAttrs((_temp2 = mergeProps({
        value: displayWeight.value,
        type: "text",
        class: { lpWeight: true, lpNumber: true, lpSilent: true, lpSilentError: weightError.value }
      }, ssrGetDirectiveProps(_ctx, _directive_empty_if_zero)), mergeProps(_temp2, ssrGetDynamicModelProps(_temp2, displayWeight.value))))}>`);
      _push(ssrRenderComponent(_sfc_main$f, {
        unit: item.value.authorUnit,
        "on-change": setUnit
      }, null, _parent));
      _push(`</span><span class="lpQtyCell"><input${ssrRenderAttr("value", displayQty.value)} type="text" class="${ssrRenderClass({ lpQty: true, lpNumber: true, lpSilent: true, lpSilentError: qtyError.value })}"><span class="lpArrows"><span class="lpSprite lpUp"></span><span class="lpSprite lpDown"></span></span></span><span class="lpRemoveCell"><a class="lpRemove lpRemoveItem" title="Remove this item"><i class="lpSprite lpSpriteRemove"></i></a></span></li>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/item.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ Object.assign({ name: "Category" }, {
  __name: "Category",
  __ssrInlineRender: true,
  props: {
    category: { type: Object, default: null }
  },
  setup(__props) {
    const props = __props;
    const store = useLighterpackStore();
    const library = computed(() => store.library);
    const itemContainers = computed(() => {
      return props.category.categoryItems.map((categoryItem) => ({
        categoryItem,
        item: library.value.getItemById(categoryItem.itemId)
      }));
    });
    function displayWeight(mg, unit) {
      return weightUtils.MgToWeight(mg, unit) || 0;
    }
    function displayPrice(price, symbol) {
      const amount = typeof price === "number" ? price.toFixed(2) : "0.00";
      return symbol + amount;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_focus_on_create = resolveDirective("focus-on-create");
      _push(`<li${ssrRenderAttrs(mergeProps({
        id: __props.category.id,
        class: "lpCategory"
      }, _attrs))}><ul class="lpItems lpDataTable"><li class="lpHeader lpItemsHeader"><span class="lpHandleCell"><div class="lpHandle lpCategoryHandle" title="Reorder this category"></div></span><input${ssrRenderAttrs(mergeProps({
        type: "text",
        value: __props.category.name,
        placeholder: "Category Name",
        class: "lpCategoryName lpSilent"
      }, ssrGetDirectiveProps(_ctx, _directive_focus_on_create, __props.category._isNew)))}>`);
      if (library.value.optionalFields["price"]) {
        _push(`<span class="lpPriceCell">Price</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="lpWeightCell">Weight</span><span class="lpQtyCell">qty</span><span class="lpRemoveCell"><a class="lpRemove lpRemoveCategory" title="Remove this category"><i class="lpSprite lpSpriteRemove"></i></a></span></li><!--[-->`);
      ssrRenderList(itemContainers.value, (itemContainer) => {
        _push(ssrRenderComponent(_sfc_main$e, {
          key: itemContainer.item.id,
          "item-container": itemContainer,
          category: __props.category
        }, null, _parent));
      });
      _push(`<!--]--><li class="lpFooter lpItemsFooter"><span class="lpAddItemCell"><a class="lpAdd lpAddItem"><i class="lpSprite lpSpriteAdd"></i>Add new item</a></span>`);
      if (library.value.optionalFields["price"]) {
        _push(`<span class="lpPriceCell lpNumber lpSubtotal">${ssrInterpolate(displayPrice(__props.category.subtotalPrice, library.value.currencySymbol))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="lpWeightCell lpNumber lpSubtotal"><span class="lpDisplaySubtotal">${ssrInterpolate(displayWeight(__props.category.subtotalWeight, library.value.totalUnit))}</span><span class="lpSubtotalUnit">${ssrInterpolate(library.value.totalUnit)}</span></span><span class="lpQtyCell lpSubtotal"><span class="lpQtySubtotal">${ssrInterpolate(__props.category.subtotalQty)}</span></span><span class="lpRemoveCell"></span></li></ul></li>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/category.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ Object.assign({ name: "ColorPicker" }, {
  __name: "Colorpicker",
  __ssrInlineRender: true,
  props: {
    color: {
      type: String,
      default: null
    }
  },
  emits: ["colorChange"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const shown = ref(false);
    function onColorChange(evt) {
      emit("colorChange", evt.target.value);
    }
    __expose({ shown, onColorChange });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$m, mergeProps({
        id: "lpPickerContainer",
        shown: shown.value,
        onHide: ($event) => shown.value = false
      }, _attrs), {
        target: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="lpLegend" style="${ssrRenderStyle({ "background-color": __props.color })}"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", {
                class: "lpLegend",
                style: { "background-color": __props.color },
                onClick: ($event) => shown.value = true
              }, null, 12, ["onClick"])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<input type="color"${ssrRenderAttr("value", __props.color)}${_scopeId}>`);
          } else {
            return [
              createVNode("input", {
                type: "color",
                value: __props.color,
                onInput: onColorChange
              }, null, 40, ["value"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/colorpicker.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ Object.assign({ name: "ListSummary" }, {
  __name: "ListSummary",
  __ssrInlineRender: true,
  props: { list: { type: Object, default: null } },
  setup(__props) {
    const props = __props;
    const store = useLighterpackStore();
    const hoveredCategoryId = ref(null);
    const library = computed(() => store.library);
    const categories = computed(
      () => props.list.categoryIds.map((id, i) => {
        const category = library.value.getCategoryById(id);
        return {
          ...category,
          activeHover: hoveredCategoryId.value === category.id,
          displayColor: colorUtils.rgbToString(category.color || colorUtils.getColor(i))
        };
      })
    );
    function displayWeight(mg, unit) {
      return weightUtils.MgToWeight(mg, unit) || 0;
    }
    function displayPrice(price, symbol) {
      const amount = typeof price === "number" ? price.toFixed(2) : "0.00";
      return symbol + amount;
    }
    function setTotalUnit(unit) {
      store.setTotalUnit(unit);
    }
    function updateColor(category, color) {
      store.updateCategoryColor({ id: category.id, color: colorUtils.hexToRgb(color) });
    }
    function colorToHex(color) {
      return colorUtils.rgbToHex(colorUtils.stringToRgb(color));
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lpListSummary" }, _attrs))}><div class="lpChartContainer">`);
      _push(ssrRenderComponent(_sfc_main$r, {
        categories: categories.value,
        "total-weight": __props.list.totalWeight,
        library: library.value,
        onCategoryHover: ($event) => hoveredCategoryId.value = $event
      }, null, _parent));
      _push(`</div><div class="lpTotalsContainer"><ul class="lpTotals lpTable lpDataTable"><li class="lpRow lpHeader"><span class="lpCell"> </span><span class="lpCell"> Category </span>`);
      if (library.value.optionalFields["price"]) {
        _push(`<span class="lpCell"> Price </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="lpCell"> Weight </span></li><!--[-->`);
      ssrRenderList(categories.value, (category) => {
        _push(`<li class="${ssrRenderClass({ hover: category.activeHover, "lpTotalCategory lpRow": true })}"><span class="lpCell lpLegendCell">`);
        if (category.displayColor) {
          _push(ssrRenderComponent(_sfc_main$c, {
            color: colorToHex(category.displayColor),
            onColorChange: ($event) => updateColor(category, $event)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</span><span class="lpCell">${ssrInterpolate(category.name)}</span>`);
        if (library.value.optionalFields["price"]) {
          _push(`<span class="lpCell lpNumber">${ssrInterpolate(displayPrice(category.subtotalPrice, library.value.currencySymbol))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="lpCell lpNumber"><span class="lpDisplaySubtotal"${ssrRenderAttr("mg", category.subtotalWeight)}>${ssrInterpolate(displayWeight(category.subtotalWeight, library.value.totalUnit))}</span><span class="lpSubtotalUnit">${ssrInterpolate(library.value.totalUnit)}</span></span></li>`);
      });
      _push(`<!--]--><li class="lpRow lpFooter lpTotal"><span class="lpCell"></span><span class="lpCell lpSubtotal"${ssrRenderAttr("title", __props.list.totalQty + " items")}> Total </span>`);
      if (library.value.optionalFields["price"]) {
        _push(`<span class="lpCell lpNumber lpSubtotal"${ssrRenderAttr("title", __props.list.totalQty + " items")}>${ssrInterpolate(displayPrice(__props.list.totalPrice, library.value.currencySymbol))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="lpCell lpNumber lpSubtotal"><span class="lpTotalValue"${ssrRenderAttr("title", __props.list.totalQty + " items")}>${ssrInterpolate(displayWeight(__props.list.totalWeight, library.value.totalUnit))}</span><span class="lpTotalUnit">`);
      _push(ssrRenderComponent(_sfc_main$f, {
        unit: library.value.totalUnit,
        "on-change": setTotalUnit
      }, null, _parent));
      _push(`</span></span></li>`);
      if (__props.list.totalConsumableWeight) {
        _push(`<li data-weight-type="consumable" class="lpRow lpFooter lpBreakdown lpConsumableWeight"><span class="lpCell"></span><span class="lpCell lpSubtotal"> Consumable </span>`);
        if (library.value.optionalFields["price"]) {
          _push(`<span class="lpCell lpNumber lpSubtotal">${ssrInterpolate(displayPrice(__props.list.totalConsumablePrice, library.value.currencySymbol))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="lpCell lpNumber lpSubtotal"><span class="lpDisplaySubtotal"${ssrRenderAttr("mg", __props.list.totalConsumableWeight)}>${ssrInterpolate(displayWeight(__props.list.totalConsumableWeight, library.value.totalUnit))}</span><span class="lpSubtotalUnit">${ssrInterpolate(library.value.totalUnit)}</span></span></li>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.list.totalWornWeight) {
        _push(`<li data-weight-type="worn" class="lpRow lpFooter lpBreakdown lpWornWeight"><span class="lpCell"></span><span class="lpCell lpSubtotal"> Worn </span>`);
        if (library.value.optionalFields["price"]) {
          _push(`<span class="lpCell lpNumber"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="lpCell lpNumber lpSubtotal"><span class="lpDisplaySubtotal"${ssrRenderAttr("mg", __props.list.totalWornWeight)}>${ssrInterpolate(displayWeight(__props.list.totalWornWeight, library.value.totalUnit))}</span><span class="lpSubtotalUnit">${ssrInterpolate(library.value.totalUnit)}</span></span></li>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.list.totalWornWeight || __props.list.totalConsumableWeight) {
        _push(`<li data-weight-type="base" class="lpRow lpFooter lpBreakdown lpBaseWeight"><span class="lpCell"></span><span class="lpCell lpSubtotal"${ssrRenderAttr(
          "title",
          displayWeight(__props.list.totalPackWeight, library.value.totalUnit) + " " + library.value.totalUnit + " pack weight (consumable + base weight)"
        )}> Base Weight </span>`);
        if (library.value.optionalFields["price"]) {
          _push(`<span class="lpCell lpNumber"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="lpCell lpNumber lpSubtotal"><span class="lpDisplaySubtotal"${ssrRenderAttr("mg", __props.list.totalBaseWeight)}${ssrRenderAttr(
          "title",
          displayWeight(__props.list.totalPackWeight, library.value.totalUnit) + " " + library.value.totalUnit + " pack weight (consumable + base weight)"
        )}>${ssrInterpolate(displayWeight(__props.list.totalBaseWeight, library.value.totalUnit))}</span><span class="lpSubtotalUnit">${ssrInterpolate(library.value.totalUnit)}</span></span></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></div></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/list-summary.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ Object.assign({ name: "List" }, {
  __name: "List",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useLighterpackStore();
    const library = computed(() => store.library);
    const list = computed(() => store.activeList);
    const categories = computed(() => {
      const l = list.value;
      if (!l) return [];
      return l.categoryIds.map((id) => library.value.getCategoryById(id));
    });
    const isListNew = computed(() => list.value.totalWeight === 0);
    const isLocalSaving = computed(() => store.saveType === "local");
    const itemDrag = useItemDrag();
    watch(categories, () => {
      nextTick(() => {
        itemDrag.setup(list);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lpListBody" }, _attrs))}>`);
      if (isListNew.value) {
        _push(`<div id="getStarted"><h2>Welcome to LighterPack!</h2><p>Here&#39;s what you need to get started:</p><ol><li>Click on things to edit them. Give your list and category a name.</li><li>Add new categories and give items weights to start the visualization.</li>`);
        if (!isLocalSaving.value) {
          _push(`<li>When you&#39;re done, share your list with others!</li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ol>`);
        if (isLocalSaving.value) {
          _push(`<p class="lpWarning"><strong>Note:</strong> Your data is being saved to your local computer. In order to share your lists please register an account. </p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!isListNew.value) {
        _push(ssrRenderComponent(_sfc_main$b, { list: list.value }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div style="${ssrRenderStyle({ "clear": "both" })}"></div>`);
      if (library.value.optionalFields["listDescription"]) {
        _push(`<div id="listDescriptionContainer"><h3>List Description</h3><p> (<a href="https://guides.github.com/features/mastering-markdown/" target="_blank" class="lpHref">Markdown</a> supported) </p><textarea id="listDescription">${ssrInterpolate(list.value.description)}</textarea></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<ul class="lpCategories"><!--[-->`);
      ssrRenderList(categories.value, (cat) => {
        _push(ssrRenderComponent(_sfc_main$d, {
          key: cat.id,
          category: cat
        }, null, _parent));
      });
      _push(`<!--]--></ul><hr><a class="lpAdd addCategory"><i class="lpSprite lpSpriteAdd"></i>Add new category</a></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/list.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ Object.assign({ name: "Speedbump" }, {
  __name: "Speedbump",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useLighterpackStore();
    const defaultMessages = { title: "", body: "", confirm: "Yes", cancel: "No" };
    const shown = computed({
      get: () => store.speedbump !== null,
      set: (val) => {
        if (!val) store.closeSpeedbump();
      }
    });
    const messages = computed(() => {
      const msgs = Object.assign({}, defaultMessages);
      const speedbump = store.speedbump;
      if (!speedbump) return msgs;
      const options = speedbump.options;
      if (typeof options === "string") {
        msgs.body = options;
      } else if (options) {
        Object.assign(msgs, options);
      }
      return msgs;
    });
    function confirmSpeedbump() {
      store.confirmSpeedbump();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_focus_on_create = resolveDirective("focus-on-create");
      _push(ssrRenderComponent(_sfc_main$p, mergeProps({
        id: "speedbump",
        shown: shown.value,
        onHide: ($event) => shown.value = false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (messages.value.title) {
              _push2(`<h2${_scopeId}>${ssrInterpolate(messages.value.title)}</h2>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<p${_scopeId}>${ssrInterpolate(messages.value.body)}</p><div class="buttons"${_scopeId}><button${ssrRenderAttrs(mergeProps({ class: "lpButton" }, ssrGetDirectiveProps(_ctx, _directive_focus_on_create)))}${_scopeId}>${ssrInterpolate(messages.value.confirm)}</button>  <button class="lpButton"${_scopeId}>${ssrInterpolate(messages.value.cancel)}</button></div>`);
          } else {
            return [
              messages.value.title ? (openBlock(), createBlock("h2", { key: 0 }, toDisplayString(messages.value.title), 1)) : createCommentVNode("", true),
              createVNode("p", null, toDisplayString(messages.value.body), 1),
              createVNode("div", { class: "buttons" }, [
                withDirectives((openBlock(), createBlock("button", {
                  class: "lpButton",
                  onClick: ($event) => confirmSpeedbump()
                }, [
                  createTextVNode(toDisplayString(messages.value.confirm), 1)
                ], 8, ["onClick"])), [
                  [_directive_focus_on_create]
                ]),
                createTextVNode("  "),
                createVNode("button", {
                  class: "lpButton",
                  onClick: ($event) => shown.value = false
                }, toDisplayString(messages.value.cancel), 9, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/speedbump.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ Object.assign({ name: "CopyList" }, {
  __name: "CopyList",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useLighterpackStore();
    const listId = ref(false);
    const library = computed(() => store.library);
    const shown = computed({
      get: () => store.activeModal === "copyList",
      set: (val) => {
        if (!val) store.closeModal();
      }
    });
    function copyList() {
      if (!listId.value) return;
      store.copyList(listId.value);
      shown.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$p, mergeProps({
        id: "copyListDialog",
        shown: shown.value,
        onHide: ($event) => shown.value = false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2${_scopeId}>Choose the list to copy</h2><select id="listToCopy"${_scopeId}><!--[-->`);
            ssrRenderList(library.value.lists, (list) => {
              _push2(`<option${ssrRenderAttr("value", list.id)}${ssrIncludeBooleanAttr(Array.isArray(listId.value) ? ssrLooseContain(listId.value, list.id) : ssrLooseEqual(listId.value, list.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(list.name)}</option>`);
            });
            _push2(`<!--]--></select><br${_scopeId}><br${_scopeId}><p class="lpWarning"${_scopeId}><b${_scopeId}>Note:</b> Copying a list will link the items between your lists. Updating an item in one list will alter that item in all other lists that item is in. </p><a id="copyConfirm" class="lpButton"${_scopeId}>Copy List</a><a class="lpButton close"${_scopeId}>Cancel</a>`);
          } else {
            return [
              createVNode("h2", null, "Choose the list to copy"),
              withDirectives(createVNode("select", {
                id: "listToCopy",
                "onUpdate:modelValue": ($event) => listId.value = $event
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(library.value.lists, (list) => {
                  return openBlock(), createBlock("option", {
                    key: list.id,
                    value: list.id
                  }, toDisplayString(list.name), 9, ["value"]);
                }), 128))
              ], 8, ["onUpdate:modelValue"]), [
                [vModelSelect, listId.value]
              ]),
              createVNode("br"),
              createVNode("br"),
              createVNode("p", { class: "lpWarning" }, [
                createVNode("b", null, "Note:"),
                createTextVNode(" Copying a list will link the items between your lists. Updating an item in one list will alter that item in all other lists that item is in. ")
              ]),
              createVNode("a", {
                id: "copyConfirm",
                class: "lpButton",
                onClick: copyList
              }, "Copy List"),
              createVNode("a", {
                class: "lpButton close",
                onClick: ($event) => shown.value = false
              }, "Cancel", 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/copy-list.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ Object.assign({ name: "ImportCsv" }, {
  __name: "ImportCsv",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useLighterpackStore();
    const csvInput = ref(null);
    const shown = ref(false);
    const importData = ref({});
    computed(() => store.library);
    watch(
      () => store.importCSVTrigger,
      () => {
        csvInput.value.click();
      }
    );
    function importList() {
      store.importCSV(importData.value);
      shown.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "importCSV" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$p, {
        id: "importValidate",
        shown: shown.value,
        onHide: ($event) => shown.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2${_scopeId}>Confirm your import</h2><div id="importData"${_scopeId}><ul class="lpTable lpDataTable"${_scopeId}><li class="lpRow lpHeader"${_scopeId}><span class="lpCell"${_scopeId}>Item Name</span><span class="lpCell"${_scopeId}>Category</span><span class="lpCell"${_scopeId}>Description</span><span class="lpCell"${_scopeId}>Qty</span><span class="lpCell"${_scopeId}>Weight</span><span class="lpCell"${_scopeId}>Unit</span></li><!--[-->`);
            ssrRenderList(importData.value.data, (row, index) => {
              _push2(`<li class="lpRow"${_scopeId}><span class="lpCell"${_scopeId}>${ssrInterpolate(row.name)}</span><span class="lpCell"${_scopeId}>${ssrInterpolate(row.category)}</span><span class="lpCell"${_scopeId}>${ssrInterpolate(row.description)}</span><span class="lpCell"${_scopeId}>${ssrInterpolate(row.qty)}</span><span class="lpCell"${_scopeId}>${ssrInterpolate(row.weight)}</span><span class="lpCell"${_scopeId}>${ssrInterpolate(row.unit)}</span></li>`);
            });
            _push2(`<!--]--></ul></div><a id="importConfirm" class="lpButton"${_scopeId}>Import List</a><a class="lpButton close"${_scopeId}>Cancel Import</a>`);
          } else {
            return [
              createVNode("h2", null, "Confirm your import"),
              createVNode("div", { id: "importData" }, [
                createVNode("ul", { class: "lpTable lpDataTable" }, [
                  createVNode("li", { class: "lpRow lpHeader" }, [
                    createVNode("span", { class: "lpCell" }, "Item Name"),
                    createVNode("span", { class: "lpCell" }, "Category"),
                    createVNode("span", { class: "lpCell" }, "Description"),
                    createVNode("span", { class: "lpCell" }, "Qty"),
                    createVNode("span", { class: "lpCell" }, "Weight"),
                    createVNode("span", { class: "lpCell" }, "Unit")
                  ]),
                  (openBlock(true), createBlock(Fragment, null, renderList(importData.value.data, (row, index) => {
                    return openBlock(), createBlock("li", {
                      key: index,
                      class: "lpRow"
                    }, [
                      createVNode("span", { class: "lpCell" }, toDisplayString(row.name), 1),
                      createVNode("span", { class: "lpCell" }, toDisplayString(row.category), 1),
                      createVNode("span", { class: "lpCell" }, toDisplayString(row.description), 1),
                      createVNode("span", { class: "lpCell" }, toDisplayString(row.qty), 1),
                      createVNode("span", { class: "lpCell" }, toDisplayString(row.weight), 1),
                      createVNode("span", { class: "lpCell" }, toDisplayString(row.unit), 1)
                    ]);
                  }), 128))
                ])
              ]),
              createVNode("a", {
                id: "importConfirm",
                class: "lpButton",
                onClick: importList
              }, "Import List"),
              createVNode("a", {
                class: "lpButton close",
                onClick: ($event) => shown.value = false
              }, "Cancel Import", 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<form id="csvUpload"><input id="csv" type="file" name="csv"></form></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/import-csv.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ Object.assign({ name: "ItemImage" }, {
  __name: "ItemImage",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useLighterpackStore();
    const imageUrl = ref(null);
    const uploading = ref(false);
    ref(null);
    const imageInput = ref(null);
    const shown = computed({
      get: () => !!(store.activeItemDialog && store.activeItemDialog.type === "image"),
      set: (val) => {
        if (!val) store.closeItemDialog();
      }
    });
    const item = computed(
      () => store.activeItemDialog && store.activeItemDialog.type === "image" ? store.activeItemDialog.item : { image: null, imageUrl: null }
    );
    watch(shown, (val) => {
      if (val && store.activeItemDialog) {
        imageUrl.value = store.activeItemDialog.item.imageUrl;
      }
    });
    function saveImageUrl() {
      store.updateItemImageUrl({ imageUrl: imageUrl.value, item: item.value });
      shown.value = false;
    }
    function triggerImageUpload() {
      imageInput.value.click();
    }
    function removeItemImage() {
      store.removeItemImage(item.value);
      item.value.image = "";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$p, {
        id: "itemImageDialog",
        shown: shown.value,
        onHide: ($event) => shown.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="columns"${_scopeId}><div class="lpHalf"${_scopeId}><h2${_scopeId}>Add image by URL</h2><form id="itemImageUrlForm"${_scopeId}><input id="itemImageUrl"${ssrRenderAttr("value", imageUrl.value)} type="text" placeholder="Image URL"${_scopeId}><input type="submit" class="lpButton" value="Save"${_scopeId}><a class="lpHref close"${_scopeId}>Cancel</a></form></div><div class="lpHalf"${_scopeId}><h2${_scopeId}>Upload image from disk</h2>`);
            if (!item.value.image) {
              _push2(`<!--[--><p class="imageUploadDescription"${_scopeId}>Your image will be hosted on imgur.</p><button id="itemImageUpload" class="lpButton"${_scopeId}>Upload Image</button><a class="lpHref close"${_scopeId}>Cancel</a>`);
              if (uploading.value) {
                _push2(`<p${_scopeId}>Uploading image...</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            if (item.value.image) {
              _push2(`<button id="itemImageUpload" class="lpButton"${_scopeId}>Remove Image</button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "columns" }, [
                createVNode("div", { class: "lpHalf" }, [
                  createVNode("h2", null, "Add image by URL"),
                  createVNode("form", {
                    id: "itemImageUrlForm",
                    onSubmit: withModifiers(($event) => saveImageUrl(), ["prevent"])
                  }, [
                    withDirectives(createVNode("input", {
                      id: "itemImageUrl",
                      "onUpdate:modelValue": ($event) => imageUrl.value = $event,
                      type: "text",
                      placeholder: "Image URL"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, imageUrl.value]
                    ]),
                    createVNode("input", {
                      type: "submit",
                      class: "lpButton",
                      value: "Save"
                    }),
                    createVNode("a", {
                      class: "lpHref close",
                      onClick: ($event) => shown.value = false
                    }, "Cancel", 8, ["onClick"])
                  ], 40, ["onSubmit"])
                ]),
                createVNode("div", { class: "lpHalf" }, [
                  createVNode("h2", null, "Upload image from disk"),
                  !item.value.image ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode("p", { class: "imageUploadDescription" }, "Your image will be hosted on imgur."),
                    createVNode("button", {
                      id: "itemImageUpload",
                      class: "lpButton",
                      onClick: triggerImageUpload
                    }, "Upload Image"),
                    createVNode("a", {
                      class: "lpHref close",
                      onClick: ($event) => shown.value = false
                    }, "Cancel", 8, ["onClick"]),
                    uploading.value ? (openBlock(), createBlock("p", { key: 0 }, "Uploading image...")) : createCommentVNode("", true)
                  ], 64)) : createCommentVNode("", true),
                  item.value.image ? (openBlock(), createBlock("button", {
                    key: 1,
                    id: "itemImageUpload",
                    class: "lpButton",
                    onClick: removeItemImage
                  }, "Remove Image")) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<form id="imageUpload"><input id="image" type="file" name="image"></form></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/item-image.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ Object.assign({ name: "ItemViewImage" }, {
  __name: "ItemViewImage",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useLighterpackStore();
    const shown = computed({
      get: () => !!(store.activeItemDialog && store.activeItemDialog.type === "viewImage"),
      set: (val) => {
        if (!val) store.closeItemDialog();
      }
    });
    const imageUrl = computed(
      () => store.activeItemDialog && store.activeItemDialog.type === "viewImage" ? store.activeItemDialog.imageUrl : ""
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$p, mergeProps({
        id: "lpImageDialog",
        shown: shown.value,
        onHide: ($event) => shown.value = false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", imageUrl.value)}${_scopeId}>`);
          } else {
            return [
              createVNode("img", { src: imageUrl.value }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/item-view-image.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ Object.assign({ name: "ItemLink" }, {
  __name: "ItemLink",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useLighterpackStore();
    const url = ref("");
    const shown = computed({
      get: () => !!(store.activeItemDialog && store.activeItemDialog.type === "link"),
      set: (val) => {
        if (!val) store.closeItemDialog();
      }
    });
    const item = computed(() => store.activeItemDialog ? store.activeItemDialog.item : null);
    watch(shown, (val) => {
      if (val && item.value) {
        url.value = item.value.url;
      }
    });
    function addLink() {
      store.updateItemLink({ url: url.value, item: item.value });
      store.closeItemDialog();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$p, mergeProps({
        id: "itemLinkDialog",
        shown: shown.value,
        onHide: ($event) => shown.value = false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2${_scopeId}>Add a link for this item</h2><form id="itemLinkForm"${_scopeId}><input${ssrRenderAttr("value", url.value)} type="text" d="itemLink" placeholder="Item Link"${_scopeId}><input type="submit" class="lpButton" value="Save"${_scopeId}><a class="lpHref close"${_scopeId}>Cancel</a></form>`);
          } else {
            return [
              createVNode("h2", null, "Add a link for this item"),
              createVNode("form", {
                id: "itemLinkForm",
                onSubmit: withModifiers(addLink, ["prevent"])
              }, [
                withDirectives(createVNode("input", {
                  "onUpdate:modelValue": ($event) => url.value = $event,
                  type: "text",
                  d: "itemLink",
                  placeholder: "Item Link"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, url.value]
                ]),
                createVNode("input", {
                  type: "submit",
                  class: "lpButton",
                  value: "Save"
                }),
                createVNode("a", {
                  class: "lpHref close",
                  onClick: ($event) => shown.value = false
                }, "Cancel", 8, ["onClick"])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/item-link.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ Object.assign({ name: "Help" }, {
  __name: "Help",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useLighterpackStore();
    const shown = computed({
      get: () => store.activeModal === "help",
      set: (val) => {
        if (!val) store.closeModal();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$p, mergeProps({
        id: "help",
        shown: shown.value,
        onHide: ($event) => shown.value = false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2${_scopeId}>Help</h2><p${_scopeId}>Getting Started:</p><ol${_scopeId}><li${_scopeId}>Click on things to edit them. Give your list and category a name.</li><li${_scopeId}>Add new categories and items to your list.</li><li${_scopeId}>When you&#39;re done, share your list with others!</li></ol><hr${_scopeId}><strong${_scopeId}>Quantity and worn values</strong><p${_scopeId}> If you have multiple quantity of an item and mark that item as worn, only the first quantity will count towards your worn weight. The rest will count towards your pack weight. This is because most items you have multiple of, you only wear one at once. This means you can&#39;t list your shoes/trekking poles with weights as individual weights and quantity of two - you should list as the combined weight with quantity of one. </p><hr${_scopeId}><strong${_scopeId}>Items in multiple lists</strong><p${_scopeId}> If you copy your list or drag an item from the gear library into a second list, those items are now <strong${_scopeId}>linked</strong>. This means that changes to an item in one place will update that list everywhere. If you want to copy your list without links, for now you can export to CSV and re-import the list. </p><hr${_scopeId}><p${_scopeId}><a class="lpHref" href="mailto:info@lighterpack.com"${_scopeId}>More help available via email.</a></p>`);
          } else {
            return [
              createVNode("h2", null, "Help"),
              createVNode("p", null, "Getting Started:"),
              createVNode("ol", null, [
                createVNode("li", null, "Click on things to edit them. Give your list and category a name."),
                createVNode("li", null, "Add new categories and items to your list."),
                createVNode("li", null, "When you're done, share your list with others!")
              ]),
              createVNode("hr"),
              createVNode("strong", null, "Quantity and worn values"),
              createVNode("p", null, " If you have multiple quantity of an item and mark that item as worn, only the first quantity will count towards your worn weight. The rest will count towards your pack weight. This is because most items you have multiple of, you only wear one at once. This means you can't list your shoes/trekking poles with weights as individual weights and quantity of two - you should list as the combined weight with quantity of one. "),
              createVNode("hr"),
              createVNode("strong", null, "Items in multiple lists"),
              createVNode("p", null, [
                createTextVNode(" If you copy your list or drag an item from the gear library into a second list, those items are now "),
                createVNode("strong", null, "linked"),
                createTextVNode(". This means that changes to an item in one place will update that list everywhere. If you want to copy your list without links, for now you can export to CSV and re-import the list. ")
              ]),
              createVNode("hr"),
              createVNode("p", null, [
                createVNode("a", {
                  class: "lpHref",
                  href: "mailto:info@lighterpack.com"
                }, "More help available via email.")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/help.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign({ name: "Account" }, {
  __name: "Account",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useLighterpackStore();
    const saving = ref(false);
    const errors_ = ref([]);
    const currentPassword = ref("");
    const newEmail = ref("");
    const newPassword = ref("");
    const confirmNewPassword = ref("");
    const username = computed(() => store.loggedIn);
    const shown = computed({
      get: () => store.activeModal === "account",
      set: (val) => {
        if (!val) store.closeModal();
      }
    });
    function updateAccount() {
      errors_.value = [];
      if (!currentPassword.value) {
        errors_.value.push({ field: "currentPassword", message: "Please enter your current password." });
      }
      if (newPassword.value && newPassword.value !== confirmNewPassword.value) {
        errors_.value.push({ field: "newPassword", message: "Your passwords don't match." });
      }
      if (newPassword.value && (newPassword.value.length < 5 || newPassword.value.length > 60)) {
        errors_.value.push({
          field: "newPassword",
          message: "Please enter a password between 5 and 60 characters."
        });
      }
      if (errors_.value.length) {
        return;
      }
      const data = { username: username.value, currentPassword: currentPassword.value };
      let dirty = false;
      if (newPassword.value) {
        dirty = true;
        data.newPassword = newPassword.value;
      }
      if (newEmail.value) {
        dirty = true;
        data.newEmail = newEmail.value;
      }
      if (!dirty) return;
      currentPassword.value = "";
      saving.value = true;
      fetchJson("/api/account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin",
        body: JSON.stringify(data)
      }).then((_response) => {
        saving.value = false;
        shown.value = false;
      }).catch((err) => {
        errors_.value = err;
        saving.value = false;
      });
    }
    function showDeleteAccount() {
      store.showModal("deleteAccount");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$p, mergeProps({
        id: "accountSettings",
        shown: shown.value,
        onHide: ($event) => shown.value = false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2${_scopeId}>Account Settings</h2><form id="accountForm"${_scopeId}><div class="lpFields"${_scopeId}><input type="text" name="username" class="username" disabled${ssrRenderAttr("value", username.value)}${_scopeId}><input${ssrRenderAttr("value", currentPassword.value)} type="password" placeholder="Current Password" name="currentPassword" class="currentPassword"${_scopeId}><hr${_scopeId}><input${ssrRenderAttr("value", newEmail.value)} type="email" placeholder="New Email" name="newEmail" class="newEmail"${_scopeId}><hr${_scopeId}><input${ssrRenderAttr("value", newPassword.value)} type="password" placeholder="New Password" name="newPassword" class="newPassword"${_scopeId}><input${ssrRenderAttr("value", confirmNewPassword.value)} type="password" placeholder="Confirm New Password" name="confirmNewPassword" class="confirmNewPassword"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_sfc_main$q, { errors: errors_.value }, null, _parent2, _scopeId));
            _push2(`<div class="lpButtons"${_scopeId}><button class="lpButton"${_scopeId}> Submit `);
            if (saving.value) {
              _push2(ssrRenderComponent(_sfc_main$1$1, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</button><a class="lpHref"${_scopeId}>Cancel</a><a class="lpHref"${_scopeId}>Delete account</a></div></form>`);
          } else {
            return [
              createVNode("h2", null, "Account Settings"),
              createVNode("form", {
                id: "accountForm",
                onSubmit: withModifiers(($event) => updateAccount(), ["prevent"])
              }, [
                createVNode("div", { class: "lpFields" }, [
                  createVNode("input", {
                    type: "text",
                    name: "username",
                    class: "username",
                    disabled: "",
                    value: username.value
                  }, null, 8, ["value"]),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => currentPassword.value = $event,
                    type: "password",
                    placeholder: "Current Password",
                    name: "currentPassword",
                    class: "currentPassword"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, currentPassword.value]
                  ]),
                  createVNode("hr"),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => newEmail.value = $event,
                    type: "email",
                    placeholder: "New Email",
                    name: "newEmail",
                    class: "newEmail"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, newEmail.value]
                  ]),
                  createVNode("hr"),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => newPassword.value = $event,
                    type: "password",
                    placeholder: "New Password",
                    name: "newPassword",
                    class: "newPassword"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, newPassword.value]
                  ]),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => confirmNewPassword.value = $event,
                    type: "password",
                    placeholder: "Confirm New Password",
                    name: "confirmNewPassword",
                    class: "confirmNewPassword"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, confirmNewPassword.value]
                  ])
                ]),
                createVNode(_sfc_main$q, { errors: errors_.value }, null, 8, ["errors"]),
                createVNode("div", { class: "lpButtons" }, [
                  createVNode("button", { class: "lpButton" }, [
                    createTextVNode(" Submit "),
                    saving.value ? (openBlock(), createBlock(_sfc_main$1$1, { key: 0 })) : createCommentVNode("", true)
                  ]),
                  createVNode("a", {
                    class: "lpHref",
                    onClick: ($event) => shown.value = false
                  }, "Cancel", 8, ["onClick"]),
                  createVNode("a", {
                    class: "lpHref",
                    onClick: showDeleteAccount
                  }, "Delete account")
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/account.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign({ name: "AccountDelete" }, {
  __name: "AccountDelete",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useLighterpackStore();
    const router = useRouter();
    const deleting = ref(false);
    const errors_ = ref([]);
    const confirmationText = ref("");
    const currentPassword = ref("");
    const isConfirmationComplete = computed(() => confirmationText.value.toLocaleLowerCase() === "delete my account");
    const shown = computed({
      get: () => store.activeModal === "deleteAccount",
      set: (val) => {
        if (!val) store.closeModal();
      }
    });
    function deleteAccount() {
      errors_.value = [];
      if (!currentPassword.value) {
        errors_.value.push({ field: "currentPassword", message: "Please enter your current password." });
      }
      if (!isConfirmationComplete.value) {
        errors_.value.push({ field: "confirmationText", message: "Please enter the confirmation text." });
      }
      if (errors_.value.length) {
        return;
      }
      fetchJson("/api/account/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ username: store.loggedIn, password: currentPassword.value })
      }).then((_response) => {
        deleting.value = false;
        store.signout();
        router.push("/signin");
      }).catch((err) => {
        errors_.value = err;
        deleting.value = false;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$p, mergeProps({
        id: "deleteAccount",
        shown: shown.value,
        onHide: ($event) => shown.value = false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2${_scopeId}>Delete account?</h2><form id="accountForm"${_scopeId}><p class="lpWarning"${_scopeId}><strong${_scopeId}>This action is permanent and cannot be undone.</strong></p><p${_scopeId}> If you want to delete your account, please enter your current password and the text <strong${_scopeId}>delete my account</strong>: </p><div class="lpFields"${_scopeId}><input${ssrRenderAttr("value", currentPassword.value)} type="password" placeholder="Current password" name="currentPassword" class="currentPassword"${_scopeId}><input${ssrRenderAttr("value", confirmationText.value)} type="text" name="confirmationText" placeholder="Confirmation text"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_sfc_main$q, { errors: errors_.value }, null, _parent2, _scopeId));
            _push2(`<div class="lpButtons"${_scopeId}><input type="submit" value="Permanently delete account" class="${ssrRenderClass({ lpButton: true, lpButtonDisabled: !isConfirmationComplete.value })}"${_scopeId}><a class="lpHref"${_scopeId}>Cancel</a></div></form>`);
          } else {
            return [
              createVNode("h2", null, "Delete account?"),
              createVNode("form", {
                id: "accountForm",
                onSubmit: withModifiers(($event) => deleteAccount(), ["prevent"])
              }, [
                createVNode("p", { class: "lpWarning" }, [
                  createVNode("strong", null, "This action is permanent and cannot be undone.")
                ]),
                createVNode("p", null, [
                  createTextVNode(" If you want to delete your account, please enter your current password and the text "),
                  createVNode("strong", null, "delete my account"),
                  createTextVNode(": ")
                ]),
                createVNode("div", { class: "lpFields" }, [
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => currentPassword.value = $event,
                    type: "password",
                    placeholder: "Current password",
                    name: "currentPassword",
                    class: "currentPassword"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, currentPassword.value]
                  ]),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => confirmationText.value = $event,
                    type: "text",
                    name: "confirmationText",
                    placeholder: "Confirmation text"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, confirmationText.value]
                  ])
                ]),
                createVNode(_sfc_main$q, { errors: errors_.value }, null, 8, ["errors"]),
                createVNode("div", { class: "lpButtons" }, [
                  createVNode("input", {
                    type: "submit",
                    value: "Permanently delete account",
                    class: { lpButton: true, lpButtonDisabled: !isConfirmationComplete.value }
                  }, null, 2),
                  createVNode("a", {
                    class: "lpHref",
                    onClick: ($event) => shown.value = false
                  }, "Cancel", 8, ["onClick"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/account-delete.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ Object.assign({ name: "Dashboard" }, {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useLighterpackStore();
    useRouter();
    const isLoaded = ref(false);
    const showTransition = ref(false);
    const library = computed(() => store.library);
    const activeList = computed(() => library.value.getListById(library.value.defaultListId));
    const isSignedIn = computed(() => store.loggedIn);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_sidebar = _sfc_main$j;
      const _component_share = _sfc_main$i;
      const _component_listSettings = _sfc_main$h;
      const _component_accountDropdown = _sfc_main$g;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_list = _sfc_main$a;
      const _component_globalAlerts = _sfc_main$o;
      const _component_speedbump = _sfc_main$9;
      const _component_copyList = _sfc_main$8;
      const _component_ImportCsv = _sfc_main$7;
      const _component_itemImage = _sfc_main$6;
      const _component_itemViewImage = _sfc_main$5;
      const _component_itemLink = _sfc_main$4;
      const _component_help = _sfc_main$3;
      const _component_account = _sfc_main$2;
      const _component_accountDelete = _sfc_main$1;
      if (isLoaded.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          id: "main",
          class: { lpHasSidebar: library.value.showSidebar }
        }, _attrs))}>`);
        _push(ssrRenderComponent(_component_sidebar, null, null, _parent));
        _push(`<div class="${ssrRenderClass([{ lpTransition: showTransition.value }, "lpList"])}"><div id="header" class="clearfix"><span class="headerItem"><a id="hamburger" class="lpTransition"><i class="lpSprite lpHamburger"></i></a></span><input id="lpListName"${ssrRenderAttr("value", activeList.value.name)} type="text" class="lpListName lpSilent headerItem" placeholder="List Name" autocomplete="off" name="lastpass-disable-search">`);
        _push(ssrRenderComponent(_component_share, null, null, _parent));
        _push(ssrRenderComponent(_component_listSettings, null, null, _parent));
        if (isSignedIn.value) {
          _push(ssrRenderComponent(_component_accountDropdown, null, null, _parent));
        } else {
          _push(`<span class="headerItem signInRegisterButtons">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/register",
            class: "lpButton lpSmall"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Register`);
              } else {
                return [
                  createTextVNode("Register")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(` or `);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/signin",
            class: "lpButton lpSmall"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Sign In`);
              } else {
                return [
                  createTextVNode("Sign In")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</span>`);
        }
        _push(`<span class="clearfix"></span></div>`);
        _push(ssrRenderComponent(_component_list, null, null, _parent));
        _push(`<div id="lpFooter"><div class="lpSiteBy"> Site by <a class="lpHref" href="https://www.galenmaly.com/" target="_blank" rel="noopener noreferrer">Galen Maly</a> and <a class="lpHref" href="https://github.com/galenmaly/lighterpack/graphs/contributors" target="_blank" rel="noopener noreferrer">friends</a>. </div><div class="lpContact"><a class="lpHref" href="https://github.com/galenmaly/lighterpack" target="_blank" rel="noopener noreferrer">Copyleft</a> LighterPack 2019 - <a class="lpHref" href="mailto:info@lighterpack.com">Contact</a></div></div></div>`);
        _push(ssrRenderComponent(_component_globalAlerts, null, null, _parent));
        _push(ssrRenderComponent(_component_speedbump, null, null, _parent));
        _push(ssrRenderComponent(_component_copyList, null, null, _parent));
        _push(ssrRenderComponent(_component_ImportCsv, null, null, _parent));
        _push(ssrRenderComponent(_component_itemImage, null, null, _parent));
        _push(ssrRenderComponent(_component_itemViewImage, null, null, _parent));
        _push(ssrRenderComponent(_component_itemLink, null, null, _parent));
        _push(ssrRenderComponent(_component_help, null, null, _parent));
        _push(ssrRenderComponent(_component_account, null, null, _parent));
        _push(ssrRenderComponent(_component_accountDelete, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DY47e73s.mjs.map
