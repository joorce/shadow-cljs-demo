goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__7718__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7718 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7722__i = 0, G__7722__a = new Array(arguments.length -  0);
while (G__7722__i < G__7722__a.length) {G__7722__a[G__7722__i] = arguments[G__7722__i + 0]; ++G__7722__i;}
  args = new cljs.core.IndexedSeq(G__7722__a,0,null);
} 
return G__7718__delegate.call(this,args);};
G__7718.cljs$lang$maxFixedArity = 0;
G__7718.cljs$lang$applyTo = (function (arglist__7723){
var args = cljs.core.seq(arglist__7723);
return G__7718__delegate(args);
});
G__7718.cljs$core$IFn$_invoke$arity$variadic = G__7718__delegate;
return G__7718;
})()
);

(o.error = (function() { 
var G__7724__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7724 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7725__i = 0, G__7725__a = new Array(arguments.length -  0);
while (G__7725__i < G__7725__a.length) {G__7725__a[G__7725__i] = arguments[G__7725__i + 0]; ++G__7725__i;}
  args = new cljs.core.IndexedSeq(G__7725__a,0,null);
} 
return G__7724__delegate.call(this,args);};
G__7724.cljs$lang$maxFixedArity = 0;
G__7724.cljs$lang$applyTo = (function (arglist__7726){
var args = cljs.core.seq(arglist__7726);
return G__7724__delegate(args);
});
G__7724.cljs$core$IFn$_invoke$arity$variadic = G__7724__delegate;
return G__7724;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
