goog.provide('main');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
main.main_component = (function main$main_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"This is a component"], null)], null);
});
main.mount = (function main$mount(c){
var G__12398 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null);
var G__12399 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__12398,G__12399) : reagent.core.render_component.call(null,G__12398,G__12399));
});
main.reload_BANG_ = (function main$reload_BANG_(){
main.mount(main.main_component);

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hello reload!"], 0));
});
main.main_BANG_ = (function main$main_BANG_(){
main.mount(main.main_component);

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hello Main"], 0));
});

//# sourceMappingURL=main.js.map
