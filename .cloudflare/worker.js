var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// .svelte-kit/output/server/chunks/false.js
var BROWSER;
var init_false = __esm({
  ".svelte-kit/output/server/chunks/false.js"() {
    BROWSER = false;
  }
});

// .svelte-kit/output/server/chunks/environment.js
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_private_env(environment) {
  private_env = environment;
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
var base, assets, initial, private_env, public_env, safe_public_env, building, prerendering;
var init_environment = __esm({
  ".svelte-kit/output/server/chunks/environment.js"() {
    base = "";
    assets = base;
    initial = { base, assets };
    private_env = {};
    public_env = {};
    safe_public_env = {};
    building = false;
    prerendering = false;
  }
});

// .svelte-kit/output/server/chunks/index.js
function redirect(status, location) {
  if (isNaN(status) || status < 300 || status > 308) {
    throw new Error("Invalid status code");
  }
  throw new Redirect(
    // @ts-ignore
    status,
    location.toString()
  );
}
function json(data, init3) {
  const body2 = JSON.stringify(data);
  const headers2 = new Headers(init3?.headers);
  if (!headers2.has("content-length")) {
    headers2.set("content-length", encoder.encode(body2).byteLength.toString());
  }
  if (!headers2.has("content-type")) {
    headers2.set("content-type", "application/json");
  }
  return new Response(body2, {
    ...init3,
    headers: headers2
  });
}
function text(body2, init3) {
  const headers2 = new Headers(init3?.headers);
  if (!headers2.has("content-length")) {
    const encoded = encoder.encode(body2);
    headers2.set("content-length", encoded.byteLength.toString());
    return new Response(encoded, {
      ...init3,
      headers: headers2
    });
  }
  return new Response(body2, {
    ...init3,
    headers: headers2
  });
}
function fail(status, data) {
  return new ActionFailure(status, data);
}
var HttpError, Redirect, SvelteKitError, ActionFailure, encoder;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    HttpError = class {
      /**
       * @param {number} status
       * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body
       */
      constructor(status, body2) {
        this.status = status;
        if (typeof body2 === "string") {
          this.body = { message: body2 };
        } else if (body2) {
          this.body = body2;
        } else {
          this.body = { message: `Error: ${status}` };
        }
      }
      toString() {
        return JSON.stringify(this.body);
      }
    };
    Redirect = class {
      /**
       * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status
       * @param {string} location
       */
      constructor(status, location) {
        this.status = status;
        this.location = location;
      }
    };
    SvelteKitError = class extends Error {
      /**
       * @param {number} status
       * @param {string} text
       * @param {string} message
       */
      constructor(status, text2, message2) {
        super(message2);
        this.status = status;
        this.text = text2;
      }
    };
    ActionFailure = class {
      /**
       * @param {number} status
       * @param {T} data
       */
      constructor(status, data) {
        this.status = status;
        this.data = data;
      }
    };
    encoder = new TextEncoder();
  }
});

// node_modules/clsx/dist/clsx.mjs
var init_clsx = __esm({
  "node_modules/clsx/dist/clsx.mjs"() {
  }
});

// .svelte-kit/output/server/chunks/index2.js
function effect_update_depth_exceeded() {
  {
    throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
  }
}
function hydration_failed() {
  {
    throw new Error(`https://svelte.dev/e/hydration_failed`);
  }
}
function state_unsafe_local_read() {
  {
    throw new Error(`https://svelte.dev/e/state_unsafe_local_read`);
  }
}
function state_unsafe_mutation() {
  {
    throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
  }
}
function init_operations() {
  if ($window !== void 0) {
    return;
  }
  $window = window;
  var element_prototype = Element.prototype;
  var node_prototype = Node.prototype;
  first_child_getter = get_descriptor(node_prototype, "firstChild").get;
  next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
  element_prototype.__click = void 0;
  element_prototype.__className = "";
  element_prototype.__attributes = null;
  element_prototype.__styles = null;
  element_prototype.__e = void 0;
  Text.prototype.__t = void 0;
}
function create_text(value = "") {
  return document.createTextNode(value);
}
// @__NO_SIDE_EFFECTS__
function get_first_child(node) {
  return first_child_getter.call(node);
}
// @__NO_SIDE_EFFECTS__
function get_next_sibling(node) {
  return next_sibling_getter.call(node);
}
function clear_text_content(node) {
  node.textContent = "";
}
function destroy_derived_children(derived) {
  var children = derived.children;
  if (children !== null) {
    derived.children = null;
    for (var i4 = 0; i4 < children.length; i4 += 1) {
      var child = children[i4];
      if ((child.f & DERIVED) !== 0) {
        destroy_derived(
          /** @type {Derived} */
          child
        );
      } else {
        destroy_effect(
          /** @type {Effect} */
          child
        );
      }
    }
  }
}
function get_derived_parent_effect(derived) {
  var parent = derived.parent;
  while (parent !== null) {
    if ((parent.f & DERIVED) === 0) {
      return (
        /** @type {Effect} */
        parent
      );
    }
    parent = parent.parent;
  }
  return null;
}
function execute_derived(derived) {
  var value;
  var prev_active_effect = active_effect;
  set_active_effect(get_derived_parent_effect(derived));
  {
    try {
      destroy_derived_children(derived);
      value = update_reaction(derived);
    } finally {
      set_active_effect(prev_active_effect);
    }
  }
  return value;
}
function update_derived(derived) {
  var value = execute_derived(derived);
  var status = (skip_reaction || (derived.f & UNOWNED) !== 0) && derived.deps !== null ? MAYBE_DIRTY : CLEAN;
  set_signal_status(derived, status);
  if (!derived.equals(value)) {
    derived.v = value;
    derived.wv = increment_write_version();
  }
}
function destroy_derived(derived) {
  destroy_derived_children(derived);
  remove_reactions(derived, 0);
  set_signal_status(derived, DESTROYED);
  derived.v = derived.children = derived.deps = derived.ctx = derived.reactions = null;
}
function push_effect(effect2, parent_effect) {
  var parent_last = parent_effect.last;
  if (parent_last === null) {
    parent_effect.last = parent_effect.first = effect2;
  } else {
    parent_last.next = effect2;
    effect2.prev = parent_last;
    parent_effect.last = effect2;
  }
}
function create_effect(type, fn, sync, push2 = true) {
  var is_root = (type & ROOT_EFFECT) !== 0;
  var parent_effect = active_effect;
  var effect2 = {
    ctx: component_context,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: type | DIRTY,
    first: null,
    fn,
    last: null,
    next: null,
    parent: is_root ? null : parent_effect,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (sync) {
    var previously_flushing_effect = is_flushing_effect;
    try {
      set_is_flushing_effect(true);
      update_effect(effect2);
      effect2.f |= EFFECT_RAN;
    } catch (e2) {
      destroy_effect(effect2);
      throw e2;
    } finally {
      set_is_flushing_effect(previously_flushing_effect);
    }
  } else if (fn !== null) {
    schedule_effect(effect2);
  }
  var inert = sync && effect2.deps === null && effect2.first === null && effect2.nodes_start === null && effect2.teardown === null && (effect2.f & EFFECT_HAS_DERIVED) === 0;
  if (!inert && !is_root && push2) {
    if (parent_effect !== null) {
      push_effect(effect2, parent_effect);
    }
    if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0) {
      var derived = (
        /** @type {Derived} */
        active_reaction
      );
      (derived.children ??= []).push(effect2);
    }
  }
  return effect2;
}
function component_root(fn) {
  const effect2 = create_effect(ROOT_EFFECT, fn, true);
  return (options2 = {}) => {
    return new Promise((fulfil) => {
      if (options2.outro) {
        pause_effect(effect2, () => {
          destroy_effect(effect2);
          fulfil(void 0);
        });
      } else {
        destroy_effect(effect2);
        fulfil(void 0);
      }
    });
  };
}
function effect(fn) {
  return create_effect(EFFECT, fn, false);
}
function branch(fn, push2 = true) {
  return create_effect(RENDER_EFFECT | BRANCH_EFFECT, fn, true, push2);
}
function execute_effect_teardown(effect2) {
  var teardown = effect2.teardown;
  if (teardown !== null) {
    const previous_reaction = active_reaction;
    set_active_reaction(null);
    try {
      teardown.call(null);
    } finally {
      set_active_reaction(previous_reaction);
    }
  }
}
function destroy_effect_deriveds(signal2) {
  var deriveds = signal2.deriveds;
  if (deriveds !== null) {
    signal2.deriveds = null;
    for (var i4 = 0; i4 < deriveds.length; i4 += 1) {
      destroy_derived(deriveds[i4]);
    }
  }
}
function destroy_effect_children(signal2, remove_dom = false) {
  var effect2 = signal2.first;
  signal2.first = signal2.last = null;
  while (effect2 !== null) {
    var next = effect2.next;
    destroy_effect(effect2, remove_dom);
    effect2 = next;
  }
}
function destroy_block_effect_children(signal2) {
  var effect2 = signal2.first;
  while (effect2 !== null) {
    var next = effect2.next;
    if ((effect2.f & BRANCH_EFFECT) === 0) {
      destroy_effect(effect2);
    }
    effect2 = next;
  }
}
function destroy_effect(effect2, remove_dom = true) {
  var removed = false;
  if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes_start !== null) {
    var node = effect2.nodes_start;
    var end = effect2.nodes_end;
    while (node !== null) {
      var next = node === end ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ get_next_sibling(node)
      );
      node.remove();
      node = next;
    }
    removed = true;
  }
  destroy_effect_children(effect2, remove_dom && !removed);
  destroy_effect_deriveds(effect2);
  remove_reactions(effect2, 0);
  set_signal_status(effect2, DESTROYED);
  var transitions = effect2.transitions;
  if (transitions !== null) {
    for (const transition of transitions) {
      transition.stop();
    }
  }
  execute_effect_teardown(effect2);
  var parent = effect2.parent;
  if (parent !== null && parent.first !== null) {
    unlink_effect(effect2);
  }
  effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes_start = effect2.nodes_end = null;
}
function unlink_effect(effect2) {
  var parent = effect2.parent;
  var prev = effect2.prev;
  var next = effect2.next;
  if (prev !== null) prev.next = next;
  if (next !== null) next.prev = prev;
  if (parent !== null) {
    if (parent.first === effect2) parent.first = next;
    if (parent.last === effect2) parent.last = prev;
  }
}
function pause_effect(effect2, callback2) {
  var transitions = [];
  pause_children(effect2, transitions, true);
  run_out_transitions(transitions, () => {
    destroy_effect(effect2);
    callback2();
  });
}
function run_out_transitions(transitions, fn) {
  var remaining = transitions.length;
  if (remaining > 0) {
    var check2 = () => --remaining || fn();
    for (var transition of transitions) {
      transition.out(check2);
    }
  } else {
    fn();
  }
}
function pause_children(effect2, transitions, local) {
  if ((effect2.f & INERT) !== 0) return;
  effect2.f ^= INERT;
  if (effect2.transitions !== null) {
    for (const transition of effect2.transitions) {
      if (transition.is_global || local) {
        transitions.push(transition);
      }
    }
  }
  var child = effect2.first;
  while (child !== null) {
    var sibling = child.next;
    var transparent = (child.f & EFFECT_TRANSPARENT) !== 0 || (child.f & BRANCH_EFFECT) !== 0;
    pause_children(child, transitions, transparent ? local : false);
    child = sibling;
  }
}
function flush_tasks() {
}
function lifecycle_outside_component(name) {
  {
    throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
  }
}
function set_is_flushing_effect(value) {
  is_flushing_effect = value;
}
function set_active_reaction(reaction) {
  active_reaction = reaction;
}
function set_active_effect(effect2) {
  active_effect = effect2;
}
function set_untracked_writes(value) {
  untracked_writes = value;
}
function increment_write_version() {
  return ++write_version;
}
function is_runes() {
  return true;
}
function check_dirtiness(reaction) {
  var flags = reaction.f;
  if ((flags & DIRTY) !== 0) {
    return true;
  }
  if ((flags & MAYBE_DIRTY) !== 0) {
    var dependencies = reaction.deps;
    var is_unowned = (flags & UNOWNED) !== 0;
    if (dependencies !== null) {
      var i4;
      var dependency;
      var is_disconnected = (flags & DISCONNECTED) !== 0;
      var is_unowned_connected = is_unowned && active_effect !== null && !skip_reaction;
      var length = dependencies.length;
      if (is_disconnected || is_unowned_connected) {
        for (i4 = 0; i4 < length; i4++) {
          dependency = dependencies[i4];
          if (is_disconnected || !dependency?.reactions?.includes(reaction)) {
            (dependency.reactions ??= []).push(reaction);
          }
        }
        if (is_disconnected) {
          reaction.f ^= DISCONNECTED;
        }
      }
      for (i4 = 0; i4 < length; i4++) {
        dependency = dependencies[i4];
        if (check_dirtiness(
          /** @type {Derived} */
          dependency
        )) {
          update_derived(
            /** @type {Derived} */
            dependency
          );
        }
        if (dependency.wv > reaction.wv) {
          return true;
        }
      }
    }
    if (!is_unowned || active_effect !== null && !skip_reaction) {
      set_signal_status(reaction, CLEAN);
    }
  }
  return false;
}
function propagate_error(error, effect2) {
  var current = effect2;
  while (current !== null) {
    if ((current.f & BOUNDARY_EFFECT) !== 0) {
      try {
        current.fn(error);
        return;
      } catch {
        current.f ^= BOUNDARY_EFFECT;
      }
    }
    current = current.parent;
  }
  is_throwing_error = false;
  throw error;
}
function should_rethrow_error(effect2) {
  return (effect2.f & DESTROYED) === 0 && (effect2.parent === null || (effect2.parent.f & BOUNDARY_EFFECT) === 0);
}
function handle_error(error, effect2, previous_effect, component_context2) {
  if (is_throwing_error) {
    if (previous_effect === null) {
      is_throwing_error = false;
    }
    if (should_rethrow_error(effect2)) {
      throw error;
    }
    return;
  }
  if (previous_effect !== null) {
    is_throwing_error = true;
  }
  {
    propagate_error(error, effect2);
    return;
  }
}
function update_reaction(reaction) {
  var previous_deps = new_deps;
  var previous_skipped_deps = skipped_deps;
  var previous_untracked_writes = untracked_writes;
  var previous_reaction = active_reaction;
  var previous_skip_reaction = skip_reaction;
  var prev_derived_sources = derived_sources;
  var previous_component_context = component_context;
  var flags = reaction.f;
  new_deps = /** @type {null | Value[]} */
  null;
  skipped_deps = 0;
  untracked_writes = null;
  active_reaction = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
  skip_reaction = !is_flushing_effect && (flags & UNOWNED) !== 0;
  derived_sources = null;
  component_context = reaction.ctx;
  read_version++;
  try {
    var result = (
      /** @type {Function} */
      (0, reaction.fn)()
    );
    var deps = reaction.deps;
    if (new_deps !== null) {
      var i4;
      remove_reactions(reaction, skipped_deps);
      if (deps !== null && skipped_deps > 0) {
        deps.length = skipped_deps + new_deps.length;
        for (i4 = 0; i4 < new_deps.length; i4++) {
          deps[skipped_deps + i4] = new_deps[i4];
        }
      } else {
        reaction.deps = deps = new_deps;
      }
      if (!skip_reaction) {
        for (i4 = skipped_deps; i4 < deps.length; i4++) {
          (deps[i4].reactions ??= []).push(reaction);
        }
      }
    } else if (deps !== null && skipped_deps < deps.length) {
      remove_reactions(reaction, skipped_deps);
      deps.length = skipped_deps;
    }
    if (previous_reaction !== null) {
      read_version++;
    }
    return result;
  } finally {
    new_deps = previous_deps;
    skipped_deps = previous_skipped_deps;
    untracked_writes = previous_untracked_writes;
    active_reaction = previous_reaction;
    skip_reaction = previous_skip_reaction;
    derived_sources = prev_derived_sources;
    component_context = previous_component_context;
  }
}
function remove_reaction(signal2, dependency) {
  let reactions = dependency.reactions;
  if (reactions !== null) {
    var index7 = index_of.call(reactions, signal2);
    if (index7 !== -1) {
      var new_length = reactions.length - 1;
      if (new_length === 0) {
        reactions = dependency.reactions = null;
      } else {
        reactions[index7] = reactions[new_length];
        reactions.pop();
      }
    }
  }
  if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (new_deps === null || !new_deps.includes(dependency))) {
    set_signal_status(dependency, MAYBE_DIRTY);
    if ((dependency.f & (UNOWNED | DISCONNECTED)) === 0) {
      dependency.f ^= DISCONNECTED;
    }
    remove_reactions(
      /** @type {Derived} **/
      dependency,
      0
    );
  }
}
function remove_reactions(signal2, start_index) {
  var dependencies = signal2.deps;
  if (dependencies === null) return;
  for (var i4 = start_index; i4 < dependencies.length; i4++) {
    remove_reaction(signal2, dependencies[i4]);
  }
}
function update_effect(effect2) {
  var flags = effect2.f;
  if ((flags & DESTROYED) !== 0) {
    return;
  }
  set_signal_status(effect2, CLEAN);
  var previous_effect = active_effect;
  var previous_component_context = component_context;
  active_effect = effect2;
  try {
    if ((flags & BLOCK_EFFECT) !== 0) {
      destroy_block_effect_children(effect2);
    } else {
      destroy_effect_children(effect2);
    }
    destroy_effect_deriveds(effect2);
    execute_effect_teardown(effect2);
    var teardown = update_reaction(effect2);
    effect2.teardown = typeof teardown === "function" ? teardown : null;
    effect2.wv = write_version;
    var deps = effect2.deps;
    var dep;
    if (BROWSER && tracing_mode_flag && (effect2.f & DIRTY) !== 0 && deps !== null) ;
    if (BROWSER) ;
  } catch (error) {
    handle_error(error, effect2, previous_effect, previous_component_context || effect2.ctx);
  } finally {
    active_effect = previous_effect;
  }
}
function infinite_loop_guard() {
  if (flush_count > 1e3) {
    flush_count = 0;
    try {
      effect_update_depth_exceeded();
    } catch (error) {
      if (last_scheduled_effect !== null) {
        {
          handle_error(error, last_scheduled_effect, null);
        }
      } else {
        throw error;
      }
    }
  }
  flush_count++;
}
function flush_queued_root_effects(root_effects) {
  var length = root_effects.length;
  if (length === 0) {
    return;
  }
  infinite_loop_guard();
  var previously_flushing_effect = is_flushing_effect;
  is_flushing_effect = true;
  try {
    for (var i4 = 0; i4 < length; i4++) {
      var effect2 = root_effects[i4];
      if ((effect2.f & CLEAN) === 0) {
        effect2.f ^= CLEAN;
      }
      var collected_effects = [];
      process_effects(effect2, collected_effects);
      flush_queued_effects(collected_effects);
    }
  } finally {
    is_flushing_effect = previously_flushing_effect;
  }
}
function flush_queued_effects(effects) {
  var length = effects.length;
  if (length === 0) return;
  for (var i4 = 0; i4 < length; i4++) {
    var effect2 = effects[i4];
    if ((effect2.f & (DESTROYED | INERT)) === 0) {
      try {
        if (check_dirtiness(effect2)) {
          update_effect(effect2);
          if (effect2.deps === null && effect2.first === null && effect2.nodes_start === null) {
            if (effect2.teardown === null) {
              unlink_effect(effect2);
            } else {
              effect2.fn = null;
            }
          }
        }
      } catch (error) {
        handle_error(error, effect2, null, effect2.ctx);
      }
    }
  }
}
function process_deferred() {
  is_micro_task_queued = false;
  if (flush_count > 1001) {
    return;
  }
  const previous_queued_root_effects = queued_root_effects;
  queued_root_effects = [];
  flush_queued_root_effects(previous_queued_root_effects);
  if (!is_micro_task_queued) {
    flush_count = 0;
    last_scheduled_effect = null;
  }
}
function schedule_effect(signal2) {
  if (scheduler_mode === FLUSH_MICROTASK) {
    if (!is_micro_task_queued) {
      is_micro_task_queued = true;
      queueMicrotask(process_deferred);
    }
  }
  last_scheduled_effect = signal2;
  var effect2 = signal2;
  while (effect2.parent !== null) {
    effect2 = effect2.parent;
    var flags = effect2.f;
    if ((flags & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
      if ((flags & CLEAN) === 0) return;
      effect2.f ^= CLEAN;
    }
  }
  queued_root_effects.push(effect2);
}
function process_effects(effect2, collected_effects) {
  var current_effect = effect2.first;
  var effects = [];
  main_loop: while (current_effect !== null) {
    var flags = current_effect.f;
    var is_branch = (flags & BRANCH_EFFECT) !== 0;
    var is_skippable_branch = is_branch && (flags & CLEAN) !== 0;
    var sibling = current_effect.next;
    if (!is_skippable_branch && (flags & INERT) === 0) {
      if ((flags & RENDER_EFFECT) !== 0) {
        if (is_branch) {
          current_effect.f ^= CLEAN;
        } else {
          try {
            if (check_dirtiness(current_effect)) {
              update_effect(current_effect);
            }
          } catch (error) {
            handle_error(error, current_effect, null, current_effect.ctx);
          }
        }
        var child = current_effect.first;
        if (child !== null) {
          current_effect = child;
          continue;
        }
      } else if ((flags & EFFECT) !== 0) {
        effects.push(current_effect);
      }
    }
    if (sibling === null) {
      let parent = current_effect.parent;
      while (parent !== null) {
        if (effect2 === parent) {
          break main_loop;
        }
        var parent_sibling = parent.next;
        if (parent_sibling !== null) {
          current_effect = parent_sibling;
          continue main_loop;
        }
        parent = parent.parent;
      }
    }
    current_effect = sibling;
  }
  for (var i4 = 0; i4 < effects.length; i4++) {
    child = effects[i4];
    collected_effects.push(child);
    process_effects(child, collected_effects);
  }
}
function flush_sync(fn) {
  var previous_scheduler_mode = scheduler_mode;
  var previous_queued_root_effects = queued_root_effects;
  try {
    infinite_loop_guard();
    const root_effects = [];
    scheduler_mode = FLUSH_SYNC;
    queued_root_effects = root_effects;
    is_micro_task_queued = false;
    flush_queued_root_effects(previous_queued_root_effects);
    var result = fn?.();
    flush_tasks();
    if (queued_root_effects.length > 0 || root_effects.length > 0) {
      flush_sync();
    }
    flush_count = 0;
    last_scheduled_effect = null;
    if (BROWSER) ;
    return result;
  } finally {
    scheduler_mode = previous_scheduler_mode;
    queued_root_effects = previous_queued_root_effects;
  }
}
function get(signal2) {
  var flags = signal2.f;
  var is_derived = (flags & DERIVED) !== 0;
  if (is_derived && (flags & DESTROYED) !== 0) {
    var value = execute_derived(
      /** @type {Derived} */
      signal2
    );
    destroy_derived(
      /** @type {Derived} */
      signal2
    );
    return value;
  }
  if (active_reaction !== null) {
    if (derived_sources !== null && derived_sources.includes(signal2)) {
      state_unsafe_local_read();
    }
    var deps = active_reaction.deps;
    if (signal2.rv < read_version) {
      signal2.rv = read_version;
      if (new_deps === null && deps !== null && deps[skipped_deps] === signal2) {
        skipped_deps++;
      } else if (new_deps === null) {
        new_deps = [signal2];
      } else {
        new_deps.push(signal2);
      }
      if (untracked_writes !== null && active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & BRANCH_EFFECT) === 0 && untracked_writes.includes(signal2)) {
        set_signal_status(active_effect, DIRTY);
        schedule_effect(active_effect);
      }
    }
  } else if (is_derived && /** @type {Derived} */
  signal2.deps === null) {
    var derived = (
      /** @type {Derived} */
      signal2
    );
    var parent = derived.parent;
    var target = derived;
    while (parent !== null) {
      if ((parent.f & DERIVED) !== 0) {
        var parent_derived = (
          /** @type {Derived} */
          parent
        );
        target = parent_derived;
        parent = parent_derived.parent;
      } else {
        var parent_effect = (
          /** @type {Effect} */
          parent
        );
        if (!parent_effect.deriveds?.includes(target)) {
          (parent_effect.deriveds ??= []).push(target);
        }
        break;
      }
    }
  }
  if (is_derived) {
    derived = /** @type {Derived} */
    signal2;
    if (check_dirtiness(derived)) {
      update_derived(derived);
    }
  }
  return signal2.v;
}
function untrack(fn) {
  const previous_reaction = active_reaction;
  try {
    active_reaction = null;
    return fn();
  } finally {
    active_reaction = previous_reaction;
  }
}
function set_signal_status(signal2, status) {
  signal2.f = signal2.f & STATUS_MASK | status;
}
function push$1(props, runes = false, fn) {
  component_context = {
    p: component_context,
    c: null,
    e: null,
    m: false,
    s: props,
    x: null,
    l: null
  };
}
function pop$1(component6) {
  const context_stack_item = component_context;
  if (context_stack_item !== null) {
    const component_effects = context_stack_item.e;
    if (component_effects !== null) {
      var previous_effect = active_effect;
      var previous_reaction = active_reaction;
      context_stack_item.e = null;
      try {
        for (var i4 = 0; i4 < component_effects.length; i4++) {
          var component_effect = component_effects[i4];
          set_active_effect(component_effect.effect);
          set_active_reaction(component_effect.reaction);
          effect(component_effect.fn);
        }
      } finally {
        set_active_effect(previous_effect);
        set_active_reaction(previous_reaction);
      }
    }
    component_context = context_stack_item.p;
    context_stack_item.m = true;
  }
  return (
    /** @type {T} */
    {}
  );
}
function subscribe_to_store(store, run, invalidate) {
  if (store == null) {
    run(void 0);
    return noop;
  }
  const unsub = untrack(
    () => store.subscribe(
      run,
      // @ts-expect-error
      invalidate
    )
  );
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function getContext(key2) {
  const context_map = get_or_init_context_map();
  const result = (
    /** @type {T} */
    context_map.get(key2)
  );
  return result;
}
function setContext(key2, context2) {
  get_or_init_context_map().set(key2, context2);
  return context2;
}
function get_or_init_context_map(name) {
  if (current_component === null) {
    lifecycle_outside_component();
  }
  return current_component.c ??= new Map(get_parent_context(current_component) || void 0);
}
function push(fn) {
  current_component = { p: current_component, c: null, d: null };
}
function pop() {
  var component6 = (
    /** @type {Component} */
    current_component
  );
  var ondestroy = component6.d;
  if (ondestroy) {
    on_destroy.push(...ondestroy);
  }
  current_component = component6.p;
}
function get_parent_context(component_context2) {
  let parent = component_context2.p;
  while (parent !== null) {
    const context_map = parent.c;
    if (context_map !== null) {
      return context_map;
    }
    parent = parent.p;
  }
  return null;
}
function render(component6, options2 = {}) {
  const payload = { out: "", css: /* @__PURE__ */ new Set(), head: { title: "", out: "" } };
  const prev_on_destroy = on_destroy;
  on_destroy = [];
  payload.out += BLOCK_OPEN;
  if (options2.context) {
    push();
    current_component.c = options2.context;
  }
  component6(payload, options2.props ?? {}, {}, {});
  if (options2.context) {
    pop();
  }
  payload.out += BLOCK_CLOSE;
  for (const cleanup of on_destroy) cleanup();
  on_destroy = prev_on_destroy;
  let head = payload.head.out + payload.head.title;
  for (const { hash: hash2, code } of payload.css) {
    head += `<style id="${hash2}">${code}</style>`;
  }
  return {
    head,
    html: payload.out,
    body: payload.out
  };
}
function store_get(store_values, store_name, store) {
  if (store_name in store_values && store_values[store_name][0] === store) {
    return store_values[store_name][2];
  }
  store_values[store_name]?.[1]();
  store_values[store_name] = [store, null, void 0];
  const unsub = subscribe_to_store(
    store,
    /** @param {any} v */
    (v2) => store_values[store_name][2] = v2
  );
  store_values[store_name][1] = unsub;
  return store_values[store_name][2];
}
function unsubscribe_stores(store_values) {
  for (const store_name in store_values) {
    store_values[store_name][1]();
  }
}
function ensure_array_like(array_like_or_iterator) {
  if (array_like_or_iterator) {
    return array_like_or_iterator.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
  }
  return [];
}
var is_array, index_of, array_from, define_property, get_descriptor, noop, DERIVED, EFFECT, RENDER_EFFECT, BLOCK_EFFECT, BRANCH_EFFECT, ROOT_EFFECT, BOUNDARY_EFFECT, UNOWNED, DISCONNECTED, CLEAN, DIRTY, MAYBE_DIRTY, INERT, DESTROYED, EFFECT_RAN, EFFECT_TRANSPARENT, HEAD_EFFECT, EFFECT_HAS_DERIVED, LEGACY_PROPS, tracing_mode_flag, HYDRATION_START, HYDRATION_END, HYDRATION_ERROR, $window, first_child_getter, next_sibling_getter, FLUSH_MICROTASK, FLUSH_SYNC, is_throwing_error, scheduler_mode, is_micro_task_queued, last_scheduled_effect, is_flushing_effect, queued_root_effects, flush_count, active_reaction, active_effect, derived_sources, new_deps, skipped_deps, untracked_writes, write_version, read_version, skip_reaction, component_context, STATUS_MASK, current_component, BLOCK_OPEN, BLOCK_CLOSE, on_destroy;
var init_index2 = __esm({
  ".svelte-kit/output/server/chunks/index2.js"() {
    init_clsx();
    init_false();
    is_array = Array.isArray;
    index_of = Array.prototype.indexOf;
    array_from = Array.from;
    define_property = Object.defineProperty;
    get_descriptor = Object.getOwnPropertyDescriptor;
    noop = () => {
    };
    DERIVED = 1 << 1;
    EFFECT = 1 << 2;
    RENDER_EFFECT = 1 << 3;
    BLOCK_EFFECT = 1 << 4;
    BRANCH_EFFECT = 1 << 5;
    ROOT_EFFECT = 1 << 6;
    BOUNDARY_EFFECT = 1 << 7;
    UNOWNED = 1 << 8;
    DISCONNECTED = 1 << 9;
    CLEAN = 1 << 10;
    DIRTY = 1 << 11;
    MAYBE_DIRTY = 1 << 12;
    INERT = 1 << 13;
    DESTROYED = 1 << 14;
    EFFECT_RAN = 1 << 15;
    EFFECT_TRANSPARENT = 1 << 16;
    HEAD_EFFECT = 1 << 19;
    EFFECT_HAS_DERIVED = 1 << 20;
    LEGACY_PROPS = Symbol("legacy props");
    tracing_mode_flag = false;
    HYDRATION_START = "[";
    HYDRATION_END = "]";
    HYDRATION_ERROR = {};
    FLUSH_MICROTASK = 0;
    FLUSH_SYNC = 1;
    is_throwing_error = false;
    scheduler_mode = FLUSH_MICROTASK;
    is_micro_task_queued = false;
    last_scheduled_effect = null;
    is_flushing_effect = false;
    queued_root_effects = [];
    flush_count = 0;
    active_reaction = null;
    active_effect = null;
    derived_sources = null;
    new_deps = null;
    skipped_deps = 0;
    untracked_writes = null;
    write_version = 1;
    read_version = 0;
    skip_reaction = false;
    component_context = null;
    STATUS_MASK = -7169;
    current_component = null;
    BLOCK_OPEN = `<!--${HYDRATION_START}-->`;
    BLOCK_CLOSE = `<!--${HYDRATION_END}-->`;
    on_destroy = [];
  }
});

// .svelte-kit/output/server/chunks/equality.js
function equals(value) {
  return value === this.v;
}
function safe_not_equal(a3, b2) {
  return a3 != a3 ? b2 == b2 : a3 !== b2 || a3 !== null && typeof a3 === "object" || typeof a3 === "function";
}
function safe_equals(value) {
  return !safe_not_equal(value, this.v);
}
var init_equality = __esm({
  ".svelte-kit/output/server/chunks/equality.js"() {
  }
});

// .svelte-kit/output/server/chunks/exports.js
function resolve(base2, path) {
  if (path[0] === "/" && path[1] === "/") return path;
  let url = new URL(base2, internal);
  url = new URL(path, url);
  return url.protocol === internal.protocol ? url.pathname + url.search + url.hash : url.href;
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore") return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = decodeURIComponent(params[key2]);
  }
  return params;
}
function make_trackable(url, callback2, search_params_callback, allow_hash = false) {
  const tracked = new URL(url);
  Object.defineProperty(tracked, "searchParams", {
    value: new Proxy(tracked.searchParams, {
      get(obj, key2) {
        if (key2 === "get" || key2 === "getAll" || key2 === "has") {
          return (param) => {
            search_params_callback(param);
            return obj[key2](param);
          };
        }
        callback2();
        const value = Reflect.get(obj, key2);
        return typeof value === "function" ? value.bind(obj) : value;
      }
    }),
    enumerable: true,
    configurable: true
  });
  const tracked_url_properties = ["href", "pathname", "search", "toString", "toJSON"];
  if (allow_hash) tracked_url_properties.push("hash");
  for (const property of tracked_url_properties) {
    Object.defineProperty(tracked, property, {
      get() {
        callback2();
        return url[property];
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
    tracked.searchParams[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url.searchParams, opts);
    };
  }
  if (!allow_hash) {
    disable_hash(tracked);
  }
  return tracked;
}
function disable_hash(url) {
  allow_nodejs_console_log(url);
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  allow_nodejs_console_log(url);
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
function allow_nodejs_console_log(url) {
  {
    url[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(new URL(url), opts);
    };
  }
}
function has_data_suffix(pathname) {
  return pathname.endsWith(DATA_SUFFIX) || pathname.endsWith(HTML_DATA_SUFFIX);
}
function add_data_suffix(pathname) {
  if (pathname.endsWith(".html")) return pathname.replace(/\.html$/, HTML_DATA_SUFFIX);
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
function strip_data_suffix(pathname) {
  if (pathname.endsWith(HTML_DATA_SUFFIX)) {
    return pathname.slice(0, -HTML_DATA_SUFFIX.length) + ".html";
  }
  return pathname.slice(0, -DATA_SUFFIX.length);
}
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop = null;
  const subscribers = /* @__PURE__ */ new Set();
  function set2(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i4 = 0; i4 < subscriber_queue.length; i4 += 2) {
            subscriber_queue[i4][0](subscriber_queue[i4 + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set2(fn(
      /** @type {T} */
      value
    ));
  }
  function subscribe(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set2, update) || noop;
    }
    run(
      /** @type {T} */
      value
    );
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set: set2, update, subscribe };
}
function validator(expected) {
  function validate(module, file) {
    if (!module) return;
    for (const key2 in module) {
      if (key2[0] === "_" || expected.has(key2)) continue;
      const values = [...expected.values()];
      const hint = hint_for_supported_files(key2, file?.slice(file.lastIndexOf("."))) ?? `valid exports are ${values.join(", ")}, or anything with a '_' prefix`;
      throw new Error(`Invalid export '${key2}'${file ? ` in ${file}` : ""} (${hint})`);
    }
  }
  return validate;
}
function hint_for_supported_files(key2, ext = ".js") {
  const supported_files = [];
  if (valid_layout_exports.has(key2)) {
    supported_files.push(`+layout${ext}`);
  }
  if (valid_page_exports.has(key2)) {
    supported_files.push(`+page${ext}`);
  }
  if (valid_layout_server_exports.has(key2)) {
    supported_files.push(`+layout.server${ext}`);
  }
  if (valid_page_server_exports.has(key2)) {
    supported_files.push(`+page.server${ext}`);
  }
  if (valid_server_exports.has(key2)) {
    supported_files.push(`+server${ext}`);
  }
  if (supported_files.length > 0) {
    return `'${key2}' is a valid export in ${supported_files.slice(0, -1).join(", ")}${supported_files.length > 1 ? " or " : ""}${supported_files.at(-1)}`;
  }
}
var internal, DATA_SUFFIX, HTML_DATA_SUFFIX, subscriber_queue, valid_layout_exports, valid_page_exports, valid_layout_server_exports, valid_page_server_exports, valid_server_exports, validate_layout_exports, validate_page_exports, validate_layout_server_exports, validate_page_server_exports, validate_server_exports;
var init_exports = __esm({
  ".svelte-kit/output/server/chunks/exports.js"() {
    init_index2();
    init_equality();
    init_clsx();
    internal = new URL("sveltekit-internal://");
    DATA_SUFFIX = "/__data.json";
    HTML_DATA_SUFFIX = ".html__data.json";
    subscriber_queue = [];
    valid_layout_exports = /* @__PURE__ */ new Set([
      "load",
      "prerender",
      "csr",
      "ssr",
      "trailingSlash",
      "config"
    ]);
    valid_page_exports = /* @__PURE__ */ new Set([...valid_layout_exports, "entries"]);
    valid_layout_server_exports = /* @__PURE__ */ new Set([...valid_layout_exports]);
    valid_page_server_exports = /* @__PURE__ */ new Set([...valid_layout_server_exports, "actions", "entries"]);
    valid_server_exports = /* @__PURE__ */ new Set([
      "GET",
      "POST",
      "PATCH",
      "PUT",
      "DELETE",
      "OPTIONS",
      "HEAD",
      "fallback",
      "prerender",
      "trailingSlash",
      "config",
      "entries"
    ]);
    validate_layout_exports = validator(valid_layout_exports);
    validate_page_exports = validator(valid_page_exports);
    validate_layout_server_exports = validator(valid_layout_server_exports);
    validate_page_server_exports = validator(valid_page_server_exports);
    validate_server_exports = validator(valid_server_exports);
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse5;
    exports.serialize = serialize3;
    var __toString2 = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse5(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var dec = opt.decode || decode5;
      var index7 = 0;
      while (index7 < str.length) {
        var eqIdx = str.indexOf("=", index7);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index7);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index7 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index7, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index7 = endIdx + 1;
      }
      return obj;
    }
    function serialize3(name, val, options2) {
      var opt = options2 || {};
      var enc2 = opt.encode || encode5;
      if (typeof enc2 !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc2(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate2(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.partitioned) {
        str += "; Partitioned";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode5(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode5(val) {
      return encodeURIComponent(val);
    }
    function isDate2(val) {
      return __toString2.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode6) {
      try {
        return decode6(str);
      } catch (e2) {
        return str;
      }
    }
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString2(setCookieValue, options2) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      try {
        value = options2.decodeValues ? decodeURIComponent(value) : value;
      } catch (e2) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e2
        );
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie.expires = new Date(value2);
        } else if (key2 === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key2 === "secure") {
          cookie.secure = true;
        } else if (key2 === "httponly") {
          cookie.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie.sameSite = value2;
        } else if (key2 === "partitioned") {
          cookie.partitioned = true;
        } else {
          cookie[key2] = value2;
        }
      });
      return cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse5(input, options2) {
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!input) {
        if (!options2.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers) {
        if (typeof input.headers.getSetCookie === "function") {
          input = input.headers.getSetCookie();
        } else if (input.headers["set-cookie"]) {
          input = input.headers["set-cookie"];
        } else {
          var sch = input.headers[Object.keys(input.headers).find(function(key2) {
            return key2.toLowerCase() === "set-cookie";
          })];
          if (!sch && input.headers.cookie && !options2.silent) {
            console.warn(
              "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
            );
          }
          input = sch;
        }
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      if (!options2.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options2);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString2(str, options2);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse5;
    module.exports.parse = parse5;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// node_modules/@auth/core/lib/utils/cookie.js
function defaultCookies(useSecureCookies) {
  const cookiePrefix = useSecureCookies ? "__Secure-" : "";
  return {
    // default cookie options
    sessionToken: {
      name: `${cookiePrefix}authjs.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies
      }
    },
    callbackUrl: {
      name: `${cookiePrefix}authjs.callback-url`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies
      }
    },
    csrfToken: {
      // Default to __Host- for CSRF token for additional protection if using useSecureCookies
      // NB: The `__Host-` prefix is stricter than the `__Secure-` prefix.
      name: `${useSecureCookies ? "__Host-" : ""}authjs.csrf-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies
      }
    },
    pkceCodeVerifier: {
      name: `${cookiePrefix}authjs.pkce.code_verifier`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies,
        maxAge: 60 * 15
        // 15 minutes in seconds
      }
    },
    state: {
      name: `${cookiePrefix}authjs.state`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies,
        maxAge: 60 * 15
        // 15 minutes in seconds
      }
    },
    nonce: {
      name: `${cookiePrefix}authjs.nonce`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies
      }
    },
    webauthnChallenge: {
      name: `${cookiePrefix}authjs.challenge`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies,
        maxAge: 60 * 15
        // 15 minutes in seconds
      }
    }
  };
}
var __classPrivateFieldSet, __classPrivateFieldGet, _SessionStore_instances, _SessionStore_chunks, _SessionStore_option, _SessionStore_logger, _SessionStore_chunk, _SessionStore_clean, ALLOWED_COOKIE_SIZE, ESTIMATED_EMPTY_COOKIE_SIZE, CHUNK_SIZE, SessionStore;
var init_cookie = __esm({
  "node_modules/@auth/core/lib/utils/cookie.js"() {
    __classPrivateFieldSet = function(receiver, state2, value, kind, f4) {
      if (kind === "m") throw new TypeError("Private method is not writable");
      if (kind === "a" && !f4) throw new TypeError("Private accessor was defined without a setter");
      if (typeof state2 === "function" ? receiver !== state2 || !f4 : !state2.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f4.call(receiver, value) : f4 ? f4.value = value : state2.set(receiver, value), value;
    };
    __classPrivateFieldGet = function(receiver, state2, kind, f4) {
      if (kind === "a" && !f4) throw new TypeError("Private accessor was defined without a getter");
      if (typeof state2 === "function" ? receiver !== state2 || !f4 : !state2.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f4 : kind === "a" ? f4.call(receiver) : f4 ? f4.value : state2.get(receiver);
    };
    ALLOWED_COOKIE_SIZE = 4096;
    ESTIMATED_EMPTY_COOKIE_SIZE = 160;
    CHUNK_SIZE = ALLOWED_COOKIE_SIZE - ESTIMATED_EMPTY_COOKIE_SIZE;
    SessionStore = class {
      constructor(option, cookies, logger) {
        _SessionStore_instances.add(this);
        _SessionStore_chunks.set(this, {});
        _SessionStore_option.set(this, void 0);
        _SessionStore_logger.set(this, void 0);
        __classPrivateFieldSet(this, _SessionStore_logger, logger, "f");
        __classPrivateFieldSet(this, _SessionStore_option, option, "f");
        if (!cookies)
          return;
        const { name: sessionCookiePrefix } = option;
        for (const [name, value] of Object.entries(cookies)) {
          if (!name.startsWith(sessionCookiePrefix) || !value)
            continue;
          __classPrivateFieldGet(this, _SessionStore_chunks, "f")[name] = value;
        }
      }
      /**
       * The JWT Session or database Session ID
       * constructed from the cookie chunks.
       */
      get value() {
        const sortedKeys = Object.keys(__classPrivateFieldGet(this, _SessionStore_chunks, "f")).sort((a3, b2) => {
          const aSuffix = parseInt(a3.split(".").pop() || "0");
          const bSuffix = parseInt(b2.split(".").pop() || "0");
          return aSuffix - bSuffix;
        });
        return sortedKeys.map((key2) => __classPrivateFieldGet(this, _SessionStore_chunks, "f")[key2]).join("");
      }
      /**
       * Given a cookie value, return new cookies, chunked, to fit the allowed cookie size.
       * If the cookie has changed from chunked to unchunked or vice versa,
       * it deletes the old cookies as well.
       */
      chunk(value, options2) {
        const cookies = __classPrivateFieldGet(this, _SessionStore_instances, "m", _SessionStore_clean).call(this);
        const chunked = __classPrivateFieldGet(this, _SessionStore_instances, "m", _SessionStore_chunk).call(this, {
          name: __classPrivateFieldGet(this, _SessionStore_option, "f").name,
          value,
          options: { ...__classPrivateFieldGet(this, _SessionStore_option, "f").options, ...options2 }
        });
        for (const chunk of chunked) {
          cookies[chunk.name] = chunk;
        }
        return Object.values(cookies);
      }
      /** Returns a list of cookies that should be cleaned. */
      clean() {
        return Object.values(__classPrivateFieldGet(this, _SessionStore_instances, "m", _SessionStore_clean).call(this));
      }
    };
    _SessionStore_chunks = /* @__PURE__ */ new WeakMap(), _SessionStore_option = /* @__PURE__ */ new WeakMap(), _SessionStore_logger = /* @__PURE__ */ new WeakMap(), _SessionStore_instances = /* @__PURE__ */ new WeakSet(), _SessionStore_chunk = function _SessionStore_chunk2(cookie) {
      const chunkCount = Math.ceil(cookie.value.length / CHUNK_SIZE);
      if (chunkCount === 1) {
        __classPrivateFieldGet(this, _SessionStore_chunks, "f")[cookie.name] = cookie.value;
        return [cookie];
      }
      const cookies = [];
      for (let i4 = 0; i4 < chunkCount; i4++) {
        const name = `${cookie.name}.${i4}`;
        const value = cookie.value.substr(i4 * CHUNK_SIZE, CHUNK_SIZE);
        cookies.push({ ...cookie, name, value });
        __classPrivateFieldGet(this, _SessionStore_chunks, "f")[name] = value;
      }
      __classPrivateFieldGet(this, _SessionStore_logger, "f").debug("CHUNKING_SESSION_COOKIE", {
        message: `Session cookie exceeds allowed ${ALLOWED_COOKIE_SIZE} bytes.`,
        emptyCookieSize: ESTIMATED_EMPTY_COOKIE_SIZE,
        valueSize: cookie.value.length,
        chunks: cookies.map((c3) => c3.value.length + ESTIMATED_EMPTY_COOKIE_SIZE)
      });
      return cookies;
    }, _SessionStore_clean = function _SessionStore_clean2() {
      const cleanedChunks = {};
      for (const name in __classPrivateFieldGet(this, _SessionStore_chunks, "f")) {
        delete __classPrivateFieldGet(this, _SessionStore_chunks, "f")?.[name];
        cleanedChunks[name] = {
          name,
          value: "",
          options: { ...__classPrivateFieldGet(this, _SessionStore_option, "f").options, maxAge: 0 }
        };
      }
      return cleanedChunks;
    };
  }
});

// node_modules/@auth/core/errors.js
function isClientError(error) {
  if (error instanceof AuthError)
    return clientErrors.has(error.type);
  return false;
}
var AuthError, SignInError, AdapterError, AccessDenied, CallbackRouteError, ErrorPageLoop, EventError, InvalidCallbackUrl, CredentialsSignin, InvalidEndpoints, InvalidCheck, JWTSessionError, MissingAdapter, MissingAdapterMethods, MissingAuthorize, MissingSecret, OAuthAccountNotLinked, OAuthCallbackError, OAuthProfileParseError, SessionTokenError, OAuthSignInError, EmailSignInError, SignOutError, UnknownAction, UnsupportedStrategy, InvalidProvider, UntrustedHost, Verification, MissingCSRF, clientErrors, DuplicateConditionalUI, MissingWebAuthnAutocomplete, WebAuthnVerificationError, AccountNotLinked, ExperimentalFeatureNotEnabled;
var init_errors = __esm({
  "node_modules/@auth/core/errors.js"() {
    AuthError = class extends Error {
      constructor(message2, errorOptions) {
        if (message2 instanceof Error) {
          super(void 0, {
            cause: { err: message2, ...message2.cause, ...errorOptions }
          });
        } else if (typeof message2 === "string") {
          if (errorOptions instanceof Error) {
            errorOptions = { err: errorOptions, ...errorOptions.cause };
          }
          super(message2, errorOptions);
        } else {
          super(void 0, message2);
        }
        this.name = this.constructor.name;
        this.type = this.constructor.type ?? "AuthError";
        this.kind = this.constructor.kind ?? "error";
        Error.captureStackTrace?.(this, this.constructor);
        const url = `https://errors.authjs.dev#${this.type.toLowerCase()}`;
        this.message += `${this.message ? ". " : ""}Read more at ${url}`;
      }
    };
    SignInError = class extends AuthError {
    };
    SignInError.kind = "signIn";
    AdapterError = class extends AuthError {
    };
    AdapterError.type = "AdapterError";
    AccessDenied = class extends AuthError {
    };
    AccessDenied.type = "AccessDenied";
    CallbackRouteError = class extends AuthError {
    };
    CallbackRouteError.type = "CallbackRouteError";
    ErrorPageLoop = class extends AuthError {
    };
    ErrorPageLoop.type = "ErrorPageLoop";
    EventError = class extends AuthError {
    };
    EventError.type = "EventError";
    InvalidCallbackUrl = class extends AuthError {
    };
    InvalidCallbackUrl.type = "InvalidCallbackUrl";
    CredentialsSignin = class extends SignInError {
      constructor() {
        super(...arguments);
        this.code = "credentials";
      }
    };
    CredentialsSignin.type = "CredentialsSignin";
    InvalidEndpoints = class extends AuthError {
    };
    InvalidEndpoints.type = "InvalidEndpoints";
    InvalidCheck = class extends AuthError {
    };
    InvalidCheck.type = "InvalidCheck";
    JWTSessionError = class extends AuthError {
    };
    JWTSessionError.type = "JWTSessionError";
    MissingAdapter = class extends AuthError {
    };
    MissingAdapter.type = "MissingAdapter";
    MissingAdapterMethods = class extends AuthError {
    };
    MissingAdapterMethods.type = "MissingAdapterMethods";
    MissingAuthorize = class extends AuthError {
    };
    MissingAuthorize.type = "MissingAuthorize";
    MissingSecret = class extends AuthError {
    };
    MissingSecret.type = "MissingSecret";
    OAuthAccountNotLinked = class extends SignInError {
    };
    OAuthAccountNotLinked.type = "OAuthAccountNotLinked";
    OAuthCallbackError = class extends SignInError {
    };
    OAuthCallbackError.type = "OAuthCallbackError";
    OAuthProfileParseError = class extends AuthError {
    };
    OAuthProfileParseError.type = "OAuthProfileParseError";
    SessionTokenError = class extends AuthError {
    };
    SessionTokenError.type = "SessionTokenError";
    OAuthSignInError = class extends SignInError {
    };
    OAuthSignInError.type = "OAuthSignInError";
    EmailSignInError = class extends SignInError {
    };
    EmailSignInError.type = "EmailSignInError";
    SignOutError = class extends AuthError {
    };
    SignOutError.type = "SignOutError";
    UnknownAction = class extends AuthError {
    };
    UnknownAction.type = "UnknownAction";
    UnsupportedStrategy = class extends AuthError {
    };
    UnsupportedStrategy.type = "UnsupportedStrategy";
    InvalidProvider = class extends AuthError {
    };
    InvalidProvider.type = "InvalidProvider";
    UntrustedHost = class extends AuthError {
    };
    UntrustedHost.type = "UntrustedHost";
    Verification = class extends AuthError {
    };
    Verification.type = "Verification";
    MissingCSRF = class extends SignInError {
    };
    MissingCSRF.type = "MissingCSRF";
    clientErrors = /* @__PURE__ */ new Set([
      "CredentialsSignin",
      "OAuthAccountNotLinked",
      "OAuthCallbackError",
      "AccessDenied",
      "Verification",
      "MissingCSRF",
      "AccountNotLinked",
      "WebAuthnVerificationError"
    ]);
    DuplicateConditionalUI = class extends AuthError {
    };
    DuplicateConditionalUI.type = "DuplicateConditionalUI";
    MissingWebAuthnAutocomplete = class extends AuthError {
    };
    MissingWebAuthnAutocomplete.type = "MissingWebAuthnAutocomplete";
    WebAuthnVerificationError = class extends AuthError {
    };
    WebAuthnVerificationError.type = "WebAuthnVerificationError";
    AccountNotLinked = class extends SignInError {
    };
    AccountNotLinked.type = "AccountNotLinked";
    ExperimentalFeatureNotEnabled = class extends AuthError {
    };
    ExperimentalFeatureNotEnabled.type = "ExperimentalFeatureNotEnabled";
  }
});

// node_modules/@auth/core/lib/utils/assert.js
function isValidHttpUrl(url, baseUrl) {
  try {
    return /^https?:/.test(new URL(url, url.startsWith("/") ? baseUrl : void 0).protocol);
  } catch {
    return false;
  }
}
function isSemverString(version) {
  return /^v\d+(?:\.\d+){0,2}$/.test(version);
}
function assertConfig(request, options2) {
  const { url } = request;
  const warnings = [];
  if (!warned && options2.debug)
    warnings.push("debug-enabled");
  if (!options2.trustHost) {
    return new UntrustedHost(`Host must be trusted. URL was: ${request.url}`);
  }
  if (!options2.secret?.length) {
    return new MissingSecret("Please define a `secret`");
  }
  const callbackUrlParam = request.query?.callbackUrl;
  if (callbackUrlParam && !isValidHttpUrl(callbackUrlParam, url.origin)) {
    return new InvalidCallbackUrl(`Invalid callback URL. Received: ${callbackUrlParam}`);
  }
  const { callbackUrl: defaultCallbackUrl } = defaultCookies(options2.useSecureCookies ?? url.protocol === "https:");
  const callbackUrlCookie = request.cookies?.[options2.cookies?.callbackUrl?.name ?? defaultCallbackUrl.name];
  if (callbackUrlCookie && !isValidHttpUrl(callbackUrlCookie, url.origin)) {
    return new InvalidCallbackUrl(`Invalid callback URL. Received: ${callbackUrlCookie}`);
  }
  let hasConditionalUIProvider = false;
  for (const p3 of options2.providers) {
    const provider = typeof p3 === "function" ? p3() : p3;
    if ((provider.type === "oauth" || provider.type === "oidc") && !(provider.issuer ?? provider.options?.issuer)) {
      const { authorization: a3, token: t2, userinfo: u4 } = provider;
      let key2;
      if (typeof a3 !== "string" && !a3?.url)
        key2 = "authorization";
      else if (typeof t2 !== "string" && !t2?.url)
        key2 = "token";
      else if (typeof u4 !== "string" && !u4?.url)
        key2 = "userinfo";
      if (key2) {
        return new InvalidEndpoints(`Provider "${provider.id}" is missing both \`issuer\` and \`${key2}\` endpoint config. At least one of them is required`);
      }
    }
    if (provider.type === "credentials")
      hasCredentials = true;
    else if (provider.type === "email")
      hasEmail = true;
    else if (provider.type === "webauthn") {
      hasWebAuthn = true;
      if (provider.simpleWebAuthnBrowserVersion && !isSemverString(provider.simpleWebAuthnBrowserVersion)) {
        return new AuthError(`Invalid provider config for "${provider.id}": simpleWebAuthnBrowserVersion "${provider.simpleWebAuthnBrowserVersion}" must be a valid semver string.`);
      }
      if (provider.enableConditionalUI) {
        if (hasConditionalUIProvider) {
          return new DuplicateConditionalUI(`Multiple webauthn providers have 'enableConditionalUI' set to True. Only one provider can have this option enabled at a time`);
        }
        hasConditionalUIProvider = true;
        const hasWebauthnFormField = Object.values(provider.formFields).some((f4) => f4.autocomplete && f4.autocomplete.toString().indexOf("webauthn") > -1);
        if (!hasWebauthnFormField) {
          return new MissingWebAuthnAutocomplete(`Provider "${provider.id}" has 'enableConditionalUI' set to True, but none of its formFields have 'webauthn' in their autocomplete param`);
        }
      }
    }
  }
  if (hasCredentials) {
    const dbStrategy = options2.session?.strategy === "database";
    const onlyCredentials = !options2.providers.some((p3) => (typeof p3 === "function" ? p3() : p3).type !== "credentials");
    if (dbStrategy && onlyCredentials) {
      return new UnsupportedStrategy("Signing in with credentials only supported if JWT strategy is enabled");
    }
    const credentialsNoAuthorize = options2.providers.some((p3) => {
      const provider = typeof p3 === "function" ? p3() : p3;
      return provider.type === "credentials" && !provider.authorize;
    });
    if (credentialsNoAuthorize) {
      return new MissingAuthorize("Must define an authorize() handler to use credentials authentication provider");
    }
  }
  const { adapter, session: session2 } = options2;
  const requiredMethods = [];
  if (hasEmail || session2?.strategy === "database" || !session2?.strategy && adapter) {
    if (hasEmail) {
      if (!adapter)
        return new MissingAdapter("Email login requires an adapter");
      requiredMethods.push(...emailMethods);
    } else {
      if (!adapter)
        return new MissingAdapter("Database session requires an adapter");
      requiredMethods.push(...sessionMethods);
    }
  }
  if (hasWebAuthn) {
    if (options2.experimental?.enableWebAuthn) {
      warnings.push("experimental-webauthn");
    } else {
      return new ExperimentalFeatureNotEnabled("WebAuthn is an experimental feature. To enable it, set `experimental.enableWebAuthn` to `true` in your config");
    }
    if (!adapter)
      return new MissingAdapter("WebAuthn requires an adapter");
    requiredMethods.push(...webauthnMethods);
  }
  if (adapter) {
    const missing = requiredMethods.filter((m) => !(m in adapter));
    if (missing.length) {
      return new MissingAdapterMethods(`Required adapter methods were missing: ${missing.join(", ")}`);
    }
  }
  if (!warned)
    warned = true;
  return warnings;
}
var warned, hasCredentials, hasEmail, hasWebAuthn, emailMethods, sessionMethods, webauthnMethods;
var init_assert = __esm({
  "node_modules/@auth/core/lib/utils/assert.js"() {
    init_cookie();
    init_errors();
    warned = false;
    hasCredentials = false;
    hasEmail = false;
    hasWebAuthn = false;
    emailMethods = [
      "createVerificationToken",
      "useVerificationToken",
      "getUserByEmail"
    ];
    sessionMethods = [
      "createUser",
      "getUser",
      "getUserByEmail",
      "getUserByAccount",
      "updateUser",
      "linkAccount",
      "createSession",
      "getSessionAndUser",
      "updateSession",
      "deleteSession"
    ];
    webauthnMethods = [
      "createUser",
      "getUser",
      "linkAccount",
      "getAccount",
      "getAuthenticator",
      "createAuthenticator",
      "listAuthenticatorsByUserId",
      "updateAuthenticatorCounter"
    ];
  }
});

// node_modules/@panva/hkdf/dist/web/runtime/hkdf.js
var getGlobal, hkdf_default;
var init_hkdf = __esm({
  "node_modules/@panva/hkdf/dist/web/runtime/hkdf.js"() {
    getGlobal = () => {
      if (typeof globalThis !== "undefined")
        return globalThis;
      if (typeof self !== "undefined")
        return self;
      if (typeof window !== "undefined")
        return window;
      throw new Error("unable to locate global object");
    };
    hkdf_default = async (digest2, ikm, salt, info, keylen) => {
      const { crypto: { subtle } } = getGlobal();
      return new Uint8Array(await subtle.deriveBits({
        name: "HKDF",
        hash: `SHA-${digest2.substr(3)}`,
        salt,
        info
      }, await subtle.importKey("raw", ikm, "HKDF", false, ["deriveBits"]), keylen << 3));
    };
  }
});

// node_modules/@panva/hkdf/dist/web/index.js
function normalizeDigest(digest2) {
  switch (digest2) {
    case "sha256":
    case "sha384":
    case "sha512":
    case "sha1":
      return digest2;
    default:
      throw new TypeError('unsupported "digest" value');
  }
}
function normalizeUint8Array(input, label) {
  if (typeof input === "string")
    return new TextEncoder().encode(input);
  if (!(input instanceof Uint8Array))
    throw new TypeError(`"${label}"" must be an instance of Uint8Array or a string`);
  return input;
}
function normalizeIkm(input) {
  const ikm = normalizeUint8Array(input, "ikm");
  if (!ikm.byteLength)
    throw new TypeError(`"ikm" must be at least one byte in length`);
  return ikm;
}
function normalizeInfo(input) {
  const info = normalizeUint8Array(input, "info");
  if (info.byteLength > 1024) {
    throw TypeError('"info" must not contain more than 1024 bytes');
  }
  return info;
}
function normalizeKeylen(input, digest2) {
  if (typeof input !== "number" || !Number.isInteger(input) || input < 1) {
    throw new TypeError('"keylen" must be a positive integer');
  }
  const hashlen = parseInt(digest2.substr(3), 10) >> 3 || 20;
  if (input > 255 * hashlen) {
    throw new TypeError('"keylen" too large');
  }
  return input;
}
async function hkdf(digest2, ikm, salt, info, keylen) {
  return hkdf_default(normalizeDigest(digest2), normalizeIkm(ikm), normalizeUint8Array(salt, "salt"), normalizeInfo(info), normalizeKeylen(keylen, digest2));
}
var init_web = __esm({
  "node_modules/@panva/hkdf/dist/web/index.js"() {
    init_hkdf();
  }
});

// node_modules/jose/dist/browser/runtime/webcrypto.js
var webcrypto_default, isCryptoKey;
var init_webcrypto = __esm({
  "node_modules/jose/dist/browser/runtime/webcrypto.js"() {
    webcrypto_default = crypto;
    isCryptoKey = (key2) => key2 instanceof CryptoKey;
  }
});

// node_modules/jose/dist/browser/runtime/digest.js
var digest, digest_default;
var init_digest = __esm({
  "node_modules/jose/dist/browser/runtime/digest.js"() {
    init_webcrypto();
    digest = async (algorithm, data) => {
      const subtleDigest = `SHA-${algorithm.slice(-3)}`;
      return new Uint8Array(await webcrypto_default.subtle.digest(subtleDigest, data));
    };
    digest_default = digest;
  }
});

// node_modules/jose/dist/browser/lib/buffer_utils.js
function concat(...buffers) {
  const size = buffers.reduce((acc, { length }) => acc + length, 0);
  const buf2 = new Uint8Array(size);
  let i4 = 0;
  for (const buffer of buffers) {
    buf2.set(buffer, i4);
    i4 += buffer.length;
  }
  return buf2;
}
function p2s(alg2, p2sInput) {
  return concat(encoder2.encode(alg2), new Uint8Array([0]), p2sInput);
}
function writeUInt32BE(buf2, value, offset) {
  if (value < 0 || value >= MAX_INT32) {
    throw new RangeError(`value must be >= 0 and <= ${MAX_INT32 - 1}. Received ${value}`);
  }
  buf2.set([value >>> 24, value >>> 16, value >>> 8, value & 255], offset);
}
function uint64be(value) {
  const high = Math.floor(value / MAX_INT32);
  const low = value % MAX_INT32;
  const buf2 = new Uint8Array(8);
  writeUInt32BE(buf2, high, 0);
  writeUInt32BE(buf2, low, 4);
  return buf2;
}
function uint32be(value) {
  const buf2 = new Uint8Array(4);
  writeUInt32BE(buf2, value);
  return buf2;
}
function lengthAndInput(input) {
  return concat(uint32be(input.length), input);
}
async function concatKdf(secret, bits, value) {
  const iterations = Math.ceil((bits >> 3) / 32);
  const res = new Uint8Array(iterations * 32);
  for (let iter = 0; iter < iterations; iter++) {
    const buf2 = new Uint8Array(4 + secret.length + value.length);
    buf2.set(uint32be(iter + 1));
    buf2.set(secret, 4);
    buf2.set(value, 4 + secret.length);
    res.set(await digest_default("sha256", buf2), iter * 32);
  }
  return res.slice(0, bits >> 3);
}
var encoder2, decoder, MAX_INT32;
var init_buffer_utils = __esm({
  "node_modules/jose/dist/browser/lib/buffer_utils.js"() {
    init_digest();
    encoder2 = new TextEncoder();
    decoder = new TextDecoder();
    MAX_INT32 = 2 ** 32;
  }
});

// node_modules/jose/dist/browser/runtime/base64url.js
var encodeBase64, encode, decodeBase64, decode;
var init_base64url = __esm({
  "node_modules/jose/dist/browser/runtime/base64url.js"() {
    init_buffer_utils();
    encodeBase64 = (input) => {
      let unencoded = input;
      if (typeof unencoded === "string") {
        unencoded = encoder2.encode(unencoded);
      }
      const CHUNK_SIZE3 = 32768;
      const arr = [];
      for (let i4 = 0; i4 < unencoded.length; i4 += CHUNK_SIZE3) {
        arr.push(String.fromCharCode.apply(null, unencoded.subarray(i4, i4 + CHUNK_SIZE3)));
      }
      return btoa(arr.join(""));
    };
    encode = (input) => {
      return encodeBase64(input).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    };
    decodeBase64 = (encoded) => {
      const binary = atob(encoded);
      const bytes = new Uint8Array(binary.length);
      for (let i4 = 0; i4 < binary.length; i4++) {
        bytes[i4] = binary.charCodeAt(i4);
      }
      return bytes;
    };
    decode = (input) => {
      let encoded = input;
      if (encoded instanceof Uint8Array) {
        encoded = decoder.decode(encoded);
      }
      encoded = encoded.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
      try {
        return decodeBase64(encoded);
      } catch {
        throw new TypeError("The input to be decoded is not correctly encoded.");
      }
    };
  }
});

// node_modules/jose/dist/browser/util/errors.js
var JOSEError, JWTClaimValidationFailed, JWTExpired, JOSEAlgNotAllowed, JOSENotSupported, JWEDecryptionFailed, JWEInvalid, JWSInvalid, JWTInvalid, JWKInvalid, JWKSInvalid, JWKSNoMatchingKey, JWKSMultipleMatchingKeys, JWKSTimeout, JWSSignatureVerificationFailed;
var init_errors2 = __esm({
  "node_modules/jose/dist/browser/util/errors.js"() {
    JOSEError = class extends Error {
      constructor(message2, options2) {
        super(message2, options2);
        this.code = "ERR_JOSE_GENERIC";
        this.name = this.constructor.name;
        Error.captureStackTrace?.(this, this.constructor);
      }
    };
    JOSEError.code = "ERR_JOSE_GENERIC";
    JWTClaimValidationFailed = class extends JOSEError {
      constructor(message2, payload, claim = "unspecified", reason = "unspecified") {
        super(message2, { cause: { claim, reason, payload } });
        this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
      }
    };
    JWTClaimValidationFailed.code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
    JWTExpired = class extends JOSEError {
      constructor(message2, payload, claim = "unspecified", reason = "unspecified") {
        super(message2, { cause: { claim, reason, payload } });
        this.code = "ERR_JWT_EXPIRED";
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
      }
    };
    JWTExpired.code = "ERR_JWT_EXPIRED";
    JOSEAlgNotAllowed = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JOSE_ALG_NOT_ALLOWED";
      }
    };
    JOSEAlgNotAllowed.code = "ERR_JOSE_ALG_NOT_ALLOWED";
    JOSENotSupported = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JOSE_NOT_SUPPORTED";
      }
    };
    JOSENotSupported.code = "ERR_JOSE_NOT_SUPPORTED";
    JWEDecryptionFailed = class extends JOSEError {
      constructor(message2 = "decryption operation failed", options2) {
        super(message2, options2);
        this.code = "ERR_JWE_DECRYPTION_FAILED";
      }
    };
    JWEDecryptionFailed.code = "ERR_JWE_DECRYPTION_FAILED";
    JWEInvalid = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWE_INVALID";
      }
    };
    JWEInvalid.code = "ERR_JWE_INVALID";
    JWSInvalid = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWS_INVALID";
      }
    };
    JWSInvalid.code = "ERR_JWS_INVALID";
    JWTInvalid = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWT_INVALID";
      }
    };
    JWTInvalid.code = "ERR_JWT_INVALID";
    JWKInvalid = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWK_INVALID";
      }
    };
    JWKInvalid.code = "ERR_JWK_INVALID";
    JWKSInvalid = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWKS_INVALID";
      }
    };
    JWKSInvalid.code = "ERR_JWKS_INVALID";
    JWKSNoMatchingKey = class extends JOSEError {
      constructor(message2 = "no applicable key found in the JSON Web Key Set", options2) {
        super(message2, options2);
        this.code = "ERR_JWKS_NO_MATCHING_KEY";
      }
    };
    JWKSNoMatchingKey.code = "ERR_JWKS_NO_MATCHING_KEY";
    JWKSMultipleMatchingKeys = class extends JOSEError {
      constructor(message2 = "multiple matching keys found in the JSON Web Key Set", options2) {
        super(message2, options2);
        this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
      }
    };
    JWKSMultipleMatchingKeys.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
    JWKSTimeout = class extends JOSEError {
      constructor(message2 = "request timed out", options2) {
        super(message2, options2);
        this.code = "ERR_JWKS_TIMEOUT";
      }
    };
    JWKSTimeout.code = "ERR_JWKS_TIMEOUT";
    JWSSignatureVerificationFailed = class extends JOSEError {
      constructor(message2 = "signature verification failed", options2) {
        super(message2, options2);
        this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
      }
    };
    JWSSignatureVerificationFailed.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  }
});

// node_modules/jose/dist/browser/runtime/random.js
var random_default;
var init_random = __esm({
  "node_modules/jose/dist/browser/runtime/random.js"() {
    init_webcrypto();
    random_default = webcrypto_default.getRandomValues.bind(webcrypto_default);
  }
});

// node_modules/jose/dist/browser/lib/iv.js
function bitLength(alg2) {
  switch (alg2) {
    case "A128GCM":
    case "A128GCMKW":
    case "A192GCM":
    case "A192GCMKW":
    case "A256GCM":
    case "A256GCMKW":
      return 96;
    case "A128CBC-HS256":
    case "A192CBC-HS384":
    case "A256CBC-HS512":
      return 128;
    default:
      throw new JOSENotSupported(`Unsupported JWE Algorithm: ${alg2}`);
  }
}
var iv_default;
var init_iv = __esm({
  "node_modules/jose/dist/browser/lib/iv.js"() {
    init_errors2();
    init_random();
    iv_default = (alg2) => random_default(new Uint8Array(bitLength(alg2) >> 3));
  }
});

// node_modules/jose/dist/browser/lib/check_iv_length.js
var checkIvLength, check_iv_length_default;
var init_check_iv_length = __esm({
  "node_modules/jose/dist/browser/lib/check_iv_length.js"() {
    init_errors2();
    init_iv();
    checkIvLength = (enc2, iv) => {
      if (iv.length << 3 !== bitLength(enc2)) {
        throw new JWEInvalid("Invalid Initialization Vector length");
      }
    };
    check_iv_length_default = checkIvLength;
  }
});

// node_modules/jose/dist/browser/runtime/check_cek_length.js
var checkCekLength, check_cek_length_default;
var init_check_cek_length = __esm({
  "node_modules/jose/dist/browser/runtime/check_cek_length.js"() {
    init_errors2();
    checkCekLength = (cek, expected) => {
      const actual = cek.byteLength << 3;
      if (actual !== expected) {
        throw new JWEInvalid(`Invalid Content Encryption Key length. Expected ${expected} bits, got ${actual} bits`);
      }
    };
    check_cek_length_default = checkCekLength;
  }
});

// node_modules/jose/dist/browser/runtime/timing_safe_equal.js
var timingSafeEqual, timing_safe_equal_default;
var init_timing_safe_equal = __esm({
  "node_modules/jose/dist/browser/runtime/timing_safe_equal.js"() {
    timingSafeEqual = (a3, b2) => {
      if (!(a3 instanceof Uint8Array)) {
        throw new TypeError("First argument must be a buffer");
      }
      if (!(b2 instanceof Uint8Array)) {
        throw new TypeError("Second argument must be a buffer");
      }
      if (a3.length !== b2.length) {
        throw new TypeError("Input buffers must have the same length");
      }
      const len = a3.length;
      let out = 0;
      let i4 = -1;
      while (++i4 < len) {
        out |= a3[i4] ^ b2[i4];
      }
      return out === 0;
    };
    timing_safe_equal_default = timingSafeEqual;
  }
});

// node_modules/jose/dist/browser/lib/crypto_key.js
function unusable(name, prop = "algorithm.name") {
  return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
}
function isAlgorithm(algorithm, name) {
  return algorithm.name === name;
}
function getHashLength(hash2) {
  return parseInt(hash2.name.slice(4), 10);
}
function checkUsage(key2, usages) {
  if (usages.length && !usages.some((expected) => key2.usages.includes(expected))) {
    let msg = "CryptoKey does not support this operation, its usages must include ";
    if (usages.length > 2) {
      const last = usages.pop();
      msg += `one of ${usages.join(", ")}, or ${last}.`;
    } else if (usages.length === 2) {
      msg += `one of ${usages[0]} or ${usages[1]}.`;
    } else {
      msg += `${usages[0]}.`;
    }
    throw new TypeError(msg);
  }
}
function checkEncCryptoKey(key2, alg2, ...usages) {
  switch (alg2) {
    case "A128GCM":
    case "A192GCM":
    case "A256GCM": {
      if (!isAlgorithm(key2.algorithm, "AES-GCM"))
        throw unusable("AES-GCM");
      const expected = parseInt(alg2.slice(1, 4), 10);
      const actual = key2.algorithm.length;
      if (actual !== expected)
        throw unusable(expected, "algorithm.length");
      break;
    }
    case "A128KW":
    case "A192KW":
    case "A256KW": {
      if (!isAlgorithm(key2.algorithm, "AES-KW"))
        throw unusable("AES-KW");
      const expected = parseInt(alg2.slice(1, 4), 10);
      const actual = key2.algorithm.length;
      if (actual !== expected)
        throw unusable(expected, "algorithm.length");
      break;
    }
    case "ECDH": {
      switch (key2.algorithm.name) {
        case "ECDH":
        case "X25519":
        case "X448":
          break;
        default:
          throw unusable("ECDH, X25519, or X448");
      }
      break;
    }
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW":
      if (!isAlgorithm(key2.algorithm, "PBKDF2"))
        throw unusable("PBKDF2");
      break;
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512": {
      if (!isAlgorithm(key2.algorithm, "RSA-OAEP"))
        throw unusable("RSA-OAEP");
      const expected = parseInt(alg2.slice(9), 10) || 1;
      const actual = getHashLength(key2.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  checkUsage(key2, usages);
}
var init_crypto_key = __esm({
  "node_modules/jose/dist/browser/lib/crypto_key.js"() {
  }
});

// node_modules/jose/dist/browser/lib/invalid_key_input.js
function message(msg, actual, ...types2) {
  types2 = types2.filter(Boolean);
  if (types2.length > 2) {
    const last = types2.pop();
    msg += `one of type ${types2.join(", ")}, or ${last}.`;
  } else if (types2.length === 2) {
    msg += `one of type ${types2[0]} or ${types2[1]}.`;
  } else {
    msg += `of type ${types2[0]}.`;
  }
  if (actual == null) {
    msg += ` Received ${actual}`;
  } else if (typeof actual === "function" && actual.name) {
    msg += ` Received function ${actual.name}`;
  } else if (typeof actual === "object" && actual != null) {
    if (actual.constructor?.name) {
      msg += ` Received an instance of ${actual.constructor.name}`;
    }
  }
  return msg;
}
function withAlg(alg2, actual, ...types2) {
  return message(`Key for the ${alg2} algorithm must be `, actual, ...types2);
}
var invalid_key_input_default;
var init_invalid_key_input = __esm({
  "node_modules/jose/dist/browser/lib/invalid_key_input.js"() {
    invalid_key_input_default = (actual, ...types2) => {
      return message("Key must be ", actual, ...types2);
    };
  }
});

// node_modules/jose/dist/browser/runtime/is_key_like.js
var is_key_like_default, types;
var init_is_key_like = __esm({
  "node_modules/jose/dist/browser/runtime/is_key_like.js"() {
    init_webcrypto();
    is_key_like_default = (key2) => {
      if (isCryptoKey(key2)) {
        return true;
      }
      return key2?.[Symbol.toStringTag] === "KeyObject";
    };
    types = ["CryptoKey"];
  }
});

// node_modules/jose/dist/browser/runtime/decrypt.js
async function cbcDecrypt(enc2, cek, ciphertext, iv, tag2, aad) {
  if (!(cek instanceof Uint8Array)) {
    throw new TypeError(invalid_key_input_default(cek, "Uint8Array"));
  }
  const keySize = parseInt(enc2.slice(1, 4), 10);
  const encKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(keySize >> 3), "AES-CBC", false, ["decrypt"]);
  const macKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(0, keySize >> 3), {
    hash: `SHA-${keySize << 1}`,
    name: "HMAC"
  }, false, ["sign"]);
  const macData = concat(aad, iv, ciphertext, uint64be(aad.length << 3));
  const expectedTag = new Uint8Array((await webcrypto_default.subtle.sign("HMAC", macKey, macData)).slice(0, keySize >> 3));
  let macCheckPassed;
  try {
    macCheckPassed = timing_safe_equal_default(tag2, expectedTag);
  } catch {
  }
  if (!macCheckPassed) {
    throw new JWEDecryptionFailed();
  }
  let plaintext;
  try {
    plaintext = new Uint8Array(await webcrypto_default.subtle.decrypt({ iv, name: "AES-CBC" }, encKey, ciphertext));
  } catch {
  }
  if (!plaintext) {
    throw new JWEDecryptionFailed();
  }
  return plaintext;
}
async function gcmDecrypt(enc2, cek, ciphertext, iv, tag2, aad) {
  let encKey;
  if (cek instanceof Uint8Array) {
    encKey = await webcrypto_default.subtle.importKey("raw", cek, "AES-GCM", false, ["decrypt"]);
  } else {
    checkEncCryptoKey(cek, enc2, "decrypt");
    encKey = cek;
  }
  try {
    return new Uint8Array(await webcrypto_default.subtle.decrypt({
      additionalData: aad,
      iv,
      name: "AES-GCM",
      tagLength: 128
    }, encKey, concat(ciphertext, tag2)));
  } catch {
    throw new JWEDecryptionFailed();
  }
}
var decrypt, decrypt_default;
var init_decrypt = __esm({
  "node_modules/jose/dist/browser/runtime/decrypt.js"() {
    init_buffer_utils();
    init_check_iv_length();
    init_check_cek_length();
    init_timing_safe_equal();
    init_errors2();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
    decrypt = async (enc2, cek, ciphertext, iv, tag2, aad) => {
      if (!isCryptoKey(cek) && !(cek instanceof Uint8Array)) {
        throw new TypeError(invalid_key_input_default(cek, ...types, "Uint8Array"));
      }
      if (!iv) {
        throw new JWEInvalid("JWE Initialization Vector missing");
      }
      if (!tag2) {
        throw new JWEInvalid("JWE Authentication Tag missing");
      }
      check_iv_length_default(enc2, iv);
      switch (enc2) {
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          if (cek instanceof Uint8Array)
            check_cek_length_default(cek, parseInt(enc2.slice(-3), 10));
          return cbcDecrypt(enc2, cek, ciphertext, iv, tag2, aad);
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
          if (cek instanceof Uint8Array)
            check_cek_length_default(cek, parseInt(enc2.slice(1, 4), 10));
          return gcmDecrypt(enc2, cek, ciphertext, iv, tag2, aad);
        default:
          throw new JOSENotSupported("Unsupported JWE Content Encryption Algorithm");
      }
    };
    decrypt_default = decrypt;
  }
});

// node_modules/jose/dist/browser/lib/is_disjoint.js
var isDisjoint, is_disjoint_default;
var init_is_disjoint = __esm({
  "node_modules/jose/dist/browser/lib/is_disjoint.js"() {
    isDisjoint = (...headers2) => {
      const sources = headers2.filter(Boolean);
      if (sources.length === 0 || sources.length === 1) {
        return true;
      }
      let acc;
      for (const header of sources) {
        const parameters = Object.keys(header);
        if (!acc || acc.size === 0) {
          acc = new Set(parameters);
          continue;
        }
        for (const parameter of parameters) {
          if (acc.has(parameter)) {
            return false;
          }
          acc.add(parameter);
        }
      }
      return true;
    };
    is_disjoint_default = isDisjoint;
  }
});

// node_modules/jose/dist/browser/lib/is_object.js
function isObjectLike(value) {
  return typeof value === "object" && value !== null;
}
function isObject(input) {
  if (!isObjectLike(input) || Object.prototype.toString.call(input) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(input) === null) {
    return true;
  }
  let proto = input;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(input) === proto;
}
var init_is_object = __esm({
  "node_modules/jose/dist/browser/lib/is_object.js"() {
  }
});

// node_modules/jose/dist/browser/runtime/bogus.js
var bogusWebCrypto, bogus_default;
var init_bogus = __esm({
  "node_modules/jose/dist/browser/runtime/bogus.js"() {
    bogusWebCrypto = [
      { hash: "SHA-256", name: "HMAC" },
      true,
      ["sign"]
    ];
    bogus_default = bogusWebCrypto;
  }
});

// node_modules/jose/dist/browser/runtime/aeskw.js
function checkKeySize(key2, alg2) {
  if (key2.algorithm.length !== parseInt(alg2.slice(1, 4), 10)) {
    throw new TypeError(`Invalid key size for alg: ${alg2}`);
  }
}
function getCryptoKey(key2, alg2, usage) {
  if (isCryptoKey(key2)) {
    checkEncCryptoKey(key2, alg2, usage);
    return key2;
  }
  if (key2 instanceof Uint8Array) {
    return webcrypto_default.subtle.importKey("raw", key2, "AES-KW", true, [usage]);
  }
  throw new TypeError(invalid_key_input_default(key2, ...types, "Uint8Array"));
}
var wrap, unwrap;
var init_aeskw = __esm({
  "node_modules/jose/dist/browser/runtime/aeskw.js"() {
    init_bogus();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
    wrap = async (alg2, key2, cek) => {
      const cryptoKey = await getCryptoKey(key2, alg2, "wrapKey");
      checkKeySize(cryptoKey, alg2);
      const cryptoKeyCek = await webcrypto_default.subtle.importKey("raw", cek, ...bogus_default);
      return new Uint8Array(await webcrypto_default.subtle.wrapKey("raw", cryptoKeyCek, cryptoKey, "AES-KW"));
    };
    unwrap = async (alg2, key2, encryptedKey) => {
      const cryptoKey = await getCryptoKey(key2, alg2, "unwrapKey");
      checkKeySize(cryptoKey, alg2);
      const cryptoKeyCek = await webcrypto_default.subtle.unwrapKey("raw", encryptedKey, cryptoKey, "AES-KW", ...bogus_default);
      return new Uint8Array(await webcrypto_default.subtle.exportKey("raw", cryptoKeyCek));
    };
  }
});

// node_modules/jose/dist/browser/runtime/ecdhes.js
async function deriveKey(publicKey, privateKey, algorithm, keyLength, apu = new Uint8Array(0), apv = new Uint8Array(0)) {
  if (!isCryptoKey(publicKey)) {
    throw new TypeError(invalid_key_input_default(publicKey, ...types));
  }
  checkEncCryptoKey(publicKey, "ECDH");
  if (!isCryptoKey(privateKey)) {
    throw new TypeError(invalid_key_input_default(privateKey, ...types));
  }
  checkEncCryptoKey(privateKey, "ECDH", "deriveBits");
  const value = concat(lengthAndInput(encoder2.encode(algorithm)), lengthAndInput(apu), lengthAndInput(apv), uint32be(keyLength));
  let length;
  if (publicKey.algorithm.name === "X25519") {
    length = 256;
  } else if (publicKey.algorithm.name === "X448") {
    length = 448;
  } else {
    length = Math.ceil(parseInt(publicKey.algorithm.namedCurve.substr(-3), 10) / 8) << 3;
  }
  const sharedSecret = new Uint8Array(await webcrypto_default.subtle.deriveBits({
    name: publicKey.algorithm.name,
    public: publicKey
  }, privateKey, length));
  return concatKdf(sharedSecret, keyLength, value);
}
async function generateEpk(key2) {
  if (!isCryptoKey(key2)) {
    throw new TypeError(invalid_key_input_default(key2, ...types));
  }
  return webcrypto_default.subtle.generateKey(key2.algorithm, true, ["deriveBits"]);
}
function ecdhAllowed(key2) {
  if (!isCryptoKey(key2)) {
    throw new TypeError(invalid_key_input_default(key2, ...types));
  }
  return ["P-256", "P-384", "P-521"].includes(key2.algorithm.namedCurve) || key2.algorithm.name === "X25519" || key2.algorithm.name === "X448";
}
var init_ecdhes = __esm({
  "node_modules/jose/dist/browser/runtime/ecdhes.js"() {
    init_buffer_utils();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
  }
});

// node_modules/jose/dist/browser/lib/check_p2s.js
function checkP2s(p2s2) {
  if (!(p2s2 instanceof Uint8Array) || p2s2.length < 8) {
    throw new JWEInvalid("PBES2 Salt Input must be 8 or more octets");
  }
}
var init_check_p2s = __esm({
  "node_modules/jose/dist/browser/lib/check_p2s.js"() {
    init_errors2();
  }
});

// node_modules/jose/dist/browser/runtime/pbes2kw.js
function getCryptoKey2(key2, alg2) {
  if (key2 instanceof Uint8Array) {
    return webcrypto_default.subtle.importKey("raw", key2, "PBKDF2", false, ["deriveBits"]);
  }
  if (isCryptoKey(key2)) {
    checkEncCryptoKey(key2, alg2, "deriveBits", "deriveKey");
    return key2;
  }
  throw new TypeError(invalid_key_input_default(key2, ...types, "Uint8Array"));
}
async function deriveKey2(p2s2, alg2, p2c, key2) {
  checkP2s(p2s2);
  const salt = p2s(alg2, p2s2);
  const keylen = parseInt(alg2.slice(13, 16), 10);
  const subtleAlg = {
    hash: `SHA-${alg2.slice(8, 11)}`,
    iterations: p2c,
    name: "PBKDF2",
    salt
  };
  const wrapAlg = {
    length: keylen,
    name: "AES-KW"
  };
  const cryptoKey = await getCryptoKey2(key2, alg2);
  if (cryptoKey.usages.includes("deriveBits")) {
    return new Uint8Array(await webcrypto_default.subtle.deriveBits(subtleAlg, cryptoKey, keylen));
  }
  if (cryptoKey.usages.includes("deriveKey")) {
    return webcrypto_default.subtle.deriveKey(subtleAlg, cryptoKey, wrapAlg, false, ["wrapKey", "unwrapKey"]);
  }
  throw new TypeError('PBKDF2 key "usages" must include "deriveBits" or "deriveKey"');
}
var encrypt, decrypt2;
var init_pbes2kw = __esm({
  "node_modules/jose/dist/browser/runtime/pbes2kw.js"() {
    init_random();
    init_buffer_utils();
    init_base64url();
    init_aeskw();
    init_check_p2s();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
    encrypt = async (alg2, key2, cek, p2c = 2048, p2s2 = random_default(new Uint8Array(16))) => {
      const derived = await deriveKey2(p2s2, alg2, p2c, key2);
      const encryptedKey = await wrap(alg2.slice(-6), derived, cek);
      return { encryptedKey, p2c, p2s: encode(p2s2) };
    };
    decrypt2 = async (alg2, key2, encryptedKey, p2c, p2s2) => {
      const derived = await deriveKey2(p2s2, alg2, p2c, key2);
      return unwrap(alg2.slice(-6), derived, encryptedKey);
    };
  }
});

// node_modules/jose/dist/browser/runtime/subtle_rsaes.js
function subtleRsaEs(alg2) {
  switch (alg2) {
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512":
      return "RSA-OAEP";
    default:
      throw new JOSENotSupported(`alg ${alg2} is not supported either by JOSE or your javascript runtime`);
  }
}
var init_subtle_rsaes = __esm({
  "node_modules/jose/dist/browser/runtime/subtle_rsaes.js"() {
    init_errors2();
  }
});

// node_modules/jose/dist/browser/runtime/check_key_length.js
var check_key_length_default;
var init_check_key_length = __esm({
  "node_modules/jose/dist/browser/runtime/check_key_length.js"() {
    check_key_length_default = (alg2, key2) => {
      if (alg2.startsWith("RS") || alg2.startsWith("PS")) {
        const { modulusLength } = key2.algorithm;
        if (typeof modulusLength !== "number" || modulusLength < 2048) {
          throw new TypeError(`${alg2} requires key modulusLength to be 2048 bits or larger`);
        }
      }
    };
  }
});

// node_modules/jose/dist/browser/runtime/rsaes.js
var encrypt2, decrypt3;
var init_rsaes = __esm({
  "node_modules/jose/dist/browser/runtime/rsaes.js"() {
    init_subtle_rsaes();
    init_bogus();
    init_webcrypto();
    init_crypto_key();
    init_check_key_length();
    init_invalid_key_input();
    init_is_key_like();
    encrypt2 = async (alg2, key2, cek) => {
      if (!isCryptoKey(key2)) {
        throw new TypeError(invalid_key_input_default(key2, ...types));
      }
      checkEncCryptoKey(key2, alg2, "encrypt", "wrapKey");
      check_key_length_default(alg2, key2);
      if (key2.usages.includes("encrypt")) {
        return new Uint8Array(await webcrypto_default.subtle.encrypt(subtleRsaEs(alg2), key2, cek));
      }
      if (key2.usages.includes("wrapKey")) {
        const cryptoKeyCek = await webcrypto_default.subtle.importKey("raw", cek, ...bogus_default);
        return new Uint8Array(await webcrypto_default.subtle.wrapKey("raw", cryptoKeyCek, key2, subtleRsaEs(alg2)));
      }
      throw new TypeError('RSA-OAEP key "usages" must include "encrypt" or "wrapKey" for this operation');
    };
    decrypt3 = async (alg2, key2, encryptedKey) => {
      if (!isCryptoKey(key2)) {
        throw new TypeError(invalid_key_input_default(key2, ...types));
      }
      checkEncCryptoKey(key2, alg2, "decrypt", "unwrapKey");
      check_key_length_default(alg2, key2);
      if (key2.usages.includes("decrypt")) {
        return new Uint8Array(await webcrypto_default.subtle.decrypt(subtleRsaEs(alg2), key2, encryptedKey));
      }
      if (key2.usages.includes("unwrapKey")) {
        const cryptoKeyCek = await webcrypto_default.subtle.unwrapKey("raw", encryptedKey, key2, subtleRsaEs(alg2), ...bogus_default);
        return new Uint8Array(await webcrypto_default.subtle.exportKey("raw", cryptoKeyCek));
      }
      throw new TypeError('RSA-OAEP key "usages" must include "decrypt" or "unwrapKey" for this operation');
    };
  }
});

// node_modules/jose/dist/browser/lib/is_jwk.js
function isJWK(key2) {
  return isObject(key2) && typeof key2.kty === "string";
}
function isPrivateJWK(key2) {
  return key2.kty !== "oct" && typeof key2.d === "string";
}
function isPublicJWK(key2) {
  return key2.kty !== "oct" && typeof key2.d === "undefined";
}
function isSecretJWK(key2) {
  return isJWK(key2) && key2.kty === "oct" && typeof key2.k === "string";
}
var init_is_jwk = __esm({
  "node_modules/jose/dist/browser/lib/is_jwk.js"() {
    init_is_object();
  }
});

// node_modules/jose/dist/browser/runtime/jwk_to_key.js
function subtleMapping(jwk) {
  let algorithm;
  let keyUsages;
  switch (jwk.kty) {
    case "RSA": {
      switch (jwk.alg) {
        case "PS256":
        case "PS384":
        case "PS512":
          algorithm = { name: "RSA-PSS", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RS256":
        case "RS384":
        case "RS512":
          algorithm = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          algorithm = {
            name: "RSA-OAEP",
            hash: `SHA-${parseInt(jwk.alg.slice(-3), 10) || 1}`
          };
          keyUsages = jwk.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "EC": {
      switch (jwk.alg) {
        case "ES256":
          algorithm = { name: "ECDSA", namedCurve: "P-256" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES384":
          algorithm = { name: "ECDSA", namedCurve: "P-384" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES512":
          algorithm = { name: "ECDSA", namedCurve: "P-521" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: "ECDH", namedCurve: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "OKP": {
      switch (jwk.alg) {
        case "EdDSA":
          algorithm = { name: jwk.crv };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    default:
      throw new JOSENotSupported('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
  }
  return { algorithm, keyUsages };
}
var parse, jwk_to_key_default;
var init_jwk_to_key = __esm({
  "node_modules/jose/dist/browser/runtime/jwk_to_key.js"() {
    init_webcrypto();
    init_errors2();
    parse = async (jwk) => {
      if (!jwk.alg) {
        throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
      }
      const { algorithm, keyUsages } = subtleMapping(jwk);
      const rest = [
        algorithm,
        jwk.ext ?? false,
        jwk.key_ops ?? keyUsages
      ];
      const keyData = { ...jwk };
      delete keyData.alg;
      delete keyData.use;
      return webcrypto_default.subtle.importKey("jwk", keyData, ...rest);
    };
    jwk_to_key_default = parse;
  }
});

// node_modules/jose/dist/browser/runtime/normalize_key.js
var exportKeyValue, privCache, pubCache, isKeyObject, importAndCache, normalizePublicKey, normalizePrivateKey, normalize_key_default;
var init_normalize_key = __esm({
  "node_modules/jose/dist/browser/runtime/normalize_key.js"() {
    init_is_jwk();
    init_base64url();
    init_jwk_to_key();
    exportKeyValue = (k3) => decode(k3);
    isKeyObject = (key2) => {
      return key2?.[Symbol.toStringTag] === "KeyObject";
    };
    importAndCache = async (cache, key2, jwk, alg2, freeze = false) => {
      let cached = cache.get(key2);
      if (cached?.[alg2]) {
        return cached[alg2];
      }
      const cryptoKey = await jwk_to_key_default({ ...jwk, alg: alg2 });
      if (freeze)
        Object.freeze(key2);
      if (!cached) {
        cache.set(key2, { [alg2]: cryptoKey });
      } else {
        cached[alg2] = cryptoKey;
      }
      return cryptoKey;
    };
    normalizePublicKey = (key2, alg2) => {
      if (isKeyObject(key2)) {
        let jwk = key2.export({ format: "jwk" });
        delete jwk.d;
        delete jwk.dp;
        delete jwk.dq;
        delete jwk.p;
        delete jwk.q;
        delete jwk.qi;
        if (jwk.k) {
          return exportKeyValue(jwk.k);
        }
        pubCache || (pubCache = /* @__PURE__ */ new WeakMap());
        return importAndCache(pubCache, key2, jwk, alg2);
      }
      if (isJWK(key2)) {
        if (key2.k)
          return decode(key2.k);
        pubCache || (pubCache = /* @__PURE__ */ new WeakMap());
        const cryptoKey = importAndCache(pubCache, key2, key2, alg2, true);
        return cryptoKey;
      }
      return key2;
    };
    normalizePrivateKey = (key2, alg2) => {
      if (isKeyObject(key2)) {
        let jwk = key2.export({ format: "jwk" });
        if (jwk.k) {
          return exportKeyValue(jwk.k);
        }
        privCache || (privCache = /* @__PURE__ */ new WeakMap());
        return importAndCache(privCache, key2, jwk, alg2);
      }
      if (isJWK(key2)) {
        if (key2.k)
          return decode(key2.k);
        privCache || (privCache = /* @__PURE__ */ new WeakMap());
        const cryptoKey = importAndCache(privCache, key2, key2, alg2, true);
        return cryptoKey;
      }
      return key2;
    };
    normalize_key_default = { normalizePublicKey, normalizePrivateKey };
  }
});

// node_modules/jose/dist/browser/lib/cek.js
function bitLength2(alg2) {
  switch (alg2) {
    case "A128GCM":
      return 128;
    case "A192GCM":
      return 192;
    case "A256GCM":
    case "A128CBC-HS256":
      return 256;
    case "A192CBC-HS384":
      return 384;
    case "A256CBC-HS512":
      return 512;
    default:
      throw new JOSENotSupported(`Unsupported JWE Algorithm: ${alg2}`);
  }
}
var cek_default;
var init_cek = __esm({
  "node_modules/jose/dist/browser/lib/cek.js"() {
    init_errors2();
    init_random();
    cek_default = (alg2) => random_default(new Uint8Array(bitLength2(alg2) >> 3));
  }
});

// node_modules/jose/dist/browser/key/import.js
async function importJWK(jwk, alg2) {
  if (!isObject(jwk)) {
    throw new TypeError("JWK must be an object");
  }
  alg2 || (alg2 = jwk.alg);
  switch (jwk.kty) {
    case "oct":
      if (typeof jwk.k !== "string" || !jwk.k) {
        throw new TypeError('missing "k" (Key Value) Parameter value');
      }
      return decode(jwk.k);
    case "RSA":
      if (jwk.oth !== void 0) {
        throw new JOSENotSupported('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
      }
    case "EC":
    case "OKP":
      return jwk_to_key_default({ ...jwk, alg: alg2 });
    default:
      throw new JOSENotSupported('Unsupported "kty" (Key Type) Parameter value');
  }
}
var init_import = __esm({
  "node_modules/jose/dist/browser/key/import.js"() {
    init_base64url();
    init_jwk_to_key();
    init_errors2();
    init_is_object();
  }
});

// node_modules/jose/dist/browser/lib/check_key_type.js
function checkKeyType(allowJwk, alg2, key2, usage) {
  const symmetric = alg2.startsWith("HS") || alg2 === "dir" || alg2.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(alg2);
  if (symmetric) {
    symmetricTypeCheck(alg2, key2, usage, allowJwk);
  } else {
    asymmetricTypeCheck(alg2, key2, usage, allowJwk);
  }
}
var tag, jwkMatchesOp, symmetricTypeCheck, asymmetricTypeCheck, check_key_type_default, checkKeyTypeWithJwk;
var init_check_key_type = __esm({
  "node_modules/jose/dist/browser/lib/check_key_type.js"() {
    init_invalid_key_input();
    init_is_key_like();
    init_is_jwk();
    tag = (key2) => key2?.[Symbol.toStringTag];
    jwkMatchesOp = (alg2, key2, usage) => {
      if (key2.use !== void 0 && key2.use !== "sig") {
        throw new TypeError("Invalid key for this operation, when present its use must be sig");
      }
      if (key2.key_ops !== void 0 && key2.key_ops.includes?.(usage) !== true) {
        throw new TypeError(`Invalid key for this operation, when present its key_ops must include ${usage}`);
      }
      if (key2.alg !== void 0 && key2.alg !== alg2) {
        throw new TypeError(`Invalid key for this operation, when present its alg must be ${alg2}`);
      }
      return true;
    };
    symmetricTypeCheck = (alg2, key2, usage, allowJwk) => {
      if (key2 instanceof Uint8Array)
        return;
      if (allowJwk && isJWK(key2)) {
        if (isSecretJWK(key2) && jwkMatchesOp(alg2, key2, usage))
          return;
        throw new TypeError(`JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present`);
      }
      if (!is_key_like_default(key2)) {
        throw new TypeError(withAlg(alg2, key2, ...types, "Uint8Array", allowJwk ? "JSON Web Key" : null));
      }
      if (key2.type !== "secret") {
        throw new TypeError(`${tag(key2)} instances for symmetric algorithms must be of type "secret"`);
      }
    };
    asymmetricTypeCheck = (alg2, key2, usage, allowJwk) => {
      if (allowJwk && isJWK(key2)) {
        switch (usage) {
          case "sign":
            if (isPrivateJWK(key2) && jwkMatchesOp(alg2, key2, usage))
              return;
            throw new TypeError(`JSON Web Key for this operation be a private JWK`);
          case "verify":
            if (isPublicJWK(key2) && jwkMatchesOp(alg2, key2, usage))
              return;
            throw new TypeError(`JSON Web Key for this operation be a public JWK`);
        }
      }
      if (!is_key_like_default(key2)) {
        throw new TypeError(withAlg(alg2, key2, ...types, allowJwk ? "JSON Web Key" : null));
      }
      if (key2.type === "secret") {
        throw new TypeError(`${tag(key2)} instances for asymmetric algorithms must not be of type "secret"`);
      }
      if (usage === "sign" && key2.type === "public") {
        throw new TypeError(`${tag(key2)} instances for asymmetric algorithm signing must be of type "private"`);
      }
      if (usage === "decrypt" && key2.type === "public") {
        throw new TypeError(`${tag(key2)} instances for asymmetric algorithm decryption must be of type "private"`);
      }
      if (key2.algorithm && usage === "verify" && key2.type === "private") {
        throw new TypeError(`${tag(key2)} instances for asymmetric algorithm verifying must be of type "public"`);
      }
      if (key2.algorithm && usage === "encrypt" && key2.type === "private") {
        throw new TypeError(`${tag(key2)} instances for asymmetric algorithm encryption must be of type "public"`);
      }
    };
    check_key_type_default = checkKeyType.bind(void 0, false);
    checkKeyTypeWithJwk = checkKeyType.bind(void 0, true);
  }
});

// node_modules/jose/dist/browser/runtime/encrypt.js
async function cbcEncrypt(enc2, plaintext, cek, iv, aad) {
  if (!(cek instanceof Uint8Array)) {
    throw new TypeError(invalid_key_input_default(cek, "Uint8Array"));
  }
  const keySize = parseInt(enc2.slice(1, 4), 10);
  const encKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(keySize >> 3), "AES-CBC", false, ["encrypt"]);
  const macKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(0, keySize >> 3), {
    hash: `SHA-${keySize << 1}`,
    name: "HMAC"
  }, false, ["sign"]);
  const ciphertext = new Uint8Array(await webcrypto_default.subtle.encrypt({
    iv,
    name: "AES-CBC"
  }, encKey, plaintext));
  const macData = concat(aad, iv, ciphertext, uint64be(aad.length << 3));
  const tag2 = new Uint8Array((await webcrypto_default.subtle.sign("HMAC", macKey, macData)).slice(0, keySize >> 3));
  return { ciphertext, tag: tag2, iv };
}
async function gcmEncrypt(enc2, plaintext, cek, iv, aad) {
  let encKey;
  if (cek instanceof Uint8Array) {
    encKey = await webcrypto_default.subtle.importKey("raw", cek, "AES-GCM", false, ["encrypt"]);
  } else {
    checkEncCryptoKey(cek, enc2, "encrypt");
    encKey = cek;
  }
  const encrypted = new Uint8Array(await webcrypto_default.subtle.encrypt({
    additionalData: aad,
    iv,
    name: "AES-GCM",
    tagLength: 128
  }, encKey, plaintext));
  const tag2 = encrypted.slice(-16);
  const ciphertext = encrypted.slice(0, -16);
  return { ciphertext, tag: tag2, iv };
}
var encrypt3, encrypt_default;
var init_encrypt = __esm({
  "node_modules/jose/dist/browser/runtime/encrypt.js"() {
    init_buffer_utils();
    init_check_iv_length();
    init_check_cek_length();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_iv();
    init_errors2();
    init_is_key_like();
    encrypt3 = async (enc2, plaintext, cek, iv, aad) => {
      if (!isCryptoKey(cek) && !(cek instanceof Uint8Array)) {
        throw new TypeError(invalid_key_input_default(cek, ...types, "Uint8Array"));
      }
      if (iv) {
        check_iv_length_default(enc2, iv);
      } else {
        iv = iv_default(enc2);
      }
      switch (enc2) {
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          if (cek instanceof Uint8Array) {
            check_cek_length_default(cek, parseInt(enc2.slice(-3), 10));
          }
          return cbcEncrypt(enc2, plaintext, cek, iv, aad);
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
          if (cek instanceof Uint8Array) {
            check_cek_length_default(cek, parseInt(enc2.slice(1, 4), 10));
          }
          return gcmEncrypt(enc2, plaintext, cek, iv, aad);
        default:
          throw new JOSENotSupported("Unsupported JWE Content Encryption Algorithm");
      }
    };
    encrypt_default = encrypt3;
  }
});

// node_modules/jose/dist/browser/lib/aesgcmkw.js
async function wrap2(alg2, key2, cek, iv) {
  const jweAlgorithm = alg2.slice(0, 7);
  const wrapped = await encrypt_default(jweAlgorithm, cek, key2, iv, new Uint8Array(0));
  return {
    encryptedKey: wrapped.ciphertext,
    iv: encode(wrapped.iv),
    tag: encode(wrapped.tag)
  };
}
async function unwrap2(alg2, key2, encryptedKey, iv, tag2) {
  const jweAlgorithm = alg2.slice(0, 7);
  return decrypt_default(jweAlgorithm, key2, encryptedKey, iv, tag2, new Uint8Array(0));
}
var init_aesgcmkw = __esm({
  "node_modules/jose/dist/browser/lib/aesgcmkw.js"() {
    init_encrypt();
    init_decrypt();
    init_base64url();
  }
});

// node_modules/jose/dist/browser/lib/decrypt_key_management.js
async function decryptKeyManagement(alg2, key2, encryptedKey, joseHeader, options2) {
  check_key_type_default(alg2, key2, "decrypt");
  key2 = await normalize_key_default.normalizePrivateKey?.(key2, alg2) || key2;
  switch (alg2) {
    case "dir": {
      if (encryptedKey !== void 0)
        throw new JWEInvalid("Encountered unexpected JWE Encrypted Key");
      return key2;
    }
    case "ECDH-ES":
      if (encryptedKey !== void 0)
        throw new JWEInvalid("Encountered unexpected JWE Encrypted Key");
    case "ECDH-ES+A128KW":
    case "ECDH-ES+A192KW":
    case "ECDH-ES+A256KW": {
      if (!isObject(joseHeader.epk))
        throw new JWEInvalid(`JOSE Header "epk" (Ephemeral Public Key) missing or invalid`);
      if (!ecdhAllowed(key2))
        throw new JOSENotSupported("ECDH with the provided key is not allowed or not supported by your javascript runtime");
      const epk = await importJWK(joseHeader.epk, alg2);
      let partyUInfo;
      let partyVInfo;
      if (joseHeader.apu !== void 0) {
        if (typeof joseHeader.apu !== "string")
          throw new JWEInvalid(`JOSE Header "apu" (Agreement PartyUInfo) invalid`);
        try {
          partyUInfo = decode(joseHeader.apu);
        } catch {
          throw new JWEInvalid("Failed to base64url decode the apu");
        }
      }
      if (joseHeader.apv !== void 0) {
        if (typeof joseHeader.apv !== "string")
          throw new JWEInvalid(`JOSE Header "apv" (Agreement PartyVInfo) invalid`);
        try {
          partyVInfo = decode(joseHeader.apv);
        } catch {
          throw new JWEInvalid("Failed to base64url decode the apv");
        }
      }
      const sharedSecret = await deriveKey(epk, key2, alg2 === "ECDH-ES" ? joseHeader.enc : alg2, alg2 === "ECDH-ES" ? bitLength2(joseHeader.enc) : parseInt(alg2.slice(-5, -2), 10), partyUInfo, partyVInfo);
      if (alg2 === "ECDH-ES")
        return sharedSecret;
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      return unwrap(alg2.slice(-6), sharedSecret, encryptedKey);
    }
    case "RSA1_5":
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      return decrypt3(alg2, key2, encryptedKey);
    }
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      if (typeof joseHeader.p2c !== "number")
        throw new JWEInvalid(`JOSE Header "p2c" (PBES2 Count) missing or invalid`);
      const p2cLimit = options2?.maxPBES2Count || 1e4;
      if (joseHeader.p2c > p2cLimit)
        throw new JWEInvalid(`JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds`);
      if (typeof joseHeader.p2s !== "string")
        throw new JWEInvalid(`JOSE Header "p2s" (PBES2 Salt) missing or invalid`);
      let p2s2;
      try {
        p2s2 = decode(joseHeader.p2s);
      } catch {
        throw new JWEInvalid("Failed to base64url decode the p2s");
      }
      return decrypt2(alg2, key2, encryptedKey, joseHeader.p2c, p2s2);
    }
    case "A128KW":
    case "A192KW":
    case "A256KW": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      return unwrap(alg2, key2, encryptedKey);
    }
    case "A128GCMKW":
    case "A192GCMKW":
    case "A256GCMKW": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      if (typeof joseHeader.iv !== "string")
        throw new JWEInvalid(`JOSE Header "iv" (Initialization Vector) missing or invalid`);
      if (typeof joseHeader.tag !== "string")
        throw new JWEInvalid(`JOSE Header "tag" (Authentication Tag) missing or invalid`);
      let iv;
      try {
        iv = decode(joseHeader.iv);
      } catch {
        throw new JWEInvalid("Failed to base64url decode the iv");
      }
      let tag2;
      try {
        tag2 = decode(joseHeader.tag);
      } catch {
        throw new JWEInvalid("Failed to base64url decode the tag");
      }
      return unwrap2(alg2, key2, encryptedKey, iv, tag2);
    }
    default: {
      throw new JOSENotSupported('Invalid or unsupported "alg" (JWE Algorithm) header value');
    }
  }
}
var decrypt_key_management_default;
var init_decrypt_key_management = __esm({
  "node_modules/jose/dist/browser/lib/decrypt_key_management.js"() {
    init_aeskw();
    init_ecdhes();
    init_pbes2kw();
    init_rsaes();
    init_base64url();
    init_normalize_key();
    init_errors2();
    init_cek();
    init_import();
    init_check_key_type();
    init_is_object();
    init_aesgcmkw();
    decrypt_key_management_default = decryptKeyManagement;
  }
});

// node_modules/jose/dist/browser/lib/validate_crit.js
function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
  if (joseHeader.crit !== void 0 && protectedHeader?.crit === void 0) {
    throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
  }
  if (!protectedHeader || protectedHeader.crit === void 0) {
    return /* @__PURE__ */ new Set();
  }
  if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input) => typeof input !== "string" || input.length === 0)) {
    throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
  }
  let recognized;
  if (recognizedOption !== void 0) {
    recognized = new Map([...Object.entries(recognizedOption), ...recognizedDefault.entries()]);
  } else {
    recognized = recognizedDefault;
  }
  for (const parameter of protectedHeader.crit) {
    if (!recognized.has(parameter)) {
      throw new JOSENotSupported(`Extension Header Parameter "${parameter}" is not recognized`);
    }
    if (joseHeader[parameter] === void 0) {
      throw new Err(`Extension Header Parameter "${parameter}" is missing`);
    }
    if (recognized.get(parameter) && protectedHeader[parameter] === void 0) {
      throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
    }
  }
  return new Set(protectedHeader.crit);
}
var validate_crit_default;
var init_validate_crit = __esm({
  "node_modules/jose/dist/browser/lib/validate_crit.js"() {
    init_errors2();
    validate_crit_default = validateCrit;
  }
});

// node_modules/jose/dist/browser/lib/validate_algorithms.js
var validateAlgorithms, validate_algorithms_default;
var init_validate_algorithms = __esm({
  "node_modules/jose/dist/browser/lib/validate_algorithms.js"() {
    validateAlgorithms = (option, algorithms) => {
      if (algorithms !== void 0 && (!Array.isArray(algorithms) || algorithms.some((s4) => typeof s4 !== "string"))) {
        throw new TypeError(`"${option}" option must be an array of strings`);
      }
      if (!algorithms) {
        return void 0;
      }
      return new Set(algorithms);
    };
    validate_algorithms_default = validateAlgorithms;
  }
});

// node_modules/jose/dist/browser/jwe/flattened/decrypt.js
async function flattenedDecrypt(jwe, key2, options2) {
  if (!isObject(jwe)) {
    throw new JWEInvalid("Flattened JWE must be an object");
  }
  if (jwe.protected === void 0 && jwe.header === void 0 && jwe.unprotected === void 0) {
    throw new JWEInvalid("JOSE Header missing");
  }
  if (jwe.iv !== void 0 && typeof jwe.iv !== "string") {
    throw new JWEInvalid("JWE Initialization Vector incorrect type");
  }
  if (typeof jwe.ciphertext !== "string") {
    throw new JWEInvalid("JWE Ciphertext missing or incorrect type");
  }
  if (jwe.tag !== void 0 && typeof jwe.tag !== "string") {
    throw new JWEInvalid("JWE Authentication Tag incorrect type");
  }
  if (jwe.protected !== void 0 && typeof jwe.protected !== "string") {
    throw new JWEInvalid("JWE Protected Header incorrect type");
  }
  if (jwe.encrypted_key !== void 0 && typeof jwe.encrypted_key !== "string") {
    throw new JWEInvalid("JWE Encrypted Key incorrect type");
  }
  if (jwe.aad !== void 0 && typeof jwe.aad !== "string") {
    throw new JWEInvalid("JWE AAD incorrect type");
  }
  if (jwe.header !== void 0 && !isObject(jwe.header)) {
    throw new JWEInvalid("JWE Shared Unprotected Header incorrect type");
  }
  if (jwe.unprotected !== void 0 && !isObject(jwe.unprotected)) {
    throw new JWEInvalid("JWE Per-Recipient Unprotected Header incorrect type");
  }
  let parsedProt;
  if (jwe.protected) {
    try {
      const protectedHeader2 = decode(jwe.protected);
      parsedProt = JSON.parse(decoder.decode(protectedHeader2));
    } catch {
      throw new JWEInvalid("JWE Protected Header is invalid");
    }
  }
  if (!is_disjoint_default(parsedProt, jwe.header, jwe.unprotected)) {
    throw new JWEInvalid("JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint");
  }
  const joseHeader = {
    ...parsedProt,
    ...jwe.header,
    ...jwe.unprotected
  };
  validate_crit_default(JWEInvalid, /* @__PURE__ */ new Map(), options2?.crit, parsedProt, joseHeader);
  if (joseHeader.zip !== void 0) {
    throw new JOSENotSupported('JWE "zip" (Compression Algorithm) Header Parameter is not supported.');
  }
  const { alg: alg2, enc: enc2 } = joseHeader;
  if (typeof alg2 !== "string" || !alg2) {
    throw new JWEInvalid("missing JWE Algorithm (alg) in JWE Header");
  }
  if (typeof enc2 !== "string" || !enc2) {
    throw new JWEInvalid("missing JWE Encryption Algorithm (enc) in JWE Header");
  }
  const keyManagementAlgorithms = options2 && validate_algorithms_default("keyManagementAlgorithms", options2.keyManagementAlgorithms);
  const contentEncryptionAlgorithms = options2 && validate_algorithms_default("contentEncryptionAlgorithms", options2.contentEncryptionAlgorithms);
  if (keyManagementAlgorithms && !keyManagementAlgorithms.has(alg2) || !keyManagementAlgorithms && alg2.startsWith("PBES2")) {
    throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter value not allowed');
  }
  if (contentEncryptionAlgorithms && !contentEncryptionAlgorithms.has(enc2)) {
    throw new JOSEAlgNotAllowed('"enc" (Encryption Algorithm) Header Parameter value not allowed');
  }
  let encryptedKey;
  if (jwe.encrypted_key !== void 0) {
    try {
      encryptedKey = decode(jwe.encrypted_key);
    } catch {
      throw new JWEInvalid("Failed to base64url decode the encrypted_key");
    }
  }
  let resolvedKey = false;
  if (typeof key2 === "function") {
    key2 = await key2(parsedProt, jwe);
    resolvedKey = true;
  }
  let cek;
  try {
    cek = await decrypt_key_management_default(alg2, key2, encryptedKey, joseHeader, options2);
  } catch (err) {
    if (err instanceof TypeError || err instanceof JWEInvalid || err instanceof JOSENotSupported) {
      throw err;
    }
    cek = cek_default(enc2);
  }
  let iv;
  let tag2;
  if (jwe.iv !== void 0) {
    try {
      iv = decode(jwe.iv);
    } catch {
      throw new JWEInvalid("Failed to base64url decode the iv");
    }
  }
  if (jwe.tag !== void 0) {
    try {
      tag2 = decode(jwe.tag);
    } catch {
      throw new JWEInvalid("Failed to base64url decode the tag");
    }
  }
  const protectedHeader = encoder2.encode(jwe.protected ?? "");
  let additionalData;
  if (jwe.aad !== void 0) {
    additionalData = concat(protectedHeader, encoder2.encode("."), encoder2.encode(jwe.aad));
  } else {
    additionalData = protectedHeader;
  }
  let ciphertext;
  try {
    ciphertext = decode(jwe.ciphertext);
  } catch {
    throw new JWEInvalid("Failed to base64url decode the ciphertext");
  }
  const plaintext = await decrypt_default(enc2, cek, ciphertext, iv, tag2, additionalData);
  const result = { plaintext };
  if (jwe.protected !== void 0) {
    result.protectedHeader = parsedProt;
  }
  if (jwe.aad !== void 0) {
    try {
      result.additionalAuthenticatedData = decode(jwe.aad);
    } catch {
      throw new JWEInvalid("Failed to base64url decode the aad");
    }
  }
  if (jwe.unprotected !== void 0) {
    result.sharedUnprotectedHeader = jwe.unprotected;
  }
  if (jwe.header !== void 0) {
    result.unprotectedHeader = jwe.header;
  }
  if (resolvedKey) {
    return { ...result, key: key2 };
  }
  return result;
}
var init_decrypt2 = __esm({
  "node_modules/jose/dist/browser/jwe/flattened/decrypt.js"() {
    init_base64url();
    init_decrypt();
    init_errors2();
    init_is_disjoint();
    init_is_object();
    init_decrypt_key_management();
    init_buffer_utils();
    init_cek();
    init_validate_crit();
    init_validate_algorithms();
  }
});

// node_modules/jose/dist/browser/jwe/compact/decrypt.js
async function compactDecrypt(jwe, key2, options2) {
  if (jwe instanceof Uint8Array) {
    jwe = decoder.decode(jwe);
  }
  if (typeof jwe !== "string") {
    throw new JWEInvalid("Compact JWE must be a string or Uint8Array");
  }
  const { 0: protectedHeader, 1: encryptedKey, 2: iv, 3: ciphertext, 4: tag2, length } = jwe.split(".");
  if (length !== 5) {
    throw new JWEInvalid("Invalid Compact JWE");
  }
  const decrypted = await flattenedDecrypt({
    ciphertext,
    iv: iv || void 0,
    protected: protectedHeader,
    tag: tag2 || void 0,
    encrypted_key: encryptedKey || void 0
  }, key2, options2);
  const result = { plaintext: decrypted.plaintext, protectedHeader: decrypted.protectedHeader };
  if (typeof key2 === "function") {
    return { ...result, key: decrypted.key };
  }
  return result;
}
var init_decrypt3 = __esm({
  "node_modules/jose/dist/browser/jwe/compact/decrypt.js"() {
    init_decrypt2();
    init_errors2();
    init_buffer_utils();
  }
});

// node_modules/jose/dist/browser/lib/private_symbols.js
var unprotected;
var init_private_symbols = __esm({
  "node_modules/jose/dist/browser/lib/private_symbols.js"() {
    unprotected = Symbol();
  }
});

// node_modules/jose/dist/browser/runtime/key_to_jwk.js
var keyToJWK, key_to_jwk_default;
var init_key_to_jwk = __esm({
  "node_modules/jose/dist/browser/runtime/key_to_jwk.js"() {
    init_webcrypto();
    init_invalid_key_input();
    init_base64url();
    init_is_key_like();
    keyToJWK = async (key2) => {
      if (key2 instanceof Uint8Array) {
        return {
          kty: "oct",
          k: encode(key2)
        };
      }
      if (!isCryptoKey(key2)) {
        throw new TypeError(invalid_key_input_default(key2, ...types, "Uint8Array"));
      }
      if (!key2.extractable) {
        throw new TypeError("non-extractable CryptoKey cannot be exported as a JWK");
      }
      const { ext, key_ops, alg: alg2, use, ...jwk } = await webcrypto_default.subtle.exportKey("jwk", key2);
      return jwk;
    };
    key_to_jwk_default = keyToJWK;
  }
});

// node_modules/jose/dist/browser/key/export.js
async function exportJWK(key2) {
  return key_to_jwk_default(key2);
}
var init_export = __esm({
  "node_modules/jose/dist/browser/key/export.js"() {
    init_key_to_jwk();
  }
});

// node_modules/jose/dist/browser/lib/encrypt_key_management.js
async function encryptKeyManagement(alg2, enc2, key2, providedCek, providedParameters = {}) {
  let encryptedKey;
  let parameters;
  let cek;
  check_key_type_default(alg2, key2, "encrypt");
  key2 = await normalize_key_default.normalizePublicKey?.(key2, alg2) || key2;
  switch (alg2) {
    case "dir": {
      cek = key2;
      break;
    }
    case "ECDH-ES":
    case "ECDH-ES+A128KW":
    case "ECDH-ES+A192KW":
    case "ECDH-ES+A256KW": {
      if (!ecdhAllowed(key2)) {
        throw new JOSENotSupported("ECDH with the provided key is not allowed or not supported by your javascript runtime");
      }
      const { apu, apv } = providedParameters;
      let { epk: ephemeralKey } = providedParameters;
      ephemeralKey || (ephemeralKey = (await generateEpk(key2)).privateKey);
      const { x: x3, y: y2, crv, kty } = await exportJWK(ephemeralKey);
      const sharedSecret = await deriveKey(key2, ephemeralKey, alg2 === "ECDH-ES" ? enc2 : alg2, alg2 === "ECDH-ES" ? bitLength2(enc2) : parseInt(alg2.slice(-5, -2), 10), apu, apv);
      parameters = { epk: { x: x3, crv, kty } };
      if (kty === "EC")
        parameters.epk.y = y2;
      if (apu)
        parameters.apu = encode(apu);
      if (apv)
        parameters.apv = encode(apv);
      if (alg2 === "ECDH-ES") {
        cek = sharedSecret;
        break;
      }
      cek = providedCek || cek_default(enc2);
      const kwAlg = alg2.slice(-6);
      encryptedKey = await wrap(kwAlg, sharedSecret, cek);
      break;
    }
    case "RSA1_5":
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512": {
      cek = providedCek || cek_default(enc2);
      encryptedKey = await encrypt2(alg2, key2, cek);
      break;
    }
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW": {
      cek = providedCek || cek_default(enc2);
      const { p2c, p2s: p2s2 } = providedParameters;
      ({ encryptedKey, ...parameters } = await encrypt(alg2, key2, cek, p2c, p2s2));
      break;
    }
    case "A128KW":
    case "A192KW":
    case "A256KW": {
      cek = providedCek || cek_default(enc2);
      encryptedKey = await wrap(alg2, key2, cek);
      break;
    }
    case "A128GCMKW":
    case "A192GCMKW":
    case "A256GCMKW": {
      cek = providedCek || cek_default(enc2);
      const { iv } = providedParameters;
      ({ encryptedKey, ...parameters } = await wrap2(alg2, key2, cek, iv));
      break;
    }
    default: {
      throw new JOSENotSupported('Invalid or unsupported "alg" (JWE Algorithm) header value');
    }
  }
  return { cek, encryptedKey, parameters };
}
var encrypt_key_management_default;
var init_encrypt_key_management = __esm({
  "node_modules/jose/dist/browser/lib/encrypt_key_management.js"() {
    init_aeskw();
    init_ecdhes();
    init_pbes2kw();
    init_rsaes();
    init_base64url();
    init_normalize_key();
    init_cek();
    init_errors2();
    init_export();
    init_check_key_type();
    init_aesgcmkw();
    encrypt_key_management_default = encryptKeyManagement;
  }
});

// node_modules/jose/dist/browser/jwe/flattened/encrypt.js
var FlattenedEncrypt;
var init_encrypt2 = __esm({
  "node_modules/jose/dist/browser/jwe/flattened/encrypt.js"() {
    init_base64url();
    init_private_symbols();
    init_encrypt();
    init_encrypt_key_management();
    init_errors2();
    init_is_disjoint();
    init_buffer_utils();
    init_validate_crit();
    FlattenedEncrypt = class {
      constructor(plaintext) {
        if (!(plaintext instanceof Uint8Array)) {
          throw new TypeError("plaintext must be an instance of Uint8Array");
        }
        this._plaintext = plaintext;
      }
      setKeyManagementParameters(parameters) {
        if (this._keyManagementParameters) {
          throw new TypeError("setKeyManagementParameters can only be called once");
        }
        this._keyManagementParameters = parameters;
        return this;
      }
      setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this._protectedHeader = protectedHeader;
        return this;
      }
      setSharedUnprotectedHeader(sharedUnprotectedHeader) {
        if (this._sharedUnprotectedHeader) {
          throw new TypeError("setSharedUnprotectedHeader can only be called once");
        }
        this._sharedUnprotectedHeader = sharedUnprotectedHeader;
        return this;
      }
      setUnprotectedHeader(unprotectedHeader) {
        if (this._unprotectedHeader) {
          throw new TypeError("setUnprotectedHeader can only be called once");
        }
        this._unprotectedHeader = unprotectedHeader;
        return this;
      }
      setAdditionalAuthenticatedData(aad) {
        this._aad = aad;
        return this;
      }
      setContentEncryptionKey(cek) {
        if (this._cek) {
          throw new TypeError("setContentEncryptionKey can only be called once");
        }
        this._cek = cek;
        return this;
      }
      setInitializationVector(iv) {
        if (this._iv) {
          throw new TypeError("setInitializationVector can only be called once");
        }
        this._iv = iv;
        return this;
      }
      async encrypt(key2, options2) {
        if (!this._protectedHeader && !this._unprotectedHeader && !this._sharedUnprotectedHeader) {
          throw new JWEInvalid("either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()");
        }
        if (!is_disjoint_default(this._protectedHeader, this._unprotectedHeader, this._sharedUnprotectedHeader)) {
          throw new JWEInvalid("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
        }
        const joseHeader = {
          ...this._protectedHeader,
          ...this._unprotectedHeader,
          ...this._sharedUnprotectedHeader
        };
        validate_crit_default(JWEInvalid, /* @__PURE__ */ new Map(), options2?.crit, this._protectedHeader, joseHeader);
        if (joseHeader.zip !== void 0) {
          throw new JOSENotSupported('JWE "zip" (Compression Algorithm) Header Parameter is not supported.');
        }
        const { alg: alg2, enc: enc2 } = joseHeader;
        if (typeof alg2 !== "string" || !alg2) {
          throw new JWEInvalid('JWE "alg" (Algorithm) Header Parameter missing or invalid');
        }
        if (typeof enc2 !== "string" || !enc2) {
          throw new JWEInvalid('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
        }
        let encryptedKey;
        if (this._cek && (alg2 === "dir" || alg2 === "ECDH-ES")) {
          throw new TypeError(`setContentEncryptionKey cannot be called with JWE "alg" (Algorithm) Header ${alg2}`);
        }
        let cek;
        {
          let parameters;
          ({ cek, encryptedKey, parameters } = await encrypt_key_management_default(alg2, enc2, key2, this._cek, this._keyManagementParameters));
          if (parameters) {
            if (options2 && unprotected in options2) {
              if (!this._unprotectedHeader) {
                this.setUnprotectedHeader(parameters);
              } else {
                this._unprotectedHeader = { ...this._unprotectedHeader, ...parameters };
              }
            } else if (!this._protectedHeader) {
              this.setProtectedHeader(parameters);
            } else {
              this._protectedHeader = { ...this._protectedHeader, ...parameters };
            }
          }
        }
        let additionalData;
        let protectedHeader;
        let aadMember;
        if (this._protectedHeader) {
          protectedHeader = encoder2.encode(encode(JSON.stringify(this._protectedHeader)));
        } else {
          protectedHeader = encoder2.encode("");
        }
        if (this._aad) {
          aadMember = encode(this._aad);
          additionalData = concat(protectedHeader, encoder2.encode("."), encoder2.encode(aadMember));
        } else {
          additionalData = protectedHeader;
        }
        const { ciphertext, tag: tag2, iv } = await encrypt_default(enc2, this._plaintext, cek, this._iv, additionalData);
        const jwe = {
          ciphertext: encode(ciphertext)
        };
        if (iv) {
          jwe.iv = encode(iv);
        }
        if (tag2) {
          jwe.tag = encode(tag2);
        }
        if (encryptedKey) {
          jwe.encrypted_key = encode(encryptedKey);
        }
        if (aadMember) {
          jwe.aad = aadMember;
        }
        if (this._protectedHeader) {
          jwe.protected = decoder.decode(protectedHeader);
        }
        if (this._sharedUnprotectedHeader) {
          jwe.unprotected = this._sharedUnprotectedHeader;
        }
        if (this._unprotectedHeader) {
          jwe.header = this._unprotectedHeader;
        }
        return jwe;
      }
    };
  }
});

// node_modules/jose/dist/browser/lib/epoch.js
var epoch_default;
var init_epoch = __esm({
  "node_modules/jose/dist/browser/lib/epoch.js"() {
    epoch_default = (date) => Math.floor(date.getTime() / 1e3);
  }
});

// node_modules/jose/dist/browser/lib/secs.js
var minute, hour, day, week, year, REGEX, secs_default;
var init_secs = __esm({
  "node_modules/jose/dist/browser/lib/secs.js"() {
    minute = 60;
    hour = minute * 60;
    day = hour * 24;
    week = day * 7;
    year = day * 365.25;
    REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
    secs_default = (str) => {
      const matched = REGEX.exec(str);
      if (!matched || matched[4] && matched[1]) {
        throw new TypeError("Invalid time period format");
      }
      const value = parseFloat(matched[2]);
      const unit = matched[3].toLowerCase();
      let numericDate;
      switch (unit) {
        case "sec":
        case "secs":
        case "second":
        case "seconds":
        case "s":
          numericDate = Math.round(value);
          break;
        case "minute":
        case "minutes":
        case "min":
        case "mins":
        case "m":
          numericDate = Math.round(value * minute);
          break;
        case "hour":
        case "hours":
        case "hr":
        case "hrs":
        case "h":
          numericDate = Math.round(value * hour);
          break;
        case "day":
        case "days":
        case "d":
          numericDate = Math.round(value * day);
          break;
        case "week":
        case "weeks":
        case "w":
          numericDate = Math.round(value * week);
          break;
        default:
          numericDate = Math.round(value * year);
          break;
      }
      if (matched[1] === "-" || matched[4] === "ago") {
        return -numericDate;
      }
      return numericDate;
    };
  }
});

// node_modules/jose/dist/browser/lib/jwt_claims_set.js
var normalizeTyp, checkAudiencePresence, jwt_claims_set_default;
var init_jwt_claims_set = __esm({
  "node_modules/jose/dist/browser/lib/jwt_claims_set.js"() {
    init_errors2();
    init_buffer_utils();
    init_epoch();
    init_secs();
    init_is_object();
    normalizeTyp = (value) => value.toLowerCase().replace(/^application\//, "");
    checkAudiencePresence = (audPayload, audOption) => {
      if (typeof audPayload === "string") {
        return audOption.includes(audPayload);
      }
      if (Array.isArray(audPayload)) {
        return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
      }
      return false;
    };
    jwt_claims_set_default = (protectedHeader, encodedPayload, options2 = {}) => {
      let payload;
      try {
        payload = JSON.parse(decoder.decode(encodedPayload));
      } catch {
      }
      if (!isObject(payload)) {
        throw new JWTInvalid("JWT Claims Set must be a top-level JSON object");
      }
      const { typ } = options2;
      if (typ && (typeof protectedHeader.typ !== "string" || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
        throw new JWTClaimValidationFailed('unexpected "typ" JWT header value', payload, "typ", "check_failed");
      }
      const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options2;
      const presenceCheck = [...requiredClaims];
      if (maxTokenAge !== void 0)
        presenceCheck.push("iat");
      if (audience !== void 0)
        presenceCheck.push("aud");
      if (subject !== void 0)
        presenceCheck.push("sub");
      if (issuer !== void 0)
        presenceCheck.push("iss");
      for (const claim of new Set(presenceCheck.reverse())) {
        if (!(claim in payload)) {
          throw new JWTClaimValidationFailed(`missing required "${claim}" claim`, payload, claim, "missing");
        }
      }
      if (issuer && !(Array.isArray(issuer) ? issuer : [issuer]).includes(payload.iss)) {
        throw new JWTClaimValidationFailed('unexpected "iss" claim value', payload, "iss", "check_failed");
      }
      if (subject && payload.sub !== subject) {
        throw new JWTClaimValidationFailed('unexpected "sub" claim value', payload, "sub", "check_failed");
      }
      if (audience && !checkAudiencePresence(payload.aud, typeof audience === "string" ? [audience] : audience)) {
        throw new JWTClaimValidationFailed('unexpected "aud" claim value', payload, "aud", "check_failed");
      }
      let tolerance;
      switch (typeof options2.clockTolerance) {
        case "string":
          tolerance = secs_default(options2.clockTolerance);
          break;
        case "number":
          tolerance = options2.clockTolerance;
          break;
        case "undefined":
          tolerance = 0;
          break;
        default:
          throw new TypeError("Invalid clockTolerance option type");
      }
      const { currentDate } = options2;
      const now2 = epoch_default(currentDate || /* @__PURE__ */ new Date());
      if ((payload.iat !== void 0 || maxTokenAge) && typeof payload.iat !== "number") {
        throw new JWTClaimValidationFailed('"iat" claim must be a number', payload, "iat", "invalid");
      }
      if (payload.nbf !== void 0) {
        if (typeof payload.nbf !== "number") {
          throw new JWTClaimValidationFailed('"nbf" claim must be a number', payload, "nbf", "invalid");
        }
        if (payload.nbf > now2 + tolerance) {
          throw new JWTClaimValidationFailed('"nbf" claim timestamp check failed', payload, "nbf", "check_failed");
        }
      }
      if (payload.exp !== void 0) {
        if (typeof payload.exp !== "number") {
          throw new JWTClaimValidationFailed('"exp" claim must be a number', payload, "exp", "invalid");
        }
        if (payload.exp <= now2 - tolerance) {
          throw new JWTExpired('"exp" claim timestamp check failed', payload, "exp", "check_failed");
        }
      }
      if (maxTokenAge) {
        const age = now2 - payload.iat;
        const max = typeof maxTokenAge === "number" ? maxTokenAge : secs_default(maxTokenAge);
        if (age - tolerance > max) {
          throw new JWTExpired('"iat" claim timestamp check failed (too far in the past)', payload, "iat", "check_failed");
        }
        if (age < 0 - tolerance) {
          throw new JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', payload, "iat", "check_failed");
        }
      }
      return payload;
    };
  }
});

// node_modules/jose/dist/browser/jwt/decrypt.js
async function jwtDecrypt(jwt, key2, options2) {
  const decrypted = await compactDecrypt(jwt, key2, options2);
  const payload = jwt_claims_set_default(decrypted.protectedHeader, decrypted.plaintext, options2);
  const { protectedHeader } = decrypted;
  if (protectedHeader.iss !== void 0 && protectedHeader.iss !== payload.iss) {
    throw new JWTClaimValidationFailed('replicated "iss" claim header parameter mismatch', payload, "iss", "mismatch");
  }
  if (protectedHeader.sub !== void 0 && protectedHeader.sub !== payload.sub) {
    throw new JWTClaimValidationFailed('replicated "sub" claim header parameter mismatch', payload, "sub", "mismatch");
  }
  if (protectedHeader.aud !== void 0 && JSON.stringify(protectedHeader.aud) !== JSON.stringify(payload.aud)) {
    throw new JWTClaimValidationFailed('replicated "aud" claim header parameter mismatch', payload, "aud", "mismatch");
  }
  const result = { payload, protectedHeader };
  if (typeof key2 === "function") {
    return { ...result, key: decrypted.key };
  }
  return result;
}
var init_decrypt4 = __esm({
  "node_modules/jose/dist/browser/jwt/decrypt.js"() {
    init_decrypt3();
    init_jwt_claims_set();
    init_errors2();
  }
});

// node_modules/jose/dist/browser/jwe/compact/encrypt.js
var CompactEncrypt;
var init_encrypt3 = __esm({
  "node_modules/jose/dist/browser/jwe/compact/encrypt.js"() {
    init_encrypt2();
    CompactEncrypt = class {
      constructor(plaintext) {
        this._flattened = new FlattenedEncrypt(plaintext);
      }
      setContentEncryptionKey(cek) {
        this._flattened.setContentEncryptionKey(cek);
        return this;
      }
      setInitializationVector(iv) {
        this._flattened.setInitializationVector(iv);
        return this;
      }
      setProtectedHeader(protectedHeader) {
        this._flattened.setProtectedHeader(protectedHeader);
        return this;
      }
      setKeyManagementParameters(parameters) {
        this._flattened.setKeyManagementParameters(parameters);
        return this;
      }
      async encrypt(key2, options2) {
        const jwe = await this._flattened.encrypt(key2, options2);
        return [jwe.protected, jwe.encrypted_key, jwe.iv, jwe.ciphertext, jwe.tag].join(".");
      }
    };
  }
});

// node_modules/jose/dist/browser/jwt/produce.js
function validateInput(label, input) {
  if (!Number.isFinite(input)) {
    throw new TypeError(`Invalid ${label} input`);
  }
  return input;
}
var ProduceJWT;
var init_produce = __esm({
  "node_modules/jose/dist/browser/jwt/produce.js"() {
    init_epoch();
    init_is_object();
    init_secs();
    ProduceJWT = class {
      constructor(payload = {}) {
        if (!isObject(payload)) {
          throw new TypeError("JWT Claims Set MUST be an object");
        }
        this._payload = payload;
      }
      setIssuer(issuer) {
        this._payload = { ...this._payload, iss: issuer };
        return this;
      }
      setSubject(subject) {
        this._payload = { ...this._payload, sub: subject };
        return this;
      }
      setAudience(audience) {
        this._payload = { ...this._payload, aud: audience };
        return this;
      }
      setJti(jwtId) {
        this._payload = { ...this._payload, jti: jwtId };
        return this;
      }
      setNotBefore(input) {
        if (typeof input === "number") {
          this._payload = { ...this._payload, nbf: validateInput("setNotBefore", input) };
        } else if (input instanceof Date) {
          this._payload = { ...this._payload, nbf: validateInput("setNotBefore", epoch_default(input)) };
        } else {
          this._payload = { ...this._payload, nbf: epoch_default(/* @__PURE__ */ new Date()) + secs_default(input) };
        }
        return this;
      }
      setExpirationTime(input) {
        if (typeof input === "number") {
          this._payload = { ...this._payload, exp: validateInput("setExpirationTime", input) };
        } else if (input instanceof Date) {
          this._payload = { ...this._payload, exp: validateInput("setExpirationTime", epoch_default(input)) };
        } else {
          this._payload = { ...this._payload, exp: epoch_default(/* @__PURE__ */ new Date()) + secs_default(input) };
        }
        return this;
      }
      setIssuedAt(input) {
        if (typeof input === "undefined") {
          this._payload = { ...this._payload, iat: epoch_default(/* @__PURE__ */ new Date()) };
        } else if (input instanceof Date) {
          this._payload = { ...this._payload, iat: validateInput("setIssuedAt", epoch_default(input)) };
        } else if (typeof input === "string") {
          this._payload = {
            ...this._payload,
            iat: validateInput("setIssuedAt", epoch_default(/* @__PURE__ */ new Date()) + secs_default(input))
          };
        } else {
          this._payload = { ...this._payload, iat: validateInput("setIssuedAt", input) };
        }
        return this;
      }
    };
  }
});

// node_modules/jose/dist/browser/jwt/encrypt.js
var EncryptJWT;
var init_encrypt4 = __esm({
  "node_modules/jose/dist/browser/jwt/encrypt.js"() {
    init_encrypt3();
    init_buffer_utils();
    init_produce();
    EncryptJWT = class extends ProduceJWT {
      setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this._protectedHeader = protectedHeader;
        return this;
      }
      setKeyManagementParameters(parameters) {
        if (this._keyManagementParameters) {
          throw new TypeError("setKeyManagementParameters can only be called once");
        }
        this._keyManagementParameters = parameters;
        return this;
      }
      setContentEncryptionKey(cek) {
        if (this._cek) {
          throw new TypeError("setContentEncryptionKey can only be called once");
        }
        this._cek = cek;
        return this;
      }
      setInitializationVector(iv) {
        if (this._iv) {
          throw new TypeError("setInitializationVector can only be called once");
        }
        this._iv = iv;
        return this;
      }
      replicateIssuerAsHeader() {
        this._replicateIssuerAsHeader = true;
        return this;
      }
      replicateSubjectAsHeader() {
        this._replicateSubjectAsHeader = true;
        return this;
      }
      replicateAudienceAsHeader() {
        this._replicateAudienceAsHeader = true;
        return this;
      }
      async encrypt(key2, options2) {
        const enc2 = new CompactEncrypt(encoder2.encode(JSON.stringify(this._payload)));
        if (this._replicateIssuerAsHeader) {
          this._protectedHeader = { ...this._protectedHeader, iss: this._payload.iss };
        }
        if (this._replicateSubjectAsHeader) {
          this._protectedHeader = { ...this._protectedHeader, sub: this._payload.sub };
        }
        if (this._replicateAudienceAsHeader) {
          this._protectedHeader = { ...this._protectedHeader, aud: this._payload.aud };
        }
        enc2.setProtectedHeader(this._protectedHeader);
        if (this._iv) {
          enc2.setInitializationVector(this._iv);
        }
        if (this._cek) {
          enc2.setContentEncryptionKey(this._cek);
        }
        if (this._keyManagementParameters) {
          enc2.setKeyManagementParameters(this._keyManagementParameters);
        }
        return enc2.encrypt(key2, options2);
      }
    };
  }
});

// node_modules/jose/dist/browser/jwk/thumbprint.js
async function calculateJwkThumbprint(jwk, digestAlgorithm) {
  if (!isObject(jwk)) {
    throw new TypeError("JWK must be an object");
  }
  digestAlgorithm ?? (digestAlgorithm = "sha256");
  if (digestAlgorithm !== "sha256" && digestAlgorithm !== "sha384" && digestAlgorithm !== "sha512") {
    throw new TypeError('digestAlgorithm must one of "sha256", "sha384", or "sha512"');
  }
  let components;
  switch (jwk.kty) {
    case "EC":
      check(jwk.crv, '"crv" (Curve) Parameter');
      check(jwk.x, '"x" (X Coordinate) Parameter');
      check(jwk.y, '"y" (Y Coordinate) Parameter');
      components = { crv: jwk.crv, kty: jwk.kty, x: jwk.x, y: jwk.y };
      break;
    case "OKP":
      check(jwk.crv, '"crv" (Subtype of Key Pair) Parameter');
      check(jwk.x, '"x" (Public Key) Parameter');
      components = { crv: jwk.crv, kty: jwk.kty, x: jwk.x };
      break;
    case "RSA":
      check(jwk.e, '"e" (Exponent) Parameter');
      check(jwk.n, '"n" (Modulus) Parameter');
      components = { e: jwk.e, kty: jwk.kty, n: jwk.n };
      break;
    case "oct":
      check(jwk.k, '"k" (Key Value) Parameter');
      components = { k: jwk.k, kty: jwk.kty };
      break;
    default:
      throw new JOSENotSupported('"kty" (Key Type) Parameter missing or unsupported');
  }
  const data = encoder2.encode(JSON.stringify(components));
  return encode(await digest_default(digestAlgorithm, data));
}
var check;
var init_thumbprint = __esm({
  "node_modules/jose/dist/browser/jwk/thumbprint.js"() {
    init_digest();
    init_base64url();
    init_errors2();
    init_buffer_utils();
    init_is_object();
    check = (value, description) => {
      if (typeof value !== "string" || !value) {
        throw new JWKInvalid(`${description} missing or invalid`);
      }
    };
  }
});

// node_modules/jose/dist/browser/util/base64url.js
var base64url_exports = {};
__export(base64url_exports, {
  decode: () => decode2,
  encode: () => encode2
});
var encode2, decode2;
var init_base64url2 = __esm({
  "node_modules/jose/dist/browser/util/base64url.js"() {
    init_base64url();
    encode2 = encode;
    decode2 = decode;
  }
});

// node_modules/jose/dist/browser/util/decode_jwt.js
function decodeJwt(jwt) {
  if (typeof jwt !== "string")
    throw new JWTInvalid("JWTs must use Compact JWS serialization, JWT must be a string");
  const { 1: payload, length } = jwt.split(".");
  if (length === 5)
    throw new JWTInvalid("Only JWTs using Compact JWS serialization can be decoded");
  if (length !== 3)
    throw new JWTInvalid("Invalid JWT");
  if (!payload)
    throw new JWTInvalid("JWTs must contain a payload");
  let decoded;
  try {
    decoded = decode2(payload);
  } catch {
    throw new JWTInvalid("Failed to base64url decode the payload");
  }
  let result;
  try {
    result = JSON.parse(decoder.decode(decoded));
  } catch {
    throw new JWTInvalid("Failed to parse the decoded payload as JSON");
  }
  if (!isObject(result))
    throw new JWTInvalid("Invalid JWT Claims Set");
  return result;
}
var init_decode_jwt = __esm({
  "node_modules/jose/dist/browser/util/decode_jwt.js"() {
    init_base64url2();
    init_buffer_utils();
    init_is_object();
    init_errors2();
  }
});

// node_modules/jose/dist/browser/index.js
var init_browser = __esm({
  "node_modules/jose/dist/browser/index.js"() {
    init_decrypt4();
    init_encrypt4();
    init_thumbprint();
    init_decode_jwt();
    init_errors2();
    init_base64url2();
  }
});

// node_modules/@auth/core/lib/vendored/cookie.js
var cookie_exports = {};
__export(cookie_exports, {
  parse: () => parse2,
  serialize: () => serialize
});
function parse2(str, options2) {
  const obj = new NullObject();
  const len = str.length;
  if (len < 2)
    return obj;
  const dec = options2?.decode || decode3;
  let index7 = 0;
  do {
    const eqIdx = str.indexOf("=", index7);
    if (eqIdx === -1)
      break;
    const colonIdx = str.indexOf(";", index7);
    const endIdx = colonIdx === -1 ? len : colonIdx;
    if (eqIdx > endIdx) {
      index7 = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const keyStartIdx = startIndex(str, index7, eqIdx);
    const keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
    const key2 = str.slice(keyStartIdx, keyEndIdx);
    if (obj[key2] === void 0) {
      let valStartIdx = startIndex(str, eqIdx + 1, endIdx);
      let valEndIdx = endIndex(str, endIdx, valStartIdx);
      const value = dec(str.slice(valStartIdx, valEndIdx));
      obj[key2] = value;
    }
    index7 = endIdx + 1;
  } while (index7 < len);
  return obj;
}
function startIndex(str, index7, max) {
  do {
    const code = str.charCodeAt(index7);
    if (code !== 32 && code !== 9)
      return index7;
  } while (++index7 < max);
  return max;
}
function endIndex(str, index7, min) {
  while (index7 > min) {
    const code = str.charCodeAt(--index7);
    if (code !== 32 && code !== 9)
      return index7 + 1;
  }
  return min;
}
function serialize(name, val, options2) {
  const enc2 = options2?.encode || encodeURIComponent;
  if (!cookieNameRegExp.test(name)) {
    throw new TypeError(`argument name is invalid: ${name}`);
  }
  const value = enc2(val);
  if (!cookieValueRegExp.test(value)) {
    throw new TypeError(`argument val is invalid: ${val}`);
  }
  let str = name + "=" + value;
  if (!options2)
    return str;
  if (options2.maxAge !== void 0) {
    if (!Number.isInteger(options2.maxAge)) {
      throw new TypeError(`option maxAge is invalid: ${options2.maxAge}`);
    }
    str += "; Max-Age=" + options2.maxAge;
  }
  if (options2.domain) {
    if (!domainValueRegExp.test(options2.domain)) {
      throw new TypeError(`option domain is invalid: ${options2.domain}`);
    }
    str += "; Domain=" + options2.domain;
  }
  if (options2.path) {
    if (!pathValueRegExp.test(options2.path)) {
      throw new TypeError(`option path is invalid: ${options2.path}`);
    }
    str += "; Path=" + options2.path;
  }
  if (options2.expires) {
    if (!isDate(options2.expires) || !Number.isFinite(options2.expires.valueOf())) {
      throw new TypeError(`option expires is invalid: ${options2.expires}`);
    }
    str += "; Expires=" + options2.expires.toUTCString();
  }
  if (options2.httpOnly) {
    str += "; HttpOnly";
  }
  if (options2.secure) {
    str += "; Secure";
  }
  if (options2.partitioned) {
    str += "; Partitioned";
  }
  if (options2.priority) {
    const priority = typeof options2.priority === "string" ? options2.priority.toLowerCase() : void 0;
    switch (priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError(`option priority is invalid: ${options2.priority}`);
    }
  }
  if (options2.sameSite) {
    const sameSite = typeof options2.sameSite === "string" ? options2.sameSite.toLowerCase() : options2.sameSite;
    switch (sameSite) {
      case true:
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError(`option sameSite is invalid: ${options2.sameSite}`);
    }
  }
  return str;
}
function decode3(str) {
  if (str.indexOf("%") === -1)
    return str;
  try {
    return decodeURIComponent(str);
  } catch (e2) {
    return str;
  }
}
function isDate(val) {
  return __toString.call(val) === "[object Date]";
}
var cookieNameRegExp, cookieValueRegExp, domainValueRegExp, pathValueRegExp, __toString, NullObject;
var init_cookie2 = __esm({
  "node_modules/@auth/core/lib/vendored/cookie.js"() {
    cookieNameRegExp = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
    cookieValueRegExp = /^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/;
    domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
    pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
    __toString = Object.prototype.toString;
    NullObject = /* @__PURE__ */ (() => {
      const C3 = function() {
      };
      C3.prototype = /* @__PURE__ */ Object.create(null);
      return C3;
    })();
  }
});

// node_modules/@auth/core/jwt.js
async function encode3(params) {
  const { token = {}, secret, maxAge = DEFAULT_MAX_AGE, salt } = params;
  const secrets = Array.isArray(secret) ? secret : [secret];
  const encryptionSecret = await getDerivedEncryptionKey(enc, secrets[0], salt);
  const thumbprint = await calculateJwkThumbprint({ kty: "oct", k: base64url_exports.encode(encryptionSecret) }, `sha${encryptionSecret.byteLength << 3}`);
  return await new EncryptJWT(token).setProtectedHeader({ alg, enc, kid: thumbprint }).setIssuedAt().setExpirationTime(now() + maxAge).setJti(crypto.randomUUID()).encrypt(encryptionSecret);
}
async function decode4(params) {
  const { token, secret, salt } = params;
  const secrets = Array.isArray(secret) ? secret : [secret];
  if (!token)
    return null;
  const { payload } = await jwtDecrypt(token, async ({ kid, enc: enc2 }) => {
    for (const secret2 of secrets) {
      const encryptionSecret = await getDerivedEncryptionKey(enc2, secret2, salt);
      if (kid === void 0)
        return encryptionSecret;
      const thumbprint = await calculateJwkThumbprint({ kty: "oct", k: base64url_exports.encode(encryptionSecret) }, `sha${encryptionSecret.byteLength << 3}`);
      if (kid === thumbprint)
        return encryptionSecret;
    }
    throw new Error("no matching decryption secret");
  }, {
    clockTolerance: 15,
    keyManagementAlgorithms: [alg],
    contentEncryptionAlgorithms: [enc, "A256GCM"]
  });
  return payload;
}
async function getDerivedEncryptionKey(enc2, keyMaterial, salt) {
  let length;
  switch (enc2) {
    case "A256CBC-HS512":
      length = 64;
      break;
    case "A256GCM":
      length = 32;
      break;
    default:
      throw new Error("Unsupported JWT Content Encryption Algorithm");
  }
  return await hkdf("sha256", keyMaterial, salt, `Auth.js Generated Encryption Key (${salt})`, length);
}
var parseCookie, DEFAULT_MAX_AGE, now, alg, enc;
var init_jwt = __esm({
  "node_modules/@auth/core/jwt.js"() {
    init_web();
    init_browser();
    init_cookie();
    init_errors();
    init_cookie2();
    ({ parse: parseCookie } = cookie_exports);
    DEFAULT_MAX_AGE = 30 * 24 * 60 * 60;
    now = () => Date.now() / 1e3 | 0;
    alg = "dir";
    enc = "A256CBC-HS512";
  }
});

// node_modules/@auth/core/lib/utils/callback-url.js
async function createCallbackUrl({ options: options2, paramValue, cookieValue }) {
  const { url, callbacks } = options2;
  let callbackUrl = url.origin;
  if (paramValue) {
    callbackUrl = await callbacks.redirect({
      url: paramValue,
      baseUrl: url.origin
    });
  } else if (cookieValue) {
    callbackUrl = await callbacks.redirect({
      url: cookieValue,
      baseUrl: url.origin
    });
  }
  return {
    callbackUrl,
    // Save callback URL in a cookie so that it can be used for subsequent requests in signin/signout/callback flow
    callbackUrlCookie: callbackUrl !== cookieValue ? callbackUrl : void 0
  };
}
var init_callback_url = __esm({
  "node_modules/@auth/core/lib/utils/callback-url.js"() {
  }
});

// node_modules/@auth/core/lib/utils/logger.js
function setLogger(config) {
  const newLogger = {
    ...defaultLogger
  };
  if (!config.debug)
    newLogger.debug = () => {
    };
  if (config.logger?.error)
    newLogger.error = config.logger.error;
  if (config.logger?.warn)
    newLogger.warn = config.logger.warn;
  if (config.logger?.debug)
    newLogger.debug = config.logger.debug;
  config.logger ?? (config.logger = newLogger);
  return newLogger;
}
var red, yellow, grey, reset2, defaultLogger;
var init_logger = __esm({
  "node_modules/@auth/core/lib/utils/logger.js"() {
    init_errors();
    red = "\x1B[31m";
    yellow = "\x1B[33m";
    grey = "\x1B[90m";
    reset2 = "\x1B[0m";
    defaultLogger = {
      error(error) {
        const name = error instanceof AuthError ? error.type : error.name;
        console.error(`${red}[auth][error]${reset2} ${name}: ${error.message}`);
        if (error.cause && typeof error.cause === "object" && "err" in error.cause && error.cause.err instanceof Error) {
          const { err, ...data } = error.cause;
          console.error(`${red}[auth][cause]${reset2}:`, err.stack);
          if (data)
            console.error(`${red}[auth][details]${reset2}:`, JSON.stringify(data, null, 2));
        } else if (error.stack) {
          console.error(error.stack.replace(/.*/, "").substring(1));
        }
      },
      warn(code) {
        const url = `https://warnings.authjs.dev#${code}`;
        console.warn(`${yellow}[auth][warn][${code}]${reset2}`, `Read more: ${url}`);
      },
      debug(message2, metadata) {
        console.log(`${grey}[auth][debug]:${reset2} ${message2}`, JSON.stringify(metadata, null, 2));
      }
    };
  }
});

// node_modules/@auth/core/lib/utils/actions.js
function isAuthAction(action) {
  return actions.includes(action);
}
var actions;
var init_actions = __esm({
  "node_modules/@auth/core/lib/utils/actions.js"() {
    actions = [
      "providers",
      "session",
      "csrf",
      "signin",
      "signout",
      "callback",
      "verify-request",
      "error",
      "webauthn-options"
    ];
  }
});

// node_modules/@auth/core/lib/utils/web.js
async function getBody(req) {
  if (!("body" in req) || !req.body || req.method !== "POST")
    return;
  const contentType = req.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    return await req.json();
  } else if (contentType?.includes("application/x-www-form-urlencoded")) {
    const params = new URLSearchParams(await req.text());
    return Object.fromEntries(params);
  }
}
async function toInternalRequest(req, config) {
  try {
    if (req.method !== "GET" && req.method !== "POST")
      throw new UnknownAction("Only GET and POST requests are supported");
    config.basePath ?? (config.basePath = "/auth");
    const url = new URL(req.url);
    const { action, providerId } = parseActionAndProviderId(url.pathname, config.basePath);
    return {
      url,
      action,
      providerId,
      method: req.method,
      headers: Object.fromEntries(req.headers),
      body: req.body ? await getBody(req) : void 0,
      cookies: parseCookie2(req.headers.get("cookie") ?? "") ?? {},
      error: url.searchParams.get("error") ?? void 0,
      query: Object.fromEntries(url.searchParams)
    };
  } catch (e2) {
    const logger = setLogger(config);
    logger.error(e2);
    logger.debug("request", req);
  }
}
function toRequest(request) {
  return new Request(request.url, {
    headers: request.headers,
    method: request.method,
    body: request.method === "POST" ? JSON.stringify(request.body ?? {}) : void 0
  });
}
function toResponse(res) {
  const headers2 = new Headers(res.headers);
  res.cookies?.forEach((cookie) => {
    const { name, value, options: options2 } = cookie;
    const cookieHeader = serializeCookie(name, value, options2);
    if (headers2.has("Set-Cookie"))
      headers2.append("Set-Cookie", cookieHeader);
    else
      headers2.set("Set-Cookie", cookieHeader);
  });
  let body2 = res.body;
  if (headers2.get("content-type") === "application/json")
    body2 = JSON.stringify(res.body);
  else if (headers2.get("content-type") === "application/x-www-form-urlencoded")
    body2 = new URLSearchParams(res.body).toString();
  const status = res.redirect ? 302 : res.status ?? 200;
  const response = new Response(body2, { headers: headers2, status });
  if (res.redirect)
    response.headers.set("Location", res.redirect);
  return response;
}
async function createHash(message2) {
  const data = new TextEncoder().encode(message2);
  const hash2 = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash2)).map((b2) => b2.toString(16).padStart(2, "0")).join("").toString();
}
function randomString(size) {
  const i2hex = (i4) => ("0" + i4.toString(16)).slice(-2);
  const r3 = (a3, i4) => a3 + i2hex(i4);
  const bytes = crypto.getRandomValues(new Uint8Array(size));
  return Array.from(bytes).reduce(r3, "");
}
function parseActionAndProviderId(pathname, base2) {
  const a3 = pathname.match(new RegExp(`^${base2}(.+)`));
  if (a3 === null)
    throw new UnknownAction(`Cannot parse action at ${pathname}`);
  const actionAndProviderId = a3.at(-1);
  const b2 = actionAndProviderId.replace(/^\//, "").split("/").filter(Boolean);
  if (b2.length !== 1 && b2.length !== 2)
    throw new UnknownAction(`Cannot parse action at ${pathname}`);
  const [action, providerId] = b2;
  if (!isAuthAction(action))
    throw new UnknownAction(`Cannot parse action at ${pathname}`);
  if (providerId && !["signin", "callback", "webauthn-options"].includes(action))
    throw new UnknownAction(`Cannot parse action at ${pathname}`);
  return { action, providerId };
}
var parseCookie2, serializeCookie;
var init_web2 = __esm({
  "node_modules/@auth/core/lib/utils/web.js"() {
    init_cookie2();
    init_errors();
    init_logger();
    init_actions();
    ({ parse: parseCookie2, serialize: serializeCookie } = cookie_exports);
  }
});

// node_modules/@auth/core/lib/actions/callback/oauth/csrf-token.js
async function createCSRFToken({ options: options2, cookieValue, isPost, bodyValue }) {
  if (cookieValue) {
    const [csrfToken2, csrfTokenHash2] = cookieValue.split("|");
    const expectedCsrfTokenHash = await createHash(`${csrfToken2}${options2.secret}`);
    if (csrfTokenHash2 === expectedCsrfTokenHash) {
      const csrfTokenVerified = isPost && csrfToken2 === bodyValue;
      return { csrfTokenVerified, csrfToken: csrfToken2 };
    }
  }
  const csrfToken = randomString(32);
  const csrfTokenHash = await createHash(`${csrfToken}${options2.secret}`);
  const cookie = `${csrfToken}|${csrfTokenHash}`;
  return { cookie, csrfToken };
}
function validateCSRF(action, verified) {
  if (verified)
    return;
  throw new MissingCSRF(`CSRF token was missing during an action ${action}`);
}
var init_csrf_token = __esm({
  "node_modules/@auth/core/lib/actions/callback/oauth/csrf-token.js"() {
    init_web2();
    init_errors();
  }
});

// node_modules/@auth/core/lib/utils/merge.js
function isObject2(item) {
  return item !== null && typeof item === "object";
}
function merge(target, ...sources) {
  if (!sources.length)
    return target;
  const source2 = sources.shift();
  if (isObject2(target) && isObject2(source2)) {
    for (const key2 in source2) {
      if (isObject2(source2[key2])) {
        if (!isObject2(target[key2]))
          target[key2] = Array.isArray(source2[key2]) ? [] : {};
        merge(target[key2], source2[key2]);
      } else if (source2[key2] !== void 0)
        target[key2] = source2[key2];
    }
  }
  return merge(target, ...sources);
}
var init_merge = __esm({
  "node_modules/@auth/core/lib/utils/merge.js"() {
  }
});

// node_modules/@auth/core/lib/symbols.js
var skipCSRFCheck, raw, customFetch, conformInternal;
var init_symbols = __esm({
  "node_modules/@auth/core/lib/symbols.js"() {
    skipCSRFCheck = Symbol("skip-csrf-check");
    raw = Symbol("return-type-raw");
    customFetch = Symbol("custom-fetch");
    conformInternal = Symbol("conform-internal");
  }
});

// node_modules/@auth/core/lib/utils/providers.js
function parseProviders(params) {
  const { providerId, config } = params;
  const url = new URL(config.basePath ?? "/auth", params.url.origin);
  const providers = config.providers.map((p3) => {
    const provider = typeof p3 === "function" ? p3() : p3;
    const { options: userOptions, ...defaults } = provider;
    const id = userOptions?.id ?? defaults.id;
    const merged = merge(defaults, userOptions, {
      signinUrl: `${url}/signin/${id}`,
      callbackUrl: `${url}/callback/${id}`
    });
    if (provider.type === "oauth" || provider.type === "oidc") {
      merged.redirectProxyUrl ?? (merged.redirectProxyUrl = userOptions?.redirectProxyUrl ?? config.redirectProxyUrl);
      const normalized = normalizeOAuth(merged);
      if (normalized.authorization?.url.searchParams.get("response_mode") === "form_post") {
        delete normalized.redirectProxyUrl;
      }
      normalized[customFetch] ?? (normalized[customFetch] = userOptions?.[customFetch]);
      return normalized;
    }
    return merged;
  });
  return {
    providers,
    provider: providers.find(({ id }) => id === providerId)
  };
}
function normalizeOAuth(c3) {
  if (c3.issuer)
    c3.wellKnown ?? (c3.wellKnown = `${c3.issuer}/.well-known/openid-configuration`);
  const authorization = normalizeEndpoint(c3.authorization, c3.issuer);
  if (authorization && !authorization.url?.searchParams.has("scope")) {
    authorization.url.searchParams.set("scope", "openid profile email");
  }
  const token = normalizeEndpoint(c3.token, c3.issuer);
  const userinfo = normalizeEndpoint(c3.userinfo, c3.issuer);
  const checks = c3.checks ?? ["pkce"];
  if (c3.redirectProxyUrl) {
    if (!checks.includes("state"))
      checks.push("state");
    c3.redirectProxyUrl = `${c3.redirectProxyUrl}/callback/${c3.id}`;
  }
  return {
    ...c3,
    authorization,
    token,
    checks,
    userinfo,
    profile: c3.profile ?? defaultProfile,
    account: c3.account ?? defaultAccount
  };
}
function stripUndefined(o3) {
  const result = {};
  for (const [k3, v2] of Object.entries(o3)) {
    if (v2 !== void 0)
      result[k3] = v2;
  }
  return result;
}
function normalizeEndpoint(e2, issuer) {
  if (!e2 && issuer)
    return;
  if (typeof e2 === "string") {
    return { url: new URL(e2) };
  }
  const url = new URL(e2?.url ?? "https://authjs.dev");
  if (e2?.params != null) {
    for (let [key2, value] of Object.entries(e2.params)) {
      if (key2 === "claims") {
        value = JSON.stringify(value);
      }
      url.searchParams.set(key2, String(value));
    }
  }
  return {
    url,
    request: e2?.request,
    conform: e2?.conform,
    ...e2?.clientPrivateKey ? { clientPrivateKey: e2?.clientPrivateKey } : null
  };
}
function isOIDCProvider(provider) {
  return provider.type === "oidc";
}
var defaultProfile, defaultAccount;
var init_providers = __esm({
  "node_modules/@auth/core/lib/utils/providers.js"() {
    init_merge();
    init_symbols();
    defaultProfile = (profile) => {
      return stripUndefined({
        id: profile.sub ?? profile.id ?? crypto.randomUUID(),
        name: profile.name ?? profile.nickname ?? profile.preferred_username,
        email: profile.email,
        image: profile.picture
      });
    };
    defaultAccount = (account) => {
      return stripUndefined({
        access_token: account.access_token,
        id_token: account.id_token,
        refresh_token: account.refresh_token,
        expires_at: account.expires_at,
        scope: account.scope,
        token_type: account.token_type,
        session_state: account.session_state
      });
    };
  }
});

// node_modules/@auth/core/lib/init.js
async function init({ authOptions: config, providerId, action, url, cookies: reqCookies, callbackUrl: reqCallbackUrl, csrfToken: reqCsrfToken, csrfDisabled, isPost }) {
  const logger = setLogger(config);
  const { providers, provider } = parseProviders({ url, providerId, config });
  const maxAge = 30 * 24 * 60 * 60;
  let isOnRedirectProxy = false;
  if ((provider?.type === "oauth" || provider?.type === "oidc") && provider.redirectProxyUrl) {
    try {
      isOnRedirectProxy = new URL(provider.redirectProxyUrl).origin === url.origin;
    } catch {
      throw new TypeError(`redirectProxyUrl must be a valid URL. Received: ${provider.redirectProxyUrl}`);
    }
  }
  const options2 = {
    debug: false,
    pages: {},
    theme: {
      colorScheme: "auto",
      logo: "",
      brandColor: "",
      buttonText: ""
    },
    // Custom options override defaults
    ...config,
    // These computed settings can have values in userOptions but we override them
    // and are request-specific.
    url,
    action,
    // @ts-expect-errors
    provider,
    cookies: merge(defaultCookies(config.useSecureCookies ?? url.protocol === "https:"), config.cookies),
    providers,
    // Session options
    session: {
      // If no adapter specified, force use of JSON Web Tokens (stateless)
      strategy: config.adapter ? "database" : "jwt",
      maxAge,
      updateAge: 24 * 60 * 60,
      generateSessionToken: () => crypto.randomUUID(),
      ...config.session
    },
    // JWT options
    jwt: {
      secret: config.secret,
      // Asserted in assert.ts
      maxAge: config.session?.maxAge ?? maxAge,
      // default to same as `session.maxAge`
      encode: encode3,
      decode: decode4,
      ...config.jwt
    },
    // Event messages
    events: eventsErrorHandler(config.events ?? {}, logger),
    adapter: adapterErrorHandler(config.adapter, logger),
    // Callback functions
    callbacks: { ...defaultCallbacks, ...config.callbacks },
    logger,
    callbackUrl: url.origin,
    isOnRedirectProxy,
    experimental: {
      ...config.experimental
    }
  };
  const cookies = [];
  if (csrfDisabled) {
    options2.csrfTokenVerified = true;
  } else {
    const { csrfToken, cookie: csrfCookie, csrfTokenVerified } = await createCSRFToken({
      options: options2,
      cookieValue: reqCookies?.[options2.cookies.csrfToken.name],
      isPost,
      bodyValue: reqCsrfToken
    });
    options2.csrfToken = csrfToken;
    options2.csrfTokenVerified = csrfTokenVerified;
    if (csrfCookie) {
      cookies.push({
        name: options2.cookies.csrfToken.name,
        value: csrfCookie,
        options: options2.cookies.csrfToken.options
      });
    }
  }
  const { callbackUrl, callbackUrlCookie } = await createCallbackUrl({
    options: options2,
    cookieValue: reqCookies?.[options2.cookies.callbackUrl.name],
    paramValue: reqCallbackUrl
  });
  options2.callbackUrl = callbackUrl;
  if (callbackUrlCookie) {
    cookies.push({
      name: options2.cookies.callbackUrl.name,
      value: callbackUrlCookie,
      options: options2.cookies.callbackUrl.options
    });
  }
  return { options: options2, cookies };
}
function eventsErrorHandler(methods, logger) {
  return Object.keys(methods).reduce((acc, name) => {
    acc[name] = async (...args) => {
      try {
        const method = methods[name];
        return await method(...args);
      } catch (e2) {
        logger.error(new EventError(e2));
      }
    };
    return acc;
  }, {});
}
function adapterErrorHandler(adapter, logger) {
  if (!adapter)
    return;
  return Object.keys(adapter).reduce((acc, name) => {
    acc[name] = async (...args) => {
      try {
        logger.debug(`adapter_${name}`, { args });
        const method = adapter[name];
        return await method(...args);
      } catch (e2) {
        const error = new AdapterError(e2);
        logger.error(error);
        throw error;
      }
    };
    return acc;
  }, {});
}
var defaultCallbacks;
var init_init = __esm({
  "node_modules/@auth/core/lib/init.js"() {
    init_jwt();
    init_callback_url();
    init_cookie();
    init_csrf_token();
    init_errors();
    init_providers();
    init_logger();
    init_merge();
    defaultCallbacks = {
      signIn() {
        return true;
      },
      redirect({ url, baseUrl }) {
        if (url.startsWith("/"))
          return `${baseUrl}${url}`;
        else if (new URL(url).origin === baseUrl)
          return url;
        return baseUrl;
      },
      session({ session: session2 }) {
        return {
          user: {
            name: session2.user?.name,
            email: session2.user?.email,
            image: session2.user?.image
          },
          expires: session2.expires?.toISOString?.() ?? session2.expires
        };
      },
      jwt({ token }) {
        return token;
      }
    };
  }
});

// node_modules/preact/dist/preact.module.js
function d(n2, l3) {
  for (var u4 in l3) n2[u4] = l3[u4];
  return n2;
}
function w(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function _(l3, u4, t2) {
  var i4, o3, r3, f4 = {};
  for (r3 in u4) "key" == r3 ? i4 = u4[r3] : "ref" == r3 ? o3 = u4[r3] : f4[r3] = u4[r3];
  if (arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l3 && null != l3.defaultProps) for (r3 in l3.defaultProps) void 0 === f4[r3] && (f4[r3] = l3.defaultProps[r3]);
  return g(l3, f4, i4, o3, null);
}
function g(n2, t2, i4, o3, r3) {
  var f4 = { type: n2, props: t2, key: i4, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r3 ? ++u : r3, __i: -1, __u: 0 };
  return null == r3 && null != l.vnode && l.vnode(f4), f4;
}
function b(n2) {
  return n2.children;
}
function k(n2, l3) {
  this.props = n2, this.context = l3;
}
function x(n2, l3) {
  if (null == l3) return n2.__ ? x(n2.__, n2.__i + 1) : null;
  for (var u4; l3 < n2.__k.length; l3++) if (null != (u4 = n2.__k[l3]) && null != u4.__e) return u4.__e;
  return "function" == typeof n2.type ? x(n2) : null;
}
function C(n2) {
  var l3, u4;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++) if (null != (u4 = n2.__k[l3]) && null != u4.__e) {
      n2.__e = n2.__c.base = u4.__e;
      break;
    }
    return C(n2);
  }
}
function S(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !M.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(M);
}
function M() {
  var n2, u4, t2, o3, r3, e2, c3, s4;
  for (i.sort(f); n2 = i.shift(); ) n2.__d && (u4 = i.length, o3 = void 0, e2 = (r3 = (t2 = n2).__v).__e, c3 = [], s4 = [], t2.__P && ((o3 = d({}, r3)).__v = r3.__v + 1, l.vnode && l.vnode(o3), O(t2.__P, o3, r3, t2.__n, t2.__P.namespaceURI, 32 & r3.__u ? [e2] : null, c3, null == e2 ? x(r3) : e2, !!(32 & r3.__u), s4), o3.__v = r3.__v, o3.__.__k[o3.__i] = o3, j(c3, o3, s4), o3.__e != e2 && C(o3)), i.length > u4 && i.sort(f));
  M.__r = 0;
}
function P(n2, l3, u4, t2, i4, o3, r3, f4, e2, c3, s4) {
  var a3, p3, y2, d3, w3, _3 = t2 && t2.__k || v, g2 = l3.length;
  for (u4.__d = e2, $(u4, l3, _3), e2 = u4.__d, a3 = 0; a3 < g2; a3++) null != (y2 = u4.__k[a3]) && (p3 = -1 === y2.__i ? h : _3[y2.__i] || h, y2.__i = a3, O(n2, y2, p3, i4, o3, r3, f4, e2, c3, s4), d3 = y2.__e, y2.ref && p3.ref != y2.ref && (p3.ref && N(p3.ref, null, y2), s4.push(y2.ref, y2.__c || d3, y2)), null == w3 && null != d3 && (w3 = d3), 65536 & y2.__u || p3.__k === y2.__k ? e2 = I(y2, e2, n2) : "function" == typeof y2.type && void 0 !== y2.__d ? e2 = y2.__d : d3 && (e2 = d3.nextSibling), y2.__d = void 0, y2.__u &= -196609);
  u4.__d = e2, u4.__e = w3;
}
function $(n2, l3, u4) {
  var t2, i4, o3, r3, f4, e2 = l3.length, c3 = u4.length, s4 = c3, a3 = 0;
  for (n2.__k = [], t2 = 0; t2 < e2; t2++) null != (i4 = l3[t2]) && "boolean" != typeof i4 && "function" != typeof i4 ? (r3 = t2 + a3, (i4 = n2.__k[t2] = "string" == typeof i4 || "number" == typeof i4 || "bigint" == typeof i4 || i4.constructor == String ? g(null, i4, null, null, null) : y(i4) ? g(b, { children: i4 }, null, null, null) : void 0 === i4.constructor && i4.__b > 0 ? g(i4.type, i4.props, i4.key, i4.ref ? i4.ref : null, i4.__v) : i4).__ = n2, i4.__b = n2.__b + 1, o3 = null, -1 !== (f4 = i4.__i = L(i4, u4, r3, s4)) && (s4--, (o3 = u4[f4]) && (o3.__u |= 131072)), null == o3 || null === o3.__v ? (-1 == f4 && a3--, "function" != typeof i4.type && (i4.__u |= 65536)) : f4 !== r3 && (f4 == r3 - 1 ? a3-- : f4 == r3 + 1 ? a3++ : (f4 > r3 ? a3-- : a3++, i4.__u |= 65536))) : i4 = n2.__k[t2] = null;
  if (s4) for (t2 = 0; t2 < c3; t2++) null != (o3 = u4[t2]) && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = x(o3)), V(o3, o3));
}
function I(n2, l3, u4) {
  var t2, i4;
  if ("function" == typeof n2.type) {
    for (t2 = n2.__k, i4 = 0; t2 && i4 < t2.length; i4++) t2[i4] && (t2[i4].__ = n2, l3 = I(t2[i4], l3, u4));
    return l3;
  }
  n2.__e != l3 && (l3 && n2.type && !u4.contains(l3) && (l3 = x(n2)), u4.insertBefore(n2.__e, l3 || null), l3 = n2.__e);
  do {
    l3 = l3 && l3.nextSibling;
  } while (null != l3 && 8 === l3.nodeType);
  return l3;
}
function L(n2, l3, u4, t2) {
  var i4 = n2.key, o3 = n2.type, r3 = u4 - 1, f4 = u4 + 1, e2 = l3[u4];
  if (null === e2 || e2 && i4 == e2.key && o3 === e2.type && 0 == (131072 & e2.__u)) return u4;
  if (t2 > (null != e2 && 0 == (131072 & e2.__u) ? 1 : 0)) for (; r3 >= 0 || f4 < l3.length; ) {
    if (r3 >= 0) {
      if ((e2 = l3[r3]) && 0 == (131072 & e2.__u) && i4 == e2.key && o3 === e2.type) return r3;
      r3--;
    }
    if (f4 < l3.length) {
      if ((e2 = l3[f4]) && 0 == (131072 & e2.__u) && i4 == e2.key && o3 === e2.type) return f4;
      f4++;
    }
  }
  return -1;
}
function T(n2, l3, u4) {
  "-" === l3[0] ? n2.setProperty(l3, null == u4 ? "" : u4) : n2[l3] = null == u4 ? "" : "number" != typeof u4 || p.test(l3) ? u4 : u4 + "px";
}
function A(n2, l3, u4, t2, i4) {
  var o3;
  n: if ("style" === l3) if ("string" == typeof u4) n2.style.cssText = u4;
  else {
    if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2) for (l3 in t2) u4 && l3 in u4 || T(n2.style, l3, "");
    if (u4) for (l3 in u4) t2 && u4[l3] === t2[l3] || T(n2.style, l3, u4[l3]);
  }
  else if ("o" === l3[0] && "n" === l3[1]) o3 = l3 !== (l3 = l3.replace(/(PointerCapture)$|Capture$/i, "$1")), l3 = l3.toLowerCase() in n2 || "onFocusOut" === l3 || "onFocusIn" === l3 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u4, u4 ? t2 ? u4.u = t2.u : (u4.u = e, n2.addEventListener(l3, o3 ? s : c, o3)) : n2.removeEventListener(l3, o3 ? s : c, o3);
  else {
    if ("http://www.w3.org/2000/svg" == i4) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n2) try {
      n2[l3] = null == u4 ? "" : u4;
      break n;
    } catch (n3) {
    }
    "function" == typeof u4 || (null == u4 || false === u4 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, "popover" == l3 && 1 == u4 ? "" : u4));
  }
}
function F(n2) {
  return function(u4) {
    if (this.l) {
      var t2 = this.l[u4.type + n2];
      if (null == u4.t) u4.t = e++;
      else if (u4.t < t2.u) return;
      return t2(l.event ? l.event(u4) : u4);
    }
  };
}
function O(n2, u4, t2, i4, o3, r3, f4, e2, c3, s4) {
  var a3, h3, v2, p3, w3, _3, g2, m, x3, C3, S2, M2, $2, I2, H, L3, T3 = u4.type;
  if (void 0 !== u4.constructor) return null;
  128 & t2.__u && (c3 = !!(32 & t2.__u), r3 = [e2 = u4.__e = t2.__e]), (a3 = l.__b) && a3(u4);
  n: if ("function" == typeof T3) try {
    if (m = u4.props, x3 = "prototype" in T3 && T3.prototype.render, C3 = (a3 = T3.contextType) && i4[a3.__c], S2 = a3 ? C3 ? C3.props.value : a3.__ : i4, t2.__c ? g2 = (h3 = u4.__c = t2.__c).__ = h3.__E : (x3 ? u4.__c = h3 = new T3(m, S2) : (u4.__c = h3 = new k(m, S2), h3.constructor = T3, h3.render = q), C3 && C3.sub(h3), h3.props = m, h3.state || (h3.state = {}), h3.context = S2, h3.__n = i4, v2 = h3.__d = true, h3.__h = [], h3._sb = []), x3 && null == h3.__s && (h3.__s = h3.state), x3 && null != T3.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = d({}, h3.__s)), d(h3.__s, T3.getDerivedStateFromProps(m, h3.__s))), p3 = h3.props, w3 = h3.state, h3.__v = u4, v2) x3 && null == T3.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), x3 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
    else {
      if (x3 && null == T3.getDerivedStateFromProps && m !== p3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(m, S2), !h3.__e && (null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(m, h3.__s, S2) || u4.__v === t2.__v)) {
        for (u4.__v !== t2.__v && (h3.props = m, h3.state = h3.__s, h3.__d = false), u4.__e = t2.__e, u4.__k = t2.__k, u4.__k.some(function(n3) {
          n3 && (n3.__ = u4);
        }), M2 = 0; M2 < h3._sb.length; M2++) h3.__h.push(h3._sb[M2]);
        h3._sb = [], h3.__h.length && f4.push(h3);
        break n;
      }
      null != h3.componentWillUpdate && h3.componentWillUpdate(m, h3.__s, S2), x3 && null != h3.componentDidUpdate && h3.__h.push(function() {
        h3.componentDidUpdate(p3, w3, _3);
      });
    }
    if (h3.context = S2, h3.props = m, h3.__P = n2, h3.__e = false, $2 = l.__r, I2 = 0, x3) {
      for (h3.state = h3.__s, h3.__d = false, $2 && $2(u4), a3 = h3.render(h3.props, h3.state, h3.context), H = 0; H < h3._sb.length; H++) h3.__h.push(h3._sb[H]);
      h3._sb = [];
    } else do {
      h3.__d = false, $2 && $2(u4), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
    } while (h3.__d && ++I2 < 25);
    h3.state = h3.__s, null != h3.getChildContext && (i4 = d(d({}, i4), h3.getChildContext())), x3 && !v2 && null != h3.getSnapshotBeforeUpdate && (_3 = h3.getSnapshotBeforeUpdate(p3, w3)), P(n2, y(L3 = null != a3 && a3.type === b && null == a3.key ? a3.props.children : a3) ? L3 : [L3], u4, t2, i4, o3, r3, f4, e2, c3, s4), h3.base = u4.__e, u4.__u &= -161, h3.__h.length && f4.push(h3), g2 && (h3.__E = h3.__ = null);
  } catch (n3) {
    if (u4.__v = null, c3 || null != r3) {
      for (u4.__u |= c3 ? 160 : 128; e2 && 8 === e2.nodeType && e2.nextSibling; ) e2 = e2.nextSibling;
      r3[r3.indexOf(e2)] = null, u4.__e = e2;
    } else u4.__e = t2.__e, u4.__k = t2.__k;
    l.__e(n3, u4, t2);
  }
  else null == r3 && u4.__v === t2.__v ? (u4.__k = t2.__k, u4.__e = t2.__e) : u4.__e = z(t2.__e, u4, t2, i4, o3, r3, f4, c3, s4);
  (a3 = l.diffed) && a3(u4);
}
function j(n2, u4, t2) {
  u4.__d = void 0;
  for (var i4 = 0; i4 < t2.length; i4++) N(t2[i4], t2[++i4], t2[++i4]);
  l.__c && l.__c(u4, n2), n2.some(function(u5) {
    try {
      n2 = u5.__h, u5.__h = [], n2.some(function(n3) {
        n3.call(u5);
      });
    } catch (n3) {
      l.__e(n3, u5.__v);
    }
  });
}
function z(u4, t2, i4, o3, r3, f4, e2, c3, s4) {
  var a3, v2, p3, d3, _3, g2, m, b2 = i4.props, k3 = t2.props, C3 = t2.type;
  if ("svg" === C3 ? r3 = "http://www.w3.org/2000/svg" : "math" === C3 ? r3 = "http://www.w3.org/1998/Math/MathML" : r3 || (r3 = "http://www.w3.org/1999/xhtml"), null != f4) {
    for (a3 = 0; a3 < f4.length; a3++) if ((_3 = f4[a3]) && "setAttribute" in _3 == !!C3 && (C3 ? _3.localName === C3 : 3 === _3.nodeType)) {
      u4 = _3, f4[a3] = null;
      break;
    }
  }
  if (null == u4) {
    if (null === C3) return document.createTextNode(k3);
    u4 = document.createElementNS(r3, C3, k3.is && k3), c3 && (l.__m && l.__m(t2, f4), c3 = false), f4 = null;
  }
  if (null === C3) b2 === k3 || c3 && u4.data === k3 || (u4.data = k3);
  else {
    if (f4 = f4 && n.call(u4.childNodes), b2 = i4.props || h, !c3 && null != f4) for (b2 = {}, a3 = 0; a3 < u4.attributes.length; a3++) b2[(_3 = u4.attributes[a3]).name] = _3.value;
    for (a3 in b2) if (_3 = b2[a3], "children" == a3) ;
    else if ("dangerouslySetInnerHTML" == a3) p3 = _3;
    else if (!(a3 in k3)) {
      if ("value" == a3 && "defaultValue" in k3 || "checked" == a3 && "defaultChecked" in k3) continue;
      A(u4, a3, null, _3, r3);
    }
    for (a3 in k3) _3 = k3[a3], "children" == a3 ? d3 = _3 : "dangerouslySetInnerHTML" == a3 ? v2 = _3 : "value" == a3 ? g2 = _3 : "checked" == a3 ? m = _3 : c3 && "function" != typeof _3 || b2[a3] === _3 || A(u4, a3, _3, b2[a3], r3);
    if (v2) c3 || p3 && (v2.__html === p3.__html || v2.__html === u4.innerHTML) || (u4.innerHTML = v2.__html), t2.__k = [];
    else if (p3 && (u4.innerHTML = ""), P(u4, y(d3) ? d3 : [d3], t2, i4, o3, "foreignObject" === C3 ? "http://www.w3.org/1999/xhtml" : r3, f4, e2, f4 ? f4[0] : i4.__k && x(i4, 0), c3, s4), null != f4) for (a3 = f4.length; a3--; ) w(f4[a3]);
    c3 || (a3 = "value", "progress" === C3 && null == g2 ? u4.removeAttribute("value") : void 0 !== g2 && (g2 !== u4[a3] || "progress" === C3 && !g2 || "option" === C3 && g2 !== b2[a3]) && A(u4, a3, g2, b2[a3], r3), a3 = "checked", void 0 !== m && m !== u4[a3] && A(u4, a3, m, b2[a3], r3));
  }
  return u4;
}
function N(n2, u4, t2) {
  try {
    if ("function" == typeof n2) {
      var i4 = "function" == typeof n2.__u;
      i4 && n2.__u(), i4 && null == u4 || (n2.__u = n2(u4));
    } else n2.current = u4;
  } catch (n3) {
    l.__e(n3, t2);
  }
}
function V(n2, u4, t2) {
  var i4, o3;
  if (l.unmount && l.unmount(n2), (i4 = n2.ref) && (i4.current && i4.current !== n2.__e || N(i4, null, u4)), null != (i4 = n2.__c)) {
    if (i4.componentWillUnmount) try {
      i4.componentWillUnmount();
    } catch (n3) {
      l.__e(n3, u4);
    }
    i4.base = i4.__P = null;
  }
  if (i4 = n2.__k) for (o3 = 0; o3 < i4.length; o3++) i4[o3] && V(i4[o3], u4, t2 || "function" != typeof n2.type);
  t2 || w(n2.__e), n2.__c = n2.__ = n2.__e = n2.__d = void 0;
}
function q(n2, l3, u4) {
  return this.constructor(n2, u4);
}
var n, l, u, t, i, o, r, f, e, c, s, a, h, v, p, y;
var init_preact_module = __esm({
  "node_modules/preact/dist/preact.module.js"() {
    h = {};
    v = [];
    p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    y = Array.isArray;
    n = v.slice, l = { __e: function(n2, l3, u4, t2) {
      for (var i4, o3, r3; l3 = l3.__; ) if ((i4 = l3.__c) && !i4.__) try {
        if ((o3 = i4.constructor) && null != o3.getDerivedStateFromError && (i4.setState(o3.getDerivedStateFromError(n2)), r3 = i4.__d), null != i4.componentDidCatch && (i4.componentDidCatch(n2, t2 || {}), r3 = i4.__d), r3) return i4.__E = i4;
      } catch (l4) {
        n2 = l4;
      }
      throw n2;
    } }, u = 0, t = function(n2) {
      return null != n2 && null == n2.constructor;
    }, k.prototype.setState = function(n2, l3) {
      var u4;
      u4 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u4), this.props)), n2 && d(u4, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), S(this));
    }, k.prototype.forceUpdate = function(n2) {
      this.__v && (this.__e = true, n2 && this.__h.push(n2), S(this));
    }, k.prototype.render = b, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
      return n2.__v.__b - l3.__v.__b;
    }, M.__r = 0, e = 0, c = F(false), s = F(true), a = 0;
  }
});

// node_modules/preact-render-to-string/dist/index.module.js
function l2(e2) {
  if (0 === e2.length || false === s2.test(e2)) return e2;
  for (var t2 = 0, n2 = 0, r3 = "", o3 = ""; n2 < e2.length; n2++) {
    switch (e2.charCodeAt(n2)) {
      case 34:
        o3 = "&quot;";
        break;
      case 38:
        o3 = "&amp;";
        break;
      case 60:
        o3 = "&lt;";
        break;
      default:
        continue;
    }
    n2 !== t2 && (r3 += e2.slice(t2, n2)), r3 += o3, t2 = n2 + 1;
  }
  return n2 !== t2 && (r3 += e2.slice(t2, n2)), r3;
}
function h2(e2) {
  var t2 = "";
  for (var n2 in e2) {
    var r3 = e2[n2];
    if (null != r3 && "" !== r3) {
      var o3 = "-" == n2[0] ? n2 : u2[n2] || (u2[n2] = n2.replace(p2, "-$&").toLowerCase()), i4 = ";";
      "number" != typeof r3 || o3.startsWith("--") || f2.has(o3) || (i4 = "px;"), t2 = t2 + o3 + ":" + r3 + i4;
    }
  }
  return t2 || void 0;
}
function d2() {
  this.__d = true;
}
function _2(e2, t2) {
  return { __v: e2, context: t2, props: e2.props, setState: d2, forceUpdate: d2, __d: true, __h: new Array(0) };
}
function D(r3, o3, i4) {
  var a3 = l.__s;
  l.__s = true, k2 = l.__b, w2 = l.diffed, x2 = l.__r, C2 = l.unmount;
  var c3 = _(b, null);
  c3.__k = [r3];
  try {
    var s4 = U(r3, o3 || A2, false, void 0, c3, false, i4);
    return E(s4) ? s4.join(j2) : s4;
  } catch (e2) {
    if (e2.then) throw new Error('Use "renderToStringAsync" for suspenseful rendering.');
    throw e2;
  } finally {
    l.__c && l.__c(r3, L2), l.__s = a3, L2.length = 0;
  }
}
function P2(e2, t2) {
  var n2, r3 = e2.type, o3 = true;
  return e2.__c ? (o3 = false, (n2 = e2.__c).state = n2.__s) : n2 = new r3(e2.props, t2), e2.__c = n2, n2.__v = e2, n2.props = e2.props, n2.context = t2, n2.__d = true, null == n2.state && (n2.state = A2), null == n2.__s && (n2.__s = n2.state), r3.getDerivedStateFromProps ? n2.state = T2({}, n2.state, r3.getDerivedStateFromProps(n2.props, n2.state)) : o3 && n2.componentWillMount ? (n2.componentWillMount(), n2.state = n2.__s !== n2.state ? n2.__s : n2.state) : !o3 && n2.componentWillUpdate && n2.componentWillUpdate(), x2 && x2(e2), n2.render(n2.props, n2.state, t2);
}
function U(t2, s4, u4, f4, p3, d3, v2) {
  if (null == t2 || true === t2 || false === t2 || t2 === j2) return j2;
  var m = typeof t2;
  if ("object" != m) return "function" == m ? j2 : "string" == m ? l2(t2) : t2 + j2;
  if (E(t2)) {
    var y2, g2 = j2;
    p3.__k = t2;
    for (var b2 = 0; b2 < t2.length; b2++) {
      var S2 = t2[b2];
      if (null != S2 && "boolean" != typeof S2) {
        var L3, D2 = U(S2, s4, u4, f4, p3, d3, v2);
        "string" == typeof D2 ? g2 += D2 : (y2 || (y2 = []), g2 && y2.push(g2), g2 = j2, E(D2) ? (L3 = y2).push.apply(L3, D2) : y2.push(D2));
      }
    }
    return y2 ? (g2 && y2.push(g2), y2) : g2;
  }
  if (void 0 !== t2.constructor) return j2;
  t2.__ = p3, k2 && k2(t2);
  var F2 = t2.type, M2 = t2.props;
  if ("function" == typeof F2) {
    var W, $2, z2, H = s4;
    if (F2 === b) {
      if ("tpl" in M2) {
        for (var N2 = j2, q2 = 0; q2 < M2.tpl.length; q2++) if (N2 += M2.tpl[q2], M2.exprs && q2 < M2.exprs.length) {
          var B = M2.exprs[q2];
          if (null == B) continue;
          "object" != typeof B || void 0 !== B.constructor && !E(B) ? N2 += B : N2 += U(B, s4, u4, f4, t2, d3, v2);
        }
        return N2;
      }
      if ("UNSTABLE_comment" in M2) return "<!--" + l2(M2.UNSTABLE_comment) + "-->";
      $2 = M2.children;
    } else {
      if (null != (W = F2.contextType)) {
        var I2 = s4[W.__c];
        H = I2 ? I2.props.value : W.__;
      }
      var O2 = F2.prototype && "function" == typeof F2.prototype.render;
      if (O2) $2 = P2(t2, H), z2 = t2.__c;
      else {
        t2.__c = z2 = _2(t2, H);
        for (var R = 0; z2.__d && R++ < 25; ) z2.__d = false, x2 && x2(t2), $2 = F2.call(z2, M2, H);
        z2.__d = true;
      }
      if (null != z2.getChildContext && (s4 = T2({}, s4, z2.getChildContext())), O2 && l.errorBoundaries && (F2.getDerivedStateFromError || z2.componentDidCatch)) {
        $2 = null != $2 && $2.type === b && null == $2.key && null == $2.props.tpl ? $2.props.children : $2;
        try {
          return U($2, s4, u4, f4, t2, d3, v2);
        } catch (e2) {
          return F2.getDerivedStateFromError && (z2.__s = F2.getDerivedStateFromError(e2)), z2.componentDidCatch && z2.componentDidCatch(e2, A2), z2.__d ? ($2 = P2(t2, s4), null != (z2 = t2.__c).getChildContext && (s4 = T2({}, s4, z2.getChildContext())), U($2 = null != $2 && $2.type === b && null == $2.key && null == $2.props.tpl ? $2.props.children : $2, s4, u4, f4, t2, d3, v2)) : j2;
        } finally {
          w2 && w2(t2), t2.__ = null, C2 && C2(t2);
        }
      }
    }
    $2 = null != $2 && $2.type === b && null == $2.key && null == $2.props.tpl ? $2.props.children : $2;
    try {
      var V2 = U($2, s4, u4, f4, t2, d3, v2);
      return w2 && w2(t2), t2.__ = null, l.unmount && l.unmount(t2), V2;
    } catch (n2) {
      if (!d3 && v2 && v2.onError) {
        var K = v2.onError(n2, t2, function(e2) {
          return U(e2, s4, u4, f4, t2, d3, v2);
        });
        if (void 0 !== K) return K;
        var G = l.__e;
        return G && G(n2, t2), j2;
      }
      if (!d3) throw n2;
      if (!n2 || "function" != typeof n2.then) throw n2;
      return n2.then(function e2() {
        try {
          return U($2, s4, u4, f4, t2, d3, v2);
        } catch (n3) {
          if (!n3 || "function" != typeof n3.then) throw n3;
          return n3.then(function() {
            return U($2, s4, u4, f4, t2, d3, v2);
          }, e2);
        }
      });
    }
  }
  var J, Q = "<" + F2, X = j2;
  for (var Y in M2) {
    var ee = M2[Y];
    if ("function" != typeof ee || "class" === Y || "className" === Y) {
      switch (Y) {
        case "children":
          J = ee;
          continue;
        case "key":
        case "ref":
        case "__self":
        case "__source":
          continue;
        case "htmlFor":
          if ("for" in M2) continue;
          Y = "for";
          break;
        case "className":
          if ("class" in M2) continue;
          Y = "class";
          break;
        case "defaultChecked":
          Y = "checked";
          break;
        case "defaultSelected":
          Y = "selected";
          break;
        case "defaultValue":
        case "value":
          switch (Y = "value", F2) {
            case "textarea":
              J = ee;
              continue;
            case "select":
              f4 = ee;
              continue;
            case "option":
              f4 != ee || "selected" in M2 || (Q += " selected");
          }
          break;
        case "dangerouslySetInnerHTML":
          X = ee && ee.__html;
          continue;
        case "style":
          "object" == typeof ee && (ee = h2(ee));
          break;
        case "acceptCharset":
          Y = "accept-charset";
          break;
        case "httpEquiv":
          Y = "http-equiv";
          break;
        default:
          if (o2.test(Y)) Y = Y.replace(o2, "$1:$2").toLowerCase();
          else {
            if (r2.test(Y)) continue;
            "-" !== Y[4] && !c2.has(Y) || null == ee ? u4 ? a2.test(Y) && (Y = "panose1" === Y ? "panose-1" : Y.replace(/([A-Z])/g, "-$1").toLowerCase()) : i2.test(Y) && (Y = Y.toLowerCase()) : ee += j2;
          }
      }
      null != ee && false !== ee && (Q = true === ee || ee === j2 ? Q + " " + Y : Q + " " + Y + '="' + ("string" == typeof ee ? l2(ee) : ee + j2) + '"');
    }
  }
  if (r2.test(F2)) throw new Error(F2 + " is not a valid HTML tag name in " + Q + ">");
  if (X || ("string" == typeof J ? X = l2(J) : null != J && false !== J && true !== J && (X = U(J, s4, "svg" === F2 || "foreignObject" !== F2 && u4, f4, t2, d3, v2))), w2 && w2(t2), t2.__ = null, C2 && C2(t2), !X && Z.has(F2)) return Q + "/>";
  var te = "</" + F2 + ">", ne = Q + ">";
  return E(X) ? [ne].concat(X, [te]) : "string" != typeof X ? [ne, X, te] : ne + X + te;
}
var r2, o2, i2, a2, c2, s2, u2, f2, p2, k2, w2, x2, C2, A2, L2, E, T2, j2, Z;
var init_index_module = __esm({
  "node_modules/preact-render-to-string/dist/index.module.js"() {
    init_preact_module();
    r2 = /[\s\n\\/='"\0<>]/;
    o2 = /^(xlink|xmlns|xml)([A-Z])/;
    i2 = /^accessK|^auto[A-Z]|^cell|^ch|^col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|src[A-Z]|tabI|useM|item[A-Z]/;
    a2 = /^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/;
    c2 = /* @__PURE__ */ new Set(["draggable", "spellcheck"]);
    s2 = /["&<]/;
    u2 = {};
    f2 = /* @__PURE__ */ new Set(["animation-iteration-count", "border-image-outset", "border-image-slice", "border-image-width", "box-flex", "box-flex-group", "box-ordinal-group", "column-count", "fill-opacity", "flex", "flex-grow", "flex-negative", "flex-order", "flex-positive", "flex-shrink", "flood-opacity", "font-weight", "grid-column", "grid-row", "line-clamp", "line-height", "opacity", "order", "orphans", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-miterlimit", "stroke-opacity", "stroke-width", "tab-size", "widows", "z-index", "zoom"]);
    p2 = /[A-Z]/g;
    A2 = {};
    L2 = [];
    E = Array.isArray;
    T2 = Object.assign;
    j2 = "";
    Z = /* @__PURE__ */ new Set(["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
  }
});

// node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
function u3(e2, t2, n2, o3, i4, u4) {
  t2 || (t2 = {});
  var a3, c3, l3 = t2;
  "ref" in t2 && (a3 = t2.ref, delete t2.ref);
  var p3 = { type: e2, props: l3, key: n2, ref: a3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --f3, __i: -1, __u: 0, __source: i4, __self: u4 };
  if ("function" == typeof e2 && (a3 = e2.defaultProps)) for (c3 in a3) void 0 === l3[c3] && (l3[c3] = a3[c3]);
  return l.vnode && l.vnode(p3), p3;
}
var f3, i3;
var init_jsxRuntime_module = __esm({
  "node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js"() {
    init_preact_module();
    init_preact_module();
    f3 = 0;
    i3 = Array.isArray;
  }
});

// node_modules/@auth/core/lib/pages/error.js
function ErrorPage(props) {
  const { url, error = "default", theme } = props;
  const signinPageUrl = `${url}/signin`;
  const errors = {
    default: {
      status: 200,
      heading: "Error",
      message: u3("p", { children: u3("a", { className: "site", href: url?.origin, children: url?.host }) })
    },
    Configuration: {
      status: 500,
      heading: "Server error",
      message: u3("div", { children: [u3("p", { children: "There is a problem with the server configuration." }), u3("p", { children: "Check the server logs for more information." })] })
    },
    AccessDenied: {
      status: 403,
      heading: "Access Denied",
      message: u3("div", { children: [u3("p", { children: "You do not have permission to sign in." }), u3("p", { children: u3("a", { className: "button", href: signinPageUrl, children: "Sign in" }) })] })
    },
    Verification: {
      status: 403,
      heading: "Unable to sign in",
      message: u3("div", { children: [u3("p", { children: "The sign in link is no longer valid." }), u3("p", { children: "It may have been used already or it may have expired." })] }),
      signin: u3("a", { className: "button", href: signinPageUrl, children: "Sign in" })
    }
  };
  const { status, heading, message: message2, signin } = errors[error] ?? errors.default;
  return {
    status,
    html: u3("div", { className: "error", children: [theme?.brandColor && u3("style", { dangerouslySetInnerHTML: {
      __html: `
        :root {
          --brand-color: ${theme?.brandColor}
        }
      `
    } }), u3("div", { className: "card", children: [theme?.logo && u3("img", { src: theme?.logo, alt: "Logo", className: "logo" }), u3("h1", { children: heading }), u3("div", { className: "message", children: message2 }), signin] })] })
  };
}
var init_error = __esm({
  "node_modules/@auth/core/lib/pages/error.js"() {
    init_jsxRuntime_module();
  }
});

// node_modules/@auth/core/lib/utils/webauthn-client.js
async function webauthnScript(authURL, providerID) {
  const WebAuthnBrowser = window.SimpleWebAuthnBrowser;
  async function fetchOptions(action) {
    const url = new URL(`${authURL}/webauthn-options/${providerID}`);
    if (action)
      url.searchParams.append("action", action);
    const formFields = getFormFields();
    formFields.forEach((field) => {
      url.searchParams.append(field.name, field.value);
    });
    const res = await fetch(url);
    if (!res.ok) {
      console.error("Failed to fetch options", res);
      return;
    }
    return res.json();
  }
  function getForm() {
    const formID = `#${providerID}-form`;
    const form = document.querySelector(formID);
    if (!form)
      throw new Error(`Form '${formID}' not found`);
    return form;
  }
  function getFormFields() {
    const form = getForm();
    const formFields = Array.from(form.querySelectorAll("input[data-form-field]"));
    return formFields;
  }
  async function submitForm(action, data) {
    const form = getForm();
    if (action) {
      const actionInput = document.createElement("input");
      actionInput.type = "hidden";
      actionInput.name = "action";
      actionInput.value = action;
      form.appendChild(actionInput);
    }
    if (data) {
      const dataInput = document.createElement("input");
      dataInput.type = "hidden";
      dataInput.name = "data";
      dataInput.value = JSON.stringify(data);
      form.appendChild(dataInput);
    }
    return form.submit();
  }
  async function authenticationFlow(options2, autofill) {
    const authResp = await WebAuthnBrowser.startAuthentication(options2, autofill);
    return await submitForm("authenticate", authResp);
  }
  async function registrationFlow(options2) {
    const formFields = getFormFields();
    formFields.forEach((field) => {
      if (field.required && !field.value) {
        throw new Error(`Missing required field: ${field.name}`);
      }
    });
    const regResp = await WebAuthnBrowser.startRegistration(options2);
    return await submitForm("register", regResp);
  }
  async function autofillAuthentication() {
    if (!WebAuthnBrowser.browserSupportsWebAuthnAutofill())
      return;
    const res = await fetchOptions("authenticate");
    if (!res) {
      console.error("Failed to fetch option for autofill authentication");
      return;
    }
    try {
      await authenticationFlow(res.options, true);
    } catch (e2) {
      console.error(e2);
    }
  }
  async function setupForm() {
    const form = getForm();
    if (!WebAuthnBrowser.browserSupportsWebAuthn()) {
      form.style.display = "none";
      return;
    }
    if (form) {
      form.addEventListener("submit", async (e2) => {
        e2.preventDefault();
        const res = await fetchOptions(void 0);
        if (!res) {
          console.error("Failed to fetch options for form submission");
          return;
        }
        if (res.action === "authenticate") {
          try {
            await authenticationFlow(res.options, false);
          } catch (e3) {
            console.error(e3);
          }
        } else if (res.action === "register") {
          try {
            await registrationFlow(res.options);
          } catch (e3) {
            console.error(e3);
          }
        }
      });
    }
  }
  setupForm();
  autofillAuthentication();
}
var init_webauthn_client = __esm({
  "node_modules/@auth/core/lib/utils/webauthn-client.js"() {
  }
});

// node_modules/@auth/core/lib/pages/signin.js
function ConditionalUIScript(providerID) {
  const startConditionalUIScript = `
const currentURL = window.location.href;
const authURL = currentURL.substring(0, currentURL.lastIndexOf('/'));
(${webauthnScript})(authURL, "${providerID}");
`;
  return u3(b, { children: u3("script", { dangerouslySetInnerHTML: { __html: startConditionalUIScript } }) });
}
function SigninPage(props) {
  const { csrfToken, providers = [], callbackUrl, theme, email, error: errorType } = props;
  if (typeof document !== "undefined" && theme?.brandColor) {
    document.documentElement.style.setProperty("--brand-color", theme.brandColor);
  }
  if (typeof document !== "undefined" && theme?.buttonText) {
    document.documentElement.style.setProperty("--button-text-color", theme.buttonText);
  }
  const error = errorType && (signinErrors[errorType] ?? signinErrors.default);
  const providerLogoPath = "https://authjs.dev/img/providers";
  const conditionalUIProviderID = providers.find((provider) => provider.type === "webauthn" && provider.enableConditionalUI)?.id;
  return u3("div", { className: "signin", children: [theme?.brandColor && u3("style", { dangerouslySetInnerHTML: {
    __html: `:root {--brand-color: ${theme.brandColor}}`
  } }), theme?.buttonText && u3("style", { dangerouslySetInnerHTML: {
    __html: `
        :root {
          --button-text-color: ${theme.buttonText}
        }
      `
  } }), u3("div", { className: "card", children: [error && u3("div", { className: "error", children: u3("p", { children: error }) }), theme?.logo && u3("img", { src: theme.logo, alt: "Logo", className: "logo" }), providers.map((provider, i4) => {
    let bg, brandColor, logo;
    if (provider.type === "oauth" || provider.type === "oidc") {
      ;
      ({
        bg = "#fff",
        brandColor,
        logo = `${providerLogoPath}/${provider.id}.svg`
      } = provider.style ?? {});
    }
    const color = brandColor ?? bg ?? "#fff";
    return u3("div", { className: "provider", children: [provider.type === "oauth" || provider.type === "oidc" ? u3("form", { action: provider.signinUrl, method: "POST", children: [u3("input", { type: "hidden", name: "csrfToken", value: csrfToken }), callbackUrl && u3("input", { type: "hidden", name: "callbackUrl", value: callbackUrl }), u3("button", { type: "submit", className: "button", style: {
      "--provider-bg": "#fff",
      "--provider-bg-hover": `color-mix(in srgb, ${color} 30%, #fff)`,
      "--provider-dark-bg": "#161b22",
      "--provider-dark-bg-hover": `color-mix(in srgb, ${color} 30%, #000)`
    }, tabIndex: 0, children: [u3("span", { style: {
      filter: "invert(1) grayscale(1) brightness(1.3) contrast(9000)",
      "mix-blend-mode": "luminosity",
      opacity: 0.95
    }, children: ["Sign in with ", provider.name] }), logo && u3("img", { loading: "lazy", height: 24, src: logo })] })] }) : null, (provider.type === "email" || provider.type === "credentials" || provider.type === "webauthn") && i4 > 0 && providers[i4 - 1].type !== "email" && providers[i4 - 1].type !== "credentials" && providers[i4 - 1].type !== "webauthn" && u3("hr", {}), provider.type === "email" && u3("form", { action: provider.signinUrl, method: "POST", children: [u3("input", { type: "hidden", name: "csrfToken", value: csrfToken }), u3("label", { className: "section-header", htmlFor: `input-email-for-${provider.id}-provider`, children: "Email" }), u3("input", { id: `input-email-for-${provider.id}-provider`, autoFocus: true, type: "email", name: "email", value: email, placeholder: "email@example.com", required: true }), u3("button", { id: "submitButton", type: "submit", tabIndex: 0, children: ["Sign in with ", provider.name] })] }), provider.type === "credentials" && u3("form", { action: provider.callbackUrl, method: "POST", children: [u3("input", { type: "hidden", name: "csrfToken", value: csrfToken }), Object.keys(provider.credentials).map((credential) => {
      return u3("div", { children: [u3("label", { className: "section-header", htmlFor: `input-${credential}-for-${provider.id}-provider`, children: provider.credentials[credential].label ?? credential }), u3("input", { name: credential, id: `input-${credential}-for-${provider.id}-provider`, type: provider.credentials[credential].type ?? "text", placeholder: provider.credentials[credential].placeholder ?? "", ...provider.credentials[credential] })] }, `input-group-${provider.id}`);
    }), u3("button", { id: "submitButton", type: "submit", tabIndex: 0, children: ["Sign in with ", provider.name] })] }), provider.type === "webauthn" && u3("form", { action: provider.callbackUrl, method: "POST", id: `${provider.id}-form`, children: [u3("input", { type: "hidden", name: "csrfToken", value: csrfToken }), Object.keys(provider.formFields).map((field) => {
      return u3("div", { children: [u3("label", { className: "section-header", htmlFor: `input-${field}-for-${provider.id}-provider`, children: provider.formFields[field].label ?? field }), u3("input", { name: field, "data-form-field": true, id: `input-${field}-for-${provider.id}-provider`, type: provider.formFields[field].type ?? "text", placeholder: provider.formFields[field].placeholder ?? "", ...provider.formFields[field] })] }, `input-group-${provider.id}`);
    }), u3("button", { id: `submitButton-${provider.id}`, type: "submit", tabIndex: 0, children: ["Sign in with ", provider.name] })] }), (provider.type === "email" || provider.type === "credentials" || provider.type === "webauthn") && i4 + 1 < providers.length && u3("hr", {})] }, provider.id);
  })] }), conditionalUIProviderID && ConditionalUIScript(conditionalUIProviderID)] });
}
var signinErrors;
var init_signin = __esm({
  "node_modules/@auth/core/lib/pages/signin.js"() {
    init_jsxRuntime_module();
    init_webauthn_client();
    signinErrors = {
      default: "Unable to sign in.",
      Signin: "Try signing in with a different account.",
      OAuthSignin: "Try signing in with a different account.",
      OAuthCallbackError: "Try signing in with a different account.",
      OAuthCreateAccount: "Try signing in with a different account.",
      EmailCreateAccount: "Try signing in with a different account.",
      Callback: "Try signing in with a different account.",
      OAuthAccountNotLinked: "To confirm your identity, sign in with the same account you used originally.",
      EmailSignin: "The e-mail could not be sent.",
      CredentialsSignin: "Sign in failed. Check the details you provided are correct.",
      SessionRequired: "Please sign in to access this page."
    };
  }
});

// node_modules/@auth/core/lib/pages/signout.js
function SignoutPage(props) {
  const { url, csrfToken, theme } = props;
  return u3("div", { className: "signout", children: [theme?.brandColor && u3("style", { dangerouslySetInnerHTML: {
    __html: `
        :root {
          --brand-color: ${theme.brandColor}
        }
      `
  } }), theme?.buttonText && u3("style", { dangerouslySetInnerHTML: {
    __html: `
        :root {
          --button-text-color: ${theme.buttonText}
        }
      `
  } }), u3("div", { className: "card", children: [theme?.logo && u3("img", { src: theme.logo, alt: "Logo", className: "logo" }), u3("h1", { children: "Signout" }), u3("p", { children: "Are you sure you want to sign out?" }), u3("form", { action: url?.toString(), method: "POST", children: [u3("input", { type: "hidden", name: "csrfToken", value: csrfToken }), u3("button", { id: "submitButton", type: "submit", children: "Sign out" })] })] })] });
}
var init_signout = __esm({
  "node_modules/@auth/core/lib/pages/signout.js"() {
    init_jsxRuntime_module();
  }
});

// node_modules/@auth/core/lib/pages/styles.js
var styles_default;
var init_styles = __esm({
  "node_modules/@auth/core/lib/pages/styles.js"() {
    styles_default = `:root {
  --border-width: 1px;
  --border-radius: 0.5rem;
  --color-error: #c94b4b;
  --color-info: #157efb;
  --color-info-hover: #0f6ddb;
  --color-info-text: #fff;
}

.__next-auth-theme-auto,
.__next-auth-theme-light {
  --color-background: #ececec;
  --color-background-hover: rgba(236, 236, 236, 0.8);
  --color-background-card: #fff;
  --color-text: #000;
  --color-primary: #444;
  --color-control-border: #bbb;
  --color-button-active-background: #f9f9f9;
  --color-button-active-border: #aaa;
  --color-separator: #ccc;
}

.__next-auth-theme-dark {
  --color-background: #161b22;
  --color-background-hover: rgba(22, 27, 34, 0.8);
  --color-background-card: #0d1117;
  --color-text: #fff;
  --color-primary: #ccc;
  --color-control-border: #555;
  --color-button-active-background: #060606;
  --color-button-active-border: #666;
  --color-separator: #444;
}

@media (prefers-color-scheme: dark) {
  .__next-auth-theme-auto {
    --color-background: #161b22;
    --color-background-hover: rgba(22, 27, 34, 0.8);
    --color-background-card: #0d1117;
    --color-text: #fff;
    --color-primary: #ccc;
    --color-control-border: #555;
    --color-button-active-background: #060606;
    --color-button-active-border: #666;
    --color-separator: #444;
  }

  button,
  a.button {
    color: var(--provider-dark-color, var(--color-primary)) !important;
    background-color: var(
      --provider-dark-bg,
      var(--color-background)
    ) !important;
  }

    :is(button,a.button):hover {
      background-color: var(
        --provider-dark-bg-hover,
        var(--color-background-hover)
      ) !important;
    }

    :is(button,a.button) span {
      color: var(--provider-dark-bg) !important;
    }
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--color-background);
  margin: 0;
  padding: 0;
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    "Noto Sans",
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji";
}

h1 {
  margin-bottom: 1.5rem;
  padding: 0 1rem;
  font-weight: 400;
  color: var(--color-text);
}

p {
  margin-bottom: 1.5rem;
  padding: 0 1rem;
  color: var(--color-text);
}

form {
  margin: 0;
  padding: 0;
}

label {
  font-weight: 500;
  text-align: left;
  margin-bottom: 0.25rem;
  display: block;
  color: var(--color-text);
}

input[type] {
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  border: var(--border-width) solid var(--color-control-border);
  background: var(--color-background-card);
  font-size: 1rem;
  border-radius: var(--border-radius);
  color: var(--color-text);
}

p {
  font-size: 1.1rem;
  line-height: 2rem;
}

a.button {
  text-decoration: none;
  line-height: 1rem;
}

a.button:link,
  a.button:visited {
    background-color: var(--color-background);
    color: var(--color-primary);
  }

button,
a.button {
  padding: 0.75rem 1rem;
  color: var(--provider-color, var(--color-primary));
  background-color: var(--provider-bg, var(--color-background));
  border: 1px solid #00000031;
  font-size: 0.9rem;
  height: 50px;
  border-radius: var(--border-radius);
  transition: background-color 250ms ease-in-out;
  font-weight: 300;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

:is(button,a.button):hover {
    background-color: var(--provider-bg-hover, var(--color-background-hover));
    cursor: pointer;
  }

:is(button,a.button):active {
    cursor: pointer;
  }

:is(button,a.button) span {
    color: #fff;
  }

#submitButton {
  color: var(--button-text-color, var(--color-info-text));
  background-color: var(--brand-color, var(--color-info));
  width: 100%;
}

#submitButton:hover {
    background-color: var(
      --button-hover-bg,
      var(--color-info-hover)
    ) !important;
  }

a.site {
  color: var(--color-primary);
  text-decoration: none;
  font-size: 1rem;
  line-height: 2rem;
}

a.site:hover {
    text-decoration: underline;
  }

.page {
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page > div {
    text-align: center;
  }

.error a.button {
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 0.5rem;
  }

.error .message {
    margin-bottom: 1.5rem;
  }

.signin input[type="text"] {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

.signin hr {
    display: block;
    border: 0;
    border-top: 1px solid var(--color-separator);
    margin: 2rem auto 1rem auto;
    overflow: visible;
  }

.signin hr::before {
      content: "or";
      background: var(--color-background-card);
      color: #888;
      padding: 0 0.4rem;
      position: relative;
      top: -0.7rem;
    }

.signin .error {
    background: #f5f5f5;
    font-weight: 500;
    border-radius: 0.3rem;
    background: var(--color-error);
  }

.signin .error p {
      text-align: left;
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
      line-height: 1.2rem;
      color: var(--color-info-text);
    }

.signin > div,
  .signin form {
    display: block;
  }

.signin > div input[type], .signin form input[type] {
      margin-bottom: 0.5rem;
    }

.signin > div button, .signin form button {
      width: 100%;
    }

.signin .provider + .provider {
    margin-top: 1rem;
  }

.logo {
  display: inline-block;
  max-width: 150px;
  margin: 1.25rem 0;
  max-height: 70px;
}

.card {
  background-color: var(--color-background-card);
  border-radius: 1rem;
  padding: 1.25rem 2rem;
}

.card .header {
    color: var(--color-primary);
  }

.card input[type]::-moz-placeholder {
    color: color-mix(
      in srgb,
      var(--color-text) 20%,
      var(--color-button-active-background)
    );
  }

.card input[type]::placeholder {
    color: color-mix(
      in srgb,
      var(--color-text) 20%,
      var(--color-button-active-background)
    );
  }

.card input[type] {
    background: color-mix(in srgb, var(--color-background-card) 95%, black);
  }

.section-header {
  color: var(--color-text);
}

@media screen and (min-width: 450px) {
  .card {
    margin: 2rem 0;
    width: 368px;
  }
}

@media screen and (max-width: 450px) {
  .card {
    margin: 1rem 0;
    width: 343px;
  }
}
`;
  }
});

// node_modules/@auth/core/lib/pages/verify-request.js
function VerifyRequestPage(props) {
  const { url, theme } = props;
  return u3("div", { className: "verify-request", children: [theme.brandColor && u3("style", { dangerouslySetInnerHTML: {
    __html: `
        :root {
          --brand-color: ${theme.brandColor}
        }
      `
  } }), u3("div", { className: "card", children: [theme.logo && u3("img", { src: theme.logo, alt: "Logo", className: "logo" }), u3("h1", { children: "Check your email" }), u3("p", { children: "A sign in link has been sent to your email address." }), u3("p", { children: u3("a", { className: "site", href: url.origin, children: url.host }) })] })] });
}
var init_verify_request = __esm({
  "node_modules/@auth/core/lib/pages/verify-request.js"() {
    init_jsxRuntime_module();
  }
});

// node_modules/@auth/core/lib/pages/index.js
function send({ html: html2, title, status, cookies, theme, headTags }) {
  return {
    cookies,
    status,
    headers: { "Content-Type": "text/html" },
    body: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>${styles_default}</style><title>${title}</title>${headTags ?? ""}</head><body class="__next-auth-theme-${theme?.colorScheme ?? "auto"}"><div class="page">${D(html2)}</div></body></html>`
  };
}
function renderPage(params) {
  const { url, theme, query, cookies, pages, providers } = params;
  return {
    csrf(skip, options2, cookies2) {
      if (!skip) {
        return {
          headers: { "Content-Type": "application/json" },
          body: { csrfToken: options2.csrfToken },
          cookies: cookies2
        };
      }
      options2.logger.warn("csrf-disabled");
      cookies2.push({
        name: options2.cookies.csrfToken.name,
        value: "",
        options: { ...options2.cookies.csrfToken.options, maxAge: 0 }
      });
      return { status: 404, cookies: cookies2 };
    },
    providers(providers2) {
      return {
        headers: { "Content-Type": "application/json" },
        body: providers2.reduce((acc, { id, name, type, signinUrl, callbackUrl }) => {
          acc[id] = { id, name, type, signinUrl, callbackUrl };
          return acc;
        }, {})
      };
    },
    signin(providerId, error) {
      if (providerId)
        throw new UnknownAction("Unsupported action");
      if (pages?.signIn) {
        let signinUrl = `${pages.signIn}${pages.signIn.includes("?") ? "&" : "?"}${new URLSearchParams({ callbackUrl: params.callbackUrl ?? "/" })}`;
        if (error)
          signinUrl = `${signinUrl}&${new URLSearchParams({ error })}`;
        return { redirect: signinUrl, cookies };
      }
      const webauthnProvider = providers?.find((p3) => p3.type === "webauthn" && p3.enableConditionalUI && !!p3.simpleWebAuthnBrowserVersion);
      let simpleWebAuthnBrowserScript = "";
      if (webauthnProvider) {
        const { simpleWebAuthnBrowserVersion } = webauthnProvider;
        simpleWebAuthnBrowserScript = `<script src="https://unpkg.com/@simplewebauthn/browser@${simpleWebAuthnBrowserVersion}/dist/bundle/index.umd.min.js" crossorigin="anonymous"><\/script>`;
      }
      return send({
        cookies,
        theme,
        html: SigninPage({
          csrfToken: params.csrfToken,
          // We only want to render providers
          providers: params.providers?.filter((provider) => (
            // Always render oauth and email type providers
            ["email", "oauth", "oidc"].includes(provider.type) || // Only render credentials type provider if credentials are defined
            provider.type === "credentials" && provider.credentials || // Only render webauthn type provider if formFields are defined
            provider.type === "webauthn" && provider.formFields || // Don't render other provider types
            false
          )),
          callbackUrl: params.callbackUrl,
          theme: params.theme,
          error,
          ...query
        }),
        title: "Sign In",
        headTags: simpleWebAuthnBrowserScript
      });
    },
    signout() {
      if (pages?.signOut)
        return { redirect: pages.signOut, cookies };
      return send({
        cookies,
        theme,
        html: SignoutPage({ csrfToken: params.csrfToken, url, theme }),
        title: "Sign Out"
      });
    },
    verifyRequest(props) {
      if (pages?.verifyRequest)
        return {
          redirect: `${pages.verifyRequest}${url?.search ?? ""}`,
          cookies
        };
      return send({
        cookies,
        theme,
        html: VerifyRequestPage({ url, theme, ...props }),
        title: "Verify Request"
      });
    },
    error(error) {
      if (pages?.error) {
        return {
          redirect: `${pages.error}${pages.error.includes("?") ? "&" : "?"}error=${error}`,
          cookies
        };
      }
      return send({
        cookies,
        theme,
        // @ts-expect-error fix error type
        ...ErrorPage({ url, theme, error }),
        title: "Error"
      });
    }
  };
}
var init_pages = __esm({
  "node_modules/@auth/core/lib/pages/index.js"() {
    init_index_module();
    init_error();
    init_signin();
    init_signout();
    init_styles();
    init_verify_request();
    init_errors();
  }
});

// node_modules/@auth/core/lib/utils/date.js
function fromDate(time, date = Date.now()) {
  return new Date(date + time * 1e3);
}
var init_date = __esm({
  "node_modules/@auth/core/lib/utils/date.js"() {
  }
});

// node_modules/@auth/core/lib/actions/callback/handle-login.js
async function handleLoginOrRegister(sessionToken, _profile, _account, options2) {
  if (!_account?.providerAccountId || !_account.type)
    throw new Error("Missing or invalid provider account");
  if (!["email", "oauth", "oidc", "webauthn"].includes(_account.type))
    throw new Error("Provider not supported");
  const { adapter, jwt, events, session: { strategy: sessionStrategy, generateSessionToken } } = options2;
  if (!adapter) {
    return { user: _profile, account: _account };
  }
  const profile = _profile;
  let account = _account;
  const { createUser, updateUser, getUser, getUserByAccount, getUserByEmail, linkAccount, createSession, getSessionAndUser, deleteSession } = adapter;
  let session2 = null;
  let user = null;
  let isNewUser = false;
  const useJwtSession = sessionStrategy === "jwt";
  if (sessionToken) {
    if (useJwtSession) {
      try {
        const salt = options2.cookies.sessionToken.name;
        session2 = await jwt.decode({ ...jwt, token: sessionToken, salt });
        if (session2 && "sub" in session2 && session2.sub) {
          user = await getUser(session2.sub);
        }
      } catch {
      }
    } else {
      const userAndSession = await getSessionAndUser(sessionToken);
      if (userAndSession) {
        session2 = userAndSession.session;
        user = userAndSession.user;
      }
    }
  }
  if (account.type === "email") {
    const userByEmail = await getUserByEmail(profile.email);
    if (userByEmail) {
      if (user?.id !== userByEmail.id && !useJwtSession && sessionToken) {
        await deleteSession(sessionToken);
      }
      user = await updateUser({
        id: userByEmail.id,
        emailVerified: /* @__PURE__ */ new Date()
      });
      await events.updateUser?.({ user });
    } else {
      user = await createUser({ ...profile, emailVerified: /* @__PURE__ */ new Date() });
      await events.createUser?.({ user });
      isNewUser = true;
    }
    session2 = useJwtSession ? {} : await createSession({
      sessionToken: generateSessionToken(),
      userId: user.id,
      expires: fromDate(options2.session.maxAge)
    });
    return { session: session2, user, isNewUser };
  } else if (account.type === "webauthn") {
    const userByAccount2 = await getUserByAccount({
      providerAccountId: account.providerAccountId,
      provider: account.provider
    });
    if (userByAccount2) {
      if (user) {
        if (userByAccount2.id === user.id) {
          const currentAccount2 = { ...account, userId: user.id };
          return { session: session2, user, isNewUser, account: currentAccount2 };
        }
        throw new AccountNotLinked("The account is already associated with another user", { provider: account.provider });
      }
      session2 = useJwtSession ? {} : await createSession({
        sessionToken: generateSessionToken(),
        userId: userByAccount2.id,
        expires: fromDate(options2.session.maxAge)
      });
      const currentAccount = {
        ...account,
        userId: userByAccount2.id
      };
      return {
        session: session2,
        user: userByAccount2,
        isNewUser,
        account: currentAccount
      };
    } else {
      if (user) {
        await linkAccount({ ...account, userId: user.id });
        await events.linkAccount?.({ user, account, profile });
        const currentAccount2 = { ...account, userId: user.id };
        return { session: session2, user, isNewUser, account: currentAccount2 };
      }
      const userByEmail = profile.email ? await getUserByEmail(profile.email) : null;
      if (userByEmail) {
        throw new AccountNotLinked("Another account already exists with the same e-mail address", { provider: account.provider });
      } else {
        user = await createUser({ ...profile });
      }
      await events.createUser?.({ user });
      await linkAccount({ ...account, userId: user.id });
      await events.linkAccount?.({ user, account, profile });
      session2 = useJwtSession ? {} : await createSession({
        sessionToken: generateSessionToken(),
        userId: user.id,
        expires: fromDate(options2.session.maxAge)
      });
      const currentAccount = { ...account, userId: user.id };
      return { session: session2, user, isNewUser: true, account: currentAccount };
    }
  }
  const userByAccount = await getUserByAccount({
    providerAccountId: account.providerAccountId,
    provider: account.provider
  });
  if (userByAccount) {
    if (user) {
      if (userByAccount.id === user.id) {
        return { session: session2, user, isNewUser };
      }
      throw new OAuthAccountNotLinked("The account is already associated with another user", { provider: account.provider });
    }
    session2 = useJwtSession ? {} : await createSession({
      sessionToken: generateSessionToken(),
      userId: userByAccount.id,
      expires: fromDate(options2.session.maxAge)
    });
    return { session: session2, user: userByAccount, isNewUser };
  } else {
    const { provider: p3 } = options2;
    const { type, provider, providerAccountId, userId, ...tokenSet } = account;
    const defaults = { providerAccountId, provider, type, userId };
    account = Object.assign(p3.account(tokenSet) ?? {}, defaults);
    if (user) {
      await linkAccount({ ...account, userId: user.id });
      await events.linkAccount?.({ user, account, profile });
      return { session: session2, user, isNewUser };
    }
    const userByEmail = profile.email ? await getUserByEmail(profile.email) : null;
    if (userByEmail) {
      const provider2 = options2.provider;
      if (provider2?.allowDangerousEmailAccountLinking) {
        user = userByEmail;
        isNewUser = false;
      } else {
        throw new OAuthAccountNotLinked("Another account already exists with the same e-mail address", { provider: account.provider });
      }
    } else {
      user = await createUser({ ...profile, emailVerified: null });
      isNewUser = true;
    }
    await events.createUser?.({ user });
    await linkAccount({ ...account, userId: user.id });
    await events.linkAccount?.({ user, account, profile });
    session2 = useJwtSession ? {} : await createSession({
      sessionToken: generateSessionToken(),
      userId: user.id,
      expires: fromDate(options2.session.maxAge)
    });
    return { session: session2, user, isNewUser };
  }
}
var init_handle_login = __esm({
  "node_modules/@auth/core/lib/actions/callback/handle-login.js"() {
    init_errors();
    init_date();
  }
});

// node_modules/oauth4webapi/build/index.js
function looseInstanceOf(input, expected) {
  if (input == null) {
    return false;
  }
  try {
    return input instanceof expected || Object.getPrototypeOf(input)[Symbol.toStringTag] === expected.prototype[Symbol.toStringTag];
  } catch {
    return false;
  }
}
function CodedTypeError(message2, code, cause) {
  const err = new TypeError(message2, { cause });
  Object.assign(err, { code });
  return err;
}
function buf(input) {
  if (typeof input === "string") {
    return encoder3.encode(input);
  }
  return decoder2.decode(input);
}
function encodeBase64Url(input) {
  if (input instanceof ArrayBuffer) {
    input = new Uint8Array(input);
  }
  const arr = [];
  for (let i4 = 0; i4 < input.byteLength; i4 += CHUNK_SIZE2) {
    arr.push(String.fromCharCode.apply(null, input.subarray(i4, i4 + CHUNK_SIZE2)));
  }
  return btoa(arr.join("")).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function decodeBase64Url(input) {
  try {
    const binary = atob(input.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, ""));
    const bytes = new Uint8Array(binary.length);
    for (let i4 = 0; i4 < binary.length; i4++) {
      bytes[i4] = binary.charCodeAt(i4);
    }
    return bytes;
  } catch (cause) {
    throw CodedTypeError("The input to be decoded is not correctly encoded.", ERR_INVALID_ARG_VALUE, cause);
  }
}
function b64u(input) {
  if (typeof input === "string") {
    return decodeBase64Url(input);
  }
  return encodeBase64Url(input);
}
function OPE(message2, code, cause) {
  return new OperationProcessingError(message2, { code, cause });
}
function assertCryptoKey(key2, it) {
  if (!(key2 instanceof CryptoKey)) {
    throw CodedTypeError(`${it} must be a CryptoKey`, ERR_INVALID_ARG_TYPE);
  }
}
function assertPrivateKey(key2, it) {
  assertCryptoKey(key2, it);
  if (key2.type !== "private") {
    throw CodedTypeError(`${it} must be a private CryptoKey`, ERR_INVALID_ARG_VALUE);
  }
}
function isJsonObject(input) {
  if (input === null || typeof input !== "object" || Array.isArray(input)) {
    return false;
  }
  return true;
}
function prepareHeaders(input) {
  if (looseInstanceOf(input, Headers)) {
    input = Object.fromEntries(input.entries());
  }
  const headers2 = new Headers(input);
  if (USER_AGENT && !headers2.has("user-agent")) {
    headers2.set("user-agent", USER_AGENT);
  }
  if (headers2.has("authorization")) {
    throw CodedTypeError('"options.headers" must not include the "authorization" header name', ERR_INVALID_ARG_VALUE);
  }
  if (headers2.has("dpop")) {
    throw CodedTypeError('"options.headers" must not include the "dpop" header name', ERR_INVALID_ARG_VALUE);
  }
  return headers2;
}
function signal(value) {
  if (typeof value === "function") {
    value = value();
  }
  if (!(value instanceof AbortSignal)) {
    throw CodedTypeError('"options.signal" must return or be an instance of AbortSignal', ERR_INVALID_ARG_TYPE);
  }
  return value;
}
async function discoveryRequest(issuerIdentifier, options2) {
  if (!(issuerIdentifier instanceof URL)) {
    throw CodedTypeError('"issuerIdentifier" must be an instance of URL', ERR_INVALID_ARG_TYPE);
  }
  checkProtocol(issuerIdentifier, options2?.[allowInsecureRequests] !== true);
  const url = new URL(issuerIdentifier.href);
  switch (options2?.algorithm) {
    case void 0:
    case "oidc":
      url.pathname = `${url.pathname}/.well-known/openid-configuration`.replace("//", "/");
      break;
    case "oauth2":
      if (url.pathname === "/") {
        url.pathname = ".well-known/oauth-authorization-server";
      } else {
        url.pathname = `.well-known/oauth-authorization-server/${url.pathname}`.replace("//", "/");
      }
      break;
    default:
      throw CodedTypeError('"options.algorithm" must be "oidc" (default), or "oauth2"', ERR_INVALID_ARG_VALUE);
  }
  const headers2 = prepareHeaders(options2?.headers);
  headers2.set("accept", "application/json");
  return (options2?.[customFetch2] || fetch)(url.href, {
    body: void 0,
    headers: Object.fromEntries(headers2.entries()),
    method: "GET",
    redirect: "manual",
    signal: options2?.signal ? signal(options2.signal) : void 0
  });
}
function assertNumber(input, allow0, it, code, cause) {
  try {
    if (typeof input !== "number" || !Number.isFinite(input)) {
      throw CodedTypeError(`${it} must be a number`, ERR_INVALID_ARG_TYPE, cause);
    }
    if (input > 0)
      return;
    if (allow0 && input !== 0) {
      throw CodedTypeError(`${it} must be a non-negative number`, ERR_INVALID_ARG_VALUE, cause);
    }
    throw CodedTypeError(`${it} must be a positive number`, ERR_INVALID_ARG_VALUE, cause);
  } catch (err) {
    if (code) {
      throw OPE(err.message, code, cause);
    }
    throw err;
  }
}
function assertString(input, it, code, cause) {
  try {
    if (typeof input !== "string") {
      throw CodedTypeError(`${it} must be a string`, ERR_INVALID_ARG_TYPE, cause);
    }
    if (input.length === 0) {
      throw CodedTypeError(`${it} must not be empty`, ERR_INVALID_ARG_VALUE, cause);
    }
  } catch (err) {
    if (code) {
      throw OPE(err.message, code, cause);
    }
    throw err;
  }
}
async function processDiscoveryResponse(expectedIssuerIdentifier, response) {
  if (!(expectedIssuerIdentifier instanceof URL) && expectedIssuerIdentifier !== _nodiscoverycheck) {
    throw CodedTypeError('"expectedIssuer" must be an instance of URL', ERR_INVALID_ARG_TYPE);
  }
  if (!looseInstanceOf(response, Response)) {
    throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
  }
  if (response.status !== 200) {
    throw OPE('"response" is not a conform Authorization Server Metadata response (unexpected HTTP status code)', RESPONSE_IS_NOT_CONFORM, response);
  }
  assertReadableResponse(response);
  assertApplicationJson(response);
  let json2;
  try {
    json2 = await response.json();
  } catch (cause) {
    throw OPE('failed to parse "response" body as JSON', PARSE_ERROR, cause);
  }
  if (!isJsonObject(json2)) {
    throw OPE('"response" body must be a top level object', INVALID_RESPONSE, { body: json2 });
  }
  assertString(json2.issuer, '"response" body "issuer" property', INVALID_RESPONSE, { body: json2 });
  if (new URL(json2.issuer).href !== expectedIssuerIdentifier.href && expectedIssuerIdentifier !== _nodiscoverycheck) {
    throw OPE('"response" body "issuer" property does not match the expected value', JSON_ATTRIBUTE_COMPARISON, { expected: expectedIssuerIdentifier.href, body: json2, attribute: "issuer" });
  }
  return json2;
}
function assertApplicationJson(response) {
  assertContentType(response, "application/json");
}
function notJson(response, ...types2) {
  let msg = '"response" content-type must be ';
  if (types2.length > 2) {
    const last = types2.pop();
    msg += `${types2.join(", ")}, or ${last}`;
  } else if (types2.length === 2) {
    msg += `${types2[0]} or ${types2[1]}`;
  } else {
    msg += types2[0];
  }
  return OPE(msg, RESPONSE_IS_NOT_JSON, response);
}
function assertContentType(response, contentType) {
  if (getContentType(response) !== contentType) {
    throw notJson(response, contentType);
  }
}
function randomBytes() {
  return b64u(crypto.getRandomValues(new Uint8Array(32)));
}
function generateRandomCodeVerifier() {
  return randomBytes();
}
function generateRandomState() {
  return randomBytes();
}
function generateRandomNonce() {
  return randomBytes();
}
async function calculatePKCECodeChallenge(codeVerifier) {
  assertString(codeVerifier, "codeVerifier");
  return b64u(await crypto.subtle.digest("SHA-256", buf(codeVerifier)));
}
function getKeyAndKid(input) {
  if (input instanceof CryptoKey) {
    return { key: input };
  }
  if (!(input?.key instanceof CryptoKey)) {
    return {};
  }
  if (input.kid !== void 0) {
    assertString(input.kid, '"kid"');
  }
  return {
    key: input.key,
    kid: input.kid
  };
}
function psAlg(key2) {
  switch (key2.algorithm.hash.name) {
    case "SHA-256":
      return "PS256";
    case "SHA-384":
      return "PS384";
    case "SHA-512":
      return "PS512";
    default:
      throw new UnsupportedOperationError("unsupported RsaHashedKeyAlgorithm hash name", {
        cause: key2
      });
  }
}
function rsAlg(key2) {
  switch (key2.algorithm.hash.name) {
    case "SHA-256":
      return "RS256";
    case "SHA-384":
      return "RS384";
    case "SHA-512":
      return "RS512";
    default:
      throw new UnsupportedOperationError("unsupported RsaHashedKeyAlgorithm hash name", {
        cause: key2
      });
  }
}
function esAlg(key2) {
  switch (key2.algorithm.namedCurve) {
    case "P-256":
      return "ES256";
    case "P-384":
      return "ES384";
    case "P-521":
      return "ES512";
    default:
      throw new UnsupportedOperationError("unsupported EcKeyAlgorithm namedCurve", { cause: key2 });
  }
}
function keyToJws(key2) {
  switch (key2.algorithm.name) {
    case "RSA-PSS":
      return psAlg(key2);
    case "RSASSA-PKCS1-v1_5":
      return rsAlg(key2);
    case "ECDSA":
      return esAlg(key2);
    case "Ed25519":
    case "EdDSA":
      return "Ed25519";
    default:
      throw new UnsupportedOperationError("unsupported CryptoKey algorithm name", { cause: key2 });
  }
}
function getClockSkew(client) {
  const skew = client?.[clockSkew];
  return typeof skew === "number" && Number.isFinite(skew) ? skew : 0;
}
function getClockTolerance(client) {
  const tolerance = client?.[clockTolerance];
  return typeof tolerance === "number" && Number.isFinite(tolerance) && Math.sign(tolerance) !== -1 ? tolerance : 30;
}
function epochTime() {
  return Math.floor(Date.now() / 1e3);
}
function assertAs(as) {
  if (typeof as !== "object" || as === null) {
    throw CodedTypeError('"as" must be an object', ERR_INVALID_ARG_TYPE);
  }
  assertString(as.issuer, '"as.issuer"');
}
function assertClient(client) {
  if (typeof client !== "object" || client === null) {
    throw CodedTypeError('"client" must be an object', ERR_INVALID_ARG_TYPE);
  }
  assertString(client.client_id, '"client.client_id"');
}
function ClientSecretPost(clientSecret) {
  assertString(clientSecret, '"clientSecret"');
  return (_as, client, body2, _headers) => {
    body2.set("client_id", client.client_id);
    body2.set("client_secret", clientSecret);
  };
}
function clientAssertionPayload(as, client) {
  const now2 = epochTime() + getClockSkew(client);
  return {
    jti: randomBytes(),
    aud: as.issuer,
    exp: now2 + 60,
    iat: now2,
    nbf: now2,
    iss: client.client_id,
    sub: client.client_id
  };
}
function PrivateKeyJwt(clientPrivateKey, options2) {
  const { key: key2, kid } = getKeyAndKid(clientPrivateKey);
  assertPrivateKey(key2, '"clientPrivateKey.key"');
  return async (as, client, body2, _headers) => {
    const header = { alg: keyToJws(key2), kid };
    const payload = clientAssertionPayload(as, client);
    options2?.[modifyAssertion]?.(header, payload);
    body2.set("client_id", client.client_id);
    body2.set("client_assertion_type", "urn:ietf:params:oauth:client-assertion-type:jwt-bearer");
    body2.set("client_assertion", await signJwt(header, payload, key2));
  };
}
function ClientSecretJwt(clientSecret, options2) {
  assertString(clientSecret, '"clientSecret"');
  const modify = options2?.[modifyAssertion];
  let key2;
  return async (as, client, body2, _headers) => {
    key2 ||= await crypto.subtle.importKey("raw", buf(clientSecret), { hash: "SHA-256", name: "HMAC" }, false, ["sign"]);
    const header = { alg: "HS256" };
    const payload = clientAssertionPayload(as, client);
    modify?.(header, payload);
    const data = `${b64u(buf(JSON.stringify(header)))}.${b64u(buf(JSON.stringify(payload)))}`;
    const hmac = await crypto.subtle.sign(key2.algorithm, key2, buf(data));
    body2.set("client_id", client.client_id);
    body2.set("client_assertion_type", "urn:ietf:params:oauth:client-assertion-type:jwt-bearer");
    body2.set("client_assertion", `${data}.${b64u(new Uint8Array(hmac))}`);
  };
}
function None() {
  return (_as, client, body2, _headers) => {
    body2.set("client_id", client.client_id);
  };
}
async function signJwt(header, payload, key2) {
  if (!key2.usages.includes("sign")) {
    throw CodedTypeError('CryptoKey instances used for signing assertions must include "sign" in their "usages"', ERR_INVALID_ARG_VALUE);
  }
  const input = `${b64u(buf(JSON.stringify(header)))}.${b64u(buf(JSON.stringify(payload)))}`;
  const signature = b64u(await crypto.subtle.sign(keyToSubtle(key2), key2, buf(input)));
  return `${input}.${signature}`;
}
function checkProtocol(url, enforceHttps) {
  if (enforceHttps && url.protocol !== "https:") {
    throw OPE("only requests to HTTPS are allowed", HTTP_REQUEST_FORBIDDEN, url);
  }
  if (url.protocol !== "https:" && url.protocol !== "http:") {
    throw OPE("only HTTP and HTTPS requests are allowed", REQUEST_PROTOCOL_FORBIDDEN, url);
  }
}
function validateEndpoint(value, endpoint, useMtlsAlias, enforceHttps) {
  let url;
  if (typeof value !== "string" || !(url = URLParse(value))) {
    throw OPE(`authorization server metadata does not contain a valid ${useMtlsAlias ? `"as.mtls_endpoint_aliases.${endpoint}"` : `"as.${endpoint}"`}`, value === void 0 ? MISSING_SERVER_METADATA : INVALID_SERVER_METADATA, { attribute: useMtlsAlias ? `mtls_endpoint_aliases.${endpoint}` : endpoint });
  }
  checkProtocol(url, enforceHttps);
  return url;
}
function resolveEndpoint(as, endpoint, useMtlsAlias, enforceHttps) {
  if (useMtlsAlias && as.mtls_endpoint_aliases && endpoint in as.mtls_endpoint_aliases) {
    return validateEndpoint(as.mtls_endpoint_aliases[endpoint], endpoint, useMtlsAlias, enforceHttps);
  }
  return validateEndpoint(as[endpoint], endpoint, useMtlsAlias, enforceHttps);
}
function unquote(value) {
  if (value.length >= 2 && value[0] === '"' && value[value.length - 1] === '"') {
    return value.slice(1, -1);
  }
  return value;
}
function wwwAuth(scheme, params) {
  const arr = params.split(SPLIT_REGEXP).slice(1);
  if (!arr.length) {
    return { scheme: scheme.toLowerCase(), parameters: {} };
  }
  arr[arr.length - 1] = arr[arr.length - 1].replace(/,$/, "");
  const parameters = {};
  for (let i4 = 1; i4 < arr.length; i4 += 2) {
    const idx = i4;
    if (arr[idx][0] === '"') {
      while (arr[idx].slice(-1) !== '"' && ++i4 < arr.length) {
        arr[idx] += arr[i4];
      }
    }
    const key2 = arr[idx - 1].replace(/^(?:, ?)|=$/g, "").toLowerCase();
    parameters[key2] = unquote(arr[idx]);
  }
  return {
    scheme: scheme.toLowerCase(),
    parameters
  };
}
function parseWwwAuthenticateChallenges(response) {
  if (!looseInstanceOf(response, Response)) {
    throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
  }
  const header = response.headers.get("www-authenticate");
  if (header === null) {
    return void 0;
  }
  const result = [];
  for (const { 1: scheme, index: index7 } of header.matchAll(SCHEMES_REGEXP)) {
    result.push([scheme, index7]);
  }
  if (!result.length) {
    return void 0;
  }
  const challenges = result.map(([scheme, indexOf], i4, others) => {
    const next = others[i4 + 1];
    let parameters;
    if (next) {
      parameters = header.slice(indexOf, next[1]);
    } else {
      parameters = header.slice(indexOf);
    }
    return wwwAuth(scheme, parameters);
  });
  return challenges;
}
function assertDPoP(option) {
  if (!branded.has(option)) {
    throw CodedTypeError('"options.DPoP" is not a valid DPoPHandle', ERR_INVALID_ARG_VALUE);
  }
}
async function resourceRequest(accessToken, method, url, headers2, body2, options2) {
  assertString(accessToken, '"accessToken"');
  if (!(url instanceof URL)) {
    throw CodedTypeError('"url" must be an instance of URL', ERR_INVALID_ARG_TYPE);
  }
  checkProtocol(url, options2?.[allowInsecureRequests] !== true);
  headers2 = prepareHeaders(headers2);
  if (options2?.DPoP) {
    assertDPoP(options2.DPoP);
    await options2.DPoP.addProof(url, headers2, method.toUpperCase(), accessToken);
    headers2.set("authorization", `DPoP ${accessToken}`);
  } else {
    headers2.set("authorization", `Bearer ${accessToken}`);
  }
  const response = await (options2?.[customFetch2] || fetch)(url.href, {
    body: body2,
    headers: Object.fromEntries(headers2.entries()),
    method,
    redirect: "manual",
    signal: options2?.signal ? signal(options2.signal) : void 0
  });
  options2?.DPoP?.cacheNonce(response);
  return response;
}
async function userInfoRequest(as, client, accessToken, options2) {
  assertAs(as);
  assertClient(client);
  const url = resolveEndpoint(as, "userinfo_endpoint", client.use_mtls_endpoint_aliases, options2?.[allowInsecureRequests] !== true);
  const headers2 = prepareHeaders(options2?.headers);
  if (client.userinfo_signed_response_alg) {
    headers2.set("accept", "application/jwt");
  } else {
    headers2.set("accept", "application/json");
    headers2.append("accept", "application/jwt");
  }
  return resourceRequest(accessToken, "GET", url, headers2, null, {
    ...options2,
    [clockSkew]: getClockSkew(client)
  });
}
function getContentType(input) {
  return input.headers.get("content-type")?.split(";")[0];
}
async function processUserInfoResponse(as, client, expectedSubject, response, options2) {
  assertAs(as);
  assertClient(client);
  if (!looseInstanceOf(response, Response)) {
    throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
  }
  let challenges;
  if (challenges = parseWwwAuthenticateChallenges(response)) {
    throw new WWWAuthenticateChallengeError("server responded with a challenge in the WWW-Authenticate HTTP Header", { cause: challenges, response });
  }
  if (response.status !== 200) {
    throw OPE('"response" is not a conform UserInfo Endpoint response (unexpected HTTP status code)', RESPONSE_IS_NOT_CONFORM, response);
  }
  assertReadableResponse(response);
  let json2;
  if (getContentType(response) === "application/jwt") {
    const { claims, jwt } = await validateJwt(await response.text(), checkSigningAlgorithm.bind(void 0, client.userinfo_signed_response_alg, as.userinfo_signing_alg_values_supported, void 0), getClockSkew(client), getClockTolerance(client), options2?.[jweDecrypt]).then(validateOptionalAudience.bind(void 0, client.client_id)).then(validateOptionalIssuer.bind(void 0, as));
    jwtRefs.set(response, jwt);
    json2 = claims;
  } else {
    if (client.userinfo_signed_response_alg) {
      throw OPE("JWT UserInfo Response expected", JWT_USERINFO_EXPECTED, response);
    }
    assertApplicationJson(response);
    try {
      json2 = await response.json();
    } catch (cause) {
      throw OPE('failed to parse "response" body as JSON', PARSE_ERROR, cause);
    }
  }
  if (!isJsonObject(json2)) {
    throw OPE('"response" body must be a top level object', INVALID_RESPONSE, { body: json2 });
  }
  assertString(json2.sub, '"response" body "sub" property', INVALID_RESPONSE, { body: json2 });
  switch (expectedSubject) {
    case skipSubjectCheck:
      break;
    default:
      assertString(expectedSubject, '"expectedSubject"');
      if (json2.sub !== expectedSubject) {
        throw OPE('unexpected "response" body "sub" property value', JSON_ATTRIBUTE_COMPARISON, {
          expected: expectedSubject,
          body: json2,
          attribute: "sub"
        });
      }
  }
  return json2;
}
async function authenticatedRequest(as, client, clientAuthentication, url, body2, headers2, options2) {
  await clientAuthentication(as, client, body2, headers2);
  headers2.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
  return (options2?.[customFetch2] || fetch)(url.href, {
    body: body2,
    headers: Object.fromEntries(headers2.entries()),
    method: "POST",
    redirect: "manual",
    signal: options2?.signal ? signal(options2.signal) : void 0
  });
}
async function tokenEndpointRequest(as, client, clientAuthentication, grantType, parameters, options2) {
  const url = resolveEndpoint(as, "token_endpoint", client.use_mtls_endpoint_aliases, options2?.[allowInsecureRequests] !== true);
  parameters.set("grant_type", grantType);
  const headers2 = prepareHeaders(options2?.headers);
  headers2.set("accept", "application/json");
  if (options2?.DPoP !== void 0) {
    assertDPoP(options2.DPoP);
    await options2.DPoP.addProof(url, headers2, "POST");
  }
  const response = await authenticatedRequest(as, client, clientAuthentication, url, parameters, headers2, options2);
  options2?.DPoP?.cacheNonce(response);
  return response;
}
function getValidatedIdTokenClaims(ref) {
  if (!ref.id_token) {
    return void 0;
  }
  const claims = idTokenClaims.get(ref);
  if (!claims) {
    throw CodedTypeError('"ref" was already garbage collected or did not resolve from the proper sources', ERR_INVALID_ARG_VALUE);
  }
  return claims;
}
async function processGenericAccessTokenResponse(as, client, response, additionalRequiredIdTokenClaims, options2) {
  assertAs(as);
  assertClient(client);
  if (!looseInstanceOf(response, Response)) {
    throw CodedTypeError('"response" must be an instance of Response', ERR_INVALID_ARG_TYPE);
  }
  let challenges;
  if (challenges = parseWwwAuthenticateChallenges(response)) {
    throw new WWWAuthenticateChallengeError("server responded with a challenge in the WWW-Authenticate HTTP Header", { cause: challenges, response });
  }
  if (response.status !== 200) {
    let err;
    if (err = await handleOAuthBodyError(response)) {
      await response.body?.cancel();
      throw new ResponseBodyError("server responded with an error in the response body", {
        cause: err,
        response
      });
    }
    throw OPE('"response" is not a conform Token Endpoint response (unexpected HTTP status code)', RESPONSE_IS_NOT_CONFORM, response);
  }
  assertReadableResponse(response);
  assertApplicationJson(response);
  let json2;
  try {
    json2 = await response.json();
  } catch (cause) {
    throw OPE('failed to parse "response" body as JSON', PARSE_ERROR, cause);
  }
  if (!isJsonObject(json2)) {
    throw OPE('"response" body must be a top level object', INVALID_RESPONSE, { body: json2 });
  }
  assertString(json2.access_token, '"response" body "access_token" property', INVALID_RESPONSE, {
    body: json2
  });
  assertString(json2.token_type, '"response" body "token_type" property', INVALID_RESPONSE, {
    body: json2
  });
  json2.token_type = json2.token_type.toLowerCase();
  if (json2.token_type !== "dpop" && json2.token_type !== "bearer") {
    throw new UnsupportedOperationError("unsupported `token_type` value", { cause: { body: json2 } });
  }
  if (json2.expires_in !== void 0) {
    let expiresIn = typeof json2.expires_in !== "number" ? parseFloat(json2.expires_in) : json2.expires_in;
    assertNumber(expiresIn, false, '"response" body "expires_in" property', INVALID_RESPONSE, {
      body: json2
    });
    json2.expires_in = expiresIn;
  }
  if (json2.refresh_token !== void 0) {
    assertString(json2.refresh_token, '"response" body "refresh_token" property', INVALID_RESPONSE, {
      body: json2
    });
  }
  if (json2.scope !== void 0 && typeof json2.scope !== "string") {
    throw OPE('"response" body "scope" property must be a string', INVALID_RESPONSE, { body: json2 });
  }
  if (json2.id_token !== void 0) {
    assertString(json2.id_token, '"response" body "id_token" property', INVALID_RESPONSE, {
      body: json2
    });
    const requiredClaims = ["aud", "exp", "iat", "iss", "sub"];
    if (client.require_auth_time === true) {
      requiredClaims.push("auth_time");
    }
    if (client.default_max_age !== void 0) {
      assertNumber(client.default_max_age, false, '"client.default_max_age"');
      requiredClaims.push("auth_time");
    }
    if (additionalRequiredIdTokenClaims?.length) {
      requiredClaims.push(...additionalRequiredIdTokenClaims);
    }
    const { claims, jwt } = await validateJwt(json2.id_token, checkSigningAlgorithm.bind(void 0, client.id_token_signed_response_alg, as.id_token_signing_alg_values_supported, "RS256"), getClockSkew(client), getClockTolerance(client), options2?.[jweDecrypt]).then(validatePresence.bind(void 0, requiredClaims)).then(validateIssuer.bind(void 0, as)).then(validateAudience.bind(void 0, client.client_id));
    if (Array.isArray(claims.aud) && claims.aud.length !== 1) {
      if (claims.azp === void 0) {
        throw OPE('ID Token "aud" (audience) claim includes additional untrusted audiences', JWT_CLAIM_COMPARISON, { claims, claim: "aud" });
      }
      if (claims.azp !== client.client_id) {
        throw OPE('unexpected ID Token "azp" (authorized party) claim value', JWT_CLAIM_COMPARISON, { expected: client.client_id, claims, claim: "azp" });
      }
    }
    if (claims.auth_time !== void 0) {
      assertNumber(claims.auth_time, false, 'ID Token "auth_time" (authentication time)', INVALID_RESPONSE, { claims });
    }
    jwtRefs.set(response, jwt);
    idTokenClaims.set(json2, claims);
  }
  return json2;
}
function validateOptionalAudience(expected, result) {
  if (result.claims.aud !== void 0) {
    return validateAudience(expected, result);
  }
  return result;
}
function validateAudience(expected, result) {
  if (Array.isArray(result.claims.aud)) {
    if (!result.claims.aud.includes(expected)) {
      throw OPE('unexpected JWT "aud" (audience) claim value', JWT_CLAIM_COMPARISON, {
        expected,
        claims: result.claims,
        claim: "aud"
      });
    }
  } else if (result.claims.aud !== expected) {
    throw OPE('unexpected JWT "aud" (audience) claim value', JWT_CLAIM_COMPARISON, {
      expected,
      claims: result.claims,
      claim: "aud"
    });
  }
  return result;
}
function validateOptionalIssuer(as, result) {
  if (result.claims.iss !== void 0) {
    return validateIssuer(as, result);
  }
  return result;
}
function validateIssuer(as, result) {
  const expected = as[_expectedIssuer]?.(result) ?? as.issuer;
  if (result.claims.iss !== expected) {
    throw OPE('unexpected JWT "iss" (issuer) claim value', JWT_CLAIM_COMPARISON, {
      expected,
      claims: result.claims,
      claim: "iss"
    });
  }
  return result;
}
function brand(searchParams) {
  branded.add(searchParams);
  return searchParams;
}
async function authorizationCodeGrantRequest(as, client, clientAuthentication, callbackParameters, redirectUri, codeVerifier, options2) {
  assertAs(as);
  assertClient(client);
  if (!branded.has(callbackParameters)) {
    throw CodedTypeError('"callbackParameters" must be an instance of URLSearchParams obtained from "validateAuthResponse()", or "validateJwtAuthResponse()', ERR_INVALID_ARG_VALUE);
  }
  assertString(redirectUri, '"redirectUri"');
  const code = getURLSearchParameter(callbackParameters, "code");
  if (!code) {
    throw OPE('no authorization code in "callbackParameters"', INVALID_RESPONSE);
  }
  const parameters = new URLSearchParams(options2?.additionalParameters);
  parameters.set("redirect_uri", redirectUri);
  parameters.set("code", code);
  if (codeVerifier !== _nopkce) {
    assertString(codeVerifier, '"codeVerifier"');
    parameters.set("code_verifier", codeVerifier);
  }
  return tokenEndpointRequest(as, client, clientAuthentication, "authorization_code", parameters, options2);
}
function validatePresence(required, result) {
  for (const claim of required) {
    if (result.claims[claim] === void 0) {
      throw OPE(`JWT "${claim}" (${jwtClaimNames[claim]}) claim missing`, INVALID_RESPONSE, {
        claims: result.claims
      });
    }
  }
  return result;
}
async function processAuthorizationCodeResponse(as, client, response, options2) {
  if (typeof options2?.expectedNonce === "string" || typeof options2?.maxAge === "number" || options2?.requireIdToken) {
    return processAuthorizationCodeOpenIDResponse(as, client, response, options2.expectedNonce, options2.maxAge, {
      [jweDecrypt]: options2[jweDecrypt]
    });
  }
  return processAuthorizationCodeOAuth2Response(as, client, response, options2);
}
async function processAuthorizationCodeOpenIDResponse(as, client, response, expectedNonce, maxAge, options2) {
  const additionalRequiredClaims = [];
  switch (expectedNonce) {
    case void 0:
      expectedNonce = expectNoNonce;
      break;
    case expectNoNonce:
      break;
    default:
      assertString(expectedNonce, '"expectedNonce" argument');
      additionalRequiredClaims.push("nonce");
  }
  maxAge ??= client.default_max_age;
  switch (maxAge) {
    case void 0:
      maxAge = skipAuthTimeCheck;
      break;
    case skipAuthTimeCheck:
      break;
    default:
      assertNumber(maxAge, false, '"maxAge" argument');
      additionalRequiredClaims.push("auth_time");
  }
  const result = await processGenericAccessTokenResponse(as, client, response, additionalRequiredClaims, options2);
  assertString(result.id_token, '"response" body "id_token" property', INVALID_RESPONSE, {
    body: result
  });
  const claims = getValidatedIdTokenClaims(result);
  if (maxAge !== skipAuthTimeCheck) {
    const now2 = epochTime() + getClockSkew(client);
    const tolerance = getClockTolerance(client);
    if (claims.auth_time + maxAge < now2 - tolerance) {
      throw OPE("too much time has elapsed since the last End-User authentication", JWT_TIMESTAMP_CHECK, { claims, now: now2, tolerance, claim: "auth_time" });
    }
  }
  if (expectedNonce === expectNoNonce) {
    if (claims.nonce !== void 0) {
      throw OPE('unexpected ID Token "nonce" claim value', JWT_CLAIM_COMPARISON, {
        expected: void 0,
        claims,
        claim: "nonce"
      });
    }
  } else if (claims.nonce !== expectedNonce) {
    throw OPE('unexpected ID Token "nonce" claim value', JWT_CLAIM_COMPARISON, {
      expected: expectedNonce,
      claims,
      claim: "nonce"
    });
  }
  return result;
}
async function processAuthorizationCodeOAuth2Response(as, client, response, options2) {
  const result = await processGenericAccessTokenResponse(as, client, response, void 0, options2);
  const claims = getValidatedIdTokenClaims(result);
  if (claims) {
    if (client.default_max_age !== void 0) {
      assertNumber(client.default_max_age, false, '"client.default_max_age"');
      const now2 = epochTime() + getClockSkew(client);
      const tolerance = getClockTolerance(client);
      if (claims.auth_time + client.default_max_age < now2 - tolerance) {
        throw OPE("too much time has elapsed since the last End-User authentication", JWT_TIMESTAMP_CHECK, { claims, now: now2, tolerance, claim: "auth_time" });
      }
    }
    if (claims.nonce !== void 0) {
      throw OPE('unexpected ID Token "nonce" claim value', JWT_CLAIM_COMPARISON, {
        expected: void 0,
        claims,
        claim: "nonce"
      });
    }
  }
  return result;
}
function assertReadableResponse(response) {
  if (response.bodyUsed) {
    throw CodedTypeError('"response" body has been used already', ERR_INVALID_ARG_VALUE);
  }
}
async function handleOAuthBodyError(response) {
  if (response.status > 399 && response.status < 500) {
    assertReadableResponse(response);
    assertApplicationJson(response);
    try {
      const json2 = await response.clone().json();
      if (isJsonObject(json2) && typeof json2.error === "string" && json2.error.length) {
        return json2;
      }
    } catch {
    }
  }
  return void 0;
}
function checkRsaKeyAlgorithm(key2) {
  const { algorithm } = key2;
  if (typeof algorithm.modulusLength !== "number" || algorithm.modulusLength < 2048) {
    throw new UnsupportedOperationError(`unsupported ${algorithm.name} modulusLength`, {
      cause: key2
    });
  }
}
function ecdsaHashName(key2) {
  const { algorithm } = key2;
  switch (algorithm.namedCurve) {
    case "P-256":
      return "SHA-256";
    case "P-384":
      return "SHA-384";
    case "P-521":
      return "SHA-512";
    default:
      throw new UnsupportedOperationError("unsupported ECDSA namedCurve", { cause: key2 });
  }
}
function keyToSubtle(key2) {
  switch (key2.algorithm.name) {
    case "ECDSA":
      return {
        name: key2.algorithm.name,
        hash: ecdsaHashName(key2)
      };
    case "RSA-PSS": {
      checkRsaKeyAlgorithm(key2);
      switch (key2.algorithm.hash.name) {
        case "SHA-256":
        case "SHA-384":
        case "SHA-512":
          return {
            name: key2.algorithm.name,
            saltLength: parseInt(key2.algorithm.hash.name.slice(-3), 10) >> 3
          };
        default:
          throw new UnsupportedOperationError("unsupported RSA-PSS hash name", { cause: key2 });
      }
    }
    case "RSASSA-PKCS1-v1_5":
      checkRsaKeyAlgorithm(key2);
      return key2.algorithm.name;
    case "Ed25519":
    case "EdDSA":
      return key2.algorithm.name;
  }
  throw new UnsupportedOperationError("unsupported CryptoKey algorithm name", { cause: key2 });
}
async function validateJwt(jws, checkAlg, clockSkew2, clockTolerance2, decryptJwt) {
  let { 0: protectedHeader, 1: payload, length } = jws.split(".");
  if (length === 5) {
    if (decryptJwt !== void 0) {
      jws = await decryptJwt(jws);
      ({ 0: protectedHeader, 1: payload, length } = jws.split("."));
    } else {
      throw new UnsupportedOperationError("JWE decryption is not configured", { cause: jws });
    }
  }
  if (length !== 3) {
    throw OPE("Invalid JWT", INVALID_RESPONSE, jws);
  }
  let header;
  try {
    header = JSON.parse(buf(b64u(protectedHeader)));
  } catch (cause) {
    throw OPE("failed to parse JWT Header body as base64url encoded JSON", PARSE_ERROR, cause);
  }
  if (!isJsonObject(header)) {
    throw OPE("JWT Header must be a top level object", INVALID_RESPONSE, jws);
  }
  checkAlg(header);
  if (header.crit !== void 0) {
    throw new UnsupportedOperationError('no JWT "crit" header parameter extensions are supported', {
      cause: { header }
    });
  }
  let claims;
  try {
    claims = JSON.parse(buf(b64u(payload)));
  } catch (cause) {
    throw OPE("failed to parse JWT Payload body as base64url encoded JSON", PARSE_ERROR, cause);
  }
  if (!isJsonObject(claims)) {
    throw OPE("JWT Payload must be a top level object", INVALID_RESPONSE, jws);
  }
  const now2 = epochTime() + clockSkew2;
  if (claims.exp !== void 0) {
    if (typeof claims.exp !== "number") {
      throw OPE('unexpected JWT "exp" (expiration time) claim type', INVALID_RESPONSE, { claims });
    }
    if (claims.exp <= now2 - clockTolerance2) {
      throw OPE('unexpected JWT "exp" (expiration time) claim value, expiration is past current timestamp', JWT_TIMESTAMP_CHECK, { claims, now: now2, tolerance: clockTolerance2, claim: "exp" });
    }
  }
  if (claims.iat !== void 0) {
    if (typeof claims.iat !== "number") {
      throw OPE('unexpected JWT "iat" (issued at) claim type', INVALID_RESPONSE, { claims });
    }
  }
  if (claims.iss !== void 0) {
    if (typeof claims.iss !== "string") {
      throw OPE('unexpected JWT "iss" (issuer) claim type', INVALID_RESPONSE, { claims });
    }
  }
  if (claims.nbf !== void 0) {
    if (typeof claims.nbf !== "number") {
      throw OPE('unexpected JWT "nbf" (not before) claim type', INVALID_RESPONSE, { claims });
    }
    if (claims.nbf > now2 + clockTolerance2) {
      throw OPE('unexpected JWT "nbf" (not before) claim value', JWT_TIMESTAMP_CHECK, {
        claims,
        now: now2,
        tolerance: clockTolerance2,
        claim: "nbf"
      });
    }
  }
  if (claims.aud !== void 0) {
    if (typeof claims.aud !== "string" && !Array.isArray(claims.aud)) {
      throw OPE('unexpected JWT "aud" (audience) claim type', INVALID_RESPONSE, { claims });
    }
  }
  return { header, claims, jwt: jws };
}
function checkSigningAlgorithm(client, issuer, fallback, header) {
  if (client !== void 0) {
    if (typeof client === "string" ? header.alg !== client : !client.includes(header.alg)) {
      throw OPE('unexpected JWT "alg" header parameter', INVALID_RESPONSE, {
        header,
        expected: client,
        reason: "client configuration"
      });
    }
    return;
  }
  if (Array.isArray(issuer)) {
    if (!issuer.includes(header.alg)) {
      throw OPE('unexpected JWT "alg" header parameter', INVALID_RESPONSE, {
        header,
        expected: issuer,
        reason: "authorization server metadata"
      });
    }
    return;
  }
  if (fallback !== void 0) {
    if (typeof fallback === "string" ? header.alg !== fallback : typeof fallback === "function" ? !fallback(header.alg) : !fallback.includes(header.alg)) {
      throw OPE('unexpected JWT "alg" header parameter', INVALID_RESPONSE, {
        header,
        expected: fallback,
        reason: "default value"
      });
    }
    return;
  }
  throw OPE('missing client or server configuration to verify used JWT "alg" header parameter', void 0, { client, issuer, fallback });
}
function getURLSearchParameter(parameters, name) {
  const { 0: value, length } = parameters.getAll(name);
  if (length > 1) {
    throw OPE(`"${name}" parameter must be provided only once`, INVALID_RESPONSE);
  }
  return value;
}
function validateAuthResponse(as, client, parameters, expectedState) {
  assertAs(as);
  assertClient(client);
  if (parameters instanceof URL) {
    parameters = parameters.searchParams;
  }
  if (!(parameters instanceof URLSearchParams)) {
    throw CodedTypeError('"parameters" must be an instance of URLSearchParams, or URL', ERR_INVALID_ARG_TYPE);
  }
  if (getURLSearchParameter(parameters, "response")) {
    throw OPE('"parameters" contains a JARM response, use validateJwtAuthResponse() instead of validateAuthResponse()', INVALID_RESPONSE, { parameters });
  }
  const iss = getURLSearchParameter(parameters, "iss");
  const state2 = getURLSearchParameter(parameters, "state");
  if (!iss && as.authorization_response_iss_parameter_supported) {
    throw OPE('response parameter "iss" (issuer) missing', INVALID_RESPONSE, { parameters });
  }
  if (iss && iss !== as.issuer) {
    throw OPE('unexpected "iss" (issuer) response parameter value', INVALID_RESPONSE, {
      expected: as.issuer,
      parameters
    });
  }
  switch (expectedState) {
    case void 0:
    case expectNoState:
      if (state2 !== void 0) {
        throw OPE('unexpected "state" response parameter encountered', INVALID_RESPONSE, {
          expected: void 0,
          parameters
        });
      }
      break;
    case skipStateCheck:
      break;
    default:
      assertString(expectedState, '"expectedState" argument');
      if (state2 !== expectedState) {
        throw OPE(state2 === void 0 ? 'response parameter "state" missing' : 'unexpected "state" response parameter value', INVALID_RESPONSE, { expected: expectedState, parameters });
      }
  }
  const error = getURLSearchParameter(parameters, "error");
  if (error) {
    throw new AuthorizationResponseError("authorization response from the server is an error", {
      cause: parameters
    });
  }
  const id_token = getURLSearchParameter(parameters, "id_token");
  const token = getURLSearchParameter(parameters, "token");
  if (id_token !== void 0 || token !== void 0) {
    throw new UnsupportedOperationError("implicit and hybrid flows are not supported");
  }
  return brand(new URLSearchParams(parameters));
}
var USER_AGENT, ERR_INVALID_ARG_VALUE, ERR_INVALID_ARG_TYPE, allowInsecureRequests, clockSkew, clockTolerance, customFetch2, modifyAssertion, jweDecrypt, jwksCache, encoder3, decoder2, CHUNK_SIZE2, UnsupportedOperationError, OperationProcessingError, URLParse, ResponseBodyError, AuthorizationResponseError, WWWAuthenticateChallengeError, SPLIT_REGEXP, SCHEMES_REGEXP, skipSubjectCheck, idTokenClaims, jwtRefs, branded, jwtClaimNames, expectNoNonce, skipAuthTimeCheck, WWW_AUTHENTICATE_CHALLENGE, RESPONSE_BODY_ERROR, UNSUPPORTED_OPERATION, AUTHORIZATION_RESPONSE_ERROR, JWT_USERINFO_EXPECTED, PARSE_ERROR, INVALID_RESPONSE, RESPONSE_IS_NOT_JSON, RESPONSE_IS_NOT_CONFORM, HTTP_REQUEST_FORBIDDEN, REQUEST_PROTOCOL_FORBIDDEN, JWT_TIMESTAMP_CHECK, JWT_CLAIM_COMPARISON, JSON_ATTRIBUTE_COMPARISON, MISSING_SERVER_METADATA, INVALID_SERVER_METADATA, skipStateCheck, expectNoState, _nopkce, _nodiscoverycheck, _expectedIssuer;
var init_build = __esm({
  "node_modules/oauth4webapi/build/index.js"() {
    if (typeof navigator === "undefined" || !navigator.userAgent?.startsWith?.("Mozilla/5.0 ")) {
      const NAME = "oauth4webapi";
      const VERSION = "v3.1.4";
      USER_AGENT = `${NAME}/${VERSION}`;
    }
    ERR_INVALID_ARG_VALUE = "ERR_INVALID_ARG_VALUE";
    ERR_INVALID_ARG_TYPE = "ERR_INVALID_ARG_TYPE";
    allowInsecureRequests = Symbol();
    clockSkew = Symbol();
    clockTolerance = Symbol();
    customFetch2 = Symbol();
    modifyAssertion = Symbol();
    jweDecrypt = Symbol();
    jwksCache = Symbol();
    encoder3 = new TextEncoder();
    decoder2 = new TextDecoder();
    CHUNK_SIZE2 = 32768;
    UnsupportedOperationError = class extends Error {
      code;
      constructor(message2, options2) {
        super(message2, options2);
        this.name = this.constructor.name;
        this.code = UNSUPPORTED_OPERATION;
        Error.captureStackTrace?.(this, this.constructor);
      }
    };
    OperationProcessingError = class extends Error {
      code;
      constructor(message2, options2) {
        super(message2, options2);
        this.name = this.constructor.name;
        if (options2?.code) {
          this.code = options2?.code;
        }
        Error.captureStackTrace?.(this, this.constructor);
      }
    };
    URLParse = URL.parse ? (url, base2) => URL.parse(url, base2) : (url, base2) => {
      try {
        return new URL(url, base2);
      } catch {
        return null;
      }
    };
    ResponseBodyError = class extends Error {
      cause;
      code;
      error;
      status;
      error_description;
      response;
      constructor(message2, options2) {
        super(message2, options2);
        this.name = this.constructor.name;
        this.code = RESPONSE_BODY_ERROR;
        this.cause = options2.cause;
        this.error = options2.cause.error;
        this.status = options2.response.status;
        this.error_description = options2.cause.error_description;
        Object.defineProperty(this, "response", { enumerable: false, value: options2.response });
        Error.captureStackTrace?.(this, this.constructor);
      }
    };
    AuthorizationResponseError = class extends Error {
      cause;
      code;
      error;
      error_description;
      constructor(message2, options2) {
        super(message2, options2);
        this.name = this.constructor.name;
        this.code = AUTHORIZATION_RESPONSE_ERROR;
        this.cause = options2.cause;
        this.error = options2.cause.get("error");
        this.error_description = options2.cause.get("error_description") ?? void 0;
        Error.captureStackTrace?.(this, this.constructor);
      }
    };
    WWWAuthenticateChallengeError = class extends Error {
      cause;
      code;
      response;
      status;
      constructor(message2, options2) {
        super(message2, options2);
        this.name = this.constructor.name;
        this.code = WWW_AUTHENTICATE_CHALLENGE;
        this.cause = options2.cause;
        this.status = options2.response.status;
        this.response = options2.response;
        Object.defineProperty(this, "response", { enumerable: false });
        Error.captureStackTrace?.(this, this.constructor);
      }
    };
    SPLIT_REGEXP = /((?:,|, )?[0-9a-zA-Z!#$%&'*+-.^_`|~]+=)/;
    SCHEMES_REGEXP = /(?:^|, ?)([0-9a-zA-Z!#$%&'*+\-.^_`|~]+)(?=$|[ ,])/g;
    skipSubjectCheck = Symbol();
    idTokenClaims = /* @__PURE__ */ new WeakMap();
    jwtRefs = /* @__PURE__ */ new WeakMap();
    branded = /* @__PURE__ */ new WeakSet();
    jwtClaimNames = {
      aud: "audience",
      c_hash: "code hash",
      client_id: "client id",
      exp: "expiration time",
      iat: "issued at",
      iss: "issuer",
      jti: "jwt id",
      nonce: "nonce",
      s_hash: "state hash",
      sub: "subject",
      ath: "access token hash",
      htm: "http method",
      htu: "http uri",
      cnf: "confirmation",
      auth_time: "authentication time"
    };
    expectNoNonce = Symbol();
    skipAuthTimeCheck = Symbol();
    WWW_AUTHENTICATE_CHALLENGE = "OAUTH_WWW_AUTHENTICATE_CHALLENGE";
    RESPONSE_BODY_ERROR = "OAUTH_RESPONSE_BODY_ERROR";
    UNSUPPORTED_OPERATION = "OAUTH_UNSUPPORTED_OPERATION";
    AUTHORIZATION_RESPONSE_ERROR = "OAUTH_AUTHORIZATION_RESPONSE_ERROR";
    JWT_USERINFO_EXPECTED = "OAUTH_JWT_USERINFO_EXPECTED";
    PARSE_ERROR = "OAUTH_PARSE_ERROR";
    INVALID_RESPONSE = "OAUTH_INVALID_RESPONSE";
    RESPONSE_IS_NOT_JSON = "OAUTH_RESPONSE_IS_NOT_JSON";
    RESPONSE_IS_NOT_CONFORM = "OAUTH_RESPONSE_IS_NOT_CONFORM";
    HTTP_REQUEST_FORBIDDEN = "OAUTH_HTTP_REQUEST_FORBIDDEN";
    REQUEST_PROTOCOL_FORBIDDEN = "OAUTH_REQUEST_PROTOCOL_FORBIDDEN";
    JWT_TIMESTAMP_CHECK = "OAUTH_JWT_TIMESTAMP_CHECK_FAILED";
    JWT_CLAIM_COMPARISON = "OAUTH_JWT_CLAIM_COMPARISON_FAILED";
    JSON_ATTRIBUTE_COMPARISON = "OAUTH_JSON_ATTRIBUTE_COMPARISON_FAILED";
    MISSING_SERVER_METADATA = "OAUTH_MISSING_SERVER_METADATA";
    INVALID_SERVER_METADATA = "OAUTH_INVALID_SERVER_METADATA";
    skipStateCheck = Symbol();
    expectNoState = Symbol();
    _nopkce = Symbol();
    _nodiscoverycheck = Symbol();
    _expectedIssuer = Symbol();
  }
});

// node_modules/@auth/core/lib/actions/callback/oauth/checks.js
async function sealCookie(name, payload, options2) {
  const { cookies, logger } = options2;
  const cookie = cookies[name];
  const expires = /* @__PURE__ */ new Date();
  expires.setTime(expires.getTime() + COOKIE_TTL * 1e3);
  logger.debug(`CREATE_${name.toUpperCase()}`, {
    name: cookie.name,
    payload,
    COOKIE_TTL,
    expires
  });
  const encoded = await encode3({
    ...options2.jwt,
    maxAge: COOKIE_TTL,
    token: { value: payload },
    salt: cookie.name
  });
  const cookieOptions = { ...cookie.options, expires };
  return { name: cookie.name, value: encoded, options: cookieOptions };
}
async function parseCookie3(name, value, options2) {
  try {
    const { logger, cookies, jwt } = options2;
    logger.debug(`PARSE_${name.toUpperCase()}`, { cookie: value });
    if (!value)
      throw new InvalidCheck(`${name} cookie was missing`);
    const parsed = await decode4({
      ...jwt,
      token: value,
      salt: cookies[name].name
    });
    if (parsed?.value)
      return parsed.value;
    throw new Error("Invalid cookie");
  } catch (error) {
    throw new InvalidCheck(`${name} value could not be parsed`, {
      cause: error
    });
  }
}
function clearCookie(name, options2, resCookies) {
  const { logger, cookies } = options2;
  const cookie = cookies[name];
  logger.debug(`CLEAR_${name.toUpperCase()}`, { cookie });
  resCookies.push({
    name: cookie.name,
    value: "",
    options: { ...cookies[name].options, maxAge: 0 }
  });
}
function useCookie(check2, name) {
  return async function(cookies, resCookies, options2) {
    const { provider, logger } = options2;
    if (!provider?.checks?.includes(check2))
      return;
    const cookieValue = cookies?.[options2.cookies[name].name];
    logger.debug(`USE_${name.toUpperCase()}`, { value: cookieValue });
    const parsed = await parseCookie3(name, cookieValue, options2);
    clearCookie(name, options2, resCookies);
    return parsed;
  };
}
var COOKIE_TTL, pkce, STATE_MAX_AGE, encodedStateSalt, state, nonce, WEBAUTHN_CHALLENGE_MAX_AGE, webauthnChallengeSalt, webauthnChallenge;
var init_checks = __esm({
  "node_modules/@auth/core/lib/actions/callback/oauth/checks.js"() {
    init_build();
    init_errors();
    init_jwt();
    COOKIE_TTL = 60 * 15;
    pkce = {
      /** Creates a PKCE code challenge and verifier pair. The verifier in stored in the cookie. */
      async create(options2) {
        const code_verifier = generateRandomCodeVerifier();
        const value = await calculatePKCECodeChallenge(code_verifier);
        const cookie = await sealCookie("pkceCodeVerifier", code_verifier, options2);
        return { cookie, value };
      },
      /**
       * Returns code_verifier if the provider is configured to use PKCE,
       * and clears the container cookie afterwards.
       * An error is thrown if the code_verifier is missing or invalid.
       */
      use: useCookie("pkce", "pkceCodeVerifier")
    };
    STATE_MAX_AGE = 60 * 15;
    encodedStateSalt = "encodedState";
    state = {
      /** Creates a state cookie with an optionally encoded body. */
      async create(options2, origin) {
        const { provider } = options2;
        if (!provider.checks.includes("state")) {
          if (origin) {
            throw new InvalidCheck("State data was provided but the provider is not configured to use state");
          }
          return;
        }
        const payload = {
          origin,
          random: generateRandomState()
        };
        const value = await encode3({
          secret: options2.jwt.secret,
          token: payload,
          salt: encodedStateSalt,
          maxAge: STATE_MAX_AGE
        });
        const cookie = await sealCookie("state", value, options2);
        return { cookie, value };
      },
      /**
       * Returns state if the provider is configured to use state,
       * and clears the container cookie afterwards.
       * An error is thrown if the state is missing or invalid.
       */
      use: useCookie("state", "state"),
      /** Decodes the state. If it could not be decoded, it throws an error. */
      async decode(state2, options2) {
        try {
          options2.logger.debug("DECODE_STATE", { state: state2 });
          const payload = await decode4({
            secret: options2.jwt.secret,
            token: state2,
            salt: encodedStateSalt
          });
          if (payload)
            return payload;
          throw new Error("Invalid state");
        } catch (error) {
          throw new InvalidCheck("State could not be decoded", { cause: error });
        }
      }
    };
    nonce = {
      async create(options2) {
        if (!options2.provider.checks.includes("nonce"))
          return;
        const value = generateRandomNonce();
        const cookie = await sealCookie("nonce", value, options2);
        return { cookie, value };
      },
      /**
       * Returns nonce if the provider is configured to use nonce,
       * and clears the container cookie afterwards.
       * An error is thrown if the nonce is missing or invalid.
       * @see https://openid.net/specs/openid-connect-core-1_0.html#NonceNotes
       * @see https://danielfett.de/2020/05/16/pkce-vs-nonce-equivalent-or-not/#nonce
       */
      use: useCookie("nonce", "nonce")
    };
    WEBAUTHN_CHALLENGE_MAX_AGE = 60 * 15;
    webauthnChallengeSalt = "encodedWebauthnChallenge";
    webauthnChallenge = {
      async create(options2, challenge, registerData) {
        return {
          cookie: await sealCookie("webauthnChallenge", await encode3({
            secret: options2.jwt.secret,
            token: { challenge, registerData },
            salt: webauthnChallengeSalt,
            maxAge: WEBAUTHN_CHALLENGE_MAX_AGE
          }), options2)
        };
      },
      /** Returns WebAuthn challenge if present. */
      async use(options2, cookies, resCookies) {
        const cookieValue = cookies?.[options2.cookies.webauthnChallenge.name];
        const parsed = await parseCookie3("webauthnChallenge", cookieValue, options2);
        const payload = await decode4({
          secret: options2.jwt.secret,
          token: parsed,
          salt: webauthnChallengeSalt
        });
        clearCookie("webauthnChallenge", options2, resCookies);
        if (!payload)
          throw new InvalidCheck("WebAuthn challenge was missing");
        return payload;
      }
    };
  }
});

// node_modules/@auth/core/lib/actions/callback/oauth/callback.js
function formUrlEncode(token) {
  return encodeURIComponent(token).replace(/%20/g, "+");
}
function clientSecretBasic(clientId, clientSecret) {
  const username = formUrlEncode(clientId);
  const password = formUrlEncode(clientSecret);
  const credentials = btoa(`${username}:${password}`);
  return `Basic ${credentials}`;
}
async function handleOAuth(params, cookies, options2) {
  const { logger, provider } = options2;
  let as;
  const { token, userinfo } = provider;
  if ((!token?.url || token.url.host === "authjs.dev") && (!userinfo?.url || userinfo.url.host === "authjs.dev")) {
    const issuer = new URL(provider.issuer);
    const discoveryResponse = await discoveryRequest(issuer, {
      [allowInsecureRequests]: true,
      [customFetch2]: provider[customFetch]
    });
    as = await processDiscoveryResponse(issuer, discoveryResponse);
    if (!as.token_endpoint)
      throw new TypeError("TODO: Authorization server did not provide a token endpoint.");
    if (!as.userinfo_endpoint)
      throw new TypeError("TODO: Authorization server did not provide a userinfo endpoint.");
  } else {
    as = {
      issuer: provider.issuer ?? "https://authjs.dev",
      // TODO: review fallback issuer
      token_endpoint: token?.url.toString(),
      userinfo_endpoint: userinfo?.url.toString()
    };
  }
  const client = {
    client_id: provider.clientId,
    ...provider.client
  };
  let clientAuth;
  switch (client.token_endpoint_auth_method) {
    // TODO: in the next breaking major version have undefined be `client_secret_post`
    case void 0:
    case "client_secret_basic":
      clientAuth = (_as, _client, _body, headers2) => {
        headers2.set("authorization", clientSecretBasic(provider.clientId, provider.clientSecret));
      };
      break;
    case "client_secret_post":
      clientAuth = ClientSecretPost(provider.clientSecret);
      break;
    case "client_secret_jwt":
      clientAuth = ClientSecretJwt(provider.clientSecret);
      break;
    case "private_key_jwt":
      clientAuth = PrivateKeyJwt(provider.token.clientPrivateKey, {
        // TODO: review in the next breaking change
        [modifyAssertion](_header, payload) {
          payload.aud = [as.issuer, as.token_endpoint];
        }
      });
      break;
    case "none":
      clientAuth = None();
      break;
    default:
      throw new Error("unsupported client authentication method");
  }
  const resCookies = [];
  const state2 = await state.use(cookies, resCookies, options2);
  let codeGrantParams;
  try {
    codeGrantParams = validateAuthResponse(as, client, new URLSearchParams(params), provider.checks.includes("state") ? state2 : skipStateCheck);
  } catch (err) {
    if (err instanceof AuthorizationResponseError) {
      const cause = {
        providerId: provider.id,
        ...Object.fromEntries(err.cause.entries())
      };
      logger.debug("OAuthCallbackError", cause);
      throw new OAuthCallbackError("OAuth Provider returned an error", cause);
    }
    throw err;
  }
  const codeVerifier = await pkce.use(cookies, resCookies, options2);
  let redirect_uri = provider.callbackUrl;
  if (!options2.isOnRedirectProxy && provider.redirectProxyUrl) {
    redirect_uri = provider.redirectProxyUrl;
  }
  let codeGrantResponse = await authorizationCodeGrantRequest(as, client, clientAuth, codeGrantParams, redirect_uri, codeVerifier ?? "decoy", {
    // TODO: move away from allowing insecure HTTP requests
    [allowInsecureRequests]: true,
    [customFetch2]: (...args) => {
      if (!provider.checks.includes("pkce")) {
        args[1].body.delete("code_verifier");
      }
      return (provider[customFetch] ?? fetch)(...args);
    }
  });
  if (provider.token?.conform) {
    codeGrantResponse = await provider.token.conform(codeGrantResponse.clone()) ?? codeGrantResponse;
  }
  let profile = {};
  const requireIdToken = isOIDCProvider(provider);
  if (provider[conformInternal]) {
    switch (provider.id) {
      case "microsoft-entra-id":
      case "azure-ad": {
        const { tid } = decodeJwt((await codeGrantResponse.clone().json()).id_token);
        if (typeof tid === "string") {
          const tenantRe = /microsoftonline\.com\/(\w+)\/v2\.0/;
          const tenantId = as.issuer?.match(tenantRe)?.[1] ?? "common";
          const issuer = new URL(as.issuer.replace(tenantId, tid));
          const discoveryResponse = await discoveryRequest(issuer, {
            [customFetch2]: provider[customFetch]
          });
          as = await processDiscoveryResponse(issuer, discoveryResponse);
        }
        break;
      }
      default:
        break;
    }
  }
  const processedCodeResponse = await processAuthorizationCodeResponse(as, client, codeGrantResponse, {
    expectedNonce: await nonce.use(cookies, resCookies, options2),
    requireIdToken
  });
  const tokens = processedCodeResponse;
  if (requireIdToken) {
    const idTokenClaims2 = getValidatedIdTokenClaims(processedCodeResponse);
    profile = idTokenClaims2;
    if (provider[conformInternal] && provider.id === "apple") {
      try {
        profile.user = JSON.parse(params?.user);
      } catch {
      }
    }
    if (provider.idToken === false) {
      const userinfoResponse = await userInfoRequest(as, client, processedCodeResponse.access_token, {
        [customFetch2]: provider[customFetch],
        // TODO: move away from allowing insecure HTTP requests
        [allowInsecureRequests]: true
      });
      profile = await processUserInfoResponse(as, client, idTokenClaims2.sub, userinfoResponse);
    }
  } else {
    if (userinfo?.request) {
      const _profile = await userinfo.request({ tokens, provider });
      if (_profile instanceof Object)
        profile = _profile;
    } else if (userinfo?.url) {
      const userinfoResponse = await userInfoRequest(as, client, processedCodeResponse.access_token, { [customFetch2]: provider[customFetch] });
      profile = await userinfoResponse.json();
    } else {
      throw new TypeError("No userinfo endpoint configured");
    }
  }
  if (tokens.expires_in) {
    tokens.expires_at = Math.floor(Date.now() / 1e3) + Number(tokens.expires_in);
  }
  const profileResult = await getUserAndAccount(profile, provider, tokens, logger);
  return { ...profileResult, profile, cookies: resCookies };
}
async function getUserAndAccount(OAuthProfile, provider, tokens, logger) {
  try {
    const userFromProfile = await provider.profile(OAuthProfile, tokens);
    const user = {
      ...userFromProfile,
      // The user's id is intentionally not set based on the profile id, as
      // the user should remain independent of the provider and the profile id
      // is saved on the Account already, as `providerAccountId`.
      id: crypto.randomUUID(),
      email: userFromProfile.email?.toLowerCase()
    };
    return {
      user,
      account: {
        ...tokens,
        provider: provider.id,
        type: provider.type,
        providerAccountId: userFromProfile.id ?? crypto.randomUUID()
      }
    };
  } catch (e2) {
    logger.debug("getProfile error details", OAuthProfile);
    logger.error(new OAuthProfileParseError(e2, { provider: provider.id }));
  }
}
var init_callback = __esm({
  "node_modules/@auth/core/lib/actions/callback/oauth/callback.js"() {
    init_checks();
    init_build();
    init_errors();
    init_providers();
    init_symbols();
    init_browser();
  }
});

// node_modules/@auth/core/lib/utils/webauthn-utils.js
function inferWebAuthnOptions(action, loggedIn, userInfoResponse) {
  const { user, exists = false } = userInfoResponse ?? {};
  switch (action) {
    case "authenticate": {
      return "authenticate";
    }
    case "register": {
      if (user && loggedIn === exists)
        return "register";
      break;
    }
    case void 0: {
      if (!loggedIn) {
        if (user) {
          if (exists) {
            return "authenticate";
          } else {
            return "register";
          }
        } else {
          return "authenticate";
        }
      }
      break;
    }
  }
  return null;
}
async function getRegistrationResponse(options2, request, user, resCookies) {
  const regOptions = await getRegistrationOptions(options2, request, user);
  const { cookie } = await webauthnChallenge.create(options2, regOptions.challenge, user);
  return {
    status: 200,
    cookies: [...resCookies ?? [], cookie],
    body: {
      action: "register",
      options: regOptions
    },
    headers: {
      "Content-Type": "application/json"
    }
  };
}
async function getAuthenticationResponse(options2, request, user, resCookies) {
  const authOptions = await getAuthenticationOptions(options2, request, user);
  const { cookie } = await webauthnChallenge.create(options2, authOptions.challenge);
  return {
    status: 200,
    cookies: [...resCookies ?? [], cookie],
    body: {
      action: "authenticate",
      options: authOptions
    },
    headers: {
      "Content-Type": "application/json"
    }
  };
}
async function verifyAuthenticate(options2, request, resCookies) {
  const { adapter, provider } = options2;
  const data = request.body && typeof request.body.data === "string" ? JSON.parse(request.body.data) : void 0;
  if (!data || typeof data !== "object" || !("id" in data) || typeof data.id !== "string") {
    throw new AuthError("Invalid WebAuthn Authentication response");
  }
  const credentialID = toBase64(fromBase64(data.id));
  const authenticator = await adapter.getAuthenticator(credentialID);
  if (!authenticator) {
    throw new AuthError(`WebAuthn authenticator not found in database: ${JSON.stringify({
      credentialID
    })}`);
  }
  const { challenge: expectedChallenge } = await webauthnChallenge.use(options2, request.cookies, resCookies);
  let verification;
  try {
    const relayingParty = provider.getRelayingParty(options2, request);
    verification = await provider.simpleWebAuthn.verifyAuthenticationResponse({
      ...provider.verifyAuthenticationOptions,
      expectedChallenge,
      response: data,
      authenticator: fromAdapterAuthenticator(authenticator),
      expectedOrigin: relayingParty.origin,
      expectedRPID: relayingParty.id
    });
  } catch (e2) {
    throw new WebAuthnVerificationError(e2);
  }
  const { verified, authenticationInfo } = verification;
  if (!verified) {
    throw new WebAuthnVerificationError("WebAuthn authentication response could not be verified");
  }
  try {
    const { newCounter } = authenticationInfo;
    await adapter.updateAuthenticatorCounter(authenticator.credentialID, newCounter);
  } catch (e2) {
    throw new AdapterError(`Failed to update authenticator counter. This may cause future authentication attempts to fail. ${JSON.stringify({
      credentialID,
      oldCounter: authenticator.counter,
      newCounter: authenticationInfo.newCounter
    })}`, e2);
  }
  const account = await adapter.getAccount(authenticator.providerAccountId, provider.id);
  if (!account) {
    throw new AuthError(`WebAuthn account not found in database: ${JSON.stringify({
      credentialID,
      providerAccountId: authenticator.providerAccountId
    })}`);
  }
  const user = await adapter.getUser(account.userId);
  if (!user) {
    throw new AuthError(`WebAuthn user not found in database: ${JSON.stringify({
      credentialID,
      providerAccountId: authenticator.providerAccountId,
      userID: account.userId
    })}`);
  }
  return {
    account,
    user
  };
}
async function verifyRegister(options2, request, resCookies) {
  const { provider } = options2;
  const data = request.body && typeof request.body.data === "string" ? JSON.parse(request.body.data) : void 0;
  if (!data || typeof data !== "object" || !("id" in data) || typeof data.id !== "string") {
    throw new AuthError("Invalid WebAuthn Registration response");
  }
  const { challenge: expectedChallenge, registerData: user } = await webauthnChallenge.use(options2, request.cookies, resCookies);
  if (!user) {
    throw new AuthError("Missing user registration data in WebAuthn challenge cookie");
  }
  let verification;
  try {
    const relayingParty = provider.getRelayingParty(options2, request);
    verification = await provider.simpleWebAuthn.verifyRegistrationResponse({
      ...provider.verifyRegistrationOptions,
      expectedChallenge,
      response: data,
      expectedOrigin: relayingParty.origin,
      expectedRPID: relayingParty.id
    });
  } catch (e2) {
    throw new WebAuthnVerificationError(e2);
  }
  if (!verification.verified || !verification.registrationInfo) {
    throw new WebAuthnVerificationError("WebAuthn registration response could not be verified");
  }
  const account = {
    providerAccountId: toBase64(verification.registrationInfo.credentialID),
    provider: options2.provider.id,
    type: provider.type
  };
  const authenticator = {
    providerAccountId: account.providerAccountId,
    counter: verification.registrationInfo.counter,
    credentialID: toBase64(verification.registrationInfo.credentialID),
    credentialPublicKey: toBase64(verification.registrationInfo.credentialPublicKey),
    credentialBackedUp: verification.registrationInfo.credentialBackedUp,
    credentialDeviceType: verification.registrationInfo.credentialDeviceType,
    transports: transportsToString(data.response.transports)
  };
  return {
    user,
    account,
    authenticator
  };
}
async function getAuthenticationOptions(options2, request, user) {
  const { provider, adapter } = options2;
  const authenticators = user && user["id"] ? await adapter.listAuthenticatorsByUserId(user.id) : null;
  const relayingParty = provider.getRelayingParty(options2, request);
  return await provider.simpleWebAuthn.generateAuthenticationOptions({
    ...provider.authenticationOptions,
    rpID: relayingParty.id,
    allowCredentials: authenticators?.map((a3) => ({
      id: fromBase64(a3.credentialID),
      type: "public-key",
      transports: stringToTransports(a3.transports)
    }))
  });
}
async function getRegistrationOptions(options2, request, user) {
  const { provider, adapter } = options2;
  const authenticators = user["id"] ? await adapter.listAuthenticatorsByUserId(user.id) : null;
  const userID = randomString(32);
  const relayingParty = provider.getRelayingParty(options2, request);
  return await provider.simpleWebAuthn.generateRegistrationOptions({
    ...provider.registrationOptions,
    userID,
    userName: user.email,
    userDisplayName: user.name ?? void 0,
    rpID: relayingParty.id,
    rpName: relayingParty.name,
    excludeCredentials: authenticators?.map((a3) => ({
      id: fromBase64(a3.credentialID),
      type: "public-key",
      transports: stringToTransports(a3.transports)
    }))
  });
}
function assertInternalOptionsWebAuthn(options2) {
  const { provider, adapter } = options2;
  if (!adapter)
    throw new MissingAdapter("An adapter is required for the WebAuthn provider");
  if (!provider || provider.type !== "webauthn") {
    throw new InvalidProvider("Provider must be WebAuthn");
  }
  return { ...options2, provider, adapter };
}
function fromAdapterAuthenticator(authenticator) {
  return {
    ...authenticator,
    credentialDeviceType: authenticator.credentialDeviceType,
    transports: stringToTransports(authenticator.transports),
    credentialID: fromBase64(authenticator.credentialID),
    credentialPublicKey: fromBase64(authenticator.credentialPublicKey)
  };
}
function fromBase64(base642) {
  return new Uint8Array(Buffer.from(base642, "base64"));
}
function toBase64(bytes) {
  return Buffer.from(bytes).toString("base64");
}
function transportsToString(transports) {
  return transports?.join(",");
}
function stringToTransports(tstring) {
  return tstring ? tstring.split(",") : void 0;
}
var init_webauthn_utils = __esm({
  "node_modules/@auth/core/lib/utils/webauthn-utils.js"() {
    init_errors();
    init_checks();
    init_web2();
  }
});

// node_modules/@auth/core/lib/actions/callback/index.js
async function callback(request, options2, sessionStore, cookies) {
  if (!options2.provider)
    throw new InvalidProvider("Callback route called without provider");
  const { query, body: body2, method, headers: headers2 } = request;
  const { provider, adapter, url, callbackUrl, pages, jwt, events, callbacks, session: { strategy: sessionStrategy, maxAge: sessionMaxAge }, logger } = options2;
  const useJwtSession = sessionStrategy === "jwt";
  try {
    if (provider.type === "oauth" || provider.type === "oidc") {
      const params = provider.authorization?.url.searchParams.get("response_mode") === "form_post" ? body2 : query;
      if (options2.isOnRedirectProxy && params?.state) {
        const parsedState = await state.decode(params.state, options2);
        const shouldRedirect = parsedState?.origin && new URL(parsedState.origin).origin !== options2.url.origin;
        if (shouldRedirect) {
          const proxyRedirect = `${parsedState.origin}?${new URLSearchParams(params)}`;
          logger.debug("Proxy redirecting to", proxyRedirect);
          return { redirect: proxyRedirect, cookies };
        }
      }
      const authorizationResult = await handleOAuth(params, request.cookies, options2);
      if (authorizationResult.cookies.length) {
        cookies.push(...authorizationResult.cookies);
      }
      logger.debug("authorization result", authorizationResult);
      const { user: userFromProvider, account, profile: OAuthProfile } = authorizationResult;
      if (!userFromProvider || !account || !OAuthProfile) {
        return { redirect: `${url}/signin`, cookies };
      }
      let userByAccount;
      if (adapter) {
        const { getUserByAccount } = adapter;
        userByAccount = await getUserByAccount({
          providerAccountId: account.providerAccountId,
          provider: provider.id
        });
      }
      const redirect2 = await handleAuthorized({
        user: userByAccount ?? userFromProvider,
        account,
        profile: OAuthProfile
      }, options2);
      if (redirect2)
        return { redirect: redirect2, cookies };
      const { user, session: session2, isNewUser } = await handleLoginOrRegister(sessionStore.value, userFromProvider, account, options2);
      if (useJwtSession) {
        const defaultToken = {
          name: user.name,
          email: user.email,
          picture: user.image,
          sub: user.id?.toString()
        };
        const token = await callbacks.jwt({
          token: defaultToken,
          user,
          account,
          profile: OAuthProfile,
          isNewUser,
          trigger: isNewUser ? "signUp" : "signIn"
        });
        if (token === null) {
          cookies.push(...sessionStore.clean());
        } else {
          const salt = options2.cookies.sessionToken.name;
          const newToken = await jwt.encode({ ...jwt, token, salt });
          const cookieExpires = /* @__PURE__ */ new Date();
          cookieExpires.setTime(cookieExpires.getTime() + sessionMaxAge * 1e3);
          const sessionCookies = sessionStore.chunk(newToken, {
            expires: cookieExpires
          });
          cookies.push(...sessionCookies);
        }
      } else {
        cookies.push({
          name: options2.cookies.sessionToken.name,
          value: session2.sessionToken,
          options: {
            ...options2.cookies.sessionToken.options,
            expires: session2.expires
          }
        });
      }
      await events.signIn?.({
        user,
        account,
        profile: OAuthProfile,
        isNewUser
      });
      if (isNewUser && pages.newUser) {
        return {
          redirect: `${pages.newUser}${pages.newUser.includes("?") ? "&" : "?"}${new URLSearchParams({ callbackUrl })}`,
          cookies
        };
      }
      return { redirect: callbackUrl, cookies };
    } else if (provider.type === "email") {
      const paramToken = query?.token;
      const paramIdentifier = query?.email;
      if (!paramToken) {
        const e2 = new TypeError("Missing token. The sign-in URL was manually opened without token or the link was not sent correctly in the email.", { cause: { hasToken: !!paramToken } });
        e2.name = "Configuration";
        throw e2;
      }
      const secret = provider.secret ?? options2.secret;
      const invite = await adapter.useVerificationToken({
        // @ts-expect-error User-land adapters might decide to omit the identifier during lookup
        identifier: paramIdentifier,
        // TODO: Drop this requirement for lookup in official adapters too
        token: await createHash(`${paramToken}${secret}`)
      });
      const hasInvite = !!invite;
      const expired = hasInvite && invite.expires.valueOf() < Date.now();
      const invalidInvite = !hasInvite || expired || // The user might have configured the link to not contain the identifier
      // so we only compare if it exists
      paramIdentifier && invite.identifier !== paramIdentifier;
      if (invalidInvite)
        throw new Verification({ hasInvite, expired });
      const { identifier } = invite;
      const user = await adapter.getUserByEmail(identifier) ?? {
        id: crypto.randomUUID(),
        email: identifier,
        emailVerified: null
      };
      const account = {
        providerAccountId: user.email,
        userId: user.id,
        type: "email",
        provider: provider.id
      };
      const redirect2 = await handleAuthorized({ user, account }, options2);
      if (redirect2)
        return { redirect: redirect2, cookies };
      const { user: loggedInUser, session: session2, isNewUser } = await handleLoginOrRegister(sessionStore.value, user, account, options2);
      if (useJwtSession) {
        const defaultToken = {
          name: loggedInUser.name,
          email: loggedInUser.email,
          picture: loggedInUser.image,
          sub: loggedInUser.id?.toString()
        };
        const token = await callbacks.jwt({
          token: defaultToken,
          user: loggedInUser,
          account,
          isNewUser,
          trigger: isNewUser ? "signUp" : "signIn"
        });
        if (token === null) {
          cookies.push(...sessionStore.clean());
        } else {
          const salt = options2.cookies.sessionToken.name;
          const newToken = await jwt.encode({ ...jwt, token, salt });
          const cookieExpires = /* @__PURE__ */ new Date();
          cookieExpires.setTime(cookieExpires.getTime() + sessionMaxAge * 1e3);
          const sessionCookies = sessionStore.chunk(newToken, {
            expires: cookieExpires
          });
          cookies.push(...sessionCookies);
        }
      } else {
        cookies.push({
          name: options2.cookies.sessionToken.name,
          value: session2.sessionToken,
          options: {
            ...options2.cookies.sessionToken.options,
            expires: session2.expires
          }
        });
      }
      await events.signIn?.({ user: loggedInUser, account, isNewUser });
      if (isNewUser && pages.newUser) {
        return {
          redirect: `${pages.newUser}${pages.newUser.includes("?") ? "&" : "?"}${new URLSearchParams({ callbackUrl })}`,
          cookies
        };
      }
      return { redirect: callbackUrl, cookies };
    } else if (provider.type === "credentials" && method === "POST") {
      const credentials = body2 ?? {};
      Object.entries(query ?? {}).forEach(([k3, v2]) => url.searchParams.set(k3, v2));
      const userFromAuthorize = await provider.authorize(
        credentials,
        // prettier-ignore
        new Request(url, { headers: headers2, method, body: JSON.stringify(body2) })
      );
      const user = userFromAuthorize;
      if (!user)
        throw new CredentialsSignin();
      else
        user.id = user.id?.toString() ?? crypto.randomUUID();
      const account = {
        providerAccountId: user.id,
        type: "credentials",
        provider: provider.id
      };
      const redirect2 = await handleAuthorized({ user, account, credentials }, options2);
      if (redirect2)
        return { redirect: redirect2, cookies };
      const defaultToken = {
        name: user.name,
        email: user.email,
        picture: user.image,
        sub: user.id
      };
      const token = await callbacks.jwt({
        token: defaultToken,
        user,
        account,
        isNewUser: false,
        trigger: "signIn"
      });
      if (token === null) {
        cookies.push(...sessionStore.clean());
      } else {
        const salt = options2.cookies.sessionToken.name;
        const newToken = await jwt.encode({ ...jwt, token, salt });
        const cookieExpires = /* @__PURE__ */ new Date();
        cookieExpires.setTime(cookieExpires.getTime() + sessionMaxAge * 1e3);
        const sessionCookies = sessionStore.chunk(newToken, {
          expires: cookieExpires
        });
        cookies.push(...sessionCookies);
      }
      await events.signIn?.({ user, account });
      return { redirect: callbackUrl, cookies };
    } else if (provider.type === "webauthn" && method === "POST") {
      const action = request.body?.action;
      if (typeof action !== "string" || action !== "authenticate" && action !== "register") {
        throw new AuthError("Invalid action parameter");
      }
      const localOptions = assertInternalOptionsWebAuthn(options2);
      let user;
      let account;
      let authenticator;
      switch (action) {
        case "authenticate": {
          const verified = await verifyAuthenticate(localOptions, request, cookies);
          user = verified.user;
          account = verified.account;
          break;
        }
        case "register": {
          const verified = await verifyRegister(options2, request, cookies);
          user = verified.user;
          account = verified.account;
          authenticator = verified.authenticator;
          break;
        }
      }
      await handleAuthorized({ user, account }, options2);
      const { user: loggedInUser, isNewUser, session: session2, account: currentAccount } = await handleLoginOrRegister(sessionStore.value, user, account, options2);
      if (!currentAccount) {
        throw new AuthError("Error creating or finding account");
      }
      if (authenticator && loggedInUser.id) {
        await localOptions.adapter.createAuthenticator({
          ...authenticator,
          userId: loggedInUser.id
        });
      }
      if (useJwtSession) {
        const defaultToken = {
          name: loggedInUser.name,
          email: loggedInUser.email,
          picture: loggedInUser.image,
          sub: loggedInUser.id?.toString()
        };
        const token = await callbacks.jwt({
          token: defaultToken,
          user: loggedInUser,
          account: currentAccount,
          isNewUser,
          trigger: isNewUser ? "signUp" : "signIn"
        });
        if (token === null) {
          cookies.push(...sessionStore.clean());
        } else {
          const salt = options2.cookies.sessionToken.name;
          const newToken = await jwt.encode({ ...jwt, token, salt });
          const cookieExpires = /* @__PURE__ */ new Date();
          cookieExpires.setTime(cookieExpires.getTime() + sessionMaxAge * 1e3);
          const sessionCookies = sessionStore.chunk(newToken, {
            expires: cookieExpires
          });
          cookies.push(...sessionCookies);
        }
      } else {
        cookies.push({
          name: options2.cookies.sessionToken.name,
          value: session2.sessionToken,
          options: {
            ...options2.cookies.sessionToken.options,
            expires: session2.expires
          }
        });
      }
      await events.signIn?.({
        user: loggedInUser,
        account: currentAccount,
        isNewUser
      });
      if (isNewUser && pages.newUser) {
        return {
          redirect: `${pages.newUser}${pages.newUser.includes("?") ? "&" : "?"}${new URLSearchParams({ callbackUrl })}`,
          cookies
        };
      }
      return { redirect: callbackUrl, cookies };
    }
    throw new InvalidProvider(`Callback for provider type (${provider.type}) is not supported`);
  } catch (e2) {
    if (e2 instanceof AuthError)
      throw e2;
    const error = new CallbackRouteError(e2, { provider: provider.id });
    logger.debug("callback route error details", { method, query, body: body2 });
    throw error;
  }
}
async function handleAuthorized(params, config) {
  let authorized;
  const { signIn: signIn3, redirect: redirect2 } = config.callbacks;
  try {
    authorized = await signIn3(params);
  } catch (e2) {
    if (e2 instanceof AuthError)
      throw e2;
    throw new AccessDenied(e2);
  }
  if (!authorized)
    throw new AccessDenied("AccessDenied");
  if (typeof authorized !== "string")
    return;
  return await redirect2({ url: authorized, baseUrl: config.url.origin });
}
var init_callback2 = __esm({
  "node_modules/@auth/core/lib/actions/callback/index.js"() {
    init_errors();
    init_handle_login();
    init_callback();
    init_checks();
    init_web2();
    init_webauthn_utils();
  }
});

// node_modules/@auth/core/lib/actions/session.js
async function session(options2, sessionStore, cookies, isUpdate, newSession) {
  const { adapter, jwt, events, callbacks, logger, session: { strategy: sessionStrategy, maxAge: sessionMaxAge } } = options2;
  const response = {
    body: null,
    headers: { "Content-Type": "application/json" },
    cookies
  };
  const sessionToken = sessionStore.value;
  if (!sessionToken)
    return response;
  if (sessionStrategy === "jwt") {
    try {
      const salt = options2.cookies.sessionToken.name;
      const payload = await jwt.decode({ ...jwt, token: sessionToken, salt });
      if (!payload)
        throw new Error("Invalid JWT");
      const token = await callbacks.jwt({
        token: payload,
        ...isUpdate && { trigger: "update" },
        session: newSession
      });
      const newExpires = fromDate(sessionMaxAge);
      if (token !== null) {
        const session2 = {
          user: { name: token.name, email: token.email, image: token.picture },
          expires: newExpires.toISOString()
        };
        const newSession2 = await callbacks.session({ session: session2, token });
        response.body = newSession2;
        const newToken = await jwt.encode({ ...jwt, token, salt });
        const sessionCookies = sessionStore.chunk(newToken, {
          expires: newExpires
        });
        response.cookies?.push(...sessionCookies);
        await events.session?.({ session: newSession2, token });
      } else {
        response.cookies?.push(...sessionStore.clean());
      }
    } catch (e2) {
      logger.error(new JWTSessionError(e2));
      response.cookies?.push(...sessionStore.clean());
    }
    return response;
  }
  try {
    const { getSessionAndUser, deleteSession, updateSession } = adapter;
    let userAndSession = await getSessionAndUser(sessionToken);
    if (userAndSession && userAndSession.session.expires.valueOf() < Date.now()) {
      await deleteSession(sessionToken);
      userAndSession = null;
    }
    if (userAndSession) {
      const { user, session: session2 } = userAndSession;
      const sessionUpdateAge = options2.session.updateAge;
      const sessionIsDueToBeUpdatedDate = session2.expires.valueOf() - sessionMaxAge * 1e3 + sessionUpdateAge * 1e3;
      const newExpires = fromDate(sessionMaxAge);
      if (sessionIsDueToBeUpdatedDate <= Date.now()) {
        await updateSession({
          sessionToken,
          expires: newExpires
        });
      }
      const sessionPayload = await callbacks.session({
        // TODO: user already passed below,
        // remove from session object in https://github.com/nextauthjs/next-auth/pull/9702
        // @ts-expect-error
        session: { ...session2, user },
        user,
        newSession,
        ...isUpdate ? { trigger: "update" } : {}
      });
      response.body = sessionPayload;
      response.cookies?.push({
        name: options2.cookies.sessionToken.name,
        value: sessionToken,
        options: {
          ...options2.cookies.sessionToken.options,
          expires: newExpires
        }
      });
      await events.session?.({ session: sessionPayload });
    } else if (sessionToken) {
      response.cookies?.push(...sessionStore.clean());
    }
  } catch (e2) {
    logger.error(new SessionTokenError(e2));
  }
  return response;
}
var init_session = __esm({
  "node_modules/@auth/core/lib/actions/session.js"() {
    init_errors();
    init_date();
  }
});

// node_modules/@auth/core/lib/actions/signin/authorization-url.js
async function getAuthorizationUrl(query, options2) {
  const { logger, provider } = options2;
  let url = provider.authorization?.url;
  let as;
  if (!url || url.host === "authjs.dev") {
    const issuer = new URL(provider.issuer);
    const discoveryResponse = await discoveryRequest(issuer, {
      [customFetch2]: provider[customFetch],
      // TODO: move away from allowing insecure HTTP requests
      [allowInsecureRequests]: true
    });
    const as2 = await processDiscoveryResponse(issuer, discoveryResponse);
    if (!as2.authorization_endpoint) {
      throw new TypeError("Authorization server did not provide an authorization endpoint.");
    }
    url = new URL(as2.authorization_endpoint);
  }
  const authParams = url.searchParams;
  let redirect_uri = provider.callbackUrl;
  let data;
  if (!options2.isOnRedirectProxy && provider.redirectProxyUrl) {
    redirect_uri = provider.redirectProxyUrl;
    data = provider.callbackUrl;
    logger.debug("using redirect proxy", { redirect_uri, data });
  }
  const params = Object.assign({
    response_type: "code",
    // clientId can technically be undefined, should we check this in assert.ts or rely on the Authorization Server to do it?
    client_id: provider.clientId,
    redirect_uri,
    // @ts-expect-error TODO:
    ...provider.authorization?.params
  }, Object.fromEntries(provider.authorization?.url.searchParams ?? []), query);
  for (const k3 in params)
    authParams.set(k3, params[k3]);
  const cookies = [];
  if (
    // Otherwise "POST /redirect_uri" wouldn't include the cookies
    provider.authorization?.url.searchParams.get("response_mode") === "form_post"
  ) {
    options2.cookies.state.options.sameSite = "none";
    options2.cookies.state.options.secure = true;
    options2.cookies.nonce.options.sameSite = "none";
    options2.cookies.nonce.options.secure = true;
  }
  const state2 = await state.create(options2, data);
  if (state2) {
    authParams.set("state", state2.value);
    cookies.push(state2.cookie);
  }
  if (provider.checks?.includes("pkce")) {
    if (as && !as.code_challenge_methods_supported?.includes("S256")) {
      if (provider.type === "oidc")
        provider.checks = ["nonce"];
    } else {
      const { value, cookie } = await pkce.create(options2);
      authParams.set("code_challenge", value);
      authParams.set("code_challenge_method", "S256");
      cookies.push(cookie);
    }
  }
  const nonce2 = await nonce.create(options2);
  if (nonce2) {
    authParams.set("nonce", nonce2.value);
    cookies.push(nonce2.cookie);
  }
  if (provider.type === "oidc" && !url.searchParams.has("scope")) {
    url.searchParams.set("scope", "openid profile email");
  }
  logger.debug("authorization url is ready", { url, cookies, provider });
  return { redirect: url.toString(), cookies };
}
var init_authorization_url = __esm({
  "node_modules/@auth/core/lib/actions/signin/authorization-url.js"() {
    init_checks();
    init_build();
    init_symbols();
  }
});

// node_modules/@auth/core/lib/actions/signin/send-token.js
async function sendToken(request, options2) {
  const { body: body2 } = request;
  const { provider, callbacks, adapter } = options2;
  const normalizer = provider.normalizeIdentifier ?? defaultNormalizer;
  const email = normalizer(body2?.email);
  const defaultUser = { id: crypto.randomUUID(), email, emailVerified: null };
  const user = await adapter.getUserByEmail(email) ?? defaultUser;
  const account = {
    providerAccountId: email,
    userId: user.id,
    type: "email",
    provider: provider.id
  };
  let authorized;
  try {
    authorized = await callbacks.signIn({
      user,
      account,
      email: { verificationRequest: true }
    });
  } catch (e2) {
    throw new AccessDenied(e2);
  }
  if (!authorized)
    throw new AccessDenied("AccessDenied");
  if (typeof authorized === "string") {
    return {
      redirect: await callbacks.redirect({
        url: authorized,
        baseUrl: options2.url.origin
      })
    };
  }
  const { callbackUrl, theme } = options2;
  const token = await provider.generateVerificationToken?.() ?? randomString(32);
  const ONE_DAY_IN_SECONDS = 86400;
  const expires = new Date(Date.now() + (provider.maxAge ?? ONE_DAY_IN_SECONDS) * 1e3);
  const secret = provider.secret ?? options2.secret;
  const baseUrl = new URL(options2.basePath, options2.url.origin);
  const sendRequest = provider.sendVerificationRequest({
    identifier: email,
    token,
    expires,
    url: `${baseUrl}/callback/${provider.id}?${new URLSearchParams({
      callbackUrl,
      token,
      email
    })}`,
    provider,
    theme,
    request: toRequest(request)
  });
  const createToken = adapter.createVerificationToken?.({
    identifier: email,
    token: await createHash(`${token}${secret}`),
    expires
  });
  await Promise.all([sendRequest, createToken]);
  return {
    redirect: `${baseUrl}/verify-request?${new URLSearchParams({
      provider: provider.id,
      type: provider.type
    })}`
  };
}
function defaultNormalizer(email) {
  if (!email)
    throw new Error("Missing email from request body.");
  let [local, domain] = email.toLowerCase().trim().split("@");
  domain = domain.split(",")[0];
  return `${local}@${domain}`;
}
var init_send_token = __esm({
  "node_modules/@auth/core/lib/actions/signin/send-token.js"() {
    init_web2();
    init_errors();
  }
});

// node_modules/@auth/core/lib/actions/signin/index.js
async function signIn(request, cookies, options2) {
  const signInUrl = `${options2.url.origin}${options2.basePath}/signin`;
  if (!options2.provider)
    return { redirect: signInUrl, cookies };
  switch (options2.provider.type) {
    case "oauth":
    case "oidc": {
      const { redirect: redirect2, cookies: authCookies } = await getAuthorizationUrl(request.query, options2);
      if (authCookies)
        cookies.push(...authCookies);
      return { redirect: redirect2, cookies };
    }
    case "email": {
      const response = await sendToken(request, options2);
      return { ...response, cookies };
    }
    default:
      return { redirect: signInUrl, cookies };
  }
}
var init_signin2 = __esm({
  "node_modules/@auth/core/lib/actions/signin/index.js"() {
    init_authorization_url();
    init_send_token();
  }
});

// node_modules/@auth/core/lib/actions/signout.js
async function signOut(cookies, sessionStore, options2) {
  const { jwt, events, callbackUrl: redirect2, logger, session: session2 } = options2;
  const sessionToken = sessionStore.value;
  if (!sessionToken)
    return { redirect: redirect2, cookies };
  try {
    if (session2.strategy === "jwt") {
      const salt = options2.cookies.sessionToken.name;
      const token = await jwt.decode({ ...jwt, token: sessionToken, salt });
      await events.signOut?.({ token });
    } else {
      const session3 = await options2.adapter?.deleteSession(sessionToken);
      await events.signOut?.({ session: session3 });
    }
  } catch (e2) {
    logger.error(new SignOutError(e2));
  }
  cookies.push(...sessionStore.clean());
  return { redirect: redirect2, cookies };
}
var init_signout2 = __esm({
  "node_modules/@auth/core/lib/actions/signout.js"() {
    init_errors();
  }
});

// node_modules/@auth/core/lib/utils/session.js
async function getLoggedInUser(options2, sessionStore) {
  const { adapter, jwt, session: { strategy: sessionStrategy } } = options2;
  const sessionToken = sessionStore.value;
  if (!sessionToken)
    return null;
  if (sessionStrategy === "jwt") {
    const salt = options2.cookies.sessionToken.name;
    const payload = await jwt.decode({ ...jwt, token: sessionToken, salt });
    if (payload && payload.sub) {
      return {
        id: payload.sub,
        name: payload.name,
        email: payload.email,
        image: payload.picture
      };
    }
  } else {
    const userAndSession = await adapter?.getSessionAndUser(sessionToken);
    if (userAndSession) {
      return userAndSession.user;
    }
  }
  return null;
}
var init_session2 = __esm({
  "node_modules/@auth/core/lib/utils/session.js"() {
  }
});

// node_modules/@auth/core/lib/actions/webauthn-options.js
async function webAuthnOptions(request, options2, sessionStore, cookies) {
  const narrowOptions = assertInternalOptionsWebAuthn(options2);
  const { provider } = narrowOptions;
  const { action } = request.query ?? {};
  if (action !== "register" && action !== "authenticate" && typeof action !== "undefined") {
    return {
      status: 400,
      body: { error: "Invalid action" },
      cookies,
      headers: {
        "Content-Type": "application/json"
      }
    };
  }
  const sessionUser = await getLoggedInUser(options2, sessionStore);
  const getUserInfoResponse = sessionUser ? {
    user: sessionUser,
    exists: true
  } : await provider.getUserInfo(options2, request);
  const userInfo = getUserInfoResponse?.user;
  const decision = inferWebAuthnOptions(action, !!sessionUser, getUserInfoResponse);
  switch (decision) {
    case "authenticate":
      return getAuthenticationResponse(narrowOptions, request, userInfo, cookies);
    case "register":
      if (typeof userInfo?.email === "string") {
        return getRegistrationResponse(narrowOptions, request, userInfo, cookies);
      }
      break;
    default:
      return {
        status: 400,
        body: { error: "Invalid request" },
        cookies,
        headers: {
          "Content-Type": "application/json"
        }
      };
  }
}
var init_webauthn_options = __esm({
  "node_modules/@auth/core/lib/actions/webauthn-options.js"() {
    init_session2();
    init_webauthn_utils();
  }
});

// node_modules/@auth/core/lib/actions/index.js
var init_actions2 = __esm({
  "node_modules/@auth/core/lib/actions/index.js"() {
    init_callback2();
    init_session();
    init_signin2();
    init_signout2();
    init_webauthn_options();
  }
});

// node_modules/@auth/core/lib/index.js
async function AuthInternal(request, authOptions) {
  const { action, providerId, error, method } = request;
  const csrfDisabled = authOptions.skipCSRFCheck === skipCSRFCheck;
  const { options: options2, cookies } = await init({
    authOptions,
    action,
    providerId,
    url: request.url,
    callbackUrl: request.body?.callbackUrl ?? request.query?.callbackUrl,
    csrfToken: request.body?.csrfToken,
    cookies: request.cookies,
    isPost: method === "POST",
    csrfDisabled
  });
  const sessionStore = new SessionStore(options2.cookies.sessionToken, request.cookies, options2.logger);
  if (method === "GET") {
    const render2 = renderPage({ ...options2, query: request.query, cookies });
    switch (action) {
      case "callback":
        return await callback(request, options2, sessionStore, cookies);
      case "csrf":
        return render2.csrf(csrfDisabled, options2, cookies);
      case "error":
        return render2.error(error);
      case "providers":
        return render2.providers(options2.providers);
      case "session":
        return await session(options2, sessionStore, cookies);
      case "signin":
        return render2.signin(providerId, error);
      case "signout":
        return render2.signout();
      case "verify-request":
        return render2.verifyRequest();
      case "webauthn-options":
        return await webAuthnOptions(request, options2, sessionStore, cookies);
      default:
    }
  } else {
    const { csrfTokenVerified } = options2;
    switch (action) {
      case "callback":
        if (options2.provider.type === "credentials")
          validateCSRF(action, csrfTokenVerified);
        return await callback(request, options2, sessionStore, cookies);
      case "session":
        validateCSRF(action, csrfTokenVerified);
        return await session(options2, sessionStore, cookies, true, request.body?.data);
      case "signin":
        validateCSRF(action, csrfTokenVerified);
        return await signIn(request, cookies, options2);
      case "signout":
        validateCSRF(action, csrfTokenVerified);
        return await signOut(cookies, sessionStore, options2);
      default:
    }
  }
  throw new UnknownAction(`Cannot handle action: ${action}`);
}
var init_lib = __esm({
  "node_modules/@auth/core/lib/index.js"() {
    init_errors();
    init_cookie();
    init_init();
    init_pages();
    init_actions2();
    init_csrf_token();
    init_symbols();
    init_symbols();
  }
});

// node_modules/@auth/core/lib/utils/env.js
function setEnvDefaults(envObject, config, suppressBasePathWarning = false) {
  try {
    const url = envObject.AUTH_URL;
    if (url) {
      if (config.basePath) {
        if (!suppressBasePathWarning) {
          const logger = setLogger(config);
          logger.warn("env-url-basepath-redundant");
        }
      } else {
        config.basePath = new URL(url).pathname;
      }
    }
  } catch {
  } finally {
    config.basePath ?? (config.basePath = `/auth`);
  }
  if (!config.secret?.length) {
    config.secret = [];
    const secret = envObject.AUTH_SECRET;
    if (secret)
      config.secret.push(secret);
    for (const i4 of [1, 2, 3]) {
      const secret2 = envObject[`AUTH_SECRET_${i4}`];
      if (secret2)
        config.secret.unshift(secret2);
    }
  }
  config.redirectProxyUrl ?? (config.redirectProxyUrl = envObject.AUTH_REDIRECT_PROXY_URL);
  config.trustHost ?? (config.trustHost = !!(envObject.AUTH_URL ?? envObject.AUTH_TRUST_HOST ?? envObject.VERCEL ?? envObject.CF_PAGES ?? envObject.NODE_ENV !== "production"));
  config.providers = config.providers.map((provider) => {
    const { id } = typeof provider === "function" ? provider({}) : provider;
    const ID = id.toUpperCase().replace(/-/g, "_");
    const clientId = envObject[`AUTH_${ID}_ID`];
    const clientSecret = envObject[`AUTH_${ID}_SECRET`];
    const issuer = envObject[`AUTH_${ID}_ISSUER`];
    const apiKey = envObject[`AUTH_${ID}_KEY`];
    const finalProvider = typeof provider === "function" ? provider({ clientId, clientSecret, issuer, apiKey }) : provider;
    if (finalProvider.type === "oauth" || finalProvider.type === "oidc") {
      finalProvider.clientId ?? (finalProvider.clientId = clientId);
      finalProvider.clientSecret ?? (finalProvider.clientSecret = clientSecret);
      finalProvider.issuer ?? (finalProvider.issuer = issuer);
    } else if (finalProvider.type === "email") {
      finalProvider.apiKey ?? (finalProvider.apiKey = apiKey);
    }
    return finalProvider;
  });
}
function createActionURL(action, protocol, headers2, envObject, config) {
  const basePath = config?.basePath;
  const envUrl = envObject.AUTH_URL ?? envObject.NEXTAUTH_URL;
  let url;
  if (envUrl) {
    url = new URL(envUrl);
    if (basePath && basePath !== "/" && url.pathname !== "/") {
      if (url.pathname !== basePath) {
        const logger = setLogger(config);
        logger.warn("env-url-basepath-mismatch");
      }
      url.pathname = "/";
    }
  } else {
    const detectedHost = headers2.get("x-forwarded-host") ?? headers2.get("host");
    const detectedProtocol = headers2.get("x-forwarded-proto") ?? protocol ?? "https";
    const _protocol = detectedProtocol.endsWith(":") ? detectedProtocol : detectedProtocol + ":";
    url = new URL(`${_protocol}//${detectedHost}`);
  }
  const sanitizedUrl = url.toString().replace(/\/$/, "");
  if (basePath) {
    const sanitizedBasePath = basePath?.replace(/(^\/|\/$)/g, "") ?? "";
    return new URL(`${sanitizedUrl}/${sanitizedBasePath}/${action}`);
  }
  return new URL(`${sanitizedUrl}/${action}`);
}
var init_env = __esm({
  "node_modules/@auth/core/lib/utils/env.js"() {
    init_logger();
  }
});

// node_modules/@auth/core/index.js
async function Auth(request, config) {
  const logger = setLogger(config);
  const internalRequest = await toInternalRequest(request, config);
  if (!internalRequest)
    return Response.json(`Bad request.`, { status: 400 });
  const warningsOrError = assertConfig(internalRequest, config);
  if (Array.isArray(warningsOrError)) {
    warningsOrError.forEach(logger.warn);
  } else if (warningsOrError) {
    logger.error(warningsOrError);
    const htmlPages = /* @__PURE__ */ new Set([
      "signin",
      "signout",
      "error",
      "verify-request"
    ]);
    if (!htmlPages.has(internalRequest.action) || internalRequest.method !== "GET") {
      const message2 = "There was a problem with the server configuration. Check the server logs for more information.";
      return Response.json({ message: message2 }, { status: 500 });
    }
    const { pages, theme } = config;
    const authOnErrorPage = pages?.error && internalRequest.url.searchParams.get("callbackUrl")?.startsWith(pages.error);
    if (!pages?.error || authOnErrorPage) {
      if (authOnErrorPage) {
        logger.error(new ErrorPageLoop(`The error page ${pages?.error} should not require authentication`));
      }
      const page3 = renderPage({ theme }).error("Configuration");
      return toResponse(page3);
    }
    const url = `${internalRequest.url.origin}${pages.error}?error=Configuration`;
    return Response.redirect(url);
  }
  const isRedirect = request.headers?.has("X-Auth-Return-Redirect");
  const isRaw = config.raw === raw;
  try {
    const internalResponse = await AuthInternal(internalRequest, config);
    if (isRaw)
      return internalResponse;
    const response = toResponse(internalResponse);
    const url = response.headers.get("Location");
    if (!isRedirect || !url)
      return response;
    return Response.json({ url }, { headers: response.headers });
  } catch (e2) {
    const error = e2;
    logger.error(error);
    const isAuthError = error instanceof AuthError;
    if (isAuthError && isRaw && !isRedirect)
      throw error;
    if (request.method === "POST" && internalRequest.action === "session")
      return Response.json(null, { status: 400 });
    const isClientSafeErrorType = isClientError(error);
    const type = isClientSafeErrorType ? error.type : "Configuration";
    const params = new URLSearchParams({ error: type });
    if (error instanceof CredentialsSignin)
      params.set("code", error.code);
    const pageKind = isAuthError && error.kind || "error";
    const pagePath = config.pages?.[pageKind] ?? `${config.basePath}/${pageKind.toLowerCase()}`;
    const url = `${internalRequest.url.origin}${pagePath}?${params}`;
    if (isRedirect)
      return Response.json({ url });
    return Response.redirect(url);
  }
}
var init_core = __esm({
  "node_modules/@auth/core/index.js"() {
    init_assert();
    init_errors();
    init_lib();
    init_env();
    init_pages();
    init_logger();
    init_web2();
    init_actions();
    init_symbols();
  }
});

// node_modules/@auth/core/providers/github.js
function GitHub(config) {
  const baseUrl = config?.enterprise?.baseUrl ?? "https://github.com";
  const apiBaseUrl = config?.enterprise?.baseUrl ? `${config?.enterprise?.baseUrl}/api/v3` : "https://api.github.com";
  return {
    id: "github",
    name: "GitHub",
    type: "oauth",
    authorization: {
      url: `${baseUrl}/login/oauth/authorize`,
      params: { scope: "read:user user:email" }
    },
    token: `${baseUrl}/login/oauth/access_token`,
    userinfo: {
      url: `${apiBaseUrl}/user`,
      async request({ tokens, provider }) {
        const profile = await fetch(provider.userinfo?.url, {
          headers: {
            Authorization: `Bearer ${tokens.access_token}`,
            "User-Agent": "authjs"
          }
        }).then(async (res) => await res.json());
        if (!profile.email) {
          const res = await fetch(`${apiBaseUrl}/user/emails`, {
            headers: {
              Authorization: `Bearer ${tokens.access_token}`,
              "User-Agent": "authjs"
            }
          });
          if (res.ok) {
            const emails = await res.json();
            profile.email = (emails.find((e2) => e2.primary) ?? emails[0]).email;
          }
        }
        return profile;
      }
    },
    profile(profile) {
      return {
        id: profile.id.toString(),
        name: profile.name ?? profile.login,
        email: profile.email,
        image: profile.avatar_url
      };
    },
    style: { bg: "#24292f", text: "#fff" },
    options: config
  };
}
var init_github = __esm({
  "node_modules/@auth/core/providers/github.js"() {
  }
});

// .svelte-kit/output/server/chunks/auth.js
function setEnvDefaults2(envObject, config) {
  config.trustHost ??= dev;
  config.basePath = `${base}/auth`;
  config.skipCSRFCheck = skipCSRFCheck;
  if (building)
    return;
  setEnvDefaults(envObject, config);
}
async function signIn$1(provider, options2 = {}, authorizationParams, config, event) {
  const { request, url: { protocol } } = event;
  const headers2 = new Headers(request.headers);
  const { redirect: shouldRedirect = true, redirectTo, ...rest } = options2 instanceof FormData ? Object.fromEntries(options2) : options2;
  const callbackUrl = redirectTo?.toString() ?? headers2.get("Referer") ?? "/";
  const signInURL = createActionURL("signin", protocol, headers2, private_env, config);
  if (!provider) {
    signInURL.searchParams.append("callbackUrl", callbackUrl);
    if (shouldRedirect)
      redirect(302, signInURL.toString());
    return signInURL.toString();
  }
  let url = `${signInURL}/${provider}?${new URLSearchParams(authorizationParams)}`;
  let foundProvider = {};
  for (const providerConfig of config.providers) {
    const { options: options22, ...defaults } = typeof providerConfig === "function" ? providerConfig() : providerConfig;
    const id = options22?.id ?? defaults.id;
    if (id === provider) {
      foundProvider = {
        id,
        type: options22?.type ?? defaults.type
      };
      break;
    }
  }
  if (!foundProvider.id) {
    const url2 = `${signInURL}?${new URLSearchParams({ callbackUrl })}`;
    if (shouldRedirect)
      redirect(302, url2);
    return url2;
  }
  if (foundProvider.type === "credentials") {
    url = url.replace("signin", "callback");
  }
  headers2.set("Content-Type", "application/x-www-form-urlencoded");
  const body2 = new URLSearchParams({ ...rest, callbackUrl });
  const req = new Request(url, { method: "POST", headers: headers2, body: body2 });
  const res = await Auth(req, { ...config, raw });
  for (const c3 of res?.cookies ?? []) {
    event.cookies.set(c3.name, c3.value, { path: "/", ...c3.options });
  }
  if (shouldRedirect) {
    return redirect(302, res.redirect);
  }
  return res.redirect;
}
async function signOut$1(options2, config, event) {
  const { request, url: { protocol } } = event;
  const headers2 = new Headers(request.headers);
  headers2.set("Content-Type", "application/x-www-form-urlencoded");
  const url = createActionURL("signout", protocol, headers2, private_env, config);
  const callbackUrl = options2?.redirectTo ?? headers2.get("Referer") ?? "/";
  const body2 = new URLSearchParams({ callbackUrl });
  const req = new Request(url, { method: "POST", headers: headers2, body: body2 });
  const res = await Auth(req, { ...config, raw });
  for (const c3 of res?.cookies ?? [])
    event.cookies.set(c3.name, c3.value, { path: "/", ...c3.options });
  if (options2?.redirect ?? true)
    return redirect(302, res.redirect);
  return res;
}
async function auth(event, config) {
  setEnvDefaults2(private_env, config);
  config.trustHost ??= true;
  const { request: req, url: { protocol } } = event;
  const sessionUrl = createActionURL("session", protocol, req.headers, private_env, config);
  const request = new Request(sessionUrl, {
    headers: { cookie: req.headers.get("cookie") ?? "" }
  });
  const response = await Auth(request, config);
  const authCookies = (0, import_set_cookie_parser.parse)(response.headers.getSetCookie());
  for (const cookie of authCookies) {
    const { name, value, ...options2 } = cookie;
    event.cookies.set(name, value, { path: "/", ...options2 });
  }
  const { status = 200 } = response;
  const data = await response.json();
  if (!data || !Object.keys(data).length)
    return null;
  if (status === 200)
    return data;
  throw new Error(data.message);
}
function SvelteKitAuth(config) {
  return {
    signIn: async (event) => {
      if (building)
        return;
      const { request } = event;
      const _config = typeof config === "object" ? config : await config(event);
      setEnvDefaults2(private_env, _config);
      const formData = await request.formData();
      const { providerId: provider, ...options2 } = Object.fromEntries(formData);
      const authorizationParams = {};
      const _options = {};
      for (const key2 in options2) {
        if (key2.startsWith(authorizationParamsPrefix)) {
          authorizationParams[key2.slice(authorizationParamsPrefix.length)] = options2[key2];
        } else {
          _options[key2] = options2[key2];
        }
      }
      await signIn$1(provider, _options, authorizationParams, _config, event);
    },
    signOut: async (event) => {
      if (building)
        return;
      const _config = typeof config === "object" ? config : await config(event);
      setEnvDefaults2(private_env, _config);
      const options2 = Object.fromEntries(await event.request.formData());
      await signOut$1(options2, _config, event);
    },
    async handle({ event, resolve: resolve2 }) {
      if (building) {
        event.locals.auth ??= async () => null;
        event.locals.getSession ??= event.locals.auth;
        return resolve2(event);
      }
      const _config = typeof config === "object" ? config : await config(event);
      setEnvDefaults2(private_env, _config);
      const { url, request } = event;
      event.locals.auth ??= () => auth(event, _config);
      event.locals.getSession ??= event.locals.auth;
      const action = url.pathname.slice(
        // @ts-expect-error - basePath is defined in setEnvDefaults
        _config.basePath.length + 1
      ).split("/")[0];
      if (isAuthAction(action) && url.pathname.startsWith(_config.basePath + "/")) {
        return Auth(request, _config);
      }
      return resolve2(event);
    }
  };
}
var import_set_cookie_parser, dev, authorizationParamsPrefix, handle, signIn2, signOut2;
var init_auth = __esm({
  ".svelte-kit/output/server/chunks/auth.js"() {
    init_chunks();
    init_environment();
    init_core();
    init_false();
    import_set_cookie_parser = __toESM(require_set_cookie(), 1);
    init_errors();
    init_github();
    dev = BROWSER;
    authorizationParamsPrefix = "authorizationParams-";
    ({ handle, signIn: signIn2, signOut: signOut2 } = SvelteKitAuth(async (event) => {
      const authOptions = {
        providers: [
          GitHub({
            clientId: event.platform.env.AUTH_GITHUB_ID,
            clientSecret: event.platform.env.AUTH_GITHUB_SECRET,
            profile(profile) {
              return {
                role: profile.role ?? "user",
                ...profile,
                id: profile.id.toString()
              };
            },
            callbacks: {
              jwt({ token, user }) {
                if (user) token.role = user.role;
                return token;
              },
              session({ session: session2, token }) {
                session2.user.role = token.role;
                return session2;
              }
            }
          })
        ],
        secret: event.platform.env.AUTH_SECRET,
        trustHost: true
      };
      return authOptions;
    }));
  }
});

// .svelte-kit/output/server/chunks/hooks.server.js
var hooks_server_exports = {};
__export(hooks_server_exports, {
  handle: () => handle2
});
function sequence(...handlers) {
  const length = handlers.length;
  if (!length) return ({ event, resolve: resolve2 }) => resolve2(event);
  return ({ event, resolve: resolve2 }) => {
    return apply_handle(0, event, {});
    function apply_handle(i4, event2, parent_options) {
      const handle22 = handlers[i4];
      return handle22({
        event: event2,
        resolve: (event3, options2) => {
          const transformPageChunk = async ({ html: html2, done }) => {
            if (options2?.transformPageChunk) {
              html2 = await options2.transformPageChunk({ html: html2, done }) ?? "";
            }
            if (parent_options?.transformPageChunk) {
              html2 = await parent_options.transformPageChunk({ html: html2, done }) ?? "";
            }
            return html2;
          };
          const filterSerializedResponseHeaders = parent_options?.filterSerializedResponseHeaders ?? options2?.filterSerializedResponseHeaders;
          const preload = parent_options?.preload ?? options2?.preload;
          return i4 < length - 1 ? apply_handle(i4 + 1, event3, {
            transformPageChunk,
            filterSerializedResponseHeaders,
            preload
          }) : resolve2(event3, { transformPageChunk, filterSerializedResponseHeaders, preload });
        }
      });
    }
  };
}
async function authorizationHandle({ event, resolve: resolve2 }) {
  if (event.url.pathname.startsWith("/dashboard") || event.url.pathname.startsWith("/admin")) {
    const session2 = await event.locals.auth();
    if (!session2) {
      throw redirect(303, "/auth/signin");
    }
  }
  return resolve2(event);
}
var handle2;
var init_hooks_server = __esm({
  ".svelte-kit/output/server/chunks/hooks.server.js"() {
    init_chunks();
    init_auth();
    handle2 = sequence(
      handle,
      authorizationHandle
    );
  }
});

// .svelte-kit/output/server/chunks/client.js
function get2(key2, parse5 = JSON.parse) {
  try {
    return parse5(sessionStorage[key2]);
  } catch {
  }
}
function notifiable_store(value) {
  const store = writable(value);
  let ready = true;
  function notify() {
    ready = true;
    store.update((val) => val);
  }
  function set2(new_value) {
    ready = false;
    store.set(new_value);
  }
  function subscribe(run) {
    let old_value;
    return store.subscribe((new_value) => {
      if (old_value === void 0 || ready && new_value !== old_value) {
        run(old_value = new_value);
      }
    });
  }
  return { notify, set: set2, subscribe };
}
function create_updated_store() {
  const { set: set2, subscribe } = writable(false);
  {
    return {
      subscribe,
      // eslint-disable-next-line @typescript-eslint/require-await
      check: async () => false
    };
  }
}
var SNAPSHOT_KEY, SCROLL_KEY, updated2, is_legacy, stores;
var init_client = __esm({
  ".svelte-kit/output/server/chunks/client.js"() {
    init_clsx();
    init_exports();
    init_index2();
    SNAPSHOT_KEY = "sveltekit:snapshot";
    SCROLL_KEY = "sveltekit:scroll";
    is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
    if (is_legacy) {
      ({
        data: {},
        form: null,
        error: null,
        params: {},
        route: { id: null },
        state: {},
        status: -1,
        url: new URL("https://example.com")
      });
      updated2 = { current: false };
    } else {
      updated2 = new class Updated {
        current = false;
      }();
    }
    get2(SCROLL_KEY) ?? {};
    get2(SNAPSHOT_KEY) ?? {};
    stores = {
      url: /* @__PURE__ */ notifiable_store({}),
      page: /* @__PURE__ */ notifiable_store({}),
      navigating: /* @__PURE__ */ writable(
        /** @type {import('@sveltejs/kit').Navigation | null} */
        null
      ),
      updated: /* @__PURE__ */ create_updated_store()
    };
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => _layout
});
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let { children } = $$props;
  $$payload.out += `<header>`;
  if (store_get($$store_subs ??= {}, "$page", page).data.session) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p>\u05DE\u05D7\u05D5\u05D1\u05E8 \u05D1\u05EA\u05D5\u05E8: ${html(store_get($$store_subs ??= {}, "$page", page).data.session.user?.name)}</p> <button class="logged-in"><span>\u05E0\u05D9\u05EA\u05D5\u05E7</span></button>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button class="login-btn"><span>\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA \u05E2\u05DD GitHub</span></button>`;
  }
  $$payload.out += `<!--]--> <a href="/" aria-label="MainLOGO"><svg class="logo" width="100%" height="100%" viewBox="0 0 2363 2363" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect x="-37.907" y="-0.253" width="2434.83" height="2365.32" style="fill:white;stroke:rgb(0,101,255);stroke-opacity:0;stroke-width:135.09px;"></rect><g transform="matrix(1.03443,0,0,0.774566,-62.2267,619.695)"><rect x="60.331" y="1796.53" width="2282.66" height="323.722" style="fill:rgb(32,76,249);stroke:rgb(0,101,255);stroke-opacity:0;stroke-width:147.83px;"></rect></g><g transform="matrix(1.03471,0,0,0.767451,-62.5443,-1291.7)"><rect x="60.331" y="1796.53" width="2282.66" height="323.722" style="fill:rgb(32,76,249);stroke:rgb(0,101,255);stroke-opacity:0;stroke-width:148.3px;"></rect></g><g transform="matrix(23.2409,0,0,23.2409,-26224.2,-26630.4)"><path d="M1171.16,1218.63C1170.12,1218.63 1169.16,1218.11 1168.59,1217.25C1168.02,1216.39 1167.93,1215.3 1168.34,1214.35C1172.36,1204.99 1181.8,1183.06 1184.61,1176.55C1185.09,1175.42 1186.2,1174.69 1187.43,1174.69L1187.45,1174.69C1188.49,1174.69 1189.45,1175.21 1190.02,1176.07C1190.59,1176.94 1190.68,1178.03 1190.28,1178.98C1186.25,1188.33 1176.81,1210.26 1174,1216.78C1173.52,1217.9 1172.41,1218.63 1171.18,1218.63L1171.16,1218.63Z" style="fill:rgb(32,76,249);fill-rule:nonzero;"></path><path d="M1199.04,1208.28C1198.48,1208.49 1197.86,1208.41 1197.37,1208.07C1196.88,1207.73 1196.59,1207.17 1196.59,1206.57L1196.59,1203.93C1196.59,1203.14 1197.11,1202.43 1197.87,1202.2C1201.72,1201 1213.02,1197.49 1214.69,1196.97C1214.82,1196.93 1214.9,1196.82 1214.9,1196.69L1214.9,1196.68C1214.9,1196.56 1214.82,1196.44 1214.69,1196.4C1213.02,1195.88 1201.72,1192.37 1197.87,1191.18C1197.11,1190.94 1196.59,1190.23 1196.59,1189.44L1196.59,1186.8C1196.59,1186.2 1196.88,1185.65 1197.37,1185.31C1197.86,1184.96 1198.48,1184.88 1199.04,1185.09C1204.17,1186.98 1215.89,1191.31 1220.08,1192.86C1220.99,1193.19 1221.59,1194.06 1221.59,1195.03L1221.59,1198.34C1221.59,1199.31 1220.99,1200.18 1220.08,1200.52C1215.89,1202.06 1204.17,1206.39 1199.04,1208.28Z" style="fill:rgb(32,76,249);fill-rule:nonzero;"></path><g transform="matrix(-1,0,0,-1,2358.37,2393.37)"><path d="M1199.04,1208.28C1198.48,1208.49 1197.86,1208.41 1197.37,1208.07C1196.88,1207.73 1196.59,1207.17 1196.59,1206.57L1196.59,1203.93C1196.59,1203.14 1197.11,1202.43 1197.87,1202.2C1201.72,1201 1213.02,1197.49 1214.69,1196.97C1214.82,1196.93 1214.9,1196.82 1214.9,1196.69L1214.9,1196.68C1214.9,1196.56 1214.82,1196.44 1214.69,1196.4C1213.02,1195.88 1201.72,1192.37 1197.87,1191.18C1197.11,1190.94 1196.59,1190.23 1196.59,1189.44L1196.59,1186.8C1196.59,1186.2 1196.88,1185.65 1197.37,1185.31C1197.86,1184.96 1198.48,1184.88 1199.04,1185.09C1204.17,1186.98 1215.89,1191.31 1220.08,1192.86C1220.99,1193.19 1221.59,1194.06 1221.59,1195.03L1221.59,1198.34C1221.59,1199.31 1220.99,1200.18 1220.08,1200.52C1215.89,1202.06 1204.17,1206.39 1199.04,1208.28Z" style="fill:rgb(32,76,249);fill-rule:nonzero;"></path></g></g></svg></a></header> `;
  children($$payload);
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
var getStores, page;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_index2();
    init_client();
    getStores = () => {
      const stores$1 = getContext("__svelte__");
      return {
        /** @type {typeof page} */
        page: {
          subscribe: stores$1.page.subscribe
        },
        /** @type {typeof navigating} */
        navigating: {
          subscribe: stores$1.navigating.subscribe
        },
        /** @type {typeof updated} */
        updated: stores$1.updated
      };
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  fonts: () => fonts,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
var index, component_cache, component, imports, stylesheets, fonts;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    index = 0;
    component = async () => component_cache ??= (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default;
    imports = ["_app/immutable/nodes/0.KfwjGJPZ.js", "_app/immutable/chunks/disclose-version.CH9wrBnq.js", "_app/immutable/chunks/runtime.LudGJxdc.js", "_app/immutable/chunks/events.trWGf5Py.js", "_app/immutable/chunks/if.BA9yuqff.js", "_app/immutable/chunks/store.CjcfF6Pi.js", "_app/immutable/chunks/entry.CoKXvAX5.js", "_app/immutable/chunks/index-client.CxrIQvte.js"];
    stylesheets = ["_app/immutable/assets/0.XWLjX_I_.css"];
    fonts = [];
  }
});

// .svelte-kit/output/server/chunks/escaping.js
function escape_html2(value, is_attr) {
  const str = String(value ?? "");
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i4 = pattern2.lastIndex - 1;
    const ch = str[i4];
    escaped2 += str.substring(last, i4) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i4 + 1;
  }
  return escaped2 + str.substring(last);
}
var ATTR_REGEX, CONTENT_REGEX;
var init_escaping = __esm({
  ".svelte-kit/output/server/chunks/escaping.js"() {
    ATTR_REGEX = /[&"<]/g;
    CONTENT_REGEX = /[&<]/g;
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error$1
});
function context() {
  return getContext("__request__");
}
function Error$1($$payload, $$props) {
  push();
  $$payload.out += `<h1>${escape_html2(page2.status)}</h1> <p>${escape_html2(page2.error?.message)}</p>`;
  pop();
}
var page$1, page2;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_escaping();
    init_clsx();
    init_index2();
    init_client();
    ({
      get current() {
        return updated2.current;
      },
      check: stores.updated.check
    });
    page$1 = {
      get data() {
        return context().page.data;
      },
      get error() {
        return context().page.error;
      },
      get form() {
        return context().page.form;
      },
      get params() {
        return context().page.params;
      },
      get route() {
        return context().page.route;
      },
      get state() {
        return context().page.state;
      },
      get status() {
        return context().page.status;
      },
      get url() {
        return context().page.url;
      }
    };
    page2 = page$1;
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  fonts: () => fonts2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component_cache2, component2, imports2, stylesheets2, fonts2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => component_cache2 ??= (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default;
    imports2 = ["_app/immutable/nodes/1.CjHvZ3RQ.js", "_app/immutable/chunks/disclose-version.CH9wrBnq.js", "_app/immutable/chunks/runtime.LudGJxdc.js", "_app/immutable/chunks/legacy.BlL8FIj-.js", "_app/immutable/chunks/render.C7k9bFqu.js", "_app/immutable/chunks/events.trWGf5Py.js", "_app/immutable/chunks/lifecycle.C3BJpUIN.js", "_app/immutable/chunks/entry.CoKXvAX5.js", "_app/immutable/chunks/index-client.CxrIQvte.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => _page
});
function _page($$payload) {
  $$payload.out += `<body><div class="content" dir="rtl"><h1>\u05DE\u05E4\u05EA\u05D7.\u05D9\u05E9\u05E8\u05D0\u05DC</h1> <strong>\u05DE\u05E4\u05EA\u05D7.\u05D9\u05E9\u05E8\u05D0\u05DC \u2013 \u05D3\u05D5\u05DE\u05D9\u05D9\u05DF \u05E4\u05EA\u05D5\u05D7 \u05DC\u05E7\u05D4\u05D9\u05DC\u05EA \u05D4\u05DE\u05E4\u05EA\u05D7\u05D9\u05DD \u05D1\u05D9\u05E9\u05E8\u05D0\u05DC</strong> <p>\u05DE\u05E4\u05EA\u05D7.\u05D9\u05E9\u05E8\u05D0\u05DC \u05D4\u05D5\u05D0 \u05D3\u05D5\u05DE\u05D9\u05D9\u05DF \u05D9\u05D9\u05D7\u05D5\u05D3\u05D9 \u05D4\u05DE\u05D9\u05D5\u05E2\u05D3 \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05E2\u05D1\u05D5\u05E8 \u05E7\u05D4\u05D9\u05DC\u05EA \u05D4\u05DE\u05E4\u05EA\u05D7\u05D9\u05DD \u05D4\u05D9\u05E9\u05E8\u05D0\u05DC\u05D9\u05EA. \u05D4\u05D3\u05D5\u05DE\u05D9\u05D9\u05DF \u05DE\u05D0\u05E4\u05E9\u05E8 \u05DC\u05DB\u05DC \u05D9\u05E9\u05E8\u05D0\u05DC\u05D9 \u05DC\u05D4\u05E7\u05D9\u05DD \u05EA\u05E9\u05EA\u05D9\u05EA \u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9\u05EA \u05D5\u05DC\u05D7\u05DC\u05D5\u05E7 \u05EA\u05DB\u05E0\u05D9\u05DD, \u05DB\u05DC\u05D9\u05DD \u05D5\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9 \u05E7\u05D5\u05D3 \u05E4\u05EA\u05D5\u05D7 \u05E2\u05DD \u05D4\u05E7\u05D4\u05D9\u05DC\u05D4 \u05D1\u05DE\u05E7\u05D5\u05DD \u05DE\u05E8\u05DB\u05D6\u05D9 \u05D0\u05D7\u05D3.</p> <strong>\u05E7\u05D5\u05D3 \u05E4\u05EA\u05D5\u05D7 \u05D5\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05DE\u05DC\u05D0\u05D4</strong> <p>\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05E9\u05DE\u05D0\u05D7\u05D5\u05E8\u05D9 \u05DE\u05E4\u05EA\u05D7.\u05D9\u05E9\u05E8\u05D0\u05DC \u05E4\u05D5\u05E2\u05DC\u05EA \u05D1\u05E7\u05D5\u05D3 \u05E4\u05EA\u05D5\u05D7, \u05DE\u05D4 \u05E9\u05DE\u05D0\u05E4\u05E9\u05E8 \u05DC\u05DB\u05DC \u05D0\u05D7\u05D3 \u05DC\u05DC\u05DE\u05D5\u05D3 \u05DB\u05D9\u05E6\u05D3 \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05E4\u05D5\u05E2\u05DC\u05EA, \u05DC\u05D4\u05E9\u05EA\u05EA\u05E3 \u05D1\u05E4\u05D9\u05EA\u05D5\u05D7\u05D4 \u05D5\u05DC\u05E9\u05E4\u05E8 \u05D0\u05D5\u05EA\u05D4 \u05D9\u05D7\u05D3 \u05E2\u05DD \u05E7\u05D4\u05D9\u05DC\u05EA \u05D4\u05DE\u05E4\u05EA\u05D7\u05D9\u05DD.</p> <strong>\u05D6\u05DE\u05D9\u05DF \u05DC\u05DB\u05DC \u05D9\u05E9\u05E8\u05D0\u05DC\u05D9 \u05E2\u05DC \u05D2\u05D1\u05D9 Cloudflare</strong> <p>\u05DB\u05D3\u05D9 \u05DC\u05D4\u05D1\u05D8\u05D9\u05D7 \u05D7\u05D5\u05D5\u05D9\u05D9\u05EA \u05E9\u05D9\u05DE\u05D5\u05E9 \u05DE\u05D4\u05D9\u05E8\u05D4 \u05D5\u05D1\u05D8\u05D5\u05D7\u05D4, \u05DE\u05E4\u05EA\u05D7.\u05D9\u05E9\u05E8\u05D0\u05DC \u05DE\u05EA\u05D0\u05E8\u05D7 \u05E2\u05DC \u05D2\u05D1\u05D9 \u05EA\u05E9\u05EA\u05D9\u05EA Cloudflare, \u05D4\u05DE\u05D5\u05D1\u05D9\u05DC\u05D4 \u05D1\u05EA\u05D7\u05D5\u05DD \u05D4\u05D0\u05E6\u05EA \u05D0\u05EA\u05E8\u05D9\u05DD \u05D5\u05D0\u05D1\u05D8\u05D7\u05EA\u05DD \u05D1\u05E2\u05D5\u05DC\u05DD.</p> <iframe src="https://discordapp.com/widget?id=1324706681648709746" width="350" height="500" title="Discord server widget" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" style="margin: 1rem 0; display: block;"></iframe> <div class="logo-container"><a href="https://discord.gg/DxysaEa5pr" target="_blank" aria-label="Discord"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 612"><path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"></path></svg></a> <a href="https://github.com/il-developer" target="_blank" aria-label="GitHub"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a></div></div></body>`;
}
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_clsx();
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  fonts: () => fonts3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3
});
var index3, component_cache3, component3, imports3, stylesheets3, fonts3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    index3 = 2;
    component3 = async () => component_cache3 ??= (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default;
    imports3 = ["_app/immutable/nodes/2.BVBuUAAA.js", "_app/immutable/chunks/disclose-version.CH9wrBnq.js", "_app/immutable/chunks/runtime.LudGJxdc.js", "_app/immutable/chunks/legacy.BlL8FIj-.js"];
    stylesheets3 = [];
    fonts3 = [];
  }
});

// .svelte-kit/output/server/entries/pages/admin/_page.server.ts.js
var page_server_ts_exports = {};
__export(page_server_ts_exports, {
  load: () => load
});
var load;
var init_page_server_ts = __esm({
  ".svelte-kit/output/server/entries/pages/admin/_page.server.ts.js"() {
    init_chunks();
    load = async (event) => {
      const session2 = await event.locals.auth();
      if (!(session2?.user?.role === "admin")) {
        return fail(401, { type: "error", error: "Unauthenticated" });
      }
      return {
        session: session2
      };
    };
  }
});

// .svelte-kit/output/server/chunks/attributes.js
function attr(name, value, is_boolean = false) {
  if (is_boolean || name === "class") return "";
  const normalized = name in replacements2 && replacements2[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html2(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
var replacements2;
var init_attributes = __esm({
  ".svelte-kit/output/server/chunks/attributes.js"() {
    init_escaping();
    init_clsx();
    replacements2 = {
      translate: /* @__PURE__ */ new Map([
        [true, "yes"],
        [false, "no"]
      ])
    };
  }
});

// .svelte-kit/output/server/entries/pages/admin/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => _page2
});
function _page2($$payload, $$props) {
  push();
  let subdomains = [];
  let filterText = "";
  function filterSubdomains() {
    return subdomains.filter((subdomain) => subdomain.name.toLowerCase().includes(filterText.toLowerCase()));
  }
  $$payload.out += `<div class="content"><h1>Subdomain Management</h1> <input type="text" placeholder="Filter subdomains..."${attr("value", filterText)} class="filter-input"> <div class="table-container"><table><thead><tr><th>Subdomain Name</th><th>Type</th><th>Owner</th><th>Actions</th></tr></thead><tbody>`;
  if (filterSubdomains().length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(filterSubdomains());
    $$payload.out += `<!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let subdomain = each_array[$$index];
      $$payload.out += `<tr><td>${escape_html2(subdomain.name)}</td><td>${escape_html2(subdomain.type)}</td><td>${escape_html2(subdomain.owner)}</td><td><button class="action-btn delete-btn">Delete</button> <button class="action-btn blacklist-btn">Blacklist</button></td></tr>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<tr><td colspan="4">No subdomains found.</td></tr>`;
  }
  $$payload.out += `<!--]--></tbody></table></div></div>`;
  pop();
}
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/admin/_page.svelte.js"() {
    init_index2();
    init_attributes();
    init_escaping();
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  fonts: () => fonts4,
  imports: () => imports4,
  index: () => index4,
  server: () => page_server_ts_exports,
  server_id: () => server_id,
  stylesheets: () => stylesheets4
});
var index4, component_cache4, component4, server_id, imports4, stylesheets4, fonts4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    init_page_server_ts();
    index4 = 3;
    component4 = async () => component_cache4 ??= (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default;
    server_id = "src/routes/admin/+page.server.ts";
    imports4 = ["_app/immutable/nodes/3.CW1Fbval.js", "_app/immutable/chunks/disclose-version.CH9wrBnq.js", "_app/immutable/chunks/runtime.LudGJxdc.js", "_app/immutable/chunks/legacy.BlL8FIj-.js", "_app/immutable/chunks/render.C7k9bFqu.js", "_app/immutable/chunks/events.trWGf5Py.js", "_app/immutable/chunks/if.BA9yuqff.js", "_app/immutable/chunks/input.BgO1lE7R.js", "_app/immutable/chunks/lifecycle.C3BJpUIN.js", "_app/immutable/chunks/index-client.CxrIQvte.js"];
    stylesheets4 = ["_app/immutable/assets/3.CdmXj_eO.css"];
    fonts4 = [];
  }
});

// .svelte-kit/output/server/entries/pages/dashboard/_page.svelte.js
var page_svelte_exports3 = {};
__export(page_svelte_exports3, {
  default: () => _page3
});
function _page3($$payload) {
  let data = [];
  let newRecord = {
    domain: "",
    type: "A",
    value: "",
    service: "",
    protocol: "",
    ttl: "300",
    proxied: false
  };
  const each_array = ensure_array_like(data);
  $$payload.out += `<div class="content"><h1>DNS Record Management</h1> <form id="dns-record-form"><div class="form-group"><label for="domain">Domain</label> <input type="text" id="domain"${attr("value", newRecord.domain)} required></div> <div class="form-group"><label for="record-type">Record Type</label> <select id="record-type" required><option value="A">A</option><option value="AAAA">AAAA</option><option value="CAA">CAA</option><option value="CERT">CERT</option><option value="CNAME">CNAME</option><option value="DNSKEY">DNSKEY</option><option value="DS">DS</option><option value="HTTPS">HTTPS</option><option value="LOC">LOC</option><option value="MX">MX</option><option value="NAPTR">NAPTR</option><option value="NS">NS</option><option value="PTR">PTR</option><option value="SMIMEA">SMIMEA</option><option value="SRV">SRV</option><option value="SSHFP">SSHFP</option><option value="SVCB">SVCB</option><option value="TLSA">TLSA</option><option value="TXT">TXT</option><option value="URI">URI</option></select></div> <div class="form-group"><label for="value">Value</label> <input type="text" id="value"${attr("value", newRecord.value)} required></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="form-group"><label for="ttl">TTL (Time to Live)</label> <select id="ttl"><option value="auto">Auto</option><option value="60">1 minute</option><option value="300">5 minutes</option><option value="3600">1 hour</option><option value="86400">1 day</option></select></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <button type="submit" class="create-btn">Create Record</button></form> <div class="table-container"><table><thead><tr><th>Domain</th><th>Record Type</th><th>Value</th><th>TTL</th><th>Actions</th></tr></thead><tbody><!--[-->`;
  for (let index7 = 0, $$length = each_array.length; index7 < $$length; index7++) {
    let record = each_array[index7];
    $$payload.out += `<tr><td>${escape_html2(record.domain)}</td><td>${escape_html2(record.type)}</td><td>${escape_html2(record.value)}</td><td>${escape_html2(record.ttl)}</td><td><button type="button" class="action-btn">Delete</button></td></tr>`;
  }
  $$payload.out += `<!--]--></tbody></table></div></div>`;
}
var init_page_svelte3 = __esm({
  ".svelte-kit/output/server/entries/pages/dashboard/_page.svelte.js"() {
    init_index2();
    init_attributes();
    init_escaping();
  }
});

// .svelte-kit/output/server/nodes/4.js
var __exports5 = {};
__export(__exports5, {
  component: () => component5,
  fonts: () => fonts5,
  imports: () => imports5,
  index: () => index5,
  stylesheets: () => stylesheets5
});
var index5, component_cache5, component5, imports5, stylesheets5, fonts5;
var init__5 = __esm({
  ".svelte-kit/output/server/nodes/4.js"() {
    index5 = 4;
    component5 = async () => component_cache5 ??= (await Promise.resolve().then(() => (init_page_svelte3(), page_svelte_exports3))).default;
    imports5 = ["_app/immutable/nodes/4.BTsTMLzF.js", "_app/immutable/chunks/disclose-version.CH9wrBnq.js", "_app/immutable/chunks/runtime.LudGJxdc.js", "_app/immutable/chunks/legacy.BlL8FIj-.js", "_app/immutable/chunks/render.C7k9bFqu.js", "_app/immutable/chunks/events.trWGf5Py.js", "_app/immutable/chunks/if.BA9yuqff.js", "_app/immutable/chunks/input.BgO1lE7R.js", "_app/immutable/chunks/5.K0CWFs3U.js"];
    stylesheets5 = ["_app/immutable/assets/4._c49MCL4.css"];
    fonts5 = [];
  }
});

// .svelte-kit/output/server/entries/pages/signin/_page.server.ts.js
var page_server_ts_exports2 = {};
__export(page_server_ts_exports2, {
  actions: () => actions2
});
var actions2;
var init_page_server_ts2 = __esm({
  ".svelte-kit/output/server/entries/pages/signin/_page.server.ts.js"() {
    init_auth();
    init_chunks();
    actions2 = {
      default: async (event) => {
        try {
          const response = await signIn2(event);
          if (!response.ok) {
            throw new Error(`Sign-in failed: ${response.statusText}`);
          }
          throw redirect(303, "/dashboard");
        } catch (error) {
          console.error("Sign-in error:", error);
          throw error;
        }
      }
    };
  }
});

// .svelte-kit/output/server/nodes/5.js
var __exports6 = {};
__export(__exports6, {
  fonts: () => fonts6,
  imports: () => imports6,
  index: () => index6,
  server: () => page_server_ts_exports2,
  server_id: () => server_id2,
  stylesheets: () => stylesheets6
});
var index6, server_id2, imports6, stylesheets6, fonts6;
var init__6 = __esm({
  ".svelte-kit/output/server/nodes/5.js"() {
    init_page_server_ts2();
    index6 = 5;
    server_id2 = "src/routes/signin/+page.server.ts";
    imports6 = [];
    stylesheets6 = [];
    fonts6 = [];
  }
});

// .svelte-kit/cloudflare-workers-tmp/node_modules/mime/Mime.js
var require_Mime = __commonJS({
  ".svelte-kit/cloudflare-workers-tmp/node_modules/mime/Mime.js"(exports, module) {
    "use strict";
    function Mime() {
      this._types = /* @__PURE__ */ Object.create(null);
      this._extensions = /* @__PURE__ */ Object.create(null);
      for (let i4 = 0; i4 < arguments.length; i4++) {
        this.define(arguments[i4]);
      }
      this.define = this.define.bind(this);
      this.getType = this.getType.bind(this);
      this.getExtension = this.getExtension.bind(this);
    }
    Mime.prototype.define = function(typeMap, force) {
      for (let type in typeMap) {
        let extensions = typeMap[type].map(function(t2) {
          return t2.toLowerCase();
        });
        type = type.toLowerCase();
        for (let i4 = 0; i4 < extensions.length; i4++) {
          const ext = extensions[i4];
          if (ext[0] === "*") {
            continue;
          }
          if (!force && ext in this._types) {
            throw new Error(
              'Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".'
            );
          }
          this._types[ext] = type;
        }
        if (force || !this._extensions[type]) {
          const ext = extensions[0];
          this._extensions[type] = ext[0] !== "*" ? ext : ext.substr(1);
        }
      }
    };
    Mime.prototype.getType = function(path) {
      path = String(path);
      let last = path.replace(/^.*[/\\]/, "").toLowerCase();
      let ext = last.replace(/^.*\./, "").toLowerCase();
      let hasPath = last.length < path.length;
      let hasDot = ext.length < last.length - 1;
      return (hasDot || !hasPath) && this._types[ext] || null;
    };
    Mime.prototype.getExtension = function(type) {
      type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
      return type && this._extensions[type.toLowerCase()] || null;
    };
    module.exports = Mime;
  }
});

// .svelte-kit/cloudflare-workers-tmp/node_modules/mime/types/standard.js
var require_standard = __commonJS({
  ".svelte-kit/cloudflare-workers-tmp/node_modules/mime/types/standard.js"(exports, module) {
    module.exports = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
  }
});

// .svelte-kit/cloudflare-workers-tmp/node_modules/mime/types/other.js
var require_other = __commonJS({
  ".svelte-kit/cloudflare-workers-tmp/node_modules/mime/types/other.js"(exports, module) {
    module.exports = { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
  }
});

// .svelte-kit/cloudflare-workers-tmp/node_modules/mime/index.js
var require_mime = __commonJS({
  ".svelte-kit/cloudflare-workers-tmp/node_modules/mime/index.js"(exports, module) {
    "use strict";
    var Mime = require_Mime();
    module.exports = new Mime(require_standard(), require_other());
  }
});

// .svelte-kit/cloudflare-workers-tmp/node_modules/@cloudflare/kv-asset-handler/dist/types.js
var require_types = __commonJS({
  ".svelte-kit/cloudflare-workers-tmp/node_modules/@cloudflare/kv-asset-handler/dist/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InternalError = exports.NotFoundError = exports.MethodNotAllowedError = exports.KVError = void 0;
    var KVError = class _KVError extends Error {
      constructor(message2, status = 500) {
        super(message2);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = _KVError.name;
        this.status = status;
      }
    };
    exports.KVError = KVError;
    var MethodNotAllowedError = class extends KVError {
      constructor(message2 = `Not a valid request method`, status = 405) {
        super(message2, status);
      }
    };
    exports.MethodNotAllowedError = MethodNotAllowedError;
    var NotFoundError = class extends KVError {
      constructor(message2 = `Not Found`, status = 404) {
        super(message2, status);
      }
    };
    exports.NotFoundError = NotFoundError;
    var InternalError = class extends KVError {
      constructor(message2 = `Internal Error in KV Asset Handler`, status = 500) {
        super(message2, status);
      }
    };
    exports.InternalError = InternalError;
  }
});

// .svelte-kit/cloudflare-workers-tmp/node_modules/@cloudflare/kv-asset-handler/dist/index.js
var require_dist = __commonJS({
  ".svelte-kit/cloudflare-workers-tmp/node_modules/@cloudflare/kv-asset-handler/dist/index.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P3, generator) {
      function adopt(value) {
        return value instanceof P3 ? value : new P3(function(resolve2) {
          resolve2(value);
        });
      }
      return new (P3 || (P3 = Promise))(function(resolve2, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e2) {
            reject(e2);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e2) {
            reject(e2);
          }
        }
        function step(result) {
          result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InternalError = exports.NotFoundError = exports.MethodNotAllowedError = exports.serveSinglePageApp = exports.mapRequestToAsset = exports.getAssetFromKV = void 0;
    var mime = require_mime();
    var types_1 = require_types();
    Object.defineProperty(exports, "MethodNotAllowedError", { enumerable: true, get: function() {
      return types_1.MethodNotAllowedError;
    } });
    Object.defineProperty(exports, "NotFoundError", { enumerable: true, get: function() {
      return types_1.NotFoundError;
    } });
    Object.defineProperty(exports, "InternalError", { enumerable: true, get: function() {
      return types_1.InternalError;
    } });
    var defaultCacheControl = {
      browserTTL: null,
      edgeTTL: 2 * 60 * 60 * 24,
      bypassCache: false
      // do not bypass Cloudflare's cache
    };
    var parseStringAsObject = (maybeString) => typeof maybeString === "string" ? JSON.parse(maybeString) : maybeString;
    var getAssetFromKVDefaultOptions = {
      ASSET_NAMESPACE: typeof __STATIC_CONTENT !== "undefined" ? __STATIC_CONTENT : void 0,
      ASSET_MANIFEST: typeof __STATIC_CONTENT_MANIFEST !== "undefined" ? parseStringAsObject(__STATIC_CONTENT_MANIFEST) : void 0,
      cacheControl: defaultCacheControl,
      defaultMimeType: "text/plain",
      defaultDocument: "index.html"
    };
    function assignOptions(options2) {
      return Object.assign({}, getAssetFromKVDefaultOptions, options2);
    }
    var mapRequestToAsset2 = (request, options2) => {
      options2 = assignOptions(options2);
      const parsedUrl = new URL(request.url);
      let pathname = parsedUrl.pathname;
      if (pathname.endsWith("/")) {
        pathname = pathname.concat(options2.defaultDocument);
      } else if (!mime.getType(pathname)) {
        pathname = pathname.concat("/" + options2.defaultDocument);
      }
      parsedUrl.pathname = pathname;
      return new Request(parsedUrl.toString(), request);
    };
    exports.mapRequestToAsset = mapRequestToAsset2;
    function serveSinglePageApp(request, options2) {
      options2 = assignOptions(options2);
      request = mapRequestToAsset2(request, options2);
      const parsedUrl = new URL(request.url);
      if (parsedUrl.pathname.endsWith(".html")) {
        return new Request(`${parsedUrl.origin}/${options2.defaultDocument}`, request);
      } else {
        return request;
      }
    }
    exports.serveSinglePageApp = serveSinglePageApp;
    var getAssetFromKV2 = (event, options2) => __awaiter(void 0, void 0, void 0, function* () {
      options2 = assignOptions(options2);
      const request = event.request;
      const ASSET_NAMESPACE = options2.ASSET_NAMESPACE;
      const ASSET_MANIFEST = parseStringAsObject(options2.ASSET_MANIFEST);
      if (typeof ASSET_NAMESPACE === "undefined") {
        throw new types_1.InternalError(`there is no KV namespace bound to the script`);
      }
      const rawPathKey = new URL(request.url).pathname.replace(/^\/+/, "");
      let pathIsEncoded = false;
      let requestKey;
      if (options2.mapRequestToAsset) {
        requestKey = options2.mapRequestToAsset(request);
      } else if (ASSET_MANIFEST[rawPathKey]) {
        requestKey = request;
      } else if (ASSET_MANIFEST[decodeURIComponent(rawPathKey)]) {
        pathIsEncoded = true;
        requestKey = request;
      } else {
        const mappedRequest = mapRequestToAsset2(request);
        const mappedRawPathKey = new URL(mappedRequest.url).pathname.replace(/^\/+/, "");
        if (ASSET_MANIFEST[decodeURIComponent(mappedRawPathKey)]) {
          pathIsEncoded = true;
          requestKey = mappedRequest;
        } else {
          requestKey = mapRequestToAsset2(request, options2);
        }
      }
      const SUPPORTED_METHODS = ["GET", "HEAD"];
      if (!SUPPORTED_METHODS.includes(requestKey.method)) {
        throw new types_1.MethodNotAllowedError(`${requestKey.method} is not a valid request method`);
      }
      const parsedUrl = new URL(requestKey.url);
      const pathname = pathIsEncoded ? decodeURIComponent(parsedUrl.pathname) : parsedUrl.pathname;
      let pathKey = pathname.replace(/^\/+/, "");
      const cache = caches.default;
      let mimeType = mime.getType(pathKey) || options2.defaultMimeType;
      if (mimeType.startsWith("text") || mimeType === "application/javascript") {
        mimeType += "; charset=utf-8";
      }
      let shouldEdgeCache = false;
      if (typeof ASSET_MANIFEST !== "undefined") {
        if (ASSET_MANIFEST[pathKey]) {
          pathKey = ASSET_MANIFEST[pathKey];
          shouldEdgeCache = true;
        }
      }
      let cacheKey = new Request(`${parsedUrl.origin}/${pathKey}`, request);
      const evalCacheOpts = (() => {
        switch (typeof options2.cacheControl) {
          case "function":
            return options2.cacheControl(request);
          case "object":
            return options2.cacheControl;
          default:
            return defaultCacheControl;
        }
      })();
      const formatETag = (entityId = pathKey, validatorType = "strong") => {
        if (!entityId) {
          return "";
        }
        switch (validatorType) {
          case "weak":
            if (!entityId.startsWith("W/")) {
              return `W/${entityId}`;
            }
            return entityId;
          case "strong":
            if (entityId.startsWith(`W/"`)) {
              entityId = entityId.replace("W/", "");
            }
            if (!entityId.endsWith(`"`)) {
              entityId = `"${entityId}"`;
            }
            return entityId;
          default:
            return "";
        }
      };
      options2.cacheControl = Object.assign({}, defaultCacheControl, evalCacheOpts);
      if (options2.cacheControl.bypassCache || options2.cacheControl.edgeTTL === null || request.method == "HEAD") {
        shouldEdgeCache = false;
      }
      const shouldSetBrowserCache = typeof options2.cacheControl.browserTTL === "number";
      let response = null;
      if (shouldEdgeCache) {
        response = yield cache.match(cacheKey);
      }
      if (response) {
        if (response.status > 300 && response.status < 400) {
          if (response.body && "cancel" in Object.getPrototypeOf(response.body)) {
            response.body.cancel();
            console.log("Body exists and environment supports readable streams. Body cancelled");
          } else {
            console.log("Environment doesnt support readable streams");
          }
          response = new Response(null, response);
        } else {
          let opts = {
            headers: new Headers(response.headers),
            status: 0,
            statusText: ""
          };
          opts.headers.set("cf-cache-status", "HIT");
          if (response.status) {
            opts.status = response.status;
            opts.statusText = response.statusText;
          } else if (opts.headers.has("Content-Range")) {
            opts.status = 206;
            opts.statusText = "Partial Content";
          } else {
            opts.status = 200;
            opts.statusText = "OK";
          }
          response = new Response(response.body, opts);
        }
      } else {
        const body2 = yield ASSET_NAMESPACE.get(pathKey, "arrayBuffer");
        if (body2 === null) {
          throw new types_1.NotFoundError(`could not find ${pathKey} in your content namespace`);
        }
        response = new Response(body2);
        if (shouldEdgeCache) {
          response.headers.set("Accept-Ranges", "bytes");
          response.headers.set("Content-Length", body2.length);
          if (!response.headers.has("etag")) {
            response.headers.set("etag", formatETag(pathKey, "strong"));
          }
          response.headers.set("Cache-Control", `max-age=${options2.cacheControl.edgeTTL}`);
          event.waitUntil(cache.put(cacheKey, response.clone()));
          response.headers.set("CF-Cache-Status", "MISS");
        }
      }
      response.headers.set("Content-Type", mimeType);
      if (response.status === 304) {
        let etag2 = formatETag(response.headers.get("etag"), "strong");
        let ifNoneMatch = cacheKey.headers.get("if-none-match");
        let proxyCacheStatus = response.headers.get("CF-Cache-Status");
        if (etag2) {
          if (ifNoneMatch && ifNoneMatch === etag2 && proxyCacheStatus === "MISS") {
            response.headers.set("CF-Cache-Status", "EXPIRED");
          } else {
            response.headers.set("CF-Cache-Status", "REVALIDATED");
          }
          response.headers.set("etag", formatETag(etag2, "weak"));
        }
      }
      if (shouldSetBrowserCache) {
        response.headers.set("Cache-Control", `max-age=${options2.cacheControl.browserTTL}`);
      } else {
        response.headers.delete("Cache-Control");
      }
      return response;
    });
    exports.getAssetFromKV = getAssetFromKV2;
  }
});

// .svelte-kit/output/server/index.js
init_false();
init_environment();
init_chunks();
init_exports();

// node_modules/devalue/src/utils.js
var escaped = {
  "<": "\\u003C",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  /**
   * @param {string} message
   * @param {string[]} keys
   */
  constructor(message2, keys) {
    super(message2);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
var object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
  Object.prototype
).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function get_escaped_char(char) {
  switch (char) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return char < " " ? `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(str) {
  let result = "";
  let last_pos = 0;
  const len = str.length;
  for (let i4 = 0; i4 < len; i4 += 1) {
    const char = str[i4];
    const replacement = get_escaped_char(char);
    if (replacement) {
      result += str.slice(last_pos, i4) + replacement;
      last_pos = i4 + 1;
    }
  }
  return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}
function enumerable_symbols(object) {
  return Object.getOwnPropertySymbols(object).filter(
    (symbol) => Object.getOwnPropertyDescriptor(object, symbol).enumerable
  );
}
var is_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function stringify_key(key2) {
  return is_identifier.test(key2) ? "." + key2 : "[" + JSON.stringify(key2) + "]";
}

// node_modules/devalue/src/uneval.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
function uneval(value, replacer) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  const custom = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (replacer) {
        const str2 = replacer(thing);
        if (typeof str2 === "string") {
          custom.set(thing, str2);
          return;
        }
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i4) => {
            keys.push(`[${i4}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array":
          return;
        case "ArrayBuffer":
          return;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (enumerable_symbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(stringify_key(key2));
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a3, b2) => b2[1] - a3[1]).forEach((entry, i4) => {
    names.set(entry[0], get_name(i4));
  });
  function stringify2(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    if (custom.has(thing)) {
      return custom.get(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify2(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = (
          /** @type {any[]} */
          thing.map(
            (v2, i4) => i4 in thing ? stringify2(v2) : ""
          )
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify2).join(",")}])`;
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "BigInt64Array":
      case "BigUint64Array": {
        const typedArray = thing;
        return `new ${type}([${typedArray.toString()}])`;
      }
      case "ArrayBuffer": {
        const ui8 = new Uint8Array(thing);
        return `new Uint8Array([${ui8.toString()}]).buffer`;
      }
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify2(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify2(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (custom.has(thing)) {
        values.push(
          /** @type {string} */
          custom.get(thing)
        );
        return;
      }
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify2(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v2, i4) => {
            statements.push(`${name}[${i4}]=${stringify2(v2)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v2) => `add(${stringify2(v2)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k3, v2]) => `set(${stringify2(k3)}, ${stringify2(v2)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify2(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function escape_unsafe_char(c3) {
  return escaped[c3] || c3;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_primitive(thing) {
  if (typeof thing === "string") return stringify_string(thing);
  if (thing === void 0) return "void 0";
  if (thing === 0 && 1 / thing < 0) return "-0";
  const str = String(thing);
  if (typeof thing === "number") return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint") return thing + "n";
  return str;
}

// node_modules/devalue/src/base64.js
function encode64(arraybuffer) {
  const dv = new DataView(arraybuffer);
  let binaryString = "";
  for (let i4 = 0; i4 < arraybuffer.byteLength; i4++) {
    binaryString += String.fromCharCode(dv.getUint8(i4));
  }
  return binaryToAscii(binaryString);
}
var KEY_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function binaryToAscii(str) {
  let out = "";
  for (let i4 = 0; i4 < str.length; i4 += 3) {
    const groupsOfSix = [void 0, void 0, void 0, void 0];
    groupsOfSix[0] = str.charCodeAt(i4) >> 2;
    groupsOfSix[1] = (str.charCodeAt(i4) & 3) << 4;
    if (str.length > i4 + 1) {
      groupsOfSix[1] |= str.charCodeAt(i4 + 1) >> 4;
      groupsOfSix[2] = (str.charCodeAt(i4 + 1) & 15) << 2;
    }
    if (str.length > i4 + 2) {
      groupsOfSix[2] |= str.charCodeAt(i4 + 2) >> 6;
      groupsOfSix[3] = str.charCodeAt(i4 + 2) & 63;
    }
    for (let j3 = 0; j3 < groupsOfSix.length; j3++) {
      if (typeof groupsOfSix[j3] === "undefined") {
        out += "=";
      } else {
        out += KEY_STRING[groupsOfSix[j3]];
      }
    }
  }
  return out;
}

// node_modules/devalue/src/constants.js
var UNDEFINED = -1;
var HOLE = -2;
var NAN = -3;
var POSITIVE_INFINITY = -4;
var NEGATIVE_INFINITY = -5;
var NEGATIVE_ZERO = -6;

// node_modules/devalue/src/stringify.js
function stringify(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  if (reducers) {
    for (const key2 of Object.getOwnPropertyNames(reducers)) {
      custom.push({ key: key2, fn: reducers[key2] });
    }
  }
  const keys = [];
  let p3 = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (indexes.has(thing)) return indexes.get(thing);
    if (thing === void 0) return UNDEFINED;
    if (Number.isNaN(thing)) return NAN;
    if (thing === Infinity) return POSITIVE_INFINITY;
    if (thing === -Infinity) return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO;
    const index8 = p3++;
    indexes.set(thing, index8);
    for (const { key: key2, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index8] = `["${key2}",${flatten(value2)}]`;
        return index8;
      }
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive2(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive2(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          const valid = !isNaN(thing.getDate());
          str = `["Date","${valid ? thing.toISOString() : ""}"]`;
          break;
        case "RegExp":
          const { source: source2, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source2)},"${flags}"]` : `["RegExp",${stringify_string(source2)}]`;
          break;
        case "Array":
          str = "[";
          for (let i4 = 0; i4 < thing.length; i4 += 1) {
            if (i4 > 0) str += ",";
            if (i4 in thing) {
              keys.push(`[${i4}]`);
              str += flatten(thing[i4]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive2(key2) : "..."})`
            );
            str += `,${flatten(key2)},${flatten(value2)}`;
            keys.pop();
          }
          str += "]";
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array": {
          const typedArray = thing;
          const base642 = encode64(typedArray.buffer);
          str = '["' + type + '","' + base642 + '"]';
          break;
        }
        case "ArrayBuffer": {
          const arraybuffer = thing;
          const base642 = encode64(arraybuffer);
          str = `["ArrayBuffer","${base642}"]`;
          break;
        }
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (enumerable_symbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 in thing) {
              keys.push(stringify_key(key2));
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 in thing) {
              if (started) str += ",";
              started = true;
              keys.push(stringify_key(key2));
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index8] = str;
    return index8;
  }
  const index7 = flatten(value);
  if (index7 < 0) return `${index7}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive2(thing) {
  const type = typeof thing;
  if (type === "string") return stringify_string(thing);
  if (thing instanceof String) return stringify_string(thing.toString());
  if (thing === void 0) return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO.toString();
  if (type === "bigint") return `["BigInt","${thing}"]`;
  return String(thing);
}

// .svelte-kit/output/server/index.js
var import_cookie4 = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);

// .svelte-kit/output/server/chunks/internal.js
init_index2();
init_equality();
init_clsx();
init_environment();
function source(v2, stack) {
  var signal2 = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: v2,
    reactions: null,
    equals,
    rv: 0,
    wv: 0
  };
  return signal2;
}
// @__NO_SIDE_EFFECTS__
function mutable_source(initial_value, immutable2 = false) {
  const s4 = source(initial_value);
  if (!immutable2) {
    s4.equals = safe_equals;
  }
  return s4;
}
function set(source2, value) {
  if (active_reaction !== null && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (derived_sources === null || !derived_sources.includes(source2))) {
    state_unsafe_mutation();
  }
  return internal_set(source2, value);
}
function internal_set(source2, value) {
  if (!source2.equals(value)) {
    source2.v;
    source2.v = value;
    source2.wv = increment_write_version();
    mark_reactions(source2, DIRTY);
    if (active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & BRANCH_EFFECT) === 0) {
      if (new_deps !== null && new_deps.includes(source2)) {
        set_signal_status(active_effect, DIRTY);
        schedule_effect(active_effect);
      } else {
        if (untracked_writes === null) {
          set_untracked_writes([source2]);
        } else {
          untracked_writes.push(source2);
        }
      }
    }
  }
  return value;
}
function mark_reactions(signal2, status) {
  var reactions = signal2.reactions;
  if (reactions === null) return;
  var length = reactions.length;
  for (var i4 = 0; i4 < length; i4++) {
    var reaction = reactions[i4];
    var flags = reaction.f;
    if ((flags & DIRTY) !== 0) continue;
    set_signal_status(reaction, status);
    if ((flags & (CLEAN | UNOWNED)) !== 0) {
      if ((flags & DERIVED) !== 0) {
        mark_reactions(
          /** @type {Derived} */
          reaction,
          MAYBE_DIRTY
        );
      } else {
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
}
function hydration_mismatch(location) {
  {
    console.warn(`https://svelte.dev/e/hydration_mismatch`);
  }
}
var hydrating = false;
function set_hydrating(value) {
  hydrating = value;
}
var hydrate_node;
function set_hydrate_node(node) {
  if (node === null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  return hydrate_node = node;
}
function hydrate_next() {
  return set_hydrate_node(
    /** @type {TemplateNode} */
    get_next_sibling(hydrate_node)
  );
}
var PASSIVE_EVENTS = ["touchstart", "touchmove"];
function is_passive_event(name) {
  return PASSIVE_EVENTS.includes(name);
}
var all_registered_events = /* @__PURE__ */ new Set();
var root_event_handles = /* @__PURE__ */ new Set();
function handle_event_propagation(event) {
  var handler_element = this;
  var owner_document = (
    /** @type {Node} */
    handler_element.ownerDocument
  );
  var event_name = event.type;
  var path = event.composedPath?.() || [];
  var current_target = (
    /** @type {null | Element} */
    path[0] || event.target
  );
  var path_idx = 0;
  var handled_at = event.__root;
  if (handled_at) {
    var at_idx = path.indexOf(handled_at);
    if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
    window)) {
      event.__root = handler_element;
      return;
    }
    var handler_idx = path.indexOf(handler_element);
    if (handler_idx === -1) {
      return;
    }
    if (at_idx <= handler_idx) {
      path_idx = at_idx;
    }
  }
  current_target = /** @type {Element} */
  path[path_idx] || event.target;
  if (current_target === handler_element) return;
  define_property(event, "currentTarget", {
    configurable: true,
    get() {
      return current_target || owner_document;
    }
  });
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    var throw_error;
    var other_errors = [];
    while (current_target !== null) {
      var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
      current_target.host || null;
      try {
        var delegated = current_target["__" + event_name];
        if (delegated !== void 0 && !/** @type {any} */
        current_target.disabled) {
          if (is_array(delegated)) {
            var [fn, ...data] = delegated;
            fn.apply(current_target, [event, ...data]);
          } else {
            delegated.call(current_target, event);
          }
        }
      } catch (error) {
        if (throw_error) {
          other_errors.push(error);
        } else {
          throw_error = error;
        }
      }
      if (event.cancelBubble || parent_element === handler_element || parent_element === null) {
        break;
      }
      current_target = parent_element;
    }
    if (throw_error) {
      for (let error of other_errors) {
        queueMicrotask(() => {
          throw error;
        });
      }
      throw throw_error;
    }
  } finally {
    event.__root = handler_element;
    delete event.currentTarget;
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}
function assign_nodes(start, end) {
  var effect2 = (
    /** @type {Effect} */
    active_effect
  );
  if (effect2.nodes_start === null) {
    effect2.nodes_start = start;
    effect2.nodes_end = end;
  }
}
function mount(component6, options2) {
  return _mount(component6, options2);
}
function hydrate(component6, options2) {
  init_operations();
  options2.intro = options2.intro ?? false;
  const target = options2.target;
  const was_hydrating = hydrating;
  const previous_hydrate_node = hydrate_node;
  try {
    var anchor = (
      /** @type {TemplateNode} */
      get_first_child(target)
    );
    while (anchor && (anchor.nodeType !== 8 || /** @type {Comment} */
    anchor.data !== HYDRATION_START)) {
      anchor = /** @type {TemplateNode} */
      get_next_sibling(anchor);
    }
    if (!anchor) {
      throw HYDRATION_ERROR;
    }
    set_hydrating(true);
    set_hydrate_node(
      /** @type {Comment} */
      anchor
    );
    hydrate_next();
    const instance = _mount(component6, { ...options2, anchor });
    if (hydrate_node === null || hydrate_node.nodeType !== 8 || /** @type {Comment} */
    hydrate_node.data !== HYDRATION_END) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    set_hydrating(false);
    return (
      /**  @type {Exports} */
      instance
    );
  } catch (error) {
    if (error === HYDRATION_ERROR) {
      if (options2.recover === false) {
        hydration_failed();
      }
      init_operations();
      clear_text_content(target);
      set_hydrating(false);
      return mount(component6, options2);
    }
    throw error;
  } finally {
    set_hydrating(was_hydrating);
    set_hydrate_node(previous_hydrate_node);
  }
}
var document_listeners = /* @__PURE__ */ new Map();
function _mount(Component, { target, anchor, props = {}, events, context: context2, intro = true }) {
  init_operations();
  var registered_events = /* @__PURE__ */ new Set();
  var event_handle = (events2) => {
    for (var i4 = 0; i4 < events2.length; i4++) {
      var event_name = events2[i4];
      if (registered_events.has(event_name)) continue;
      registered_events.add(event_name);
      var passive = is_passive_event(event_name);
      target.addEventListener(event_name, handle_event_propagation, { passive });
      var n2 = document_listeners.get(event_name);
      if (n2 === void 0) {
        document.addEventListener(event_name, handle_event_propagation, { passive });
        document_listeners.set(event_name, 1);
      } else {
        document_listeners.set(event_name, n2 + 1);
      }
    }
  };
  event_handle(array_from(all_registered_events));
  root_event_handles.add(event_handle);
  var component6 = void 0;
  var unmount2 = component_root(() => {
    var anchor_node = anchor ?? target.appendChild(create_text());
    branch(() => {
      if (context2) {
        push$1({});
        var ctx = (
          /** @type {ComponentContext} */
          component_context
        );
        ctx.c = context2;
      }
      if (events) {
        props.$$events = events;
      }
      if (hydrating) {
        assign_nodes(
          /** @type {TemplateNode} */
          anchor_node,
          null
        );
      }
      component6 = Component(anchor_node, props) || {};
      if (hydrating) {
        active_effect.nodes_end = hydrate_node;
      }
      if (context2) {
        pop$1();
      }
    });
    return () => {
      for (var event_name of registered_events) {
        target.removeEventListener(event_name, handle_event_propagation);
        var n2 = (
          /** @type {number} */
          document_listeners.get(event_name)
        );
        if (--n2 === 0) {
          document.removeEventListener(event_name, handle_event_propagation);
          document_listeners.delete(event_name);
        } else {
          document_listeners.set(event_name, n2);
        }
      }
      root_event_handles.delete(event_handle);
      if (anchor_node !== anchor) {
        anchor_node.parentNode?.removeChild(anchor_node);
      }
    };
  });
  mounted_components.set(component6, unmount2);
  return component6;
}
var mounted_components = /* @__PURE__ */ new WeakMap();
function unmount(component6, options2) {
  const fn = mounted_components.get(component6);
  if (fn) {
    mounted_components.delete(component6);
    return fn(options2);
  }
  return Promise.resolve();
}
function asClassComponent$1(component6) {
  return class extends Svelte4Component {
    /** @param {any} options */
    constructor(options2) {
      super({
        component: component6,
        ...options2
      });
    }
  };
}
var Svelte4Component = class {
  /** @type {any} */
  #events;
  /** @type {Record<string, any>} */
  #instance;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(options2) {
    var sources = /* @__PURE__ */ new Map();
    var add_source = (key2, value) => {
      var s4 = /* @__PURE__ */ mutable_source(value);
      sources.set(key2, s4);
      return s4;
    };
    const props = new Proxy(
      { ...options2.props || {}, $$events: {} },
      {
        get(target, prop) {
          return get(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
        },
        has(target, prop) {
          if (prop === LEGACY_PROPS) return true;
          get(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
          return Reflect.has(target, prop);
        },
        set(target, prop, value) {
          set(sources.get(prop) ?? add_source(prop, value), value);
          return Reflect.set(target, prop, value);
        }
      }
    );
    this.#instance = (options2.hydrate ? hydrate : mount)(options2.component, {
      target: options2.target,
      anchor: options2.anchor,
      props,
      context: options2.context,
      intro: options2.intro ?? false,
      recover: options2.recover
    });
    if (!options2?.props?.$$host || options2.sync === false) {
      flush_sync();
    }
    this.#events = props.$$events;
    for (const key2 of Object.keys(this.#instance)) {
      if (key2 === "$set" || key2 === "$destroy" || key2 === "$on") continue;
      define_property(this, key2, {
        get() {
          return this.#instance[key2];
        },
        /** @param {any} value */
        set(value) {
          this.#instance[key2] = value;
        },
        enumerable: true
      });
    }
    this.#instance.$set = /** @param {Record<string, any>} next */
    (next) => {
      Object.assign(props, next);
    };
    this.#instance.$destroy = () => {
      unmount(this.#instance);
    };
  }
  /** @param {Record<string, any>} props */
  $set(props) {
    this.#instance.$set(props);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(event, callback2) {
    this.#events[event] = this.#events[event] || [];
    const cb = (...args) => callback2.call(this, ...args);
    this.#events[event].push(cb);
    return () => {
      this.#events[event] = this.#events[event].filter(
        /** @param {any} fn */
        (fn) => fn !== cb
      );
    };
  }
  $destroy() {
    this.#instance.$destroy();
  }
};
var read_implementation = null;
function set_read_implementation(fn) {
  read_implementation = fn;
}
function asClassComponent(component6) {
  const component_constructor = asClassComponent$1(component6);
  const _render = (props, { context: context2 } = {}) => {
    const result = render(component6, { props, context: context2 });
    return {
      css: { code: "", map: null },
      head: result.head,
      html: result.body
    };
  };
  component_constructor.render = _render;
  return component_constructor;
}
function Root($$payload, $$props) {
  push();
  let {
    stores: stores2,
    page: page3,
    constructors,
    components = [],
    form,
    data_0 = null,
    data_1 = null
  } = $$props;
  {
    setContext("__svelte__", stores2);
  }
  {
    stores2.page.set(page3);
  }
  const Pyramid_1 = constructors[1];
  if (constructors[1]) {
    $$payload.out += "<!--[-->";
    const Pyramid_0 = constructors[0];
    $$payload.out += `<!---->`;
    Pyramid_0($$payload, {
      data: data_0,
      form,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        Pyramid_1($$payload2, { data: data_1, form });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    const Pyramid_0 = constructors[0];
    $$payload.out += `<!---->`;
    Pyramid_0($$payload, { data: data_0, form });
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
var root = asClassComponent(Root);
var options = {
  app_dir: "_app",
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hash_routing: false,
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root,
  service_worker: false,
  templates: {
    app: ({ head, body: body2, assets: assets2, nonce: nonce2, env }) => '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <title>\u05DE\u05E4\u05EA\u05D7.\u05D9\u05E9\u05E8\u05D0\u05DC</title>\n    <meta\n      name="description"\n      content="\u05DE\u05E4\u05EA\u05D7.\u05D9\u05E9\u05E8\u05D0\u05DC - \u05E7\u05D4\u05D9\u05DC\u05EA \u05DE\u05E4\u05EA\u05D7\u05D9\u05DD \u05D9\u05E9\u05E8\u05D0\u05DC\u05D9\u05EA"\n    />\n    <link rel="icon" href="' + assets2 + '/favicon.png" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    ' + head + '\n  </head>\n  <body data-sveltekit-preload-data="hover">\n    <div style="display: contents">' + body2 + "</div>\n  </body>\n</html>\n",
    error: ({ status, message: message2 }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message2 + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message2 + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "1rcn4yn"
};
async function get_hooks() {
  let handle3;
  let handleFetch;
  let handleError;
  let init3;
  ({ handle: handle3, handleFetch, handleError, init: init3 } = await Promise.resolve().then(() => (init_hooks_server(), hooks_server_exports)));
  let reroute;
  let transport;
  return {
    handle: handle3,
    handleFetch,
    handleError,
    init: init3,
    reroute,
    transport
  };
}

// .svelte-kit/output/server/index.js
var SVELTE_KIT_ASSETS = "/_svelte_kit_assets";
var ENDPOINT_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"];
var PAGE_METHODS = ["GET", "POST", "HEAD"];
function negotiate(accept, types2) {
  const parts = [];
  accept.split(",").forEach((str, i4) => {
    const match = /([^/ \t]+)\/([^; \t]+)[ \t]*(?:;[ \t]*q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q2 = "1"] = match;
      parts.push({ type, subtype, q: +q2, i: i4 });
    }
  });
  parts.sort((a3, b2) => {
    if (a3.q !== b2.q) {
      return b2.q - a3.q;
    }
    if (a3.subtype === "*" !== (b2.subtype === "*")) {
      return a3.subtype === "*" ? 1 : -1;
    }
    if (a3.type === "*" !== (b2.type === "*")) {
      return a3.type === "*" ? 1 : -1;
    }
    return a3.i - b2.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types2) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function is_content_type(request, ...types2) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return types2.includes(type.toLowerCase());
}
function is_form_content_type(request) {
  return is_content_type(
    request,
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  );
}
function coalesce_to_error(err) {
  return err instanceof Error || err && /** @type {any} */
  err.name && /** @type {any} */
  err.message ? (
    /** @type {Error} */
    err
  ) : new Error(JSON.stringify(err));
}
function normalize_error(error) {
  return (
    /** @type {import('../runtime/control.js').Redirect | HttpError | SvelteKitError | Error} */
    error
  );
}
function get_status(error) {
  return error instanceof HttpError || error instanceof SvelteKitError ? error.status : 500;
}
function get_message(error) {
  return error instanceof SvelteKitError ? error.text : "Internal Error";
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
  // Svelte also escapes < because the escape function could be called inside a `noscript` there
  // https://github.com/sveltejs/svelte/security/advisories/GHSA-8266-84wp-wv5c
  // However, that doesn't apply in SvelteKit
};
var escape_html_dict = {
  "&": "&amp;",
  "<": "&lt;"
};
var surrogates = (
  // high surrogate without paired low surrogate
  "[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]"
);
var escape_html_attr_regex = new RegExp(
  `[${Object.keys(escape_html_attr_dict).join("")}]|` + surrogates,
  "g"
);
var escape_html_regex = new RegExp(
  `[${Object.keys(escape_html_dict).join("")}]|` + surrogates,
  "g"
);
function escape_html(str, is_attr) {
  const dict = is_attr ? escape_html_attr_dict : escape_html_dict;
  const escaped_str = str.replace(is_attr ? escape_html_attr_regex : escape_html_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return escaped_str;
}
function method_not_allowed(mod, method) {
  return text(`${method} method not allowed`, {
    status: 405,
    headers: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = ENDPOINT_METHODS.filter((method) => method in mod);
  if ("GET" in mod || "HEAD" in mod) allowed.push("HEAD");
  return allowed;
}
function static_error_page(options2, status, message2) {
  let page3 = options2.templates.error({ status, message: escape_html(message2) });
  return text(page3, {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
async function handle_fatal_error(event, options2, error) {
  error = error instanceof HttpError ? error : coalesce_to_error(error);
  const status = get_status(error);
  const body2 = await handle_error_and_jsonify(event, options2, error);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.isDataRequest || type === "application/json") {
    return json(body2, {
      status
    });
  }
  return static_error_page(options2, status, body2.message);
}
async function handle_error_and_jsonify(event, options2, error) {
  if (error instanceof HttpError) {
    return error.body;
  }
  const status = get_status(error);
  const message2 = get_message(error);
  return await options2.hooks.handleError({ error, event, status, message: message2 }) ?? { message: message2 };
}
function redirect_response(status, location) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  return response;
}
function clarify_devalue_error(event, error) {
  if (error.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error.message} (data${error.path})`;
  }
  if (error.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error.message;
}
function stringify_uses(node) {
  const uses = [];
  if (node.uses && node.uses.dependencies.size > 0) {
    uses.push(`"dependencies":${JSON.stringify(Array.from(node.uses.dependencies))}`);
  }
  if (node.uses && node.uses.search_params.size > 0) {
    uses.push(`"search_params":${JSON.stringify(Array.from(node.uses.search_params))}`);
  }
  if (node.uses && node.uses.params.size > 0) {
    uses.push(`"params":${JSON.stringify(Array.from(node.uses.params))}`);
  }
  if (node.uses?.parent) uses.push('"parent":1');
  if (node.uses?.route) uses.push('"route":1');
  if (node.uses?.url) uses.push('"url":1');
  return `"uses":{${uses.join(",")}}`;
}
async function render_endpoint(event, mod, state2) {
  const method = (
    /** @type {import('types').HttpMethod} */
    event.request.method
  );
  let handler = mod[method] || mod.fallback;
  if (method === "HEAD" && mod.GET && !mod.HEAD) {
    handler = mod.GET;
  }
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state2.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state2.prerendering && !prerender) {
    if (state2.depth > 0) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  try {
    let response = await handler(
      /** @type {import('@sveltejs/kit').RequestEvent<Record<string, any>>} */
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state2.prerendering) {
      response = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: new Headers(response.headers)
      });
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (e2) {
    if (e2 instanceof Redirect) {
      return new Response(void 0, {
        status: e2.status,
        headers: { location: e2.location }
      });
    }
    throw e2;
  }
}
function is_endpoint_request(event) {
  const { method, headers: headers2 } = event.request;
  if (ENDPOINT_METHODS.includes(method) && !PAGE_METHODS.includes(method)) {
    return true;
  }
  if (method === "POST" && headers2.get("x-sveltekit-action") === "true") return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter(
    /** @returns {val is NonNullable<T>} */
    (val) => val != null
  );
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options2, server2) {
  const actions3 = server2?.actions;
  if (!actions3) {
    const no_actions_error = new SvelteKitError(
      405,
      "Method Not Allowed",
      `POST method not allowed. No form actions exist for ${"this page"}`
    );
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
          // "The server must generate an Allow header field in a 405 status code response"
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions3);
  try {
    const data = await call_action(event, actions3);
    if (false) ;
    if (data instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data.status,
        // @ts-expect-error we assign a string to what is supposed to be an object. That's ok
        // because we don't use the object outside, and this way we have better code navigation
        // through knowing where the related interface is used.
        data: stringify_action_response(
          data.data,
          /** @type {string} */
          event.route.id,
          options2.hooks.transport
        )
      });
    } else {
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        // @ts-expect-error see comment above
        data: stringify_action_response(
          data,
          /** @type {string} */
          event.route.id,
          options2.hooks.transport
        )
      });
    }
  } catch (e2) {
    const err = normalize_error(e2);
    if (err instanceof Redirect) {
      return action_json_redirect(err);
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, check_incorrect_fail_use(err))
      },
      {
        status: get_status(err)
      }
    );
  }
}
function check_incorrect_fail_use(error) {
  return error instanceof ActionFailure ? new Error('Cannot "throw fail()". Use "return fail()"') : error;
}
function action_json_redirect(redirect2) {
  return action_json({
    type: "redirect",
    status: redirect2.status,
    location: redirect2.location
  });
}
function action_json(data, init22) {
  return json(data, init22);
}
function is_action_request(event) {
  return event.request.method === "POST";
}
async function handle_action_request(event, server2) {
  const actions3 = server2?.actions;
  if (!actions3) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: new SvelteKitError(
        405,
        "Method Not Allowed",
        `POST method not allowed. No form actions exist for ${"this page"}`
      )
    };
  }
  check_named_default_separate(actions3);
  try {
    const data = await call_action(event, actions3);
    if (false) ;
    if (data instanceof ActionFailure) {
      return {
        type: "failure",
        status: data.status,
        data: data.data
      };
    } else {
      return {
        type: "success",
        status: 200,
        // @ts-expect-error this will be removed upon serialization, so `undefined` is the same as omission
        data
      };
    }
  } catch (e2) {
    const err = normalize_error(e2);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
function check_named_default_separate(actions3) {
  if (actions3.default && Object.keys(actions3).length > 1) {
    throw new Error(
      "When using named actions, the default action cannot be used. See the docs for more info: https://svelte.dev/docs/kit/form-actions#named-actions"
    );
  }
}
async function call_action(event, actions3) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions3[name];
  if (!action) {
    throw new SvelteKitError(404, "Not Found", `No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new SvelteKitError(
      415,
      "Unsupported Media Type",
      `Form actions expect form-encoded data \u2014 received ${event.request.headers.get(
        "content-type"
      )}`
    );
  }
  return action(event);
}
function uneval_action_response(data, route_id, transport) {
  const replacer = (thing) => {
    for (const key2 in transport) {
      const encoded = transport[key2].encode(thing);
      if (encoded) {
        return `app.decode('${key2}', ${uneval(encoded, replacer)})`;
      }
    }
  };
  return try_serialize(data, (value) => uneval(value, replacer), route_id);
}
function stringify_action_response(data, route_id, transport) {
  const encoders = Object.fromEntries(
    Object.entries(transport).map(([key2, value]) => [key2, value.encode])
  );
  return try_serialize(data, (value) => stringify(value, encoders), route_id);
}
function try_serialize(data, fn, route_id) {
  try {
    return fn(data);
  } catch (e2) {
    const error = (
      /** @type {any} */
      e2
    );
    if (data instanceof Response) {
      throw new Error(
        `Data returned from action inside ${route_id} is not serializable. Form actions need to return plain objects or fail(). E.g. return { success: true } or return fail(400, { message: "invalid" });`
      );
    }
    if ("path" in error) {
      let message2 = `Data returned from action inside ${route_id} is not serializable: ${error.message}`;
      if (error.path !== "") message2 += ` (data.${error.path})`;
      throw new Error(message2);
    }
    throw error;
  }
}
var INVALIDATED_PARAM = "x-sveltekit-invalidated";
var TRAILING_SLASH_PARAM = "x-sveltekit-trailing-slash";
function b64_encode(buffer) {
  if (globalThis.Buffer) {
    return Buffer.from(buffer).toString("base64");
  }
  const little_endian = new Uint8Array(new Uint16Array([1]).buffer)[0] > 0;
  return btoa(
    new TextDecoder(little_endian ? "utf-16le" : "utf-16be").decode(
      new Uint16Array(new Uint8Array(buffer))
    )
  );
}
async function load_server_data({ event, state: state2, node, parent }) {
  if (!node?.server) return null;
  let is_tracking = true;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false,
    search_params: /* @__PURE__ */ new Set()
  };
  const url = make_trackable(
    event.url,
    () => {
      if (is_tracking) {
        uses.url = true;
      }
    },
    (param) => {
      if (is_tracking) {
        uses.search_params.add(param);
      }
    }
  );
  if (state2.prerendering) {
    disable_search(url);
  }
  const result = await node.server.load?.call(null, {
    ...event,
    fetch: (info, init22) => {
      new URL(info instanceof Request ? info.url : info, event.url);
      return event.fetch(info, init22);
    },
    /** @param {string[]} deps */
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        if (is_tracking) {
          uses.params.add(key2);
        }
        return target[
          /** @type {string} */
          key2
        ];
      }
    }),
    parent: async () => {
      if (is_tracking) {
        uses.parent = true;
      }
      return parent();
    },
    route: new Proxy(event.route, {
      get: (target, key2) => {
        if (is_tracking) {
          uses.route = true;
        }
        return target[
          /** @type {'id'} */
          key2
        ];
      }
    }),
    url,
    untrack(fn) {
      is_tracking = false;
      try {
        return fn();
      } finally {
        is_tracking = true;
      }
    }
  });
  return {
    type: "data",
    data: result ?? null,
    uses,
    slash: node.server.trailingSlash
  };
}
async function load_data({
  event,
  fetched,
  node,
  parent,
  server_data_promise,
  state: state2,
  resolve_opts,
  csr
}) {
  const server_data_node = await server_data_promise;
  if (!node?.universal?.load) {
    return server_data_node?.data ?? null;
  }
  const result = await node.universal.load.call(null, {
    url: event.url,
    params: event.params,
    data: server_data_node?.data ?? null,
    route: event.route,
    fetch: create_universal_fetch(event, state2, fetched, csr, resolve_opts),
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent,
    untrack: (fn) => fn()
  });
  return result ?? null;
}
function create_universal_fetch(event, state2, fetched, csr, resolve_opts) {
  const universal_fetch = async (input, init22) => {
    const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
    const cloned_headers = input instanceof Request && [...input.headers].length ? new Headers(input.headers) : init22?.headers;
    let response = await event.fetch(input, init22);
    const url = new URL(input instanceof Request ? input.url : input, event.url);
    const same_origin = url.origin === event.url.origin;
    let dependency;
    if (same_origin) {
      if (state2.prerendering) {
        dependency = { response, body: null };
        state2.prerendering.dependencies.set(url.pathname, dependency);
      }
    } else {
      const mode = input instanceof Request ? input.mode : init22?.mode ?? "cors";
      if (mode === "no-cors") {
        response = new Response("", {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      } else {
        const acao = response.headers.get("access-control-allow-origin");
        if (!acao || acao !== event.url.origin && acao !== "*") {
          throw new Error(
            `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
          );
        }
      }
    }
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function push_fetched(body2, is_b64) {
          const status_number = Number(response2.status);
          if (isNaN(status_number)) {
            throw new Error(
              `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
            );
          }
          fetched.push({
            url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
            method: event.request.method,
            request_body: (
              /** @type {string | ArrayBufferView | undefined} */
              input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init22?.body
            ),
            request_headers: cloned_headers,
            response_body: body2,
            response: response2,
            is_b64
          });
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            if (buffer instanceof ArrayBuffer) {
              await push_fetched(b64_encode(buffer), true);
            }
            return buffer;
          };
        }
        async function text2() {
          const body2 = await response2.text();
          if (!body2 || typeof body2 === "string") {
            await push_fetched(body2, false);
          }
          if (dependency) {
            dependency.body = body2;
          }
          return body2;
        }
        if (key2 === "text") {
          return text2;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text2());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    if (csr) {
      const get3 = response.headers.get;
      response.headers.get = (key2) => {
        const lower = key2.toLowerCase();
        const value = get3.call(response.headers, lower);
        if (value && !lower.startsWith("x-sveltekit-")) {
          const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
          if (!included) {
            throw new Error(
              `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://svelte.dev/docs/kit/hooks#Server-hooks-handle (at ${event.route.id})`
            );
          }
        }
        return value;
      };
    }
    return proxy;
  };
  return (input, init22) => {
    const response = universal_fetch(input, init22);
    response.catch(() => {
    });
    return response;
  };
}
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  const decoder3 = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += decoder3.decode(value);
  }
  return result;
}
function hash(...values) {
  let hash2 = 5381;
  for (const value of values) {
    if (typeof value === "string") {
      let i4 = value.length;
      while (i4) hash2 = hash2 * 33 ^ value.charCodeAt(--i4);
    } else if (ArrayBuffer.isView(value)) {
      const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
      let i4 = buffer.length;
      while (i4) hash2 = hash2 * 33 ^ buffer[--i4];
    } else {
      throw new TypeError("value must be a string or TypedArray");
    }
  }
  return (hash2 >>> 0).toString(36);
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering2 = false) {
  const headers2 = {};
  let cache_control = null;
  let age = null;
  let varyAny = false;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers2[key2] = value;
    }
    if (key2 === "cache-control") cache_control = value;
    else if (key2 === "age") age = value;
    else if (key2 === "vary" && value.trim() === "*") varyAny = true;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers: headers2,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url="${escape_html(fetched.url, true)}"`
  ];
  if (fetched.is_b64) {
    attrs.push("data-b64");
  }
  if (fetched.request_headers || fetched.request_body) {
    const values = [];
    if (fetched.request_headers) {
      values.push([...new Headers(fetched.request_headers)].join(","));
    }
    if (fetched.request_body) {
      values.push(fetched.request_body);
    }
    attrs.push(`data-hash="${hash(...values)}"`);
  }
  if (!prerendering2 && fetched.method === "GET" && cache_control && !varyAny) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s3 = JSON.stringify;
var encoder$2 = new TextEncoder();
function sha256(data) {
  if (!key[0]) precompute();
  const out = init2.slice(0);
  const array2 = encode4(data);
  for (let i4 = 0; i4 < array2.length; i4 += 16) {
    const w3 = array2.subarray(i4, i4 + 16);
    let tmp;
    let a3;
    let b2;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i22 = 0; i22 < 64; i22++) {
      if (i22 < 16) {
        tmp = w3[i22];
      } else {
        a3 = w3[i22 + 1 & 15];
        b2 = w3[i22 + 14 & 15];
        tmp = w3[i22 & 15] = (a3 >>> 7 ^ a3 >>> 18 ^ a3 >>> 3 ^ a3 << 25 ^ a3 << 14) + (b2 >>> 17 ^ b2 >>> 19 ^ b2 >>> 10 ^ b2 << 15 ^ b2 << 13) + w3[i22 & 15] + w3[i22 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i22];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init2 = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x3) {
    return (x3 - Math.floor(x3)) * 4294967296;
  }
  let prime = 2;
  for (let i4 = 0; i4 < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i4 < 8) {
        init2[i4] = frac(prime ** (1 / 2));
      }
      key[i4] = frac(prime ** (1 / 3));
      i4++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i4 = 0; i4 < bytes.length; i4 += 4) {
    const a3 = bytes[i4 + 0];
    const b2 = bytes[i4 + 1];
    const c3 = bytes[i4 + 2];
    const d3 = bytes[i4 + 3];
    bytes[i4 + 0] = d3;
    bytes[i4 + 1] = c3;
    bytes[i4 + 2] = b2;
    bytes[i4 + 3] = a3;
  }
}
function encode4(str) {
  const encoded = encoder$2.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l3 = bytes.length;
  let result = "";
  let i4;
  for (i4 = 2; i4 < l3; i4 += 3) {
    result += chars2[bytes[i4 - 2] >> 2];
    result += chars2[(bytes[i4 - 2] & 3) << 4 | bytes[i4 - 1] >> 4];
    result += chars2[(bytes[i4 - 1] & 15) << 2 | bytes[i4] >> 6];
    result += chars2[bytes[i4] & 63];
  }
  if (i4 === l3 + 1) {
    result += chars2[bytes[i4 - 2] >> 2];
    result += chars2[(bytes[i4 - 2] & 3) << 4];
    result += "==";
  }
  if (i4 === l3) {
    result += chars2[bytes[i4 - 2] >> 2];
    result += chars2[(bytes[i4 - 2] & 3) << 4 | bytes[i4 - 1] >> 4];
    result += chars2[(bytes[i4 - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval",
  "script"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var BaseProvider = class {
  /** @type {boolean} */
  #use_hashes;
  /** @type {boolean} */
  #script_needs_csp;
  /** @type {boolean} */
  #script_src_needs_csp;
  /** @type {boolean} */
  #script_src_elem_needs_csp;
  /** @type {boolean} */
  #style_needs_csp;
  /** @type {boolean} */
  #style_src_needs_csp;
  /** @type {boolean} */
  #style_src_attr_needs_csp;
  /** @type {boolean} */
  #style_src_elem_needs_csp;
  /** @type {import('types').CspDirectives} */
  #directives;
  /** @type {import('types').Csp.Source[]} */
  #script_src;
  /** @type {import('types').Csp.Source[]} */
  #script_src_elem;
  /** @type {import('types').Csp.Source[]} */
  #style_src;
  /** @type {import('types').Csp.Source[]} */
  #style_src_attr;
  /** @type {import('types').Csp.Source[]} */
  #style_src_elem;
  /** @type {string} */
  #nonce;
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce2) {
    this.#use_hashes = use_hashes;
    this.#directives = directives;
    const d3 = this.#directives;
    this.#script_src = [];
    this.#script_src_elem = [];
    this.#style_src = [];
    this.#style_src_attr = [];
    this.#style_src_elem = [];
    const effective_script_src = d3["script-src"] || d3["default-src"];
    const script_src_elem = d3["script-src-elem"];
    const effective_style_src = d3["style-src"] || d3["default-src"];
    const style_src_attr = d3["style-src-attr"];
    const style_src_elem = d3["style-src-elem"];
    const needs_csp = (directive) => !!directive && !directive.some((value) => value === "unsafe-inline");
    this.#script_src_needs_csp = needs_csp(effective_script_src);
    this.#script_src_elem_needs_csp = needs_csp(script_src_elem);
    this.#style_src_needs_csp = needs_csp(effective_style_src);
    this.#style_src_attr_needs_csp = needs_csp(style_src_attr);
    this.#style_src_elem_needs_csp = needs_csp(style_src_elem);
    this.#script_needs_csp = this.#script_src_needs_csp || this.#script_src_elem_needs_csp;
    this.#style_needs_csp = this.#style_src_needs_csp || this.#style_src_attr_needs_csp || this.#style_src_elem_needs_csp;
    this.script_needs_nonce = this.#script_needs_csp && !this.#use_hashes;
    this.style_needs_nonce = this.#style_needs_csp && !this.#use_hashes;
    this.#nonce = nonce2;
  }
  /** @param {string} content */
  add_script(content) {
    if (!this.#script_needs_csp) return;
    const source2 = this.#use_hashes ? `sha256-${sha256(content)}` : `nonce-${this.#nonce}`;
    if (this.#script_src_needs_csp) {
      this.#script_src.push(source2);
    }
    if (this.#script_src_elem_needs_csp) {
      this.#script_src_elem.push(source2);
    }
  }
  /** @param {string} content */
  add_style(content) {
    if (!this.#style_needs_csp) return;
    const source2 = this.#use_hashes ? `sha256-${sha256(content)}` : `nonce-${this.#nonce}`;
    if (this.#style_src_needs_csp) {
      this.#style_src.push(source2);
    }
    if (this.#style_src_attr_needs_csp) {
      this.#style_src_attr.push(source2);
    }
    if (this.#style_src_elem_needs_csp) {
      const sha256_empty_comment_hash = "sha256-9OlNO0DNEeaVzHL4RZwCLsBHA8WBQ8toBp/4F5XV2nc=";
      const d3 = this.#directives;
      if (d3["style-src-elem"] && !d3["style-src-elem"].includes(sha256_empty_comment_hash) && !this.#style_src_elem.includes(sha256_empty_comment_hash)) {
        this.#style_src_elem.push(sha256_empty_comment_hash);
      }
      if (source2 !== sha256_empty_comment_hash) {
        this.#style_src_elem.push(source2);
      }
    }
  }
  /**
   * @param {boolean} [is_meta]
   */
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...this.#directives };
    if (this.#style_src.length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...this.#style_src
      ];
    }
    if (this.#style_src_attr.length > 0) {
      directives["style-src-attr"] = [
        ...directives["style-src-attr"] || [],
        ...this.#style_src_attr
      ];
    }
    if (this.#style_src_elem.length > 0) {
      directives["style-src-elem"] = [
        ...directives["style-src-elem"] || [],
        ...this.#style_src_elem
      ];
    }
    if (this.#script_src.length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...this.#script_src
      ];
    }
    if (this.#script_src_elem.length > 0) {
      directives["script-src-elem"] = [
        ...directives["script-src-elem"] || [],
        ...this.#script_src_elem
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = (
        /** @type {string[] | true} */
        directives[key2]
      );
      if (!value) continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = this.get_header(true);
    if (!content) {
      return;
    }
    return `<meta http-equiv="content-security-policy" content="${escape_html(content, true)}">`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce2) {
    super(use_hashes, directives, nonce2);
    if (Object.values(directives).filter((v2) => !!v2).length > 0) {
      const has_report_to = directives["report-to"]?.length ?? 0 > 0;
      const has_report_uri = directives["report-uri"]?.length ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  /** @readonly */
  nonce = generate_nonce();
  /** @type {CspProvider} */
  csp_provider;
  /** @type {CspReportOnlyProvider} */
  report_only_provider;
  /**
   * @param {import('./types.js').CspConfig} config
   * @param {import('./types.js').CspOpts} opts
   */
  constructor({ mode, directives, reportOnly }, { prerender }) {
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  /** @param {string} content */
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  /** @param {string} content */
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
function defer() {
  let fulfil;
  let reject;
  const promise = new Promise((f4, r3) => {
    fulfil = f4;
    reject = r3;
  });
  return { promise, fulfil, reject };
}
function create_async_iterator() {
  const deferred = [defer()];
  return {
    iterator: {
      [Symbol.asyncIterator]() {
        return {
          next: async () => {
            const next = await deferred[0].promise;
            if (!next.done) deferred.shift();
            return next;
          }
        };
      }
    },
    push: (value) => {
      deferred[deferred.length - 1].fulfil({
        value,
        done: false
      });
      deferred.push(defer());
    },
    done: () => {
      deferred[deferred.length - 1].fulfil({ done: true });
    }
  };
}
var updated = {
  ...readable(false),
  check: () => false
};
var encoder$1 = new TextEncoder();
async function render_response({
  branch: branch2,
  fetched,
  options: options2,
  manifest: manifest2,
  state: state2,
  page_config,
  status,
  error = null,
  event,
  resolve_opts,
  action_result
}) {
  if (state2.prerendering) {
    if (options2.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options2.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { client } = manifest2._;
  const modulepreloads = new Set(client.imports);
  const stylesheets7 = new Set(client.stylesheets);
  const fonts7 = new Set(client.fonts);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = action_result?.type === "success" || action_result?.type === "failure" ? action_result.data ?? null : null;
  let base$1 = base;
  let assets$1 = assets;
  let base_expression = s3(base);
  {
    if (!state2.prerendering?.fallback) {
      const segments = event.url.pathname.slice(base.length).split("/").slice(2);
      base$1 = segments.map(() => "..").join("/") || ".";
      base_expression = `new URL(${s3(base$1)}, location).pathname.slice(0, -1)`;
      if (!assets || assets[0] === "/" && assets !== SVELTE_KIT_ASSETS) {
        assets$1 = base$1;
      }
    } else if (options2.hash_routing) {
      base_expression = "new URL('.', location).pathname.slice(0, -1)";
    }
  }
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      constructors: await Promise.all(branch2.map(({ node }) => node.component())),
      form: form_value
    };
    let data2 = {};
    for (let i4 = 0; i4 < branch2.length; i4 += 1) {
      data2 = { ...data2, ...branch2[i4].data };
      props[`data_${i4}`] = data2;
    }
    props.page = {
      error,
      params: (
        /** @type {Record<string, any>} */
        event.params
      ),
      route: event.route,
      status,
      url: event.url,
      data: data2,
      form: form_value,
      state: {}
    };
    override({ base: base$1, assets: assets$1 });
    const render_opts = {
      context: /* @__PURE__ */ new Map([
        [
          "__request__",
          {
            page: props.page
          }
        ]
      ])
    };
    {
      try {
        rendered = options2.root.render(props, render_opts);
      } finally {
        reset();
      }
    }
    for (const { node } of branch2) {
      for (const url of node.imports) modulepreloads.add(url);
      for (const url of node.stylesheets) stylesheets7.add(url);
      for (const url of node.fonts) fonts7.add(url);
      if (node.inline_styles && !client.inline) {
        Object.entries(await node.inline_styles()).forEach(([k3, v2]) => inline_styles.set(k3, v2));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head = "";
  let body2 = rendered.html;
  const csp = new Csp(options2.csp, {
    prerender: !!state2.prerendering
  });
  const prefixed = (path) => {
    if (path.startsWith("/")) {
      return base + path;
    }
    return `${assets$1}/${path}`;
  };
  const style = client.inline ? client.inline?.style : Array.from(inline_styles.values()).join("\n");
  if (style) {
    const attributes = [];
    if (csp.style_needs_nonce) attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(style);
    head += `
	<style${attributes.join("")}>${style}</style>`;
  }
  for (const dep of stylesheets7) {
    const path = prefixed(dep);
    const attributes = ['rel="stylesheet"'];
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      if (resolve_opts.preload({ type: "css", path })) {
        const preload_atts = ['rel="preload"', 'as="style"'];
        link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
      }
    }
    head += `
		<link href="${path}" ${attributes.join(" ")}>`;
  }
  for (const dep of fonts7) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      const attributes = [
        'rel="preload"',
        'as="font"',
        `type="font/${ext}"`,
        `href="${path}"`,
        "crossorigin"
      ];
      head += `
		<link ${attributes.join(" ")}>`;
    }
  }
  const global = `__sveltekit_${options2.version_hash}`;
  const { data, chunks } = get_data(
    event,
    options2,
    branch2.map((b2) => b2.server_data),
    csp,
    global
  );
  if (page_config.ssr && page_config.csr) {
    body2 += `
			${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state2.prerendering)
    ).join("\n			")}`;
  }
  if (page_config.csr) {
    if (client.uses_env_dynamic_public && state2.prerendering) {
      modulepreloads.add(`${options2.app_dir}/env.js`);
    }
    if (!client.inline) {
      const included_modulepreloads = Array.from(modulepreloads, (dep) => prefixed(dep)).filter(
        (path) => resolve_opts.preload({ type: "js", path })
      );
      for (const path of included_modulepreloads) {
        link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
        if (options2.preload_strategy !== "modulepreload") {
          head += `
		<link rel="preload" as="script" crossorigin="anonymous" href="${path}">`;
        } else if (state2.prerendering) {
          head += `
		<link rel="modulepreload" href="${path}">`;
        }
      }
    }
    const blocks = [];
    const load_env_eagerly = client.uses_env_dynamic_public && state2.prerendering;
    const properties = [`base: ${base_expression}`];
    if (assets) {
      properties.push(`assets: ${s3(assets)}`);
    }
    if (client.uses_env_dynamic_public) {
      properties.push(`env: ${load_env_eagerly ? "null" : s3(public_env)}`);
    }
    if (chunks) {
      blocks.push("const deferred = new Map();");
      properties.push(`defer: (id) => new Promise((fulfil, reject) => {
							deferred.set(id, { fulfil, reject });
						})`);
      properties.push(`resolve: ({ id, data, error }) => {
							const try_to_resolve = () => {
								if (!deferred.has(id)) {
									setTimeout(try_to_resolve, 0);
									return;
								}
								const { fulfil, reject } = deferred.get(id);
								deferred.delete(id);
								if (error) reject(error);
								else fulfil(data);
							}
							try_to_resolve();
						}`);
    }
    blocks.push(`${global} = {
						${properties.join(",\n						")}
					};`);
    const args = ["element"];
    blocks.push("const element = document.currentScript.parentElement;");
    if (page_config.ssr) {
      const serialized = { form: "null", error: "null" };
      if (form_value) {
        serialized.form = uneval_action_response(
          form_value,
          /** @type {string} */
          event.route.id,
          options2.hooks.transport
        );
      }
      if (error) {
        serialized.error = uneval(error);
      }
      const hydrate2 = [
        `node_ids: [${branch2.map(({ node }) => node.index).join(", ")}]`,
        `data: ${data}`,
        `form: ${serialized.form}`,
        `error: ${serialized.error}`
      ];
      if (status !== 200) {
        hydrate2.push(`status: ${status}`);
      }
      if (options2.embedded) {
        hydrate2.push(`params: ${uneval(event.params)}`, `route: ${s3(event.route)}`);
      }
      const indent = "	".repeat(load_env_eagerly ? 7 : 6);
      args.push(`{
${indent}	${hydrate2.join(`,
${indent}	`)}
${indent}}`);
    }
    const boot = client.inline ? `${client.inline.script}

					__sveltekit_${options2.version_hash}.app.start(${args.join(", ")});` : client.app ? `Promise.all([
						import(${s3(prefixed(client.start))}),
						import(${s3(prefixed(client.app))})
					]).then(([kit, app]) => {
						kit.start(app, ${args.join(", ")});
					});` : `import(${s3(prefixed(client.start))}).then((app) => {
						app.start(${args.join(", ")})
					});`;
    if (load_env_eagerly) {
      blocks.push(`import(${s3(`${base$1}/${options2.app_dir}/env.js`)}).then(({ env }) => {
						${global}.env = env;

						${boot.replace(/\n/g, "\n	")}
					});`);
    } else {
      blocks.push(boot);
    }
    if (options2.service_worker) {
      const opts = "";
      blocks.push(`if ('serviceWorker' in navigator) {
						addEventListener('load', function () {
							navigator.serviceWorker.register('${prefixed("service-worker.js")}'${opts});
						});
					}`);
    }
    const init_app = `
				{
					${blocks.join("\n\n					")}
				}
			`;
    csp.add_script(init_app);
    body2 += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_app}<\/script>
		`;
  }
  const headers2 = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html"
  });
  if (state2.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state2.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state2.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  } else {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers2.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers2.set("content-security-policy-report-only", report_only_header);
    }
    if (link_header_preloads.size) {
      headers2.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  head += rendered.head;
  const html2 = options2.templates.app({
    head,
    body: body2,
    assets: assets$1,
    nonce: (
      /** @type {string} */
      csp.nonce
    ),
    env: safe_public_env
  });
  const transformed = await resolve_opts.transformPageChunk({
    html: html2,
    done: true
  }) || "";
  if (!chunks) {
    headers2.set("etag", `"${hash(transformed)}"`);
  }
  return !chunks ? text(transformed, {
    status,
    headers: headers2
  }) : new Response(
    new ReadableStream({
      async start(controller) {
        controller.enqueue(encoder$1.encode(transformed + "\n"));
        for await (const chunk of chunks) {
          controller.enqueue(encoder$1.encode(chunk));
        }
        controller.close();
      },
      type: "bytes"
    }),
    {
      headers: headers2
    }
  );
}
function get_data(event, options2, nodes, csp, global) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push: push2, done } = create_async_iterator();
  function replacer(thing) {
    if (typeof thing?.then === "function") {
      const id = promise_id++;
      count += 1;
      thing.then(
        /** @param {any} data */
        (data) => ({ data })
      ).catch(
        /** @param {any} error */
        async (error) => ({
          error: await handle_error_and_jsonify(event, options2, error)
        })
      ).then(
        /**
         * @param {{data: any; error: any}} result
         */
        async ({ data, error }) => {
          count -= 1;
          let str;
          try {
            str = uneval({ id, data, error }, replacer);
          } catch {
            error = await handle_error_and_jsonify(
              event,
              options2,
              new Error(`Failed to serialize promise while rendering ${event.route.id}`)
            );
            data = void 0;
            str = uneval({ id, data, error }, replacer);
          }
          const nonce2 = csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : "";
          push2(`<script${nonce2}>${global}.resolve(${str})<\/script>
`);
          if (count === 0) done();
        }
      );
      return `${global}.defer(${id})`;
    } else {
      for (const key2 in options2.hooks.transport) {
        const encoded = options2.hooks.transport[key2].encode(thing);
        if (encoded) {
          return `app.decode('${key2}', ${uneval(encoded, replacer)})`;
        }
      }
    }
  }
  try {
    const strings = nodes.map((node) => {
      if (!node) return "null";
      return `{"type":"data","data":${uneval(node.data, replacer)},${stringify_uses(node)}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `[${strings.join(",")}]`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e2) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e2
    ));
  }
}
function get_option(nodes, option) {
  return nodes.reduce(
    (value, node) => {
      return (
        /** @type {Value} TypeScript's too dumb to understand this */
        node?.universal?.[option] ?? node?.server?.[option] ?? value
      );
    },
    /** @type {Value | undefined} */
    void 0
  );
}
async function respond_with_error({
  event,
  options: options2,
  manifest: manifest2,
  state: state2,
  status,
  error,
  resolve_opts
}) {
  if (event.request.headers.get("x-sveltekit-error")) {
    return static_error_page(
      options2,
      status,
      /** @type {Error} */
      error.message
    );
  }
  const fetched = [];
  try {
    const branch2 = [];
    const default_layout = await manifest2._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    const csr = get_option([default_layout], "csr") ?? true;
    if (ssr) {
      state2.error = true;
      const server_data_promise = load_server_data({
        event,
        state: state2,
        node: default_layout,
        // eslint-disable-next-line @typescript-eslint/require-await
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetched,
        node: default_layout,
        // eslint-disable-next-line @typescript-eslint/require-await
        parent: async () => ({}),
        resolve_opts,
        server_data_promise,
        state: state2,
        csr
      });
      branch2.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await manifest2._.nodes[1](),
          // 1 is always the root error
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options: options2,
      manifest: manifest2,
      state: state2,
      page_config: {
        ssr,
        csr
      },
      status,
      error: await handle_error_and_jsonify(event, options2, error),
      branch: branch2,
      fetched,
      event,
      resolve_opts
    });
  } catch (e2) {
    if (e2 instanceof Redirect) {
      return redirect_response(e2.status, e2.location);
    }
    return static_error_page(
      options2,
      get_status(e2),
      (await handle_error_and_jsonify(event, options2, e2)).message
    );
  }
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done) return result;
    done = true;
    return result = fn();
  };
}
var encoder4 = new TextEncoder();
async function render_data(event, route, options2, manifest2, state2, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n2, i4) => {
      return once(async () => {
        try {
          if (aborted) {
            return (
              /** @type {import('types').ServerDataSkippedNode} */
              {
                type: "skip"
              }
            );
          }
          const node = n2 == void 0 ? n2 : await manifest2._.nodes[n2]();
          return load_server_data({
            event: new_event,
            state: state2,
            node,
            parent: async () => {
              const data2 = {};
              for (let j3 = 0; j3 < i4; j3 += 1) {
                const parent = (
                  /** @type {import('types').ServerDataNode | null} */
                  await functions[j3]()
                );
                if (parent) {
                  Object.assign(data2, parent.data);
                }
              }
              return data2;
            }
          });
        } catch (e2) {
          aborted = true;
          throw e2;
        }
      });
    });
    const promises = functions.map(async (fn, i4) => {
      if (!invalidated[i4]) {
        return (
          /** @type {import('types').ServerDataSkippedNode} */
          {
            type: "skip"
          }
        );
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p3, i4) => p3.catch(async (error) => {
          if (error instanceof Redirect) {
            throw error;
          }
          length = Math.min(length, i4 + 1);
          return (
            /** @type {import('types').ServerErrorNode} */
            {
              type: "error",
              error: await handle_error_and_jsonify(event, options2, error),
              status: error instanceof HttpError || error instanceof SvelteKitError ? error.status : void 0
            }
          );
        })
      )
    );
    const { data, chunks } = get_data_json(event, options2, nodes);
    if (!chunks) {
      return json_response(data);
    }
    return new Response(
      new ReadableStream({
        async start(controller) {
          controller.enqueue(encoder4.encode(data));
          for await (const chunk of chunks) {
            controller.enqueue(encoder4.encode(chunk));
          }
          controller.close();
        },
        type: "bytes"
      }),
      {
        headers: {
          // we use a proprietary content type to prevent buffering.
          // the `text` prefix makes it inspectable
          "content-type": "text/sveltekit-data",
          "cache-control": "private, no-store"
        }
      }
    );
  } catch (e2) {
    const error = normalize_error(e2);
    if (error instanceof Redirect) {
      return redirect_json_response(error);
    } else {
      return json_response(await handle_error_and_jsonify(event, options2, error), 500);
    }
  }
}
function json_response(json2, status = 200) {
  return text(typeof json2 === "string" ? json2 : JSON.stringify(json2), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
function redirect_json_response(redirect2) {
  return json_response({
    type: "redirect",
    location: redirect2.location
  });
}
function get_data_json(event, options2, nodes) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push: push2, done } = create_async_iterator();
  const reducers = {
    ...Object.fromEntries(
      Object.entries(options2.hooks.transport).map(([key2, value]) => [key2, value.encode])
    ),
    /** @param {any} thing */
    Promise: (thing) => {
      if (typeof thing?.then === "function") {
        const id = promise_id++;
        count += 1;
        let key2 = "data";
        thing.catch(
          /** @param {any} e */
          async (e2) => {
            key2 = "error";
            return handle_error_and_jsonify(
              event,
              options2,
              /** @type {any} */
              e2
            );
          }
        ).then(
          /** @param {any} value */
          async (value) => {
            let str;
            try {
              str = stringify(value, reducers);
            } catch {
              const error = await handle_error_and_jsonify(
                event,
                options2,
                new Error(`Failed to serialize promise while rendering ${event.route.id}`)
              );
              key2 = "error";
              str = stringify(error, reducers);
            }
            count -= 1;
            push2(`{"type":"chunk","id":${id},"${key2}":${str}}
`);
            if (count === 0) done();
          }
        );
        return id;
      }
    }
  };
  try {
    const strings = nodes.map((node) => {
      if (!node) return "null";
      if (node.type === "error" || node.type === "skip") {
        return JSON.stringify(node);
      }
      return `{"type":"data","data":${stringify(node.data, reducers)},${stringify_uses(
        node
      )}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `{"type":"data","nodes":[${strings.join(",")}]}
`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e2) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e2
    ));
  }
}
function load_page_nodes(page3, manifest2) {
  return Promise.all([
    // we use == here rather than === because [undefined] serializes as "[null]"
    ...page3.layouts.map((n2) => n2 == void 0 ? n2 : manifest2._.nodes[n2]()),
    manifest2._.nodes[page3.leaf]()
  ]);
}
var MAX_DEPTH = 10;
async function render_page(event, page3, options2, manifest2, state2, resolve_opts) {
  if (state2.depth > MAX_DEPTH) {
    return text(`Not found: ${event.url.pathname}`, {
      status: 404
      // TODO in some cases this should be 500. not sure how to differentiate
    });
  }
  if (is_action_json_request(event)) {
    const node = await manifest2._.nodes[page3.leaf]();
    return handle_action_json_request(event, options2, node?.server);
  }
  try {
    const nodes = await load_page_nodes(page3, manifest2);
    const leaf_node = (
      /** @type {import('types').SSRNode} */
      nodes.at(-1)
    );
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if (action_result?.type === "redirect") {
        return redirect_response(action_result.status, action_result.location);
      }
      if (action_result?.type === "error") {
        status = get_status(action_result.error);
      }
      if (action_result?.type === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some(
      // prerender in case of trailingSlash because the client retrieves that value from the server
      (node) => node?.server?.load || node?.server?.trailingSlash !== void 0
    );
    const data_pathname = add_data_suffix(event.url.pathname);
    const should_prerender = get_option(nodes, "prerender") ?? false;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod?.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state2.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    state2.prerender_default = should_prerender;
    const fetched = [];
    if (get_option(nodes, "ssr") === false && !(state2.prerendering && should_prerender_data)) {
      if (BROWSER && action_result && !event.request.headers.has("x-sveltekit-action")) ;
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options: options2,
        manifest: manifest2,
        state: state2,
        resolve_opts
      });
    }
    const branch2 = [];
    let load_error = null;
    const server_promises = nodes.map((node, i4) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && action_result?.type === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state: state2,
            node,
            parent: async () => {
              const data = {};
              for (let j3 = 0; j3 < i4; j3 += 1) {
                const parent = await server_promises[j3];
                if (parent) Object.assign(data, parent.data);
              }
              return data;
            }
          });
        } catch (e2) {
          load_error = /** @type {Error} */
          e2;
          throw load_error;
        }
      });
    });
    const csr = get_option(nodes, "csr") ?? true;
    const load_promises = nodes.map((node, i4) => {
      if (load_error) throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetched,
            node,
            parent: async () => {
              const data = {};
              for (let j3 = 0; j3 < i4; j3 += 1) {
                Object.assign(data, await load_promises[j3]);
              }
              return data;
            },
            resolve_opts,
            server_data_promise: server_promises[i4],
            state: state2,
            csr
          });
        } catch (e2) {
          load_error = /** @type {Error} */
          e2;
          throw load_error;
        }
      });
    });
    for (const p3 of server_promises) p3.catch(() => {
    });
    for (const p3 of load_promises) p3.catch(() => {
    });
    for (let i4 = 0; i4 < nodes.length; i4 += 1) {
      const node = nodes[i4];
      if (node) {
        try {
          const server_data = await server_promises[i4];
          const data = await load_promises[i4];
          branch2.push({ node, server_data, data });
        } catch (e2) {
          const err = normalize_error(e2);
          if (err instanceof Redirect) {
            if (state2.prerendering && should_prerender_data) {
              const body2 = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state2.prerendering.dependencies.set(data_pathname, {
                response: text(body2),
                body: body2
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = get_status(err);
          const error = await handle_error_and_jsonify(event, options2, err);
          while (i4--) {
            if (page3.errors[i4]) {
              const index7 = (
                /** @type {number} */
                page3.errors[i4]
              );
              const node2 = await manifest2._.nodes[index7]();
              let j3 = i4;
              while (!branch2[j3]) j3 -= 1;
              return await render_response({
                event,
                options: options2,
                manifest: manifest2,
                state: state2,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error,
                branch: compact(branch2.slice(0, j3 + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched
              });
            }
          }
          return static_error_page(options2, status2, error.message);
        }
      } else {
        branch2.push(null);
      }
    }
    if (state2.prerendering && should_prerender_data) {
      let { data, chunks } = get_data_json(
        event,
        options2,
        branch2.map((node) => node?.server_data)
      );
      if (chunks) {
        for await (const chunk of chunks) {
          data += chunk;
        }
      }
      state2.prerendering.dependencies.set(data_pathname, {
        response: text(data),
        body: data
      });
    }
    const ssr = get_option(nodes, "ssr") ?? true;
    return await render_response({
      event,
      options: options2,
      manifest: manifest2,
      state: state2,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr
      },
      status,
      error: null,
      branch: ssr === false ? [] : compact(branch2),
      action_result,
      fetched
    });
  } catch (e2) {
    return await respond_with_error({
      event,
      options: options2,
      manifest: manifest2,
      state: state2,
      status: 500,
      error: e2,
      resolve_opts
    });
  }
}
function exec(match, params, matchers) {
  const result = {};
  const values = match.slice(1);
  const values_needing_match = values.filter((value) => value !== void 0);
  let buffered = 0;
  for (let i4 = 0; i4 < params.length; i4 += 1) {
    const param = params[i4];
    let value = values[i4 - buffered];
    if (param.chained && param.rest && buffered) {
      value = values.slice(i4 - buffered, i4 + 1).filter((s22) => s22).join("/");
      buffered = 0;
    }
    if (value === void 0) {
      if (param.rest) result[param.name] = "";
      continue;
    }
    if (!param.matcher || matchers[param.matcher](value)) {
      result[param.name] = value;
      const next_param = params[i4 + 1];
      const next_value = values[i4 + 1];
      if (next_param && !next_param.rest && next_param.optional && next_value && param.chained) {
        buffered = 0;
      }
      if (!next_param && !next_value && Object.keys(result).length === values_needing_match.length) {
        buffered = 0;
      }
      continue;
    }
    if (param.optional && param.chained) {
      buffered++;
      continue;
    }
    return;
  }
  if (buffered) return;
  return result;
}
var INVALID_COOKIE_CHARACTER_REGEX = /[\x00-\x1F\x7F()<>@,;:"/[\]?={} \t]/;
function validate_options(options2) {
  if (options2?.path === void 0) {
    throw new Error("You must specify a `path` when setting, deleting or serializing cookies");
  }
}
function get_cookies(request, url, trailing_slash) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = (0, import_cookie4.parse)(header, { decode: (value) => value });
  const normalized_url = normalize_path(url.pathname, trailing_slash);
  const new_cookies = {};
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    // The JSDoc param annotations appearing below for get, set and delete
    // are necessary to expose the `cookie` library types to
    // typescript users. `@type {import('@sveltejs/kit').Cookies}` above is not
    // sufficient to do so.
    /**
     * @param {string} name
     * @param {import('cookie').CookieParseOptions} opts
     */
    get(name, opts) {
      const c3 = new_cookies[name];
      if (c3 && domain_matches(url.hostname, c3.options.domain) && path_matches(url.pathname, c3.options.path)) {
        return c3.value;
      }
      const req_cookies = (0, import_cookie4.parse)(header, { decode: opts?.decode });
      const cookie = req_cookies[name];
      return cookie;
    },
    /**
     * @param {import('cookie').CookieParseOptions} opts
     */
    getAll(opts) {
      const cookies2 = (0, import_cookie4.parse)(header, { decode: opts?.decode });
      for (const c3 of Object.values(new_cookies)) {
        if (domain_matches(url.hostname, c3.options.domain) && path_matches(url.pathname, c3.options.path)) {
          cookies2[c3.name] = c3.value;
        }
      }
      return Object.entries(cookies2).map(([name, value]) => ({ name, value }));
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('./page/types.js').Cookie['options']} options
     */
    set(name, value, options2) {
      const illegal_characters = name.match(INVALID_COOKIE_CHARACTER_REGEX);
      if (illegal_characters) {
        console.warn(
          `The cookie name "${name}" will be invalid in SvelteKit 3.0 as it contains ${illegal_characters.join(
            " and "
          )}. See RFC 2616 for more details https://datatracker.ietf.org/doc/html/rfc2616#section-2.2`
        );
      }
      validate_options(options2);
      set_internal(name, value, { ...defaults, ...options2 });
    },
    /**
     * @param {string} name
     *  @param {import('./page/types.js').Cookie['options']} options
     */
    delete(name, options2) {
      validate_options(options2);
      cookies.set(name, "", { ...options2, maxAge: 0 });
    },
    /**
     * @param {string} name
     * @param {string} value
     *  @param {import('./page/types.js').Cookie['options']} options
     */
    serialize(name, value, options2) {
      validate_options(options2);
      let path = options2.path;
      if (!options2.domain || options2.domain === url.hostname) {
        path = resolve(normalized_url, path);
      }
      return (0, import_cookie4.serialize)(name, value, { ...defaults, ...options2, path });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {
      // cookies sent by the user agent have lowest precedence
      ...initial_cookies
    };
    for (const key2 in new_cookies) {
      const cookie = new_cookies[key2];
      if (!domain_matches(destination.hostname, cookie.options.domain)) continue;
      if (!path_matches(destination.pathname, cookie.options.path)) continue;
      const encoder22 = cookie.options.encode || encodeURIComponent;
      combined_cookies[cookie.name] = encoder22(cookie.value);
    }
    if (header2) {
      const parsed = (0, import_cookie4.parse)(header2, { decode: (value) => value });
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  function set_internal(name, value, options2) {
    let path = options2.path;
    if (!options2.domain || options2.domain === url.hostname) {
      path = resolve(normalized_url, path);
    }
    new_cookies[name] = { name, value, options: { ...options2, path } };
  }
  return { cookies, new_cookies, get_cookie_header, set_internal };
}
function domain_matches(hostname, constraint) {
  if (!constraint) return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized) return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint) return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized) return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers2, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options: options2 } = new_cookie;
    headers2.append("set-cookie", (0, import_cookie4.serialize)(name, value, options2));
    if (options2.path.endsWith(".html")) {
      const path = add_data_suffix(options2.path);
      headers2.append("set-cookie", (0, import_cookie4.serialize)(name, value, { ...options2, path }));
    }
  }
}
function create_fetch({ event, options: options2, manifest: manifest2, state: state2, get_cookie_header, set_internal }) {
  const server_fetch = async (info, init22) => {
    const original_request = normalize_fetch_input(info, init22, event.url);
    let mode = (info instanceof Request ? info.mode : init22?.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init22?.credentials) ?? "same-origin";
    return options2.hooks.handleFetch({
      event,
      request: original_request,
      fetch: async (info2, init3) => {
        const request = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init3?.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init3?.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie) request.headers.set("cookie", cookie);
          }
          return fetch(request);
        }
        const prefix = assets || base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = manifest2.assets.has(filename) || filename in manifest2._.server_assets;
        const is_asset_html = manifest2.assets.has(filename_html) || filename_html in manifest2._.server_assets;
        if (is_asset || is_asset_html) {
          const file = is_asset ? filename : filename_html;
          if (state2.read) {
            const type = is_asset ? manifest2.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(state2.read(file), {
              headers: type ? { "content-type": type } : {}
            });
          } else if (read_implementation && file in manifest2._.server_assets) {
            const length = manifest2._.server_assets[file];
            const type = manifest2.mimeTypes[file.slice(file.lastIndexOf("."))];
            return new Response(read_implementation(file), {
              headers: {
                "Content-Length": "" + length,
                "Content-Type": type
              }
            });
          }
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            /** @type {string} */
            event.request.headers.get("accept-language")
          );
        }
        const response = await respond(request, options2, manifest2, {
          ...state2,
          depth: state2.depth + 1
        });
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of set_cookie_parser.splitCookiesString(set_cookie)) {
            const { name, value, ...options3 } = set_cookie_parser.parseString(str, {
              decodeValues: false
            });
            const path = options3.path ?? (url.pathname.split("/").slice(0, -1).join("/") || "/");
            set_internal(name, value, {
              path,
              encode: (value2) => value2,
              .../** @type {import('cookie').CookieSerializeOptions} */
              options3
            });
          }
        }
        return response;
      }
    });
  };
  return (input, init22) => {
    const response = server_fetch(input, init22);
    response.catch(() => {
    });
    return response;
  };
}
function normalize_fetch_input(info, init22, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init22);
}
var body;
var etag;
var headers;
function get_public_env(request) {
  body ??= `export const env=${JSON.stringify(public_env)}`;
  etag ??= `W/${Date.now()}`;
  headers ??= new Headers({
    "content-type": "application/javascript; charset=utf-8",
    etag
  });
  if (request.headers.get("if-none-match") === etag) {
    return new Response(void 0, { status: 304, headers });
  }
  return new Response(body, { headers });
}
function get_page_config(nodes) {
  let current = {};
  for (const node of nodes) {
    if (!node?.universal?.config && !node?.server?.config) continue;
    current = {
      ...current,
      ...node?.universal?.config,
      ...node?.server?.config
    };
  }
  return Object.keys(current).length ? current : void 0;
}
var default_transform = ({ html: html2 }) => html2;
var default_filter = () => false;
var default_preload = ({ type }) => type === "js" || type === "css";
var page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "POST"]);
var allowed_page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "OPTIONS"]);
async function respond(request, options2, manifest2, state2) {
  const url = new URL(request.url);
  if (options2.csrf_check_origin) {
    const forbidden = is_form_content_type(request) && (request.method === "POST" || request.method === "PUT" || request.method === "PATCH" || request.method === "DELETE") && request.headers.get("origin") !== url.origin;
    if (forbidden) {
      const csrf_error = new HttpError(
        403,
        `Cross-site ${request.method} form submissions are forbidden`
      );
      if (request.headers.get("accept") === "application/json") {
        return json(csrf_error.body, { status: csrf_error.status });
      }
      return text(csrf_error.body.message, { status: csrf_error.status });
    }
  }
  if (options2.hash_routing && url.pathname !== base + "/" && url.pathname !== "/[fallback]") {
    return text("Not found", { status: 404 });
  }
  let rerouted_path;
  try {
    rerouted_path = options2.hooks.reroute({ url: new URL(url) }) ?? url.pathname;
  } catch {
    return text("Internal Server Error", {
      status: 500
    });
  }
  let decoded;
  try {
    decoded = decode_pathname(rerouted_path);
  } catch {
    return text("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (base && !state2.prerendering?.fallback) {
    if (!decoded.startsWith(base)) {
      return text("Not found", { status: 404 });
    }
    decoded = decoded.slice(base.length) || "/";
  }
  if (decoded === `/${options2.app_dir}/env.js`) {
    return get_public_env(request);
  }
  if (decoded.startsWith(`/${options2.app_dir}`)) {
    const headers22 = new Headers();
    headers22.set("cache-control", "public, max-age=0, must-revalidate");
    return text("Not found", { status: 404, headers: headers22 });
  }
  const is_data_request = has_data_suffix(decoded);
  let invalidated_data_nodes;
  if (is_data_request) {
    decoded = strip_data_suffix(decoded) || "/";
    url.pathname = strip_data_suffix(url.pathname) + (url.searchParams.get(TRAILING_SLASH_PARAM) === "1" ? "/" : "") || "/";
    url.searchParams.delete(TRAILING_SLASH_PARAM);
    invalidated_data_nodes = url.searchParams.get(INVALIDATED_PARAM)?.split("").map((node) => node === "1");
    url.searchParams.delete(INVALIDATED_PARAM);
  }
  if (!state2.prerendering?.fallback) {
    const matchers = await manifest2._.matchers();
    for (const candidate of manifest2._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match) continue;
      const matched = exec(match, candidate.params, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  let trailing_slash = void 0;
  const headers2 = {};
  let cookies_to_add = {};
  const event = {
    // @ts-expect-error `cookies` and `fetch` need to be created after the `event` itself
    cookies: null,
    // @ts-expect-error
    fetch: null,
    getClientAddress: state2.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-cloudflare-workers"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state2.platform,
    request,
    route: { id: route?.id ?? null },
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            "Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies"
          );
        } else if (lower in headers2) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers2[lower] = value;
          if (state2.prerendering && lower === "cache-control") {
            state2.prerendering.cache = /** @type {string} */
            value;
          }
        }
      }
    },
    url,
    isDataRequest: is_data_request,
    isSubRequest: state2.depth > 0
  };
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  try {
    if (route) {
      if (url.pathname === base || url.pathname === base + "/") {
        trailing_slash = "always";
      } else if (route.page) {
        const nodes = await load_page_nodes(route.page, manifest2);
        if (BROWSER) ;
        trailing_slash = get_option(nodes, "trailingSlash");
      } else if (route.endpoint) {
        const node = await route.endpoint();
        trailing_slash = node.trailingSlash;
        if (BROWSER) ;
      }
      if (!is_data_request) {
        const normalized = normalize_path(url.pathname, trailing_slash ?? "never");
        if (normalized !== url.pathname && !state2.prerendering?.fallback) {
          return new Response(void 0, {
            status: 308,
            headers: {
              "x-sveltekit-normalize": "1",
              location: (
                // ensure paths starting with '//' are not treated as protocol-relative
                (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
              )
            }
          });
        }
      }
      if (state2.before_handle || state2.emulator?.platform) {
        let config = {};
        let prerender = false;
        if (route.endpoint) {
          const node = await route.endpoint();
          config = node.config ?? config;
          prerender = node.prerender ?? prerender;
        } else if (route.page) {
          const nodes = await load_page_nodes(route.page, manifest2);
          config = get_page_config(nodes) ?? config;
          prerender = get_option(nodes, "prerender") ?? false;
        }
        if (state2.before_handle) {
          state2.before_handle(event, config, prerender);
        }
        if (state2.emulator?.platform) {
          event.platform = await state2.emulator.platform({ config, prerender });
        }
      }
    } else if (state2.emulator?.platform) {
      event.platform = await state2.emulator.platform({
        config: {},
        prerender: !!state2.prerendering?.fallback
      });
    }
    const { cookies, new_cookies, get_cookie_header, set_internal } = get_cookies(
      request,
      url,
      trailing_slash ?? "never"
    );
    cookies_to_add = new_cookies;
    event.cookies = cookies;
    event.fetch = create_fetch({
      event,
      options: options2,
      manifest: manifest2,
      state: state2,
      get_cookie_header,
      set_internal
    });
    if (state2.prerendering && !state2.prerendering.fallback) disable_search(url);
    const response = await options2.hooks.handle({
      event,
      resolve: (event2, opts) => resolve2(event2, opts).then((response2) => {
        for (const key2 in headers2) {
          const value = headers2[key2];
          response2.headers.set(
            key2,
            /** @type {string} */
            value
          );
        }
        add_cookies_to_headers(response2.headers, Object.values(cookies_to_add));
        if (state2.prerendering && event2.route.id !== null) {
          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
        }
        return response2;
      })
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value?.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag2 = (
        /** @type {string} */
        response.headers.get("etag")
      );
      if (if_none_match_value === etag2) {
        const headers22 = new Headers({ etag: etag2 });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value) headers22.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers22
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location = response.headers.get("location");
      if (location) {
        return redirect_json_response(new Redirect(
          /** @type {any} */
          response.status,
          location
        ));
      }
    }
    return response;
  } catch (e2) {
    if (e2 instanceof Redirect) {
      const response = is_data_request ? redirect_json_response(e2) : route?.page && is_action_json_request(event) ? action_json_redirect(e2) : redirect_response(e2.status, e2.location);
      add_cookies_to_headers(response.headers, Object.values(cookies_to_add));
      return response;
    }
    return await handle_fatal_error(event, options2, e2);
  }
  async function resolve2(event2, opts) {
    try {
      if (opts) {
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if (options2.hash_routing || state2.prerendering?.fallback) {
        return await render_response({
          event: event2,
          options: options2,
          manifest: manifest2,
          state: state2,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts
        });
      }
      if (route) {
        const method = (
          /** @type {import('types').HttpMethod} */
          event2.request.method
        );
        let response;
        if (is_data_request) {
          response = await render_data(
            event2,
            route,
            options2,
            manifest2,
            state2,
            invalidated_data_nodes,
            trailing_slash ?? "never"
          );
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state2);
        } else if (route.page) {
          if (page_methods.has(method)) {
            response = await render_page(event2, route.page, options2, manifest2, state2, resolve_opts);
          } else {
            const allowed_methods2 = new Set(allowed_page_methods);
            const node = await manifest2._.nodes[route.page.leaf]();
            if (node?.server?.actions) {
              allowed_methods2.add("POST");
            }
            if (method === "OPTIONS") {
              response = new Response(null, {
                status: 204,
                headers: {
                  allow: Array.from(allowed_methods2.values()).join(", ")
                }
              });
            } else {
              const mod = [...allowed_methods2].reduce(
                (acc, curr) => {
                  acc[curr] = true;
                  return acc;
                },
                /** @type {Record<string, any>} */
                {}
              );
              response = method_not_allowed(mod, method);
            }
          }
        } else {
          throw new Error("This should never happen");
        }
        if (request.method === "GET" && route.page && route.endpoint) {
          const vary = response.headers.get("vary")?.split(",")?.map((v2) => v2.trim().toLowerCase());
          if (!(vary?.includes("accept") || vary?.includes("*"))) {
            response = new Response(response.body, {
              status: response.status,
              statusText: response.statusText,
              headers: new Headers(response.headers)
            });
            response.headers.append("Vary", "Accept");
          }
        }
        return response;
      }
      if (state2.error && event2.isSubRequest) {
        return await fetch(request, {
          headers: {
            "x-sveltekit-error": "true"
          }
        });
      }
      if (state2.error) {
        return text("Internal Server Error", {
          status: 500
        });
      }
      if (state2.depth === 0) {
        return await respond_with_error({
          event: event2,
          options: options2,
          manifest: manifest2,
          state: state2,
          status: 404,
          error: new SvelteKitError(404, "Not Found", `Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state2.prerendering) {
        return text("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e2) {
      return await handle_fatal_error(event2, options2, e2);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
}
function filter_private_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k3]) => k3.startsWith(private_prefix) && (public_prefix === "" || !k3.startsWith(public_prefix))
    )
  );
}
function filter_public_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k3]) => k3.startsWith(public_prefix) && (private_prefix === "" || !k3.startsWith(private_prefix))
    )
  );
}
var prerender_env_handler = {
  get({ type }, prop) {
    throw new Error(
      `Cannot read values from $env/dynamic/${type} while prerendering (attempted to read env.${prop.toString()}). Use $env/static/${type} instead`
    );
  }
};
var init_promise;
var Server = class {
  /** @type {import('types').SSROptions} */
  #options;
  /** @type {import('@sveltejs/kit').SSRManifest} */
  #manifest;
  /** @param {import('@sveltejs/kit').SSRManifest} manifest */
  constructor(manifest2) {
    this.#options = options;
    this.#manifest = manifest2;
  }
  /**
   * @param {{
   *   env: Record<string, string>;
   *   read?: (file: string) => ReadableStream;
   * }} opts
   */
  async init({ env, read }) {
    const prefixes = {
      public_prefix: this.#options.env_public_prefix,
      private_prefix: this.#options.env_private_prefix
    };
    const private_env2 = filter_private_env(env, prefixes);
    const public_env2 = filter_public_env(env, prefixes);
    set_private_env(
      prerendering ? new Proxy({ type: "private" }, prerender_env_handler) : private_env2
    );
    set_public_env(
      prerendering ? new Proxy({ type: "public" }, prerender_env_handler) : public_env2
    );
    set_safe_public_env(public_env2);
    if (read) {
      set_read_implementation(read);
    }
    await (init_promise ??= (async () => {
      try {
        const module = await get_hooks();
        this.#options.hooks = {
          handle: module.handle || (({ event, resolve: resolve2 }) => resolve2(event)),
          handleError: module.handleError || (({ error }) => console.error(error)),
          handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request)),
          reroute: module.reroute || (() => {
          }),
          transport: module.transport || {}
        };
        if (module.init) {
          await module.init();
        }
      } catch (error) {
        {
          throw error;
        }
      }
    })());
  }
  /**
   * @param {Request} request
   * @param {import('types').RequestOptions} options
   */
  async respond(request, options2) {
    return respond(request, this.#options, this.#manifest, {
      ...options2,
      error: false,
      depth: 0
    });
  }
};

// .svelte-kit/cloudflare-workers-tmp/manifest.js
var manifest = (() => {
  function __memo(fn) {
    let value;
    return () => value ??= value = fn();
  }
  return {
    appDir: "_app",
    appPath: "_app",
    assets: /* @__PURE__ */ new Set(["favicon.png"]),
    mimeTypes: { ".png": "image/png" },
    _: {
      client: { "start": "_app/immutable/entry/start.BOR5BaGt.js", "app": "_app/immutable/entry/app.BdomPilN.js", "imports": ["_app/immutable/entry/start.BOR5BaGt.js", "_app/immutable/chunks/entry.CoKXvAX5.js", "_app/immutable/chunks/runtime.LudGJxdc.js", "_app/immutable/chunks/index-client.CxrIQvte.js", "_app/immutable/entry/app.BdomPilN.js", "_app/immutable/chunks/runtime.LudGJxdc.js", "_app/immutable/chunks/render.C7k9bFqu.js", "_app/immutable/chunks/events.trWGf5Py.js", "_app/immutable/chunks/disclose-version.CH9wrBnq.js", "_app/immutable/chunks/if.BA9yuqff.js", "_app/immutable/chunks/5.K0CWFs3U.js", "_app/immutable/chunks/store.CjcfF6Pi.js", "_app/immutable/chunks/index-client.CxrIQvte.js"], "stylesheets": [], "fonts": [], "uses_env_dynamic_public": false },
      nodes: [
        __memo(() => Promise.resolve().then(() => (init__(), __exports))),
        __memo(() => Promise.resolve().then(() => (init__2(), __exports2))),
        __memo(() => Promise.resolve().then(() => (init__3(), __exports3))),
        __memo(() => Promise.resolve().then(() => (init__4(), __exports4))),
        __memo(() => Promise.resolve().then(() => (init__5(), __exports5))),
        __memo(() => Promise.resolve().then(() => (init__6(), __exports6)))
      ],
      routes: [
        {
          id: "/",
          pattern: /^\/$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 2 },
          endpoint: null
        },
        {
          id: "/admin",
          pattern: /^\/admin\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 3 },
          endpoint: null
        },
        {
          id: "/dashboard",
          pattern: /^\/dashboard\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 4 },
          endpoint: null
        },
        {
          id: "/signin",
          pattern: /^\/signin\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 5 },
          endpoint: null
        }
      ],
      matchers: async () => {
        return {};
      },
      server_assets: {}
    }
  };
})();
var prerendered = /* @__PURE__ */ new Map([]);
var base_path = "";

// .svelte-kit/cloudflare-workers-tmp/entry.js
var import_kv_asset_handler = __toESM(require_dist());
import static_asset_manifest_json from "__STATIC_CONTENT_MANIFEST";
var static_asset_manifest = JSON.parse(static_asset_manifest_json);
var server = new Server(manifest);
var app_path = `/${manifest.appPath}`;
var immutable = `${app_path}/immutable/`;
var version_file = `${app_path}/version.json`;
var entry_default = {
  /**
   * @param {Request} req
   * @param {any} env
   * @param {any} context
   */
  async fetch(req, env, context2) {
    await server.init({ env });
    const url = new URL(req.url);
    if (url.pathname.startsWith(app_path)) {
      const res = await get_asset_from_kv(req, env, context2);
      if (is_error(res.status)) return res;
      const cache_control = url.pathname.startsWith(immutable) ? "public, immutable, max-age=31536000" : "no-cache";
      return new Response(res.body, {
        headers: {
          // include original headers, minus cache-control which
          // is overridden, and etag which is no longer useful
          "cache-control": cache_control,
          "content-type": res.headers.get("content-type"),
          "x-robots-tag": "noindex"
        }
      });
    }
    let { pathname, search } = url;
    try {
      pathname = decodeURIComponent(pathname);
    } catch {
    }
    const stripped_pathname = pathname.replace(/\/$/, "");
    let is_static_asset = false;
    const filename = stripped_pathname.slice(base_path.length + 1);
    if (filename) {
      is_static_asset = manifest.assets.has(filename) || manifest.assets.has(filename + "/index.html") || filename in manifest._.server_assets || filename + "/index.html" in manifest._.server_assets;
    }
    let location = pathname.at(-1) === "/" ? stripped_pathname : pathname + "/";
    if (is_static_asset || prerendered.has(pathname) || pathname === version_file || pathname.startsWith(immutable)) {
      return get_asset_from_kv(req, env, context2, (request, options2) => {
        if (prerendered.has(pathname)) {
          url.pathname = "/" + prerendered.get(pathname).file;
          return new Request(url.toString(), request);
        }
        return (0, import_kv_asset_handler.mapRequestToAsset)(request, options2);
      });
    } else if (location && prerendered.has(location)) {
      if (search) location += search;
      return new Response("", {
        status: 308,
        headers: {
          location
        }
      });
    }
    return await server.respond(req, {
      platform: {
        env,
        context: context2,
        // @ts-expect-error lib.dom is interfering with workers-types
        caches,
        // @ts-expect-error req is actually a Cloudflare request not a standard request
        cf: req.cf
      },
      getClientAddress() {
        return req.headers.get("cf-connecting-ip");
      }
    });
  }
};
async function get_asset_from_kv(req, env, context2, map = import_kv_asset_handler.mapRequestToAsset) {
  return await (0, import_kv_asset_handler.getAssetFromKV)(
    {
      request: req,
      waitUntil(promise) {
        return context2.waitUntil(promise);
      }
    },
    {
      ASSET_NAMESPACE: env.__STATIC_CONTENT,
      ASSET_MANIFEST: static_asset_manifest,
      mapRequestToAsset: map
    }
  );
}
function is_error(status) {
  return status > 399;
}
export {
  entry_default as default
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

@auth/core/lib/vendored/cookie.js:
  (**
   * @source https://github.com/jshttp/cookie
   * @author blakeembrey
   * @license MIT
   *)
*/
//# sourceMappingURL=worker.js.map
