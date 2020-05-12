goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__10440 = arguments.length;
switch (G__10440) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10441 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10441 = (function (f,blockable,meta10442){
this.f = f;
this.blockable = blockable;
this.meta10442 = meta10442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10443,meta10442__$1){
var self__ = this;
var _10443__$1 = this;
return (new cljs.core.async.t_cljs$core$async10441(self__.f,self__.blockable,meta10442__$1));
}));

(cljs.core.async.t_cljs$core$async10441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10443){
var self__ = this;
var _10443__$1 = this;
return self__.meta10442;
}));

(cljs.core.async.t_cljs$core$async10441.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10441.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10441.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async10441.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async10441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10442","meta10442",-571405307,null)], null);
}));

(cljs.core.async.t_cljs$core$async10441.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10441");

(cljs.core.async.t_cljs$core$async10441.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10441");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10441.
 */
cljs.core.async.__GT_t_cljs$core$async10441 = (function cljs$core$async$__GT_t_cljs$core$async10441(f__$1,blockable__$1,meta10442){
return (new cljs.core.async.t_cljs$core$async10441(f__$1,blockable__$1,meta10442));
});

}

return (new cljs.core.async.t_cljs$core$async10441(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__10464 = arguments.length;
switch (G__10464) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__10469 = arguments.length;
switch (G__10469) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__10474 = arguments.length;
switch (G__10474) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_12413 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12413) : fn1.call(null,val_12413));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12413) : fn1.call(null,val_12413));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__10491 = arguments.length;
switch (G__10491) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___12415 = n;
var x_12416 = (0);
while(true){
if((x_12416 < n__4613__auto___12415)){
(a[x_12416] = x_12416);

var G__12445 = (x_12416 + (1));
x_12416 = G__12445;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10516 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10516 = (function (flag,meta10517){
this.flag = flag;
this.meta10517 = meta10517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10518,meta10517__$1){
var self__ = this;
var _10518__$1 = this;
return (new cljs.core.async.t_cljs$core$async10516(self__.flag,meta10517__$1));
}));

(cljs.core.async.t_cljs$core$async10516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10518){
var self__ = this;
var _10518__$1 = this;
return self__.meta10517;
}));

(cljs.core.async.t_cljs$core$async10516.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10516.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async10516.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10516.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async10516.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10517","meta10517",-1647795557,null)], null);
}));

(cljs.core.async.t_cljs$core$async10516.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10516");

(cljs.core.async.t_cljs$core$async10516.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10516");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10516.
 */
cljs.core.async.__GT_t_cljs$core$async10516 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10516(flag__$1,meta10517){
return (new cljs.core.async.t_cljs$core$async10516(flag__$1,meta10517));
});

}

return (new cljs.core.async.t_cljs$core$async10516(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10524 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10524 = (function (flag,cb,meta10525){
this.flag = flag;
this.cb = cb;
this.meta10525 = meta10525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10526,meta10525__$1){
var self__ = this;
var _10526__$1 = this;
return (new cljs.core.async.t_cljs$core$async10524(self__.flag,self__.cb,meta10525__$1));
}));

(cljs.core.async.t_cljs$core$async10524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10526){
var self__ = this;
var _10526__$1 = this;
return self__.meta10525;
}));

(cljs.core.async.t_cljs$core$async10524.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10524.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async10524.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10524.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async10524.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10525","meta10525",-1407840234,null)], null);
}));

(cljs.core.async.t_cljs$core$async10524.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10524");

(cljs.core.async.t_cljs$core$async10524.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10524");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10524.
 */
cljs.core.async.__GT_t_cljs$core$async10524 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10524(flag__$1,cb__$1,meta10525){
return (new cljs.core.async.t_cljs$core$async10524(flag__$1,cb__$1,meta10525));
});

}

return (new cljs.core.async.t_cljs$core$async10524(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10534_SHARP_){
var G__10541 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10534_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10541) : fret.call(null,G__10541));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10536_SHARP_){
var G__10542 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10536_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10542) : fret.call(null,G__10542));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12459 = (i + (1));
i = G__12459;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___12463 = arguments.length;
var i__4737__auto___12465 = (0);
while(true){
if((i__4737__auto___12465 < len__4736__auto___12463)){
args__4742__auto__.push((arguments[i__4737__auto___12465]));

var G__12466 = (i__4737__auto___12465 + (1));
i__4737__auto___12465 = G__12466;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10551){
var map__10553 = p__10551;
var map__10553__$1 = (((((!((map__10553 == null))))?(((((map__10553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10553):map__10553);
var opts = map__10553__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10546){
var G__10547 = cljs.core.first(seq10546);
var seq10546__$1 = cljs.core.next(seq10546);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10547,seq10546__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__10567 = arguments.length;
switch (G__10567) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10375__auto___12474 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10376__auto__ = (function (){var switch__10242__auto__ = (function (state_10608){
var state_val_10609 = (state_10608[(1)]);
if((state_val_10609 === (7))){
var inst_10603 = (state_10608[(2)]);
var state_10608__$1 = state_10608;
var statearr_10612_12480 = state_10608__$1;
(statearr_10612_12480[(2)] = inst_10603);

(statearr_10612_12480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10609 === (1))){
var state_10608__$1 = state_10608;
var statearr_10613_12481 = state_10608__$1;
(statearr_10613_12481[(2)] = null);

(statearr_10613_12481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10609 === (4))){
var inst_10584 = (state_10608[(7)]);
var inst_10584__$1 = (state_10608[(2)]);
var inst_10585 = (inst_10584__$1 == null);
var state_10608__$1 = (function (){var statearr_10618 = state_10608;
(statearr_10618[(7)] = inst_10584__$1);

return statearr_10618;
})();
if(cljs.core.truth_(inst_10585)){
var statearr_10619_12485 = state_10608__$1;
(statearr_10619_12485[(1)] = (5));

} else {
var statearr_10620_12486 = state_10608__$1;
(statearr_10620_12486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10609 === (13))){
var state_10608__$1 = state_10608;
var statearr_10621_12490 = state_10608__$1;
(statearr_10621_12490[(2)] = null);

(statearr_10621_12490[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10609 === (6))){
var inst_10584 = (state_10608[(7)]);
var state_10608__$1 = state_10608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10608__$1,(11),to,inst_10584);
} else {
if((state_val_10609 === (3))){
var inst_10606 = (state_10608[(2)]);
var state_10608__$1 = state_10608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10608__$1,inst_10606);
} else {
if((state_val_10609 === (12))){
var state_10608__$1 = state_10608;
var statearr_10626_12494 = state_10608__$1;
(statearr_10626_12494[(2)] = null);

(statearr_10626_12494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10609 === (2))){
var state_10608__$1 = state_10608;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10608__$1,(4),from);
} else {
if((state_val_10609 === (11))){
var inst_10596 = (state_10608[(2)]);
var state_10608__$1 = state_10608;
if(cljs.core.truth_(inst_10596)){
var statearr_10627_12495 = state_10608__$1;
(statearr_10627_12495[(1)] = (12));

} else {
var statearr_10630_12496 = state_10608__$1;
(statearr_10630_12496[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10609 === (9))){
var state_10608__$1 = state_10608;
var statearr_10632_12497 = state_10608__$1;
(statearr_10632_12497[(2)] = null);

(statearr_10632_12497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10609 === (5))){
var state_10608__$1 = state_10608;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10633_12498 = state_10608__$1;
(statearr_10633_12498[(1)] = (8));

} else {
var statearr_10634_12502 = state_10608__$1;
(statearr_10634_12502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10609 === (14))){
var inst_10601 = (state_10608[(2)]);
var state_10608__$1 = state_10608;
var statearr_10635_12506 = state_10608__$1;
(statearr_10635_12506[(2)] = inst_10601);

(statearr_10635_12506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10609 === (10))){
var inst_10593 = (state_10608[(2)]);
var state_10608__$1 = state_10608;
var statearr_10636_12510 = state_10608__$1;
(statearr_10636_12510[(2)] = inst_10593);

(statearr_10636_12510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10609 === (8))){
var inst_10590 = cljs.core.async.close_BANG_(to);
var state_10608__$1 = state_10608;
var statearr_10637_12511 = state_10608__$1;
(statearr_10637_12511[(2)] = inst_10590);

(statearr_10637_12511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10243__auto__ = null;
var cljs$core$async$state_machine__10243__auto____0 = (function (){
var statearr_10638 = [null,null,null,null,null,null,null,null];
(statearr_10638[(0)] = cljs$core$async$state_machine__10243__auto__);

(statearr_10638[(1)] = (1));

return statearr_10638;
});
var cljs$core$async$state_machine__10243__auto____1 = (function (state_10608){
while(true){
var ret_value__10244__auto__ = (function (){try{while(true){
var result__10245__auto__ = switch__10242__auto__(state_10608);
if(cljs.core.keyword_identical_QMARK_(result__10245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10245__auto__;
}
break;
}
}catch (e10639){var ex__10246__auto__ = e10639;
var statearr_10640_12512 = state_10608;
(statearr_10640_12512[(2)] = ex__10246__auto__);


if(cljs.core.seq((state_10608[(4)]))){
var statearr_10641_12513 = state_10608;
(statearr_10641_12513[(1)] = cljs.core.first((state_10608[(4)])));

} else {
throw ex__10246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12514 = state_10608;
state_10608 = G__12514;
continue;
} else {
return ret_value__10244__auto__;
}
break;
}
});
cljs$core$async$state_machine__10243__auto__ = function(state_10608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10243__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10243__auto____1.call(this,state_10608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10243__auto____0;
cljs$core$async$state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10243__auto____1;
return cljs$core$async$state_machine__10243__auto__;
})()
})();
var state__10377__auto__ = (function (){var statearr_10642 = f__10376__auto__();
(statearr_10642[(6)] = c__10375__auto___12474);

return statearr_10642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10377__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__10644){
var vec__10645 = p__10644;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10645,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10645,(1),null);
var job = vec__10645;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10375__auto___12515 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10376__auto__ = (function (){var switch__10242__auto__ = (function (state_10652){
var state_val_10653 = (state_10652[(1)]);
if((state_val_10653 === (1))){
var state_10652__$1 = state_10652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10652__$1,(2),res,v);
} else {
if((state_val_10653 === (2))){
var inst_10649 = (state_10652[(2)]);
var inst_10650 = cljs.core.async.close_BANG_(res);
var state_10652__$1 = (function (){var statearr_10657 = state_10652;
(statearr_10657[(7)] = inst_10649);

return statearr_10657;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10652__$1,inst_10650);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____0 = (function (){
var statearr_10658 = [null,null,null,null,null,null,null,null];
(statearr_10658[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__);

(statearr_10658[(1)] = (1));

return statearr_10658;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____1 = (function (state_10652){
while(true){
var ret_value__10244__auto__ = (function (){try{while(true){
var result__10245__auto__ = switch__10242__auto__(state_10652);
if(cljs.core.keyword_identical_QMARK_(result__10245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10245__auto__;
}
break;
}
}catch (e10659){var ex__10246__auto__ = e10659;
var statearr_10660_12516 = state_10652;
(statearr_10660_12516[(2)] = ex__10246__auto__);


if(cljs.core.seq((state_10652[(4)]))){
var statearr_10661_12517 = state_10652;
(statearr_10661_12517[(1)] = cljs.core.first((state_10652[(4)])));

} else {
throw ex__10246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12518 = state_10652;
state_10652 = G__12518;
continue;
} else {
return ret_value__10244__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__ = function(state_10652){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____1.call(this,state_10652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__;
})()
})();
var state__10377__auto__ = (function (){var statearr_10662 = f__10376__auto__();
(statearr_10662[(6)] = c__10375__auto___12515);

return statearr_10662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10377__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__10663){
var vec__10664 = p__10663;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10664,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10664,(1),null);
var job = vec__10664;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___12519 = n;
var __12520 = (0);
while(true){
if((__12520 < n__4613__auto___12519)){
var G__10667_12521 = type;
var G__10667_12522__$1 = (((G__10667_12521 instanceof cljs.core.Keyword))?G__10667_12521.fqn:null);
switch (G__10667_12522__$1) {
case "compute":
var c__10375__auto___12524 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12520,c__10375__auto___12524,G__10667_12521,G__10667_12522__$1,n__4613__auto___12519,jobs,results,process,async){
return (function (){
var f__10376__auto__ = (function (){var switch__10242__auto__ = ((function (__12520,c__10375__auto___12524,G__10667_12521,G__10667_12522__$1,n__4613__auto___12519,jobs,results,process,async){
return (function (state_10680){
var state_val_10681 = (state_10680[(1)]);
if((state_val_10681 === (1))){
var state_10680__$1 = state_10680;
var statearr_10682_12525 = state_10680__$1;
(statearr_10682_12525[(2)] = null);

(statearr_10682_12525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10681 === (2))){
var state_10680__$1 = state_10680;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10680__$1,(4),jobs);
} else {
if((state_val_10681 === (3))){
var inst_10678 = (state_10680[(2)]);
var state_10680__$1 = state_10680;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10680__$1,inst_10678);
} else {
if((state_val_10681 === (4))){
var inst_10670 = (state_10680[(2)]);
var inst_10671 = process(inst_10670);
var state_10680__$1 = state_10680;
if(cljs.core.truth_(inst_10671)){
var statearr_10683_12526 = state_10680__$1;
(statearr_10683_12526[(1)] = (5));

} else {
var statearr_10684_12527 = state_10680__$1;
(statearr_10684_12527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10681 === (5))){
var state_10680__$1 = state_10680;
var statearr_10685_12528 = state_10680__$1;
(statearr_10685_12528[(2)] = null);

(statearr_10685_12528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10681 === (6))){
var state_10680__$1 = state_10680;
var statearr_10686_12529 = state_10680__$1;
(statearr_10686_12529[(2)] = null);

(statearr_10686_12529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10681 === (7))){
var inst_10676 = (state_10680[(2)]);
var state_10680__$1 = state_10680;
var statearr_10689_12530 = state_10680__$1;
(statearr_10689_12530[(2)] = inst_10676);

(statearr_10689_12530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__12520,c__10375__auto___12524,G__10667_12521,G__10667_12522__$1,n__4613__auto___12519,jobs,results,process,async))
;
return ((function (__12520,switch__10242__auto__,c__10375__auto___12524,G__10667_12521,G__10667_12522__$1,n__4613__auto___12519,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____0 = (function (){
var statearr_10690 = [null,null,null,null,null,null,null];
(statearr_10690[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__);

(statearr_10690[(1)] = (1));

return statearr_10690;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____1 = (function (state_10680){
while(true){
var ret_value__10244__auto__ = (function (){try{while(true){
var result__10245__auto__ = switch__10242__auto__(state_10680);
if(cljs.core.keyword_identical_QMARK_(result__10245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10245__auto__;
}
break;
}
}catch (e10691){var ex__10246__auto__ = e10691;
var statearr_10694_12531 = state_10680;
(statearr_10694_12531[(2)] = ex__10246__auto__);


if(cljs.core.seq((state_10680[(4)]))){
var statearr_10697_12532 = state_10680;
(statearr_10697_12532[(1)] = cljs.core.first((state_10680[(4)])));

} else {
throw ex__10246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12533 = state_10680;
state_10680 = G__12533;
continue;
} else {
return ret_value__10244__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__ = function(state_10680){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____1.call(this,state_10680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__;
})()
;})(__12520,switch__10242__auto__,c__10375__auto___12524,G__10667_12521,G__10667_12522__$1,n__4613__auto___12519,jobs,results,process,async))
})();
var state__10377__auto__ = (function (){var statearr_10698 = f__10376__auto__();
(statearr_10698[(6)] = c__10375__auto___12524);

return statearr_10698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10377__auto__);
});})(__12520,c__10375__auto___12524,G__10667_12521,G__10667_12522__$1,n__4613__auto___12519,jobs,results,process,async))
);


break;
case "async":
var c__10375__auto___12534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12520,c__10375__auto___12534,G__10667_12521,G__10667_12522__$1,n__4613__auto___12519,jobs,results,process,async){
return (function (){
var f__10376__auto__ = (function (){var switch__10242__auto__ = ((function (__12520,c__10375__auto___12534,G__10667_12521,G__10667_12522__$1,n__4613__auto___12519,jobs,results,process,async){
return (function (state_10711){
var state_val_10712 = (state_10711[(1)]);
if((state_val_10712 === (1))){
var state_10711__$1 = state_10711;
var statearr_10713_12535 = state_10711__$1;
(statearr_10713_12535[(2)] = null);

(statearr_10713_12535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10712 === (2))){
var state_10711__$1 = state_10711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10711__$1,(4),jobs);
} else {
if((state_val_10712 === (3))){
var inst_10709 = (state_10711[(2)]);
var state_10711__$1 = state_10711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10711__$1,inst_10709);
} else {
if((state_val_10712 === (4))){
var inst_10701 = (state_10711[(2)]);
var inst_10702 = async(inst_10701);
var state_10711__$1 = state_10711;
if(cljs.core.truth_(inst_10702)){
var statearr_10714_12536 = state_10711__$1;
(statearr_10714_12536[(1)] = (5));

} else {
var statearr_10715_12537 = state_10711__$1;
(statearr_10715_12537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10712 === (5))){
var state_10711__$1 = state_10711;
var statearr_10717_12538 = state_10711__$1;
(statearr_10717_12538[(2)] = null);

(statearr_10717_12538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10712 === (6))){
var state_10711__$1 = state_10711;
var statearr_10718_12539 = state_10711__$1;
(statearr_10718_12539[(2)] = null);

(statearr_10718_12539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10712 === (7))){
var inst_10707 = (state_10711[(2)]);
var state_10711__$1 = state_10711;
var statearr_10719_12540 = state_10711__$1;
(statearr_10719_12540[(2)] = inst_10707);

(statearr_10719_12540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__12520,c__10375__auto___12534,G__10667_12521,G__10667_12522__$1,n__4613__auto___12519,jobs,results,process,async))
;
return ((function (__12520,switch__10242__auto__,c__10375__auto___12534,G__10667_12521,G__10667_12522__$1,n__4613__auto___12519,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____0 = (function (){
var statearr_10723 = [null,null,null,null,null,null,null];
(statearr_10723[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__);

(statearr_10723[(1)] = (1));

return statearr_10723;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____1 = (function (state_10711){
while(true){
var ret_value__10244__auto__ = (function (){try{while(true){
var result__10245__auto__ = switch__10242__auto__(state_10711);
if(cljs.core.keyword_identical_QMARK_(result__10245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10245__auto__;
}
break;
}
}catch (e10724){var ex__10246__auto__ = e10724;
var statearr_10725_12541 = state_10711;
(statearr_10725_12541[(2)] = ex__10246__auto__);


if(cljs.core.seq((state_10711[(4)]))){
var statearr_10726_12542 = state_10711;
(statearr_10726_12542[(1)] = cljs.core.first((state_10711[(4)])));

} else {
throw ex__10246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12543 = state_10711;
state_10711 = G__12543;
continue;
} else {
return ret_value__10244__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__ = function(state_10711){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____1.call(this,state_10711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__;
})()
;})(__12520,switch__10242__auto__,c__10375__auto___12534,G__10667_12521,G__10667_12522__$1,n__4613__auto___12519,jobs,results,process,async))
})();
var state__10377__auto__ = (function (){var statearr_10729 = f__10376__auto__();
(statearr_10729[(6)] = c__10375__auto___12534);

return statearr_10729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10377__auto__);
});})(__12520,c__10375__auto___12534,G__10667_12521,G__10667_12522__$1,n__4613__auto___12519,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10667_12522__$1)].join('')));

}

var G__12544 = (__12520 + (1));
__12520 = G__12544;
continue;
} else {
}
break;
}

var c__10375__auto___12545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10376__auto__ = (function (){var switch__10242__auto__ = (function (state_10755){
var state_val_10756 = (state_10755[(1)]);
if((state_val_10756 === (7))){
var inst_10751 = (state_10755[(2)]);
var state_10755__$1 = state_10755;
var statearr_10757_12546 = state_10755__$1;
(statearr_10757_12546[(2)] = inst_10751);

(statearr_10757_12546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10756 === (1))){
var state_10755__$1 = state_10755;
var statearr_10758_12547 = state_10755__$1;
(statearr_10758_12547[(2)] = null);

(statearr_10758_12547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10756 === (4))){
var inst_10732 = (state_10755[(7)]);
var inst_10732__$1 = (state_10755[(2)]);
var inst_10733 = (inst_10732__$1 == null);
var state_10755__$1 = (function (){var statearr_10759 = state_10755;
(statearr_10759[(7)] = inst_10732__$1);

return statearr_10759;
})();
if(cljs.core.truth_(inst_10733)){
var statearr_10760_12548 = state_10755__$1;
(statearr_10760_12548[(1)] = (5));

} else {
var statearr_10761_12549 = state_10755__$1;
(statearr_10761_12549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10756 === (6))){
var inst_10732 = (state_10755[(7)]);
var inst_10737 = (state_10755[(8)]);
var inst_10737__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_10740 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10743 = [inst_10732,inst_10737__$1];
var inst_10744 = (new cljs.core.PersistentVector(null,2,(5),inst_10740,inst_10743,null));
var state_10755__$1 = (function (){var statearr_10762 = state_10755;
(statearr_10762[(8)] = inst_10737__$1);

return statearr_10762;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10755__$1,(8),jobs,inst_10744);
} else {
if((state_val_10756 === (3))){
var inst_10753 = (state_10755[(2)]);
var state_10755__$1 = state_10755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10755__$1,inst_10753);
} else {
if((state_val_10756 === (2))){
var state_10755__$1 = state_10755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10755__$1,(4),from);
} else {
if((state_val_10756 === (9))){
var inst_10748 = (state_10755[(2)]);
var state_10755__$1 = (function (){var statearr_10763 = state_10755;
(statearr_10763[(9)] = inst_10748);

return statearr_10763;
})();
var statearr_10764_12550 = state_10755__$1;
(statearr_10764_12550[(2)] = null);

(statearr_10764_12550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10756 === (5))){
var inst_10735 = cljs.core.async.close_BANG_(jobs);
var state_10755__$1 = state_10755;
var statearr_10765_12551 = state_10755__$1;
(statearr_10765_12551[(2)] = inst_10735);

(statearr_10765_12551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10756 === (8))){
var inst_10737 = (state_10755[(8)]);
var inst_10746 = (state_10755[(2)]);
var state_10755__$1 = (function (){var statearr_10766 = state_10755;
(statearr_10766[(10)] = inst_10746);

return statearr_10766;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10755__$1,(9),results,inst_10737);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____0 = (function (){
var statearr_10767 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10767[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__);

(statearr_10767[(1)] = (1));

return statearr_10767;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____1 = (function (state_10755){
while(true){
var ret_value__10244__auto__ = (function (){try{while(true){
var result__10245__auto__ = switch__10242__auto__(state_10755);
if(cljs.core.keyword_identical_QMARK_(result__10245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10245__auto__;
}
break;
}
}catch (e10770){var ex__10246__auto__ = e10770;
var statearr_10773_12552 = state_10755;
(statearr_10773_12552[(2)] = ex__10246__auto__);


if(cljs.core.seq((state_10755[(4)]))){
var statearr_10774_12553 = state_10755;
(statearr_10774_12553[(1)] = cljs.core.first((state_10755[(4)])));

} else {
throw ex__10246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12554 = state_10755;
state_10755 = G__12554;
continue;
} else {
return ret_value__10244__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__ = function(state_10755){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____1.call(this,state_10755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__;
})()
})();
var state__10377__auto__ = (function (){var statearr_10775 = f__10376__auto__();
(statearr_10775[(6)] = c__10375__auto___12545);

return statearr_10775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10377__auto__);
}));


var c__10375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10376__auto__ = (function (){var switch__10242__auto__ = (function (state_10816){
var state_val_10817 = (state_10816[(1)]);
if((state_val_10817 === (7))){
var inst_10812 = (state_10816[(2)]);
var state_10816__$1 = state_10816;
var statearr_10819_12555 = state_10816__$1;
(statearr_10819_12555[(2)] = inst_10812);

(statearr_10819_12555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (20))){
var state_10816__$1 = state_10816;
var statearr_10820_12556 = state_10816__$1;
(statearr_10820_12556[(2)] = null);

(statearr_10820_12556[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (1))){
var state_10816__$1 = state_10816;
var statearr_10821_12557 = state_10816__$1;
(statearr_10821_12557[(2)] = null);

(statearr_10821_12557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (4))){
var inst_10778 = (state_10816[(7)]);
var inst_10778__$1 = (state_10816[(2)]);
var inst_10779 = (inst_10778__$1 == null);
var state_10816__$1 = (function (){var statearr_10822 = state_10816;
(statearr_10822[(7)] = inst_10778__$1);

return statearr_10822;
})();
if(cljs.core.truth_(inst_10779)){
var statearr_10823_12558 = state_10816__$1;
(statearr_10823_12558[(1)] = (5));

} else {
var statearr_10824_12559 = state_10816__$1;
(statearr_10824_12559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (15))){
var inst_10791 = (state_10816[(8)]);
var state_10816__$1 = state_10816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10816__$1,(18),to,inst_10791);
} else {
if((state_val_10817 === (21))){
var inst_10807 = (state_10816[(2)]);
var state_10816__$1 = state_10816;
var statearr_10825_12560 = state_10816__$1;
(statearr_10825_12560[(2)] = inst_10807);

(statearr_10825_12560[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (13))){
var inst_10809 = (state_10816[(2)]);
var state_10816__$1 = (function (){var statearr_10828 = state_10816;
(statearr_10828[(9)] = inst_10809);

return statearr_10828;
})();
var statearr_10829_12563 = state_10816__$1;
(statearr_10829_12563[(2)] = null);

(statearr_10829_12563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (6))){
var inst_10778 = (state_10816[(7)]);
var state_10816__$1 = state_10816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10816__$1,(11),inst_10778);
} else {
if((state_val_10817 === (17))){
var inst_10802 = (state_10816[(2)]);
var state_10816__$1 = state_10816;
if(cljs.core.truth_(inst_10802)){
var statearr_10830_12565 = state_10816__$1;
(statearr_10830_12565[(1)] = (19));

} else {
var statearr_10833_12566 = state_10816__$1;
(statearr_10833_12566[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (3))){
var inst_10814 = (state_10816[(2)]);
var state_10816__$1 = state_10816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10816__$1,inst_10814);
} else {
if((state_val_10817 === (12))){
var inst_10788 = (state_10816[(10)]);
var state_10816__$1 = state_10816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10816__$1,(14),inst_10788);
} else {
if((state_val_10817 === (2))){
var state_10816__$1 = state_10816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10816__$1,(4),results);
} else {
if((state_val_10817 === (19))){
var state_10816__$1 = state_10816;
var statearr_10835_12567 = state_10816__$1;
(statearr_10835_12567[(2)] = null);

(statearr_10835_12567[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (11))){
var inst_10788 = (state_10816[(2)]);
var state_10816__$1 = (function (){var statearr_10836 = state_10816;
(statearr_10836[(10)] = inst_10788);

return statearr_10836;
})();
var statearr_10837_12568 = state_10816__$1;
(statearr_10837_12568[(2)] = null);

(statearr_10837_12568[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (9))){
var state_10816__$1 = state_10816;
var statearr_10839_12569 = state_10816__$1;
(statearr_10839_12569[(2)] = null);

(statearr_10839_12569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (5))){
var state_10816__$1 = state_10816;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10840_12570 = state_10816__$1;
(statearr_10840_12570[(1)] = (8));

} else {
var statearr_10841_12571 = state_10816__$1;
(statearr_10841_12571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (14))){
var inst_10791 = (state_10816[(8)]);
var inst_10791__$1 = (state_10816[(2)]);
var inst_10795 = (inst_10791__$1 == null);
var inst_10796 = cljs.core.not(inst_10795);
var state_10816__$1 = (function (){var statearr_10843 = state_10816;
(statearr_10843[(8)] = inst_10791__$1);

return statearr_10843;
})();
if(inst_10796){
var statearr_10844_12572 = state_10816__$1;
(statearr_10844_12572[(1)] = (15));

} else {
var statearr_10845_12573 = state_10816__$1;
(statearr_10845_12573[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (16))){
var state_10816__$1 = state_10816;
var statearr_10846_12574 = state_10816__$1;
(statearr_10846_12574[(2)] = false);

(statearr_10846_12574[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (10))){
var inst_10785 = (state_10816[(2)]);
var state_10816__$1 = state_10816;
var statearr_10847_12575 = state_10816__$1;
(statearr_10847_12575[(2)] = inst_10785);

(statearr_10847_12575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (18))){
var inst_10799 = (state_10816[(2)]);
var state_10816__$1 = state_10816;
var statearr_10848_12577 = state_10816__$1;
(statearr_10848_12577[(2)] = inst_10799);

(statearr_10848_12577[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10817 === (8))){
var inst_10782 = cljs.core.async.close_BANG_(to);
var state_10816__$1 = state_10816;
var statearr_10849_12578 = state_10816__$1;
(statearr_10849_12578[(2)] = inst_10782);

(statearr_10849_12578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____0 = (function (){
var statearr_10850 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10850[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__);

(statearr_10850[(1)] = (1));

return statearr_10850;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____1 = (function (state_10816){
while(true){
var ret_value__10244__auto__ = (function (){try{while(true){
var result__10245__auto__ = switch__10242__auto__(state_10816);
if(cljs.core.keyword_identical_QMARK_(result__10245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10245__auto__;
}
break;
}
}catch (e10851){var ex__10246__auto__ = e10851;
var statearr_10852_12579 = state_10816;
(statearr_10852_12579[(2)] = ex__10246__auto__);


if(cljs.core.seq((state_10816[(4)]))){
var statearr_10853_12580 = state_10816;
(statearr_10853_12580[(1)] = cljs.core.first((state_10816[(4)])));

} else {
throw ex__10246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12581 = state_10816;
state_10816 = G__12581;
continue;
} else {
return ret_value__10244__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__ = function(state_10816){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____1.call(this,state_10816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10243__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10243__auto__;
})()
})();
var state__10377__auto__ = (function (){var statearr_10854 = f__10376__auto__();
(statearr_10854[(6)] = c__10375__auto__);

return statearr_10854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10377__auto__);
}));

return c__10375__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__10856 = arguments.length;
switch (G__10856) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__10859 = arguments.length;
switch (G__10859) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__10863 = arguments.length;
switch (G__10863) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__10375__auto___12588 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10376__auto__ = (function (){var switch__10242__auto__ = (function (state_10892){
var state_val_10893 = (state_10892[(1)]);
if((state_val_10893 === (7))){
var inst_10888 = (state_10892[(2)]);
var state_10892__$1 = state_10892;
var statearr_10894_12589 = state_10892__$1;
(statearr_10894_12589[(2)] = inst_10888);

(statearr_10894_12589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10893 === (1))){
var state_10892__$1 = state_10892;
var statearr_10895_12590 = state_10892__$1;
(statearr_10895_12590[(2)] = null);

(statearr_10895_12590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10893 === (4))){
var inst_10869 = (state_10892[(7)]);
var inst_10869__$1 = (state_10892[(2)]);
var inst_10870 = (inst_10869__$1 == null);
var state_10892__$1 = (function (){var statearr_10896 = state_10892;
(statearr_10896[(7)] = inst_10869__$1);

return statearr_10896;
})();
if(cljs.core.truth_(inst_10870)){
var statearr_10897_12592 = state_10892__$1;
(statearr_10897_12592[(1)] = (5));

} else {
var statearr_10898_12593 = state_10892__$1;
(statearr_10898_12593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10893 === (13))){
var state_10892__$1 = state_10892;
var statearr_10899_12595 = state_10892__$1;
(statearr_10899_12595[(2)] = null);

(statearr_10899_12595[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10893 === (6))){
var inst_10869 = (state_10892[(7)]);
var inst_10875 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_10869) : p.call(null,inst_10869));
var state_10892__$1 = state_10892;
if(cljs.core.truth_(inst_10875)){
var statearr_10900_12596 = state_10892__$1;
(statearr_10900_12596[(1)] = (9));

} else {
var statearr_10901_12597 = state_10892__$1;
(statearr_10901_12597[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10893 === (3))){
var inst_10890 = (state_10892[(2)]);
var state_10892__$1 = state_10892;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10892__$1,inst_10890);
} else {
if((state_val_10893 === (12))){
var state_10892__$1 = state_10892;
var statearr_10902_12598 = state_10892__$1;
(statearr_10902_12598[(2)] = null);

(statearr_10902_12598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10893 === (2))){
var state_10892__$1 = state_10892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10892__$1,(4),ch);
} else {
if((state_val_10893 === (11))){
var inst_10869 = (state_10892[(7)]);
var inst_10879 = (state_10892[(2)]);
var state_10892__$1 = state_10892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10892__$1,(8),inst_10879,inst_10869);
} else {
if((state_val_10893 === (9))){
var state_10892__$1 = state_10892;
var statearr_10904_12600 = state_10892__$1;
(statearr_10904_12600[(2)] = tc);

(statearr_10904_12600[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10893 === (5))){
var inst_10872 = cljs.core.async.close_BANG_(tc);
var inst_10873 = cljs.core.async.close_BANG_(fc);
var state_10892__$1 = (function (){var statearr_10905 = state_10892;
(statearr_10905[(8)] = inst_10872);

return statearr_10905;
})();
var statearr_10911_12601 = state_10892__$1;
(statearr_10911_12601[(2)] = inst_10873);

(statearr_10911_12601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10893 === (14))){
var inst_10886 = (state_10892[(2)]);
var state_10892__$1 = state_10892;
var statearr_10912_12603 = state_10892__$1;
(statearr_10912_12603[(2)] = inst_10886);

(statearr_10912_12603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10893 === (10))){
var state_10892__$1 = state_10892;
var statearr_10913_12604 = state_10892__$1;
(statearr_10913_12604[(2)] = fc);

(statearr_10913_12604[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10893 === (8))){
var inst_10881 = (state_10892[(2)]);
var state_10892__$1 = state_10892;
if(cljs.core.truth_(inst_10881)){
var statearr_10915_12606 = state_10892__$1;
(statearr_10915_12606[(1)] = (12));

} else {
var statearr_10916_12607 = state_10892__$1;
(statearr_10916_12607[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10243__auto__ = null;
var cljs$core$async$state_machine__10243__auto____0 = (function (){
var statearr_10917 = [null,null,null,null,null,null,null,null,null];
(statearr_10917[(0)] = cljs$core$async$state_machine__10243__auto__);

(statearr_10917[(1)] = (1));

return statearr_10917;
});
var cljs$core$async$state_machine__10243__auto____1 = (function (state_10892){
while(true){
var ret_value__10244__auto__ = (function (){try{while(true){
var result__10245__auto__ = switch__10242__auto__(state_10892);
if(cljs.core.keyword_identical_QMARK_(result__10245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10245__auto__;
}
break;
}
}catch (e10918){var ex__10246__auto__ = e10918;
var statearr_10919_12608 = state_10892;
(statearr_10919_12608[(2)] = ex__10246__auto__);


if(cljs.core.seq((state_10892[(4)]))){
var statearr_10920_12609 = state_10892;
(statearr_10920_12609[(1)] = cljs.core.first((state_10892[(4)])));

} else {
throw ex__10246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12610 = state_10892;
state_10892 = G__12610;
continue;
} else {
return ret_value__10244__auto__;
}
break;
}
});
cljs$core$async$state_machine__10243__auto__ = function(state_10892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10243__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10243__auto____1.call(this,state_10892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10243__auto____0;
cljs$core$async$state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10243__auto____1;
return cljs$core$async$state_machine__10243__auto__;
})()
})();
var state__10377__auto__ = (function (){var statearr_10921 = f__10376__auto__();
(statearr_10921[(6)] = c__10375__auto___12588);

return statearr_10921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10377__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__10375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10376__auto__ = (function (){var switch__10242__auto__ = (function (state_10943){
var state_val_10944 = (state_10943[(1)]);
if((state_val_10944 === (7))){
var inst_10939 = (state_10943[(2)]);
var state_10943__$1 = state_10943;
var statearr_10945_12611 = state_10943__$1;
(statearr_10945_12611[(2)] = inst_10939);

(statearr_10945_12611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10944 === (1))){
var inst_10922 = init;
var inst_10923 = inst_10922;
var state_10943__$1 = (function (){var statearr_10946 = state_10943;
(statearr_10946[(7)] = inst_10923);

return statearr_10946;
})();
var statearr_10947_12615 = state_10943__$1;
(statearr_10947_12615[(2)] = null);

(statearr_10947_12615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10944 === (4))){
var inst_10926 = (state_10943[(8)]);
var inst_10926__$1 = (state_10943[(2)]);
var inst_10927 = (inst_10926__$1 == null);
var state_10943__$1 = (function (){var statearr_10948 = state_10943;
(statearr_10948[(8)] = inst_10926__$1);

return statearr_10948;
})();
if(cljs.core.truth_(inst_10927)){
var statearr_10949_12616 = state_10943__$1;
(statearr_10949_12616[(1)] = (5));

} else {
var statearr_10950_12617 = state_10943__$1;
(statearr_10950_12617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10944 === (6))){
var inst_10930 = (state_10943[(9)]);
var inst_10926 = (state_10943[(8)]);
var inst_10923 = (state_10943[(7)]);
var inst_10930__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_10923,inst_10926) : f.call(null,inst_10923,inst_10926));
var inst_10931 = cljs.core.reduced_QMARK_(inst_10930__$1);
var state_10943__$1 = (function (){var statearr_10953 = state_10943;
(statearr_10953[(9)] = inst_10930__$1);

return statearr_10953;
})();
if(inst_10931){
var statearr_10954_12619 = state_10943__$1;
(statearr_10954_12619[(1)] = (8));

} else {
var statearr_10955_12620 = state_10943__$1;
(statearr_10955_12620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10944 === (3))){
var inst_10941 = (state_10943[(2)]);
var state_10943__$1 = state_10943;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10943__$1,inst_10941);
} else {
if((state_val_10944 === (2))){
var state_10943__$1 = state_10943;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10943__$1,(4),ch);
} else {
if((state_val_10944 === (9))){
var inst_10930 = (state_10943[(9)]);
var inst_10923 = inst_10930;
var state_10943__$1 = (function (){var statearr_10956 = state_10943;
(statearr_10956[(7)] = inst_10923);

return statearr_10956;
})();
var statearr_10957_12622 = state_10943__$1;
(statearr_10957_12622[(2)] = null);

(statearr_10957_12622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10944 === (5))){
var inst_10923 = (state_10943[(7)]);
var state_10943__$1 = state_10943;
var statearr_10958_12623 = state_10943__$1;
(statearr_10958_12623[(2)] = inst_10923);

(statearr_10958_12623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10944 === (10))){
var inst_10937 = (state_10943[(2)]);
var state_10943__$1 = state_10943;
var statearr_10959_12625 = state_10943__$1;
(statearr_10959_12625[(2)] = inst_10937);

(statearr_10959_12625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10944 === (8))){
var inst_10930 = (state_10943[(9)]);
var inst_10933 = cljs.core.deref(inst_10930);
var state_10943__$1 = state_10943;
var statearr_10960_12626 = state_10943__$1;
(statearr_10960_12626[(2)] = inst_10933);

(statearr_10960_12626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__10243__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10243__auto____0 = (function (){
var statearr_10961 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10961[(0)] = cljs$core$async$reduce_$_state_machine__10243__auto__);

(statearr_10961[(1)] = (1));

return statearr_10961;
});
var cljs$core$async$reduce_$_state_machine__10243__auto____1 = (function (state_10943){
while(true){
var ret_value__10244__auto__ = (function (){try{while(true){
var result__10245__auto__ = switch__10242__auto__(state_10943);
if(cljs.core.keyword_identical_QMARK_(result__10245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10245__auto__;
}
break;
}
}catch (e10962){var ex__10246__auto__ = e10962;
var statearr_10963_12627 = state_10943;
(statearr_10963_12627[(2)] = ex__10246__auto__);


if(cljs.core.seq((state_10943[(4)]))){
var statearr_10964_12630 = state_10943;
(statearr_10964_12630[(1)] = cljs.core.first((state_10943[(4)])));

} else {
throw ex__10246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12632 = state_10943;
state_10943 = G__12632;
continue;
} else {
return ret_value__10244__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10243__auto__ = function(state_10943){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10243__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10243__auto____1.call(this,state_10943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10243__auto____0;
cljs$core$async$reduce_$_state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10243__auto____1;
return cljs$core$async$reduce_$_state_machine__10243__auto__;
})()
})();
var state__10377__auto__ = (function (){var statearr_10965 = f__10376__auto__();
(statearr_10965[(6)] = c__10375__auto__);

return statearr_10965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10377__auto__);
}));

return c__10375__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10376__auto__ = (function (){var switch__10242__auto__ = (function (state_10971){
var state_val_10972 = (state_10971[(1)]);
if((state_val_10972 === (1))){
var inst_10966 = cljs.core.async.reduce(f__$1,init,ch);
var state_10971__$1 = state_10971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10971__$1,(2),inst_10966);
} else {
if((state_val_10972 === (2))){
var inst_10968 = (state_10971[(2)]);
var inst_10969 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_10968) : f__$1.call(null,inst_10968));
var state_10971__$1 = state_10971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10971__$1,inst_10969);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10243__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10243__auto____0 = (function (){
var statearr_10973 = [null,null,null,null,null,null,null];
(statearr_10973[(0)] = cljs$core$async$transduce_$_state_machine__10243__auto__);

(statearr_10973[(1)] = (1));

return statearr_10973;
});
var cljs$core$async$transduce_$_state_machine__10243__auto____1 = (function (state_10971){
while(true){
var ret_value__10244__auto__ = (function (){try{while(true){
var result__10245__auto__ = switch__10242__auto__(state_10971);
if(cljs.core.keyword_identical_QMARK_(result__10245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10245__auto__;
}
break;
}
}catch (e10974){var ex__10246__auto__ = e10974;
var statearr_10975_12640 = state_10971;
(statearr_10975_12640[(2)] = ex__10246__auto__);


if(cljs.core.seq((state_10971[(4)]))){
var statearr_10976_12641 = state_10971;
(statearr_10976_12641[(1)] = cljs.core.first((state_10971[(4)])));

} else {
throw ex__10246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12648 = state_10971;
state_10971 = G__12648;
continue;
} else {
return ret_value__10244__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10243__auto__ = function(state_10971){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10243__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10243__auto____1.call(this,state_10971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10243__auto____0;
cljs$core$async$transduce_$_state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10243__auto____1;
return cljs$core$async$transduce_$_state_machine__10243__auto__;
})()
})();
var state__10377__auto__ = (function (){var statearr_10978 = f__10376__auto__();
(statearr_10978[(6)] = c__10375__auto__);

return statearr_10978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10377__auto__);
}));

return c__10375__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__10980 = arguments.length;
switch (G__10980) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10376__auto__ = (function (){var switch__10242__auto__ = (function (state_11005){
var state_val_11006 = (state_11005[(1)]);
if((state_val_11006 === (7))){
var inst_10987 = (state_11005[(2)]);
var state_11005__$1 = state_11005;
var statearr_11007_12672 = state_11005__$1;
(statearr_11007_12672[(2)] = inst_10987);

(statearr_11007_12672[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11006 === (1))){
var inst_10981 = cljs.core.seq(coll);
var inst_10982 = inst_10981;
var state_11005__$1 = (function (){var statearr_11009 = state_11005;
(statearr_11009[(7)] = inst_10982);

return statearr_11009;
})();
var statearr_11010_12680 = state_11005__$1;
(statearr_11010_12680[(2)] = null);

(statearr_11010_12680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11006 === (4))){
var inst_10982 = (state_11005[(7)]);
var inst_10985 = cljs.core.first(inst_10982);
var state_11005__$1 = state_11005;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11005__$1,(7),ch,inst_10985);
} else {
if((state_val_11006 === (13))){
var inst_10999 = (state_11005[(2)]);
var state_11005__$1 = state_11005;
var statearr_11011_12685 = state_11005__$1;
(statearr_11011_12685[(2)] = inst_10999);

(statearr_11011_12685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11006 === (6))){
var inst_10990 = (state_11005[(2)]);
var state_11005__$1 = state_11005;
if(cljs.core.truth_(inst_10990)){
var statearr_11013_12687 = state_11005__$1;
(statearr_11013_12687[(1)] = (8));

} else {
var statearr_11014_12688 = state_11005__$1;
(statearr_11014_12688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11006 === (3))){
var inst_11003 = (state_11005[(2)]);
var state_11005__$1 = state_11005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11005__$1,inst_11003);
} else {
if((state_val_11006 === (12))){
var state_11005__$1 = state_11005;
var statearr_11015_12689 = state_11005__$1;
(statearr_11015_12689[(2)] = null);

(statearr_11015_12689[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11006 === (2))){
var inst_10982 = (state_11005[(7)]);
var state_11005__$1 = state_11005;
if(cljs.core.truth_(inst_10982)){
var statearr_11016_12690 = state_11005__$1;
(statearr_11016_12690[(1)] = (4));

} else {
var statearr_11017_12691 = state_11005__$1;
(statearr_11017_12691[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11006 === (11))){
var inst_10996 = cljs.core.async.close_BANG_(ch);
var state_11005__$1 = state_11005;
var statearr_11018_12692 = state_11005__$1;
(statearr_11018_12692[(2)] = inst_10996);

(statearr_11018_12692[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11006 === (9))){
var state_11005__$1 = state_11005;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11019_12696 = state_11005__$1;
(statearr_11019_12696[(1)] = (11));

} else {
var statearr_11020_12697 = state_11005__$1;
(statearr_11020_12697[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11006 === (5))){
var inst_10982 = (state_11005[(7)]);
var state_11005__$1 = state_11005;
var statearr_11021_12699 = state_11005__$1;
(statearr_11021_12699[(2)] = inst_10982);

(statearr_11021_12699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11006 === (10))){
var inst_11001 = (state_11005[(2)]);
var state_11005__$1 = state_11005;
var statearr_11022_12700 = state_11005__$1;
(statearr_11022_12700[(2)] = inst_11001);

(statearr_11022_12700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11006 === (8))){
var inst_10982 = (state_11005[(7)]);
var inst_10992 = cljs.core.next(inst_10982);
var inst_10982__$1 = inst_10992;
var state_11005__$1 = (function (){var statearr_11023 = state_11005;
(statearr_11023[(7)] = inst_10982__$1);

return statearr_11023;
})();
var statearr_11024_12701 = state_11005__$1;
(statearr_11024_12701[(2)] = null);

(statearr_11024_12701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10243__auto__ = null;
var cljs$core$async$state_machine__10243__auto____0 = (function (){
var statearr_11025 = [null,null,null,null,null,null,null,null];
(statearr_11025[(0)] = cljs$core$async$state_machine__10243__auto__);

(statearr_11025[(1)] = (1));

return statearr_11025;
});
var cljs$core$async$state_machine__10243__auto____1 = (function (state_11005){
while(true){
var ret_value__10244__auto__ = (function (){try{while(true){
var result__10245__auto__ = switch__10242__auto__(state_11005);
if(cljs.core.keyword_identical_QMARK_(result__10245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10245__auto__;
}
break;
}
}catch (e11026){var ex__10246__auto__ = e11026;
var statearr_11027_12702 = state_11005;
(statearr_11027_12702[(2)] = ex__10246__auto__);


if(cljs.core.seq((state_11005[(4)]))){
var statearr_11028_12703 = state_11005;
(statearr_11028_12703[(1)] = cljs.core.first((state_11005[(4)])));

} else {
throw ex__10246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12704 = state_11005;
state_11005 = G__12704;
continue;
} else {
return ret_value__10244__auto__;
}
break;
}
});
cljs$core$async$state_machine__10243__auto__ = function(state_11005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10243__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10243__auto____1.call(this,state_11005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10243__auto____0;
cljs$core$async$state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10243__auto____1;
return cljs$core$async$state_machine__10243__auto__;
})()
})();
var state__10377__auto__ = (function (){var statearr_11029 = f__10376__auto__();
(statearr_11029[(6)] = c__10375__auto__);

return statearr_11029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10377__auto__);
}));

return c__10375__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__11033 = arguments.length;
switch (G__11033) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_12709 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_12709(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_12714 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_12714(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_12717 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_12717(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_12718 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_12718(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11035 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11035 = (function (ch,cs,meta11036){
this.ch = ch;
this.cs = cs;
this.meta11036 = meta11036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11037,meta11036__$1){
var self__ = this;
var _11037__$1 = this;
return (new cljs.core.async.t_cljs$core$async11035(self__.ch,self__.cs,meta11036__$1));
}));

(cljs.core.async.t_cljs$core$async11035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11037){
var self__ = this;
var _11037__$1 = this;
return self__.meta11036;
}));

(cljs.core.async.t_cljs$core$async11035.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11035.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11035.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11035.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11035.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11035.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11036","meta11036",1899986924,null)], null);
}));

(cljs.core.async.t_cljs$core$async11035.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11035");

(cljs.core.async.t_cljs$core$async11035.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11035");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11035.
 */
cljs.core.async.__GT_t_cljs$core$async11035 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11035(ch__$1,cs__$1,meta11036){
return (new cljs.core.async.t_cljs$core$async11035(ch__$1,cs__$1,meta11036));
});

}

return (new cljs.core.async.t_cljs$core$async11035(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__10375__auto___12723 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10376__auto__ = (function (){var switch__10242__auto__ = (function (state_11178){
var state_val_11179 = (state_11178[(1)]);
if((state_val_11179 === (7))){
var inst_11174 = (state_11178[(2)]);
var state_11178__$1 = state_11178;
var statearr_11180_12726 = state_11178__$1;
(statearr_11180_12726[(2)] = inst_11174);

(statearr_11180_12726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (20))){
var inst_11078 = (state_11178[(7)]);
var inst_11090 = cljs.core.first(inst_11078);
var inst_11091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11090,(0),null);
var inst_11092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11090,(1),null);
var state_11178__$1 = (function (){var statearr_11181 = state_11178;
(statearr_11181[(8)] = inst_11091);

return statearr_11181;
})();
if(cljs.core.truth_(inst_11092)){
var statearr_11182_12728 = state_11178__$1;
(statearr_11182_12728[(1)] = (22));

} else {
var statearr_11183_12729 = state_11178__$1;
(statearr_11183_12729[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (27))){
var inst_11127 = (state_11178[(9)]);
var inst_11122 = (state_11178[(10)]);
var inst_11047 = (state_11178[(11)]);
var inst_11120 = (state_11178[(12)]);
var inst_11127__$1 = cljs.core._nth(inst_11120,inst_11122);
var inst_11128 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11127__$1,inst_11047,done);
var state_11178__$1 = (function (){var statearr_11184 = state_11178;
(statearr_11184[(9)] = inst_11127__$1);

return statearr_11184;
})();
if(cljs.core.truth_(inst_11128)){
var statearr_11185_12731 = state_11178__$1;
(statearr_11185_12731[(1)] = (30));

} else {
var statearr_11186_12732 = state_11178__$1;
(statearr_11186_12732[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (1))){
var state_11178__$1 = state_11178;
var statearr_11187_12733 = state_11178__$1;
(statearr_11187_12733[(2)] = null);

(statearr_11187_12733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (24))){
var inst_11078 = (state_11178[(7)]);
var inst_11097 = (state_11178[(2)]);
var inst_11098 = cljs.core.next(inst_11078);
var inst_11056 = inst_11098;
var inst_11057 = null;
var inst_11058 = (0);
var inst_11059 = (0);
var state_11178__$1 = (function (){var statearr_11188 = state_11178;
(statearr_11188[(13)] = inst_11057);

(statearr_11188[(14)] = inst_11058);

(statearr_11188[(15)] = inst_11056);

(statearr_11188[(16)] = inst_11097);

(statearr_11188[(17)] = inst_11059);

return statearr_11188;
})();
var statearr_11189_12735 = state_11178__$1;
(statearr_11189_12735[(2)] = null);

(statearr_11189_12735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (39))){
var state_11178__$1 = state_11178;
var statearr_11194_12736 = state_11178__$1;
(statearr_11194_12736[(2)] = null);

(statearr_11194_12736[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (4))){
var inst_11047 = (state_11178[(11)]);
var inst_11047__$1 = (state_11178[(2)]);
var inst_11048 = (inst_11047__$1 == null);
var state_11178__$1 = (function (){var statearr_11196 = state_11178;
(statearr_11196[(11)] = inst_11047__$1);

return statearr_11196;
})();
if(cljs.core.truth_(inst_11048)){
var statearr_11197_12738 = state_11178__$1;
(statearr_11197_12738[(1)] = (5));

} else {
var statearr_11198_12739 = state_11178__$1;
(statearr_11198_12739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (15))){
var inst_11057 = (state_11178[(13)]);
var inst_11058 = (state_11178[(14)]);
var inst_11056 = (state_11178[(15)]);
var inst_11059 = (state_11178[(17)]);
var inst_11074 = (state_11178[(2)]);
var inst_11075 = (inst_11059 + (1));
var tmp11191 = inst_11057;
var tmp11192 = inst_11058;
var tmp11193 = inst_11056;
var inst_11056__$1 = tmp11193;
var inst_11057__$1 = tmp11191;
var inst_11058__$1 = tmp11192;
var inst_11059__$1 = inst_11075;
var state_11178__$1 = (function (){var statearr_11201 = state_11178;
(statearr_11201[(13)] = inst_11057__$1);

(statearr_11201[(18)] = inst_11074);

(statearr_11201[(14)] = inst_11058__$1);

(statearr_11201[(15)] = inst_11056__$1);

(statearr_11201[(17)] = inst_11059__$1);

return statearr_11201;
})();
var statearr_11202_12740 = state_11178__$1;
(statearr_11202_12740[(2)] = null);

(statearr_11202_12740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (21))){
var inst_11101 = (state_11178[(2)]);
var state_11178__$1 = state_11178;
var statearr_11206_12741 = state_11178__$1;
(statearr_11206_12741[(2)] = inst_11101);

(statearr_11206_12741[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (31))){
var inst_11127 = (state_11178[(9)]);
var inst_11131 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11127);
var state_11178__$1 = state_11178;
var statearr_11208_12742 = state_11178__$1;
(statearr_11208_12742[(2)] = inst_11131);

(statearr_11208_12742[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (32))){
var inst_11122 = (state_11178[(10)]);
var inst_11120 = (state_11178[(12)]);
var inst_11121 = (state_11178[(19)]);
var inst_11119 = (state_11178[(20)]);
var inst_11133 = (state_11178[(2)]);
var inst_11135 = (inst_11122 + (1));
var tmp11203 = inst_11120;
var tmp11204 = inst_11121;
var tmp11205 = inst_11119;
var inst_11119__$1 = tmp11205;
var inst_11120__$1 = tmp11203;
var inst_11121__$1 = tmp11204;
var inst_11122__$1 = inst_11135;
var state_11178__$1 = (function (){var statearr_11209 = state_11178;
(statearr_11209[(21)] = inst_11133);

(statearr_11209[(10)] = inst_11122__$1);

(statearr_11209[(12)] = inst_11120__$1);

(statearr_11209[(19)] = inst_11121__$1);

(statearr_11209[(20)] = inst_11119__$1);

return statearr_11209;
})();
var statearr_11211_12743 = state_11178__$1;
(statearr_11211_12743[(2)] = null);

(statearr_11211_12743[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (40))){
var inst_11147 = (state_11178[(22)]);
var inst_11151 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11147);
var state_11178__$1 = state_11178;
var statearr_11213_12744 = state_11178__$1;
(statearr_11213_12744[(2)] = inst_11151);

(statearr_11213_12744[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (33))){
var inst_11138 = (state_11178[(23)]);
var inst_11140 = cljs.core.chunked_seq_QMARK_(inst_11138);
var state_11178__$1 = state_11178;
if(inst_11140){
var statearr_11214_12746 = state_11178__$1;
(statearr_11214_12746[(1)] = (36));

} else {
var statearr_11215_12747 = state_11178__$1;
(statearr_11215_12747[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (13))){
var inst_11068 = (state_11178[(24)]);
var inst_11071 = cljs.core.async.close_BANG_(inst_11068);
var state_11178__$1 = state_11178;
var statearr_11218_12748 = state_11178__$1;
(statearr_11218_12748[(2)] = inst_11071);

(statearr_11218_12748[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (22))){
var inst_11091 = (state_11178[(8)]);
var inst_11094 = cljs.core.async.close_BANG_(inst_11091);
var state_11178__$1 = state_11178;
var statearr_11220_12749 = state_11178__$1;
(statearr_11220_12749[(2)] = inst_11094);

(statearr_11220_12749[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (36))){
var inst_11138 = (state_11178[(23)]);
var inst_11142 = cljs.core.chunk_first(inst_11138);
var inst_11143 = cljs.core.chunk_rest(inst_11138);
var inst_11144 = cljs.core.count(inst_11142);
var inst_11119 = inst_11143;
var inst_11120 = inst_11142;
var inst_11121 = inst_11144;
var inst_11122 = (0);
var state_11178__$1 = (function (){var statearr_11221 = state_11178;
(statearr_11221[(10)] = inst_11122);

(statearr_11221[(12)] = inst_11120);

(statearr_11221[(19)] = inst_11121);

(statearr_11221[(20)] = inst_11119);

return statearr_11221;
})();
var statearr_11222_12750 = state_11178__$1;
(statearr_11222_12750[(2)] = null);

(statearr_11222_12750[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (41))){
var inst_11138 = (state_11178[(23)]);
var inst_11153 = (state_11178[(2)]);
var inst_11154 = cljs.core.next(inst_11138);
var inst_11119 = inst_11154;
var inst_11120 = null;
var inst_11121 = (0);
var inst_11122 = (0);
var state_11178__$1 = (function (){var statearr_11223 = state_11178;
(statearr_11223[(10)] = inst_11122);

(statearr_11223[(12)] = inst_11120);

(statearr_11223[(19)] = inst_11121);

(statearr_11223[(20)] = inst_11119);

(statearr_11223[(25)] = inst_11153);

return statearr_11223;
})();
var statearr_11224_12751 = state_11178__$1;
(statearr_11224_12751[(2)] = null);

(statearr_11224_12751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (43))){
var state_11178__$1 = state_11178;
var statearr_11225_12752 = state_11178__$1;
(statearr_11225_12752[(2)] = null);

(statearr_11225_12752[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (29))){
var inst_11162 = (state_11178[(2)]);
var state_11178__$1 = state_11178;
var statearr_11226_12754 = state_11178__$1;
(statearr_11226_12754[(2)] = inst_11162);

(statearr_11226_12754[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (44))){
var inst_11171 = (state_11178[(2)]);
var state_11178__$1 = (function (){var statearr_11227 = state_11178;
(statearr_11227[(26)] = inst_11171);

return statearr_11227;
})();
var statearr_11228_12755 = state_11178__$1;
(statearr_11228_12755[(2)] = null);

(statearr_11228_12755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (6))){
var inst_11111 = (state_11178[(27)]);
var inst_11110 = cljs.core.deref(cs);
var inst_11111__$1 = cljs.core.keys(inst_11110);
var inst_11112 = cljs.core.count(inst_11111__$1);
var inst_11113 = cljs.core.reset_BANG_(dctr,inst_11112);
var inst_11118 = cljs.core.seq(inst_11111__$1);
var inst_11119 = inst_11118;
var inst_11120 = null;
var inst_11121 = (0);
var inst_11122 = (0);
var state_11178__$1 = (function (){var statearr_11229 = state_11178;
(statearr_11229[(27)] = inst_11111__$1);

(statearr_11229[(10)] = inst_11122);

(statearr_11229[(12)] = inst_11120);

(statearr_11229[(19)] = inst_11121);

(statearr_11229[(20)] = inst_11119);

(statearr_11229[(28)] = inst_11113);

return statearr_11229;
})();
var statearr_11230_12757 = state_11178__$1;
(statearr_11230_12757[(2)] = null);

(statearr_11230_12757[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (28))){
var inst_11138 = (state_11178[(23)]);
var inst_11119 = (state_11178[(20)]);
var inst_11138__$1 = cljs.core.seq(inst_11119);
var state_11178__$1 = (function (){var statearr_11232 = state_11178;
(statearr_11232[(23)] = inst_11138__$1);

return statearr_11232;
})();
if(inst_11138__$1){
var statearr_11233_12758 = state_11178__$1;
(statearr_11233_12758[(1)] = (33));

} else {
var statearr_11234_12759 = state_11178__$1;
(statearr_11234_12759[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (25))){
var inst_11122 = (state_11178[(10)]);
var inst_11121 = (state_11178[(19)]);
var inst_11124 = (inst_11122 < inst_11121);
var inst_11125 = inst_11124;
var state_11178__$1 = state_11178;
if(cljs.core.truth_(inst_11125)){
var statearr_11235_12760 = state_11178__$1;
(statearr_11235_12760[(1)] = (27));

} else {
var statearr_11236_12761 = state_11178__$1;
(statearr_11236_12761[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (34))){
var state_11178__$1 = state_11178;
var statearr_11237_12762 = state_11178__$1;
(statearr_11237_12762[(2)] = null);

(statearr_11237_12762[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (17))){
var state_11178__$1 = state_11178;
var statearr_11238_12763 = state_11178__$1;
(statearr_11238_12763[(2)] = null);

(statearr_11238_12763[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (3))){
var inst_11176 = (state_11178[(2)]);
var state_11178__$1 = state_11178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11178__$1,inst_11176);
} else {
if((state_val_11179 === (12))){
var inst_11106 = (state_11178[(2)]);
var state_11178__$1 = state_11178;
var statearr_11239_12765 = state_11178__$1;
(statearr_11239_12765[(2)] = inst_11106);

(statearr_11239_12765[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (2))){
var state_11178__$1 = state_11178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11178__$1,(4),ch);
} else {
if((state_val_11179 === (23))){
var state_11178__$1 = state_11178;
var statearr_11241_12766 = state_11178__$1;
(statearr_11241_12766[(2)] = null);

(statearr_11241_12766[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (35))){
var inst_11160 = (state_11178[(2)]);
var state_11178__$1 = state_11178;
var statearr_11242_12767 = state_11178__$1;
(statearr_11242_12767[(2)] = inst_11160);

(statearr_11242_12767[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (19))){
var inst_11078 = (state_11178[(7)]);
var inst_11082 = cljs.core.chunk_first(inst_11078);
var inst_11083 = cljs.core.chunk_rest(inst_11078);
var inst_11084 = cljs.core.count(inst_11082);
var inst_11056 = inst_11083;
var inst_11057 = inst_11082;
var inst_11058 = inst_11084;
var inst_11059 = (0);
var state_11178__$1 = (function (){var statearr_11244 = state_11178;
(statearr_11244[(13)] = inst_11057);

(statearr_11244[(14)] = inst_11058);

(statearr_11244[(15)] = inst_11056);

(statearr_11244[(17)] = inst_11059);

return statearr_11244;
})();
var statearr_11245_12769 = state_11178__$1;
(statearr_11245_12769[(2)] = null);

(statearr_11245_12769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (11))){
var inst_11056 = (state_11178[(15)]);
var inst_11078 = (state_11178[(7)]);
var inst_11078__$1 = cljs.core.seq(inst_11056);
var state_11178__$1 = (function (){var statearr_11246 = state_11178;
(statearr_11246[(7)] = inst_11078__$1);

return statearr_11246;
})();
if(inst_11078__$1){
var statearr_11247_12771 = state_11178__$1;
(statearr_11247_12771[(1)] = (16));

} else {
var statearr_11248_12772 = state_11178__$1;
(statearr_11248_12772[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (9))){
var inst_11108 = (state_11178[(2)]);
var state_11178__$1 = state_11178;
var statearr_11249_12773 = state_11178__$1;
(statearr_11249_12773[(2)] = inst_11108);

(statearr_11249_12773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (5))){
var inst_11054 = cljs.core.deref(cs);
var inst_11055 = cljs.core.seq(inst_11054);
var inst_11056 = inst_11055;
var inst_11057 = null;
var inst_11058 = (0);
var inst_11059 = (0);
var state_11178__$1 = (function (){var statearr_11250 = state_11178;
(statearr_11250[(13)] = inst_11057);

(statearr_11250[(14)] = inst_11058);

(statearr_11250[(15)] = inst_11056);

(statearr_11250[(17)] = inst_11059);

return statearr_11250;
})();
var statearr_11251_12775 = state_11178__$1;
(statearr_11251_12775[(2)] = null);

(statearr_11251_12775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (14))){
var state_11178__$1 = state_11178;
var statearr_11252_12776 = state_11178__$1;
(statearr_11252_12776[(2)] = null);

(statearr_11252_12776[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (45))){
var inst_11168 = (state_11178[(2)]);
var state_11178__$1 = state_11178;
var statearr_11253_12777 = state_11178__$1;
(statearr_11253_12777[(2)] = inst_11168);

(statearr_11253_12777[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (26))){
var inst_11111 = (state_11178[(27)]);
var inst_11164 = (state_11178[(2)]);
var inst_11165 = cljs.core.seq(inst_11111);
var state_11178__$1 = (function (){var statearr_11254 = state_11178;
(statearr_11254[(29)] = inst_11164);

return statearr_11254;
})();
if(inst_11165){
var statearr_11255_12779 = state_11178__$1;
(statearr_11255_12779[(1)] = (42));

} else {
var statearr_11256_12780 = state_11178__$1;
(statearr_11256_12780[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (16))){
var inst_11078 = (state_11178[(7)]);
var inst_11080 = cljs.core.chunked_seq_QMARK_(inst_11078);
var state_11178__$1 = state_11178;
if(inst_11080){
var statearr_11257_12781 = state_11178__$1;
(statearr_11257_12781[(1)] = (19));

} else {
var statearr_11258_12783 = state_11178__$1;
(statearr_11258_12783[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (38))){
var inst_11157 = (state_11178[(2)]);
var state_11178__$1 = state_11178;
var statearr_11259_12784 = state_11178__$1;
(statearr_11259_12784[(2)] = inst_11157);

(statearr_11259_12784[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (30))){
var state_11178__$1 = state_11178;
var statearr_11260_12785 = state_11178__$1;
(statearr_11260_12785[(2)] = null);

(statearr_11260_12785[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (10))){
var inst_11057 = (state_11178[(13)]);
var inst_11059 = (state_11178[(17)]);
var inst_11067 = cljs.core._nth(inst_11057,inst_11059);
var inst_11068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11067,(0),null);
var inst_11069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11067,(1),null);
var state_11178__$1 = (function (){var statearr_11261 = state_11178;
(statearr_11261[(24)] = inst_11068);

return statearr_11261;
})();
if(cljs.core.truth_(inst_11069)){
var statearr_11266_12787 = state_11178__$1;
(statearr_11266_12787[(1)] = (13));

} else {
var statearr_11267_12788 = state_11178__$1;
(statearr_11267_12788[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (18))){
var inst_11104 = (state_11178[(2)]);
var state_11178__$1 = state_11178;
var statearr_11272_12789 = state_11178__$1;
(statearr_11272_12789[(2)] = inst_11104);

(statearr_11272_12789[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (42))){
var state_11178__$1 = state_11178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11178__$1,(45),dchan);
} else {
if((state_val_11179 === (37))){
var inst_11138 = (state_11178[(23)]);
var inst_11147 = (state_11178[(22)]);
var inst_11047 = (state_11178[(11)]);
var inst_11147__$1 = cljs.core.first(inst_11138);
var inst_11148 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11147__$1,inst_11047,done);
var state_11178__$1 = (function (){var statearr_11277 = state_11178;
(statearr_11277[(22)] = inst_11147__$1);

return statearr_11277;
})();
if(cljs.core.truth_(inst_11148)){
var statearr_11278_12791 = state_11178__$1;
(statearr_11278_12791[(1)] = (39));

} else {
var statearr_11279_12792 = state_11178__$1;
(statearr_11279_12792[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (8))){
var inst_11058 = (state_11178[(14)]);
var inst_11059 = (state_11178[(17)]);
var inst_11061 = (inst_11059 < inst_11058);
var inst_11062 = inst_11061;
var state_11178__$1 = state_11178;
if(cljs.core.truth_(inst_11062)){
var statearr_11280_12794 = state_11178__$1;
(statearr_11280_12794[(1)] = (10));

} else {
var statearr_11281_12795 = state_11178__$1;
(statearr_11281_12795[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__10243__auto__ = null;
var cljs$core$async$mult_$_state_machine__10243__auto____0 = (function (){
var statearr_11284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11284[(0)] = cljs$core$async$mult_$_state_machine__10243__auto__);

(statearr_11284[(1)] = (1));

return statearr_11284;
});
var cljs$core$async$mult_$_state_machine__10243__auto____1 = (function (state_11178){
while(true){
var ret_value__10244__auto__ = (function (){try{while(true){
var result__10245__auto__ = switch__10242__auto__(state_11178);
if(cljs.core.keyword_identical_QMARK_(result__10245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10245__auto__;
}
break;
}
}catch (e11285){var ex__10246__auto__ = e11285;
var statearr_11286_12796 = state_11178;
(statearr_11286_12796[(2)] = ex__10246__auto__);


if(cljs.core.seq((state_11178[(4)]))){
var statearr_11287_12798 = state_11178;
(statearr_11287_12798[(1)] = cljs.core.first((state_11178[(4)])));

} else {
throw ex__10246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12799 = state_11178;
state_11178 = G__12799;
continue;
} else {
return ret_value__10244__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10243__auto__ = function(state_11178){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10243__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10243__auto____1.call(this,state_11178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10243__auto____0;
cljs$core$async$mult_$_state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10243__auto____1;
return cljs$core$async$mult_$_state_machine__10243__auto__;
})()
})();
var state__10377__auto__ = (function (){var statearr_11289 = f__10376__auto__();
(statearr_11289[(6)] = c__10375__auto___12723);

return statearr_11289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10377__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__11291 = arguments.length;
switch (G__11291) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_12801 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_12801(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_12802 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_12802(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_12803 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_12803(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_12804 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_12804(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_12805 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_12805(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___12806 = arguments.length;
var i__4737__auto___12807 = (0);
while(true){
if((i__4737__auto___12807 < len__4736__auto___12806)){
args__4742__auto__.push((arguments[i__4737__auto___12807]));

var G__12808 = (i__4737__auto___12807 + (1));
i__4737__auto___12807 = G__12808;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11324){
var map__11325 = p__11324;
var map__11325__$1 = (((((!((map__11325 == null))))?(((((map__11325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11325):map__11325);
var opts = map__11325__$1;
var statearr_11327_12809 = state;
(statearr_11327_12809[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_11330_12810 = state;
(statearr_11330_12810[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11331_12811 = state;
(statearr_11331_12811[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11319){
var G__11320 = cljs.core.first(seq11319);
var seq11319__$1 = cljs.core.next(seq11319);
var G__11321 = cljs.core.first(seq11319__$1);
var seq11319__$2 = cljs.core.next(seq11319__$1);
var G__11322 = cljs.core.first(seq11319__$2);
var seq11319__$3 = cljs.core.next(seq11319__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11320,G__11321,G__11322,seq11319__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11334 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11334 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11335){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11335 = meta11335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11336,meta11335__$1){
var self__ = this;
var _11336__$1 = this;
return (new cljs.core.async.t_cljs$core$async11334(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11335__$1));
}));

(cljs.core.async.t_cljs$core$async11334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11336){
var self__ = this;
var _11336__$1 = this;
return self__.meta11335;
}));

(cljs.core.async.t_cljs$core$async11334.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11334.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11334.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11334.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11334.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11334.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11334.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11334.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async11334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11335","meta11335",258173501,null)], null);
}));

(cljs.core.async.t_cljs$core$async11334.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11334");

(cljs.core.async.t_cljs$core$async11334.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11334");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11334.
 */
cljs.core.async.__GT_t_cljs$core$async11334 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11334(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11335){
return (new cljs.core.async.t_cljs$core$async11334(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11335));
});

}

return (new cljs.core.async.t_cljs$core$async11334(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10375__auto___12812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10376__auto__ = (function (){var switch__10242__auto__ = (function (state_11446){
var state_val_11447 = (state_11446[(1)]);
if((state_val_11447 === (7))){
var inst_11355 = (state_11446[(2)]);
var state_11446__$1 = state_11446;
var statearr_11448_12813 = state_11446__$1;
(statearr_11448_12813[(2)] = inst_11355);

(statearr_11448_12813[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (20))){
var inst_11367 = (state_11446[(7)]);
var state_11446__$1 = state_11446;
var statearr_11449_12814 = state_11446__$1;
(statearr_11449_12814[(2)] = inst_11367);

(statearr_11449_12814[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (27))){
var state_11446__$1 = state_11446;
var statearr_11450_12815 = state_11446__$1;
(statearr_11450_12815[(2)] = null);

(statearr_11450_12815[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (1))){
var inst_11342 = (state_11446[(8)]);
var inst_11342__$1 = calc_state();
var inst_11344 = (inst_11342__$1 == null);
var inst_11345 = cljs.core.not(inst_11344);
var state_11446__$1 = (function (){var statearr_11451 = state_11446;
(statearr_11451[(8)] = inst_11342__$1);

return statearr_11451;
})();
if(inst_11345){
var statearr_11452_12816 = state_11446__$1;
(statearr_11452_12816[(1)] = (2));

} else {
var statearr_11453_12817 = state_11446__$1;
(statearr_11453_12817[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (24))){
var inst_11406 = (state_11446[(9)]);
var inst_11420 = (state_11446[(10)]);
var inst_11395 = (state_11446[(11)]);
var inst_11420__$1 = (inst_11395.cljs$core$IFn$_invoke$arity$1 ? inst_11395.cljs$core$IFn$_invoke$arity$1(inst_11406) : inst_11395.call(null,inst_11406));
var state_11446__$1 = (function (){var statearr_11456 = state_11446;
(statearr_11456[(10)] = inst_11420__$1);

return statearr_11456;
})();
if(cljs.core.truth_(inst_11420__$1)){
var statearr_11457_12818 = state_11446__$1;
(statearr_11457_12818[(1)] = (29));

} else {
var statearr_11460_12819 = state_11446__$1;
(statearr_11460_12819[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (4))){
var inst_11358 = (state_11446[(2)]);
var state_11446__$1 = state_11446;
if(cljs.core.truth_(inst_11358)){
var statearr_11461_12820 = state_11446__$1;
(statearr_11461_12820[(1)] = (8));

} else {
var statearr_11464_12821 = state_11446__$1;
(statearr_11464_12821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (15))){
var inst_11389 = (state_11446[(2)]);
var state_11446__$1 = state_11446;
if(cljs.core.truth_(inst_11389)){
var statearr_11465_12822 = state_11446__$1;
(statearr_11465_12822[(1)] = (19));

} else {
var statearr_11466_12823 = state_11446__$1;
(statearr_11466_12823[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (21))){
var inst_11394 = (state_11446[(12)]);
var inst_11394__$1 = (state_11446[(2)]);
var inst_11395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11394__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11394__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11394__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11446__$1 = (function (){var statearr_11467 = state_11446;
(statearr_11467[(13)] = inst_11396);

(statearr_11467[(12)] = inst_11394__$1);

(statearr_11467[(11)] = inst_11395);

return statearr_11467;
})();
return cljs.core.async.ioc_alts_BANG_(state_11446__$1,(22),inst_11397);
} else {
if((state_val_11447 === (31))){
var inst_11428 = (state_11446[(2)]);
var state_11446__$1 = state_11446;
if(cljs.core.truth_(inst_11428)){
var statearr_11468_12824 = state_11446__$1;
(statearr_11468_12824[(1)] = (32));

} else {
var statearr_11469_12825 = state_11446__$1;
(statearr_11469_12825[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (32))){
var inst_11405 = (state_11446[(14)]);
var state_11446__$1 = state_11446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11446__$1,(35),out,inst_11405);
} else {
if((state_val_11447 === (33))){
var inst_11394 = (state_11446[(12)]);
var inst_11367 = inst_11394;
var state_11446__$1 = (function (){var statearr_11470 = state_11446;
(statearr_11470[(7)] = inst_11367);

return statearr_11470;
})();
var statearr_11471_12826 = state_11446__$1;
(statearr_11471_12826[(2)] = null);

(statearr_11471_12826[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (13))){
var inst_11367 = (state_11446[(7)]);
var inst_11376 = inst_11367.cljs$lang$protocol_mask$partition0$;
var inst_11377 = (inst_11376 & (64));
var inst_11380 = inst_11367.cljs$core$ISeq$;
var inst_11381 = (cljs.core.PROTOCOL_SENTINEL === inst_11380);
var inst_11382 = ((inst_11377) || (inst_11381));
var state_11446__$1 = state_11446;
if(cljs.core.truth_(inst_11382)){
var statearr_11472_12827 = state_11446__$1;
(statearr_11472_12827[(1)] = (16));

} else {
var statearr_11473_12828 = state_11446__$1;
(statearr_11473_12828[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (22))){
var inst_11406 = (state_11446[(9)]);
var inst_11405 = (state_11446[(14)]);
var inst_11404 = (state_11446[(2)]);
var inst_11405__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11404,(0),null);
var inst_11406__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11404,(1),null);
var inst_11407 = (inst_11405__$1 == null);
var inst_11408 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11406__$1,change);
var inst_11409 = ((inst_11407) || (inst_11408));
var state_11446__$1 = (function (){var statearr_11474 = state_11446;
(statearr_11474[(9)] = inst_11406__$1);

(statearr_11474[(14)] = inst_11405__$1);

return statearr_11474;
})();
if(cljs.core.truth_(inst_11409)){
var statearr_11475_12829 = state_11446__$1;
(statearr_11475_12829[(1)] = (23));

} else {
var statearr_11476_12830 = state_11446__$1;
(statearr_11476_12830[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (36))){
var inst_11394 = (state_11446[(12)]);
var inst_11367 = inst_11394;
var state_11446__$1 = (function (){var statearr_11477 = state_11446;
(statearr_11477[(7)] = inst_11367);

return statearr_11477;
})();
var statearr_11478_12831 = state_11446__$1;
(statearr_11478_12831[(2)] = null);

(statearr_11478_12831[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (29))){
var inst_11420 = (state_11446[(10)]);
var state_11446__$1 = state_11446;
var statearr_11485_12832 = state_11446__$1;
(statearr_11485_12832[(2)] = inst_11420);

(statearr_11485_12832[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (6))){
var state_11446__$1 = state_11446;
var statearr_11486_12833 = state_11446__$1;
(statearr_11486_12833[(2)] = false);

(statearr_11486_12833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (28))){
var inst_11416 = (state_11446[(2)]);
var inst_11417 = calc_state();
var inst_11367 = inst_11417;
var state_11446__$1 = (function (){var statearr_11487 = state_11446;
(statearr_11487[(15)] = inst_11416);

(statearr_11487[(7)] = inst_11367);

return statearr_11487;
})();
var statearr_11488_12834 = state_11446__$1;
(statearr_11488_12834[(2)] = null);

(statearr_11488_12834[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (25))){
var inst_11442 = (state_11446[(2)]);
var state_11446__$1 = state_11446;
var statearr_11489_12835 = state_11446__$1;
(statearr_11489_12835[(2)] = inst_11442);

(statearr_11489_12835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (34))){
var inst_11440 = (state_11446[(2)]);
var state_11446__$1 = state_11446;
var statearr_11490_12836 = state_11446__$1;
(statearr_11490_12836[(2)] = inst_11440);

(statearr_11490_12836[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (17))){
var state_11446__$1 = state_11446;
var statearr_11491_12837 = state_11446__$1;
(statearr_11491_12837[(2)] = false);

(statearr_11491_12837[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (3))){
var state_11446__$1 = state_11446;
var statearr_11492_12838 = state_11446__$1;
(statearr_11492_12838[(2)] = false);

(statearr_11492_12838[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (12))){
var inst_11444 = (state_11446[(2)]);
var state_11446__$1 = state_11446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11446__$1,inst_11444);
} else {
if((state_val_11447 === (2))){
var inst_11342 = (state_11446[(8)]);
var inst_11347 = inst_11342.cljs$lang$protocol_mask$partition0$;
var inst_11348 = (inst_11347 & (64));
var inst_11349 = inst_11342.cljs$core$ISeq$;
var inst_11350 = (cljs.core.PROTOCOL_SENTINEL === inst_11349);
var inst_11351 = ((inst_11348) || (inst_11350));
var state_11446__$1 = state_11446;
if(cljs.core.truth_(inst_11351)){
var statearr_11493_12839 = state_11446__$1;
(statearr_11493_12839[(1)] = (5));

} else {
var statearr_11494_12840 = state_11446__$1;
(statearr_11494_12840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (23))){
var inst_11405 = (state_11446[(14)]);
var inst_11411 = (inst_11405 == null);
var state_11446__$1 = state_11446;
if(cljs.core.truth_(inst_11411)){
var statearr_11495_12841 = state_11446__$1;
(statearr_11495_12841[(1)] = (26));

} else {
var statearr_11496_12842 = state_11446__$1;
(statearr_11496_12842[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (35))){
var inst_11431 = (state_11446[(2)]);
var state_11446__$1 = state_11446;
if(cljs.core.truth_(inst_11431)){
var statearr_11497_12843 = state_11446__$1;
(statearr_11497_12843[(1)] = (36));

} else {
var statearr_11500_12844 = state_11446__$1;
(statearr_11500_12844[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (19))){
var inst_11367 = (state_11446[(7)]);
var inst_11391 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11367);
var state_11446__$1 = state_11446;
var statearr_11503_12845 = state_11446__$1;
(statearr_11503_12845[(2)] = inst_11391);

(statearr_11503_12845[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (11))){
var inst_11367 = (state_11446[(7)]);
var inst_11371 = (inst_11367 == null);
var inst_11372 = cljs.core.not(inst_11371);
var state_11446__$1 = state_11446;
if(inst_11372){
var statearr_11504_12846 = state_11446__$1;
(statearr_11504_12846[(1)] = (13));

} else {
var statearr_11505_12847 = state_11446__$1;
(statearr_11505_12847[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (9))){
var inst_11342 = (state_11446[(8)]);
var state_11446__$1 = state_11446;
var statearr_11506_12848 = state_11446__$1;
(statearr_11506_12848[(2)] = inst_11342);

(statearr_11506_12848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (5))){
var state_11446__$1 = state_11446;
var statearr_11507_12849 = state_11446__$1;
(statearr_11507_12849[(2)] = true);

(statearr_11507_12849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (14))){
var state_11446__$1 = state_11446;
var statearr_11508_12850 = state_11446__$1;
(statearr_11508_12850[(2)] = false);

(statearr_11508_12850[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (26))){
var inst_11406 = (state_11446[(9)]);
var inst_11413 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11406);
var state_11446__$1 = state_11446;
var statearr_11509_12851 = state_11446__$1;
(statearr_11509_12851[(2)] = inst_11413);

(statearr_11509_12851[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (16))){
var state_11446__$1 = state_11446;
var statearr_11510_12852 = state_11446__$1;
(statearr_11510_12852[(2)] = true);

(statearr_11510_12852[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (38))){
var inst_11436 = (state_11446[(2)]);
var state_11446__$1 = state_11446;
var statearr_11511_12853 = state_11446__$1;
(statearr_11511_12853[(2)] = inst_11436);

(statearr_11511_12853[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (30))){
var inst_11396 = (state_11446[(13)]);
var inst_11406 = (state_11446[(9)]);
var inst_11395 = (state_11446[(11)]);
var inst_11423 = cljs.core.empty_QMARK_(inst_11395);
var inst_11424 = (inst_11396.cljs$core$IFn$_invoke$arity$1 ? inst_11396.cljs$core$IFn$_invoke$arity$1(inst_11406) : inst_11396.call(null,inst_11406));
var inst_11425 = cljs.core.not(inst_11424);
var inst_11426 = ((inst_11423) && (inst_11425));
var state_11446__$1 = state_11446;
var statearr_11513_12854 = state_11446__$1;
(statearr_11513_12854[(2)] = inst_11426);

(statearr_11513_12854[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (10))){
var inst_11342 = (state_11446[(8)]);
var inst_11363 = (state_11446[(2)]);
var inst_11364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11363,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11363,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11363,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11367 = inst_11342;
var state_11446__$1 = (function (){var statearr_11514 = state_11446;
(statearr_11514[(16)] = inst_11364);

(statearr_11514[(17)] = inst_11366);

(statearr_11514[(18)] = inst_11365);

(statearr_11514[(7)] = inst_11367);

return statearr_11514;
})();
var statearr_11515_12855 = state_11446__$1;
(statearr_11515_12855[(2)] = null);

(statearr_11515_12855[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (18))){
var inst_11386 = (state_11446[(2)]);
var state_11446__$1 = state_11446;
var statearr_11516_12856 = state_11446__$1;
(statearr_11516_12856[(2)] = inst_11386);

(statearr_11516_12856[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (37))){
var state_11446__$1 = state_11446;
var statearr_11517_12857 = state_11446__$1;
(statearr_11517_12857[(2)] = null);

(statearr_11517_12857[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (8))){
var inst_11342 = (state_11446[(8)]);
var inst_11360 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11342);
var state_11446__$1 = state_11446;
var statearr_11518_12858 = state_11446__$1;
(statearr_11518_12858[(2)] = inst_11360);

(statearr_11518_12858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__10243__auto__ = null;
var cljs$core$async$mix_$_state_machine__10243__auto____0 = (function (){
var statearr_11519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11519[(0)] = cljs$core$async$mix_$_state_machine__10243__auto__);

(statearr_11519[(1)] = (1));

return statearr_11519;
});
var cljs$core$async$mix_$_state_machine__10243__auto____1 = (function (state_11446){
while(true){
var ret_value__10244__auto__ = (function (){try{while(true){
var result__10245__auto__ = switch__10242__auto__(state_11446);
if(cljs.core.keyword_identical_QMARK_(result__10245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10245__auto__;
}
break;
}
}catch (e11520){var ex__10246__auto__ = e11520;
var statearr_11521_12859 = state_11446;
(statearr_11521_12859[(2)] = ex__10246__auto__);


if(cljs.core.seq((state_11446[(4)]))){
var statearr_11522_12860 = state_11446;
(statearr_11522_12860[(1)] = cljs.core.first((state_11446[(4)])));

} else {
throw ex__10246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12861 = state_11446;
state_11446 = G__12861;
continue;
} else {
return ret_value__10244__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10243__auto__ = function(state_11446){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10243__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10243__auto____1.call(this,state_11446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10243__auto____0;
cljs$core$async$mix_$_state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10243__auto____1;
return cljs$core$async$mix_$_state_machine__10243__auto__;
})()
})();
var state__10377__auto__ = (function (){var statearr_11523 = f__10376__auto__();
(statearr_11523[(6)] = c__10375__auto___12812);

return statearr_11523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10377__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_12862 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_12862(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_12863 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_12863(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_12864 = (function() {
var G__12865 = null;
var G__12865__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__12865__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__12865 = function(p,v){
switch(arguments.length){
case 1:
return G__12865__1.call(this,p);
case 2:
return G__12865__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12865.cljs$core$IFn$_invoke$arity$1 = G__12865__1;
G__12865.cljs$core$IFn$_invoke$arity$2 = G__12865__2;
return G__12865;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__11528 = arguments.length;
switch (G__11528) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12864(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12864(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__11536 = arguments.length;
switch (G__11536) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__11532_SHARP_){
if(cljs.core.truth_((p1__11532_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11532_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11532_SHARP_.call(null,topic)))){
return p1__11532_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11532_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11537 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11537 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11538){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11538 = meta11538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11539,meta11538__$1){
var self__ = this;
var _11539__$1 = this;
return (new cljs.core.async.t_cljs$core$async11537(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11538__$1));
}));

(cljs.core.async.t_cljs$core$async11537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11539){
var self__ = this;
var _11539__$1 = this;
return self__.meta11538;
}));

(cljs.core.async.t_cljs$core$async11537.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11537.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11537.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11537.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async11537.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async11537.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async11537.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async11537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11538","meta11538",744130448,null)], null);
}));

(cljs.core.async.t_cljs$core$async11537.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11537");

(cljs.core.async.t_cljs$core$async11537.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11537");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11537.
 */
cljs.core.async.__GT_t_cljs$core$async11537 = (function cljs$core$async$__GT_t_cljs$core$async11537(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11538){
return (new cljs.core.async.t_cljs$core$async11537(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11538));
});

}

return (new cljs.core.async.t_cljs$core$async11537(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10375__auto___12869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10376__auto__ = (function (){var switch__10242__auto__ = (function (state_11626){
var state_val_11627 = (state_11626[(1)]);
if((state_val_11627 === (7))){
var inst_11622 = (state_11626[(2)]);
var state_11626__$1 = state_11626;
var statearr_11628_12870 = state_11626__$1;
(statearr_11628_12870[(2)] = inst_11622);

(statearr_11628_12870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (20))){
var state_11626__$1 = state_11626;
var statearr_11629_12871 = state_11626__$1;
(statearr_11629_12871[(2)] = null);

(statearr_11629_12871[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (1))){
var state_11626__$1 = state_11626;
var statearr_11630_12872 = state_11626__$1;
(statearr_11630_12872[(2)] = null);

(statearr_11630_12872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (24))){
var inst_11601 = (state_11626[(7)]);
var inst_11614 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_11601);
var state_11626__$1 = state_11626;
var statearr_11631_12874 = state_11626__$1;
(statearr_11631_12874[(2)] = inst_11614);

(statearr_11631_12874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (4))){
var inst_11545 = (state_11626[(8)]);
var inst_11545__$1 = (state_11626[(2)]);
var inst_11546 = (inst_11545__$1 == null);
var state_11626__$1 = (function (){var statearr_11632 = state_11626;
(statearr_11632[(8)] = inst_11545__$1);

return statearr_11632;
})();
if(cljs.core.truth_(inst_11546)){
var statearr_11633_12875 = state_11626__$1;
(statearr_11633_12875[(1)] = (5));

} else {
var statearr_11634_12876 = state_11626__$1;
(statearr_11634_12876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (15))){
var inst_11595 = (state_11626[(2)]);
var state_11626__$1 = state_11626;
var statearr_11635_12877 = state_11626__$1;
(statearr_11635_12877[(2)] = inst_11595);

(statearr_11635_12877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (21))){
var inst_11619 = (state_11626[(2)]);
var state_11626__$1 = (function (){var statearr_11636 = state_11626;
(statearr_11636[(9)] = inst_11619);

return statearr_11636;
})();
var statearr_11637_12878 = state_11626__$1;
(statearr_11637_12878[(2)] = null);

(statearr_11637_12878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (13))){
var inst_11569 = (state_11626[(10)]);
var inst_11571 = cljs.core.chunked_seq_QMARK_(inst_11569);
var state_11626__$1 = state_11626;
if(inst_11571){
var statearr_11638_12879 = state_11626__$1;
(statearr_11638_12879[(1)] = (16));

} else {
var statearr_11639_12880 = state_11626__$1;
(statearr_11639_12880[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (22))){
var inst_11611 = (state_11626[(2)]);
var state_11626__$1 = state_11626;
if(cljs.core.truth_(inst_11611)){
var statearr_11640_12881 = state_11626__$1;
(statearr_11640_12881[(1)] = (23));

} else {
var statearr_11641_12882 = state_11626__$1;
(statearr_11641_12882[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (6))){
var inst_11601 = (state_11626[(7)]);
var inst_11545 = (state_11626[(8)]);
var inst_11603 = (state_11626[(11)]);
var inst_11601__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_11545) : topic_fn.call(null,inst_11545));
var inst_11602 = cljs.core.deref(mults);
var inst_11603__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11602,inst_11601__$1);
var state_11626__$1 = (function (){var statearr_11642 = state_11626;
(statearr_11642[(7)] = inst_11601__$1);

(statearr_11642[(11)] = inst_11603__$1);

return statearr_11642;
})();
if(cljs.core.truth_(inst_11603__$1)){
var statearr_11643_12883 = state_11626__$1;
(statearr_11643_12883[(1)] = (19));

} else {
var statearr_11644_12884 = state_11626__$1;
(statearr_11644_12884[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (25))){
var inst_11616 = (state_11626[(2)]);
var state_11626__$1 = state_11626;
var statearr_11647_12887 = state_11626__$1;
(statearr_11647_12887[(2)] = inst_11616);

(statearr_11647_12887[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (17))){
var inst_11569 = (state_11626[(10)]);
var inst_11582 = cljs.core.first(inst_11569);
var inst_11583 = cljs.core.async.muxch_STAR_(inst_11582);
var inst_11584 = cljs.core.async.close_BANG_(inst_11583);
var inst_11589 = cljs.core.next(inst_11569);
var inst_11555 = inst_11589;
var inst_11556 = null;
var inst_11557 = (0);
var inst_11558 = (0);
var state_11626__$1 = (function (){var statearr_11649 = state_11626;
(statearr_11649[(12)] = inst_11556);

(statearr_11649[(13)] = inst_11557);

(statearr_11649[(14)] = inst_11584);

(statearr_11649[(15)] = inst_11555);

(statearr_11649[(16)] = inst_11558);

return statearr_11649;
})();
var statearr_11650_12892 = state_11626__$1;
(statearr_11650_12892[(2)] = null);

(statearr_11650_12892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (3))){
var inst_11624 = (state_11626[(2)]);
var state_11626__$1 = state_11626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11626__$1,inst_11624);
} else {
if((state_val_11627 === (12))){
var inst_11597 = (state_11626[(2)]);
var state_11626__$1 = state_11626;
var statearr_11651_12893 = state_11626__$1;
(statearr_11651_12893[(2)] = inst_11597);

(statearr_11651_12893[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (2))){
var state_11626__$1 = state_11626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11626__$1,(4),ch);
} else {
if((state_val_11627 === (23))){
var state_11626__$1 = state_11626;
var statearr_11652_12894 = state_11626__$1;
(statearr_11652_12894[(2)] = null);

(statearr_11652_12894[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (19))){
var inst_11545 = (state_11626[(8)]);
var inst_11603 = (state_11626[(11)]);
var inst_11609 = cljs.core.async.muxch_STAR_(inst_11603);
var state_11626__$1 = state_11626;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11626__$1,(22),inst_11609,inst_11545);
} else {
if((state_val_11627 === (11))){
var inst_11555 = (state_11626[(15)]);
var inst_11569 = (state_11626[(10)]);
var inst_11569__$1 = cljs.core.seq(inst_11555);
var state_11626__$1 = (function (){var statearr_11655 = state_11626;
(statearr_11655[(10)] = inst_11569__$1);

return statearr_11655;
})();
if(inst_11569__$1){
var statearr_11656_12897 = state_11626__$1;
(statearr_11656_12897[(1)] = (13));

} else {
var statearr_11657_12898 = state_11626__$1;
(statearr_11657_12898[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (9))){
var inst_11599 = (state_11626[(2)]);
var state_11626__$1 = state_11626;
var statearr_11660_12899 = state_11626__$1;
(statearr_11660_12899[(2)] = inst_11599);

(statearr_11660_12899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (5))){
var inst_11552 = cljs.core.deref(mults);
var inst_11553 = cljs.core.vals(inst_11552);
var inst_11554 = cljs.core.seq(inst_11553);
var inst_11555 = inst_11554;
var inst_11556 = null;
var inst_11557 = (0);
var inst_11558 = (0);
var state_11626__$1 = (function (){var statearr_11663 = state_11626;
(statearr_11663[(12)] = inst_11556);

(statearr_11663[(13)] = inst_11557);

(statearr_11663[(15)] = inst_11555);

(statearr_11663[(16)] = inst_11558);

return statearr_11663;
})();
var statearr_11664_12900 = state_11626__$1;
(statearr_11664_12900[(2)] = null);

(statearr_11664_12900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (14))){
var state_11626__$1 = state_11626;
var statearr_11668_12901 = state_11626__$1;
(statearr_11668_12901[(2)] = null);

(statearr_11668_12901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (16))){
var inst_11569 = (state_11626[(10)]);
var inst_11577 = cljs.core.chunk_first(inst_11569);
var inst_11578 = cljs.core.chunk_rest(inst_11569);
var inst_11579 = cljs.core.count(inst_11577);
var inst_11555 = inst_11578;
var inst_11556 = inst_11577;
var inst_11557 = inst_11579;
var inst_11558 = (0);
var state_11626__$1 = (function (){var statearr_11671 = state_11626;
(statearr_11671[(12)] = inst_11556);

(statearr_11671[(13)] = inst_11557);

(statearr_11671[(15)] = inst_11555);

(statearr_11671[(16)] = inst_11558);

return statearr_11671;
})();
var statearr_11672_12911 = state_11626__$1;
(statearr_11672_12911[(2)] = null);

(statearr_11672_12911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (10))){
var inst_11556 = (state_11626[(12)]);
var inst_11557 = (state_11626[(13)]);
var inst_11555 = (state_11626[(15)]);
var inst_11558 = (state_11626[(16)]);
var inst_11563 = cljs.core._nth(inst_11556,inst_11558);
var inst_11564 = cljs.core.async.muxch_STAR_(inst_11563);
var inst_11565 = cljs.core.async.close_BANG_(inst_11564);
var inst_11566 = (inst_11558 + (1));
var tmp11665 = inst_11556;
var tmp11666 = inst_11557;
var tmp11667 = inst_11555;
var inst_11555__$1 = tmp11667;
var inst_11556__$1 = tmp11665;
var inst_11557__$1 = tmp11666;
var inst_11558__$1 = inst_11566;
var state_11626__$1 = (function (){var statearr_11673 = state_11626;
(statearr_11673[(12)] = inst_11556__$1);

(statearr_11673[(13)] = inst_11557__$1);

(statearr_11673[(15)] = inst_11555__$1);

(statearr_11673[(16)] = inst_11558__$1);

(statearr_11673[(17)] = inst_11565);

return statearr_11673;
})();
var statearr_11674_12917 = state_11626__$1;
(statearr_11674_12917[(2)] = null);

(statearr_11674_12917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (18))){
var inst_11592 = (state_11626[(2)]);
var state_11626__$1 = state_11626;
var statearr_11675_12918 = state_11626__$1;
(statearr_11675_12918[(2)] = inst_11592);

(statearr_11675_12918[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (8))){
var inst_11557 = (state_11626[(13)]);
var inst_11558 = (state_11626[(16)]);
var inst_11560 = (inst_11558 < inst_11557);
var inst_11561 = inst_11560;
var state_11626__$1 = state_11626;
if(cljs.core.truth_(inst_11561)){
var statearr_11676_12919 = state_11626__$1;
(statearr_11676_12919[(1)] = (10));

} else {
var statearr_11677_12920 = state_11626__$1;
(statearr_11677_12920[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10243__auto__ = null;
var cljs$core$async$state_machine__10243__auto____0 = (function (){
var statearr_11678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11678[(0)] = cljs$core$async$state_machine__10243__auto__);

(statearr_11678[(1)] = (1));

return statearr_11678;
});
var cljs$core$async$state_machine__10243__auto____1 = (function (state_11626){
while(true){
var ret_value__10244__auto__ = (function (){try{while(true){
var result__10245__auto__ = switch__10242__auto__(state_11626);
if(cljs.core.keyword_identical_QMARK_(result__10245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10245__auto__;
}
break;
}
}catch (e11680){var ex__10246__auto__ = e11680;
var statearr_11681_12921 = state_11626;
(statearr_11681_12921[(2)] = ex__10246__auto__);


if(cljs.core.seq((state_11626[(4)]))){
var statearr_11682_12922 = state_11626;
(statearr_11682_12922[(1)] = cljs.core.first((state_11626[(4)])));

} else {
throw ex__10246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12923 = state_11626;
state_11626 = G__12923;
continue;
} else {
return ret_value__10244__auto__;
}
break;
}
});
cljs$core$async$state_machine__10243__auto__ = function(state_11626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10243__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10243__auto____1.call(this,state_11626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10243__auto____0;
cljs$core$async$state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10243__auto____1;
return cljs$core$async$state_machine__10243__auto__;
})()
})();
var state__10377__auto__ = (function (){var statearr_11683 = f__10376__auto__();
(statearr_11683[(6)] = c__10375__auto___12869);

return statearr_11683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10377__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__11687 = arguments.length;
switch (G__11687) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__11691 = arguments.length;
switch (G__11691) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__11693 = arguments.length;
switch (G__11693) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__10375__auto___12931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10376__auto__ = (function (){var switch__10242__auto__ = (function (state_11736){
var state_val_11737 = (state_11736[(1)]);
if((state_val_11737 === (7))){
var state_11736__$1 = state_11736;
var statearr_11738_12932 = state_11736__$1;
(statearr_11738_12932[(2)] = null);

(statearr_11738_12932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11737 === (1))){
var state_11736__$1 = state_11736;
var statearr_11739_12933 = state_11736__$1;
(statearr_11739_12933[(2)] = null);

(statearr_11739_12933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11737 === (4))){
var inst_11696 = (state_11736[(7)]);
var inst_11697 = (state_11736[(8)]);
var inst_11699 = (inst_11697 < inst_11696);
var state_11736__$1 = state_11736;
if(cljs.core.truth_(inst_11699)){
var statearr_11741_12934 = state_11736__$1;
(statearr_11741_12934[(1)] = (6));

} else {
var statearr_11742_12935 = state_11736__$1;
(statearr_11742_12935[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11737 === (15))){
var inst_11722 = (state_11736[(9)]);
var inst_11727 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_11722);
var state_11736__$1 = state_11736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11736__$1,(17),out,inst_11727);
} else {
if((state_val_11737 === (13))){
var inst_11722 = (state_11736[(9)]);
var inst_11722__$1 = (state_11736[(2)]);
var inst_11723 = cljs.core.some(cljs.core.nil_QMARK_,inst_11722__$1);
var state_11736__$1 = (function (){var statearr_11745 = state_11736;
(statearr_11745[(9)] = inst_11722__$1);

return statearr_11745;
})();
if(cljs.core.truth_(inst_11723)){
var statearr_11746_12936 = state_11736__$1;
(statearr_11746_12936[(1)] = (14));

} else {
var statearr_11747_12937 = state_11736__$1;
(statearr_11747_12937[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11737 === (6))){
var state_11736__$1 = state_11736;
var statearr_11748_12938 = state_11736__$1;
(statearr_11748_12938[(2)] = null);

(statearr_11748_12938[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11737 === (17))){
var inst_11729 = (state_11736[(2)]);
var state_11736__$1 = (function (){var statearr_11750 = state_11736;
(statearr_11750[(10)] = inst_11729);

return statearr_11750;
})();
var statearr_11751_12939 = state_11736__$1;
(statearr_11751_12939[(2)] = null);

(statearr_11751_12939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11737 === (3))){
var inst_11734 = (state_11736[(2)]);
var state_11736__$1 = state_11736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11736__$1,inst_11734);
} else {
if((state_val_11737 === (12))){
var _ = (function (){var statearr_11752 = state_11736;
(statearr_11752[(4)] = cljs.core.rest((state_11736[(4)])));

return statearr_11752;
})();
var state_11736__$1 = state_11736;
var ex11749 = (state_11736__$1[(2)]);
var statearr_11753_12940 = state_11736__$1;
(statearr_11753_12940[(5)] = ex11749);


if((ex11749 instanceof Object)){
var statearr_11754_12941 = state_11736__$1;
(statearr_11754_12941[(1)] = (11));

(statearr_11754_12941[(5)] = null);

} else {
throw ex11749;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11737 === (2))){
var inst_11695 = cljs.core.reset_BANG_(dctr,cnt);
var inst_11696 = cnt;
var inst_11697 = (0);
var state_11736__$1 = (function (){var statearr_11755 = state_11736;
(statearr_11755[(11)] = inst_11695);

(statearr_11755[(7)] = inst_11696);

(statearr_11755[(8)] = inst_11697);

return statearr_11755;
})();
var statearr_11756_12942 = state_11736__$1;
(statearr_11756_12942[(2)] = null);

(statearr_11756_12942[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11737 === (11))){
var inst_11701 = (state_11736[(2)]);
var inst_11702 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_11736__$1 = (function (){var statearr_11757 = state_11736;
(statearr_11757[(12)] = inst_11701);

return statearr_11757;
})();
var statearr_11758_12943 = state_11736__$1;
(statearr_11758_12943[(2)] = inst_11702);

(statearr_11758_12943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11737 === (9))){
var inst_11697 = (state_11736[(8)]);
var _ = (function (){var statearr_11760 = state_11736;
(statearr_11760[(4)] = cljs.core.cons((12),(state_11736[(4)])));

return statearr_11760;
})();
var inst_11708 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_11697) : chs__$1.call(null,inst_11697));
var inst_11709 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_11697) : done.call(null,inst_11697));
var inst_11710 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_11708,inst_11709);
var ___$1 = (function (){var statearr_11761 = state_11736;
(statearr_11761[(4)] = cljs.core.rest((state_11736[(4)])));

return statearr_11761;
})();
var state_11736__$1 = state_11736;
var statearr_11762_12944 = state_11736__$1;
(statearr_11762_12944[(2)] = inst_11710);

(statearr_11762_12944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11737 === (5))){
var inst_11720 = (state_11736[(2)]);
var state_11736__$1 = (function (){var statearr_11763 = state_11736;
(statearr_11763[(13)] = inst_11720);

return statearr_11763;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11736__$1,(13),dchan);
} else {
if((state_val_11737 === (14))){
var inst_11725 = cljs.core.async.close_BANG_(out);
var state_11736__$1 = state_11736;
var statearr_11764_12945 = state_11736__$1;
(statearr_11764_12945[(2)] = inst_11725);

(statearr_11764_12945[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11737 === (16))){
var inst_11732 = (state_11736[(2)]);
var state_11736__$1 = state_11736;
var statearr_11765_12946 = state_11736__$1;
(statearr_11765_12946[(2)] = inst_11732);

(statearr_11765_12946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11737 === (10))){
var inst_11697 = (state_11736[(8)]);
var inst_11713 = (state_11736[(2)]);
var inst_11714 = (inst_11697 + (1));
var inst_11697__$1 = inst_11714;
var state_11736__$1 = (function (){var statearr_11766 = state_11736;
(statearr_11766[(14)] = inst_11713);

(statearr_11766[(8)] = inst_11697__$1);

return statearr_11766;
})();
var statearr_11769_12947 = state_11736__$1;
(statearr_11769_12947[(2)] = null);

(statearr_11769_12947[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11737 === (8))){
var inst_11718 = (state_11736[(2)]);
var state_11736__$1 = state_11736;
var statearr_11770_12948 = state_11736__$1;
(statearr_11770_12948[(2)] = inst_11718);

(statearr_11770_12948[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10243__auto__ = null;
var cljs$core$async$state_machine__10243__auto____0 = (function (){
var statearr_11772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11772[(0)] = cljs$core$async$state_machine__10243__auto__);

(statearr_11772[(1)] = (1));

return statearr_11772;
});
var cljs$core$async$state_machine__10243__auto____1 = (function (state_11736){
while(true){
var ret_value__10244__auto__ = (function (){try{while(true){
var result__10245__auto__ = switch__10242__auto__(state_11736);
if(cljs.core.keyword_identical_QMARK_(result__10245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10245__auto__;
}
break;
}
}catch (e11773){var ex__10246__auto__ = e11773;
var statearr_11774_12949 = state_11736;
(statearr_11774_12949[(2)] = ex__10246__auto__);


if(cljs.core.seq((state_11736[(4)]))){
var statearr_11775_12950 = state_11736;
(statearr_11775_12950[(1)] = cljs.core.first((state_11736[(4)])));

} else {
throw ex__10246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12951 = state_11736;
state_11736 = G__12951;
continue;
} else {
return ret_value__10244__auto__;
}
break;
}
});
cljs$core$async$state_machine__10243__auto__ = function(state_11736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10243__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10243__auto____1.call(this,state_11736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10243__auto____0;
cljs$core$async$state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10243__auto____1;
return cljs$core$async$state_machine__10243__auto__;
})()
})();
var state__10377__auto__ = (function (){var statearr_11776 = f__10376__auto__();
(statearr_11776[(6)] = c__10375__auto___12931);

return statearr_11776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10377__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__11779 = arguments.length;
switch (G__11779) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10375__auto___12953 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10376__auto__ = (function (){var switch__10242__auto__ = (function (state_11811){
var state_val_11812 = (state_11811[(1)]);
if((state_val_11812 === (7))){
var inst_11791 = (state_11811[(7)]);
var inst_11790 = (state_11811[(8)]);
var inst_11790__$1 = (state_11811[(2)]);
var inst_11791__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11790__$1,(0),null);
var inst_11792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11790__$1,(1),null);
var inst_11793 = (inst_11791__$1 == null);
var state_11811__$1 = (function (){var statearr_11814 = state_11811;
(statearr_11814[(7)] = inst_11791__$1);

(statearr_11814[(9)] = inst_11792);

(statearr_11814[(8)] = inst_11790__$1);

return statearr_11814;
})();
if(cljs.core.truth_(inst_11793)){
var statearr_11815_12954 = state_11811__$1;
(statearr_11815_12954[(1)] = (8));

} else {
var statearr_11816_12955 = state_11811__$1;
(statearr_11816_12955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11812 === (1))){
var inst_11780 = cljs.core.vec(chs);
var inst_11781 = inst_11780;
var state_11811__$1 = (function (){var statearr_11817 = state_11811;
(statearr_11817[(10)] = inst_11781);

return statearr_11817;
})();
var statearr_11818_12956 = state_11811__$1;
(statearr_11818_12956[(2)] = null);

(statearr_11818_12956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11812 === (4))){
var inst_11781 = (state_11811[(10)]);
var state_11811__$1 = state_11811;
return cljs.core.async.ioc_alts_BANG_(state_11811__$1,(7),inst_11781);
} else {
if((state_val_11812 === (6))){
var inst_11807 = (state_11811[(2)]);
var state_11811__$1 = state_11811;
var statearr_11819_12957 = state_11811__$1;
(statearr_11819_12957[(2)] = inst_11807);

(statearr_11819_12957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11812 === (3))){
var inst_11809 = (state_11811[(2)]);
var state_11811__$1 = state_11811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11811__$1,inst_11809);
} else {
if((state_val_11812 === (2))){
var inst_11781 = (state_11811[(10)]);
var inst_11783 = cljs.core.count(inst_11781);
var inst_11784 = (inst_11783 > (0));
var state_11811__$1 = state_11811;
if(cljs.core.truth_(inst_11784)){
var statearr_11821_12958 = state_11811__$1;
(statearr_11821_12958[(1)] = (4));

} else {
var statearr_11822_12959 = state_11811__$1;
(statearr_11822_12959[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11812 === (11))){
var inst_11781 = (state_11811[(10)]);
var inst_11800 = (state_11811[(2)]);
var tmp11820 = inst_11781;
var inst_11781__$1 = tmp11820;
var state_11811__$1 = (function (){var statearr_11823 = state_11811;
(statearr_11823[(10)] = inst_11781__$1);

(statearr_11823[(11)] = inst_11800);

return statearr_11823;
})();
var statearr_11824_12960 = state_11811__$1;
(statearr_11824_12960[(2)] = null);

(statearr_11824_12960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11812 === (9))){
var inst_11791 = (state_11811[(7)]);
var state_11811__$1 = state_11811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11811__$1,(11),out,inst_11791);
} else {
if((state_val_11812 === (5))){
var inst_11805 = cljs.core.async.close_BANG_(out);
var state_11811__$1 = state_11811;
var statearr_11825_12961 = state_11811__$1;
(statearr_11825_12961[(2)] = inst_11805);

(statearr_11825_12961[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11812 === (10))){
var inst_11803 = (state_11811[(2)]);
var state_11811__$1 = state_11811;
var statearr_11826_12962 = state_11811__$1;
(statearr_11826_12962[(2)] = inst_11803);

(statearr_11826_12962[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11812 === (8))){
var inst_11791 = (state_11811[(7)]);
var inst_11792 = (state_11811[(9)]);
var inst_11781 = (state_11811[(10)]);
var inst_11790 = (state_11811[(8)]);
var inst_11795 = (function (){var cs = inst_11781;
var vec__11786 = inst_11790;
var v = inst_11791;
var c = inst_11792;
return (function (p1__11777_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__11777_SHARP_);
});
})();
var inst_11796 = cljs.core.filterv(inst_11795,inst_11781);
var inst_11781__$1 = inst_11796;
var state_11811__$1 = (function (){var statearr_11827 = state_11811;
(statearr_11827[(10)] = inst_11781__$1);

return statearr_11827;
})();
var statearr_11828_12963 = state_11811__$1;
(statearr_11828_12963[(2)] = null);

(statearr_11828_12963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10243__auto__ = null;
var cljs$core$async$state_machine__10243__auto____0 = (function (){
var statearr_11829 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11829[(0)] = cljs$core$async$state_machine__10243__auto__);

(statearr_11829[(1)] = (1));

return statearr_11829;
});
var cljs$core$async$state_machine__10243__auto____1 = (function (state_11811){
while(true){
var ret_value__10244__auto__ = (function (){try{while(true){
var result__10245__auto__ = switch__10242__auto__(state_11811);
if(cljs.core.keyword_identical_QMARK_(result__10245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10245__auto__;
}
break;
}
}catch (e11830){var ex__10246__auto__ = e11830;
var statearr_11831_12964 = state_11811;
(statearr_11831_12964[(2)] = ex__10246__auto__);


if(cljs.core.seq((state_11811[(4)]))){
var statearr_11832_12965 = state_11811;
(statearr_11832_12965[(1)] = cljs.core.first((state_11811[(4)])));

} else {
throw ex__10246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12966 = state_11811;
state_11811 = G__12966;
continue;
} else {
return ret_value__10244__auto__;
}
break;
}
});
cljs$core$async$state_machine__10243__auto__ = function(state_11811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10243__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10243__auto____1.call(this,state_11811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10243__auto____0;
cljs$core$async$state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10243__auto____1;
return cljs$core$async$state_machine__10243__auto__;
})()
})();
var state__10377__auto__ = (function (){var statearr_11833 = f__10376__auto__();
(statearr_11833[(6)] = c__10375__auto___12953);

return statearr_11833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10377__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__11835 = arguments.length;
switch (G__11835) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10375__auto___12968 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10376__auto__ = (function (){var switch__10242__auto__ = (function (state_11871){
var state_val_11872 = (state_11871[(1)]);
if((state_val_11872 === (7))){
var inst_11849 = (state_11871[(7)]);
var inst_11849__$1 = (state_11871[(2)]);
var inst_11850 = (inst_11849__$1 == null);
var inst_11851 = cljs.core.not(inst_11850);
var state_11871__$1 = (function (){var statearr_11873 = state_11871;
(statearr_11873[(7)] = inst_11849__$1);

return statearr_11873;
})();
if(inst_11851){
var statearr_11874_12969 = state_11871__$1;
(statearr_11874_12969[(1)] = (8));

} else {
var statearr_11875_12970 = state_11871__$1;
(statearr_11875_12970[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (1))){
var inst_11840 = (0);
var state_11871__$1 = (function (){var statearr_11877 = state_11871;
(statearr_11877[(8)] = inst_11840);

return statearr_11877;
})();
var statearr_11879_12971 = state_11871__$1;
(statearr_11879_12971[(2)] = null);

(statearr_11879_12971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (4))){
var state_11871__$1 = state_11871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11871__$1,(7),ch);
} else {
if((state_val_11872 === (6))){
var inst_11862 = (state_11871[(2)]);
var state_11871__$1 = state_11871;
var statearr_11880_12972 = state_11871__$1;
(statearr_11880_12972[(2)] = inst_11862);

(statearr_11880_12972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (3))){
var inst_11864 = (state_11871[(2)]);
var inst_11865 = cljs.core.async.close_BANG_(out);
var state_11871__$1 = (function (){var statearr_11881 = state_11871;
(statearr_11881[(9)] = inst_11864);

return statearr_11881;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11871__$1,inst_11865);
} else {
if((state_val_11872 === (2))){
var inst_11840 = (state_11871[(8)]);
var inst_11842 = (inst_11840 < n);
var state_11871__$1 = state_11871;
if(cljs.core.truth_(inst_11842)){
var statearr_11882_12973 = state_11871__$1;
(statearr_11882_12973[(1)] = (4));

} else {
var statearr_11883_12974 = state_11871__$1;
(statearr_11883_12974[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (11))){
var inst_11840 = (state_11871[(8)]);
var inst_11854 = (state_11871[(2)]);
var inst_11855 = (inst_11840 + (1));
var inst_11840__$1 = inst_11855;
var state_11871__$1 = (function (){var statearr_11884 = state_11871;
(statearr_11884[(10)] = inst_11854);

(statearr_11884[(8)] = inst_11840__$1);

return statearr_11884;
})();
var statearr_11885_12975 = state_11871__$1;
(statearr_11885_12975[(2)] = null);

(statearr_11885_12975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (9))){
var state_11871__$1 = state_11871;
var statearr_11886_12976 = state_11871__$1;
(statearr_11886_12976[(2)] = null);

(statearr_11886_12976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (5))){
var state_11871__$1 = state_11871;
var statearr_11887_12977 = state_11871__$1;
(statearr_11887_12977[(2)] = null);

(statearr_11887_12977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (10))){
var inst_11859 = (state_11871[(2)]);
var state_11871__$1 = state_11871;
var statearr_11888_12978 = state_11871__$1;
(statearr_11888_12978[(2)] = inst_11859);

(statearr_11888_12978[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11872 === (8))){
var inst_11849 = (state_11871[(7)]);
var state_11871__$1 = state_11871;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11871__$1,(11),out,inst_11849);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10243__auto__ = null;
var cljs$core$async$state_machine__10243__auto____0 = (function (){
var statearr_11891 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11891[(0)] = cljs$core$async$state_machine__10243__auto__);

(statearr_11891[(1)] = (1));

return statearr_11891;
});
var cljs$core$async$state_machine__10243__auto____1 = (function (state_11871){
while(true){
var ret_value__10244__auto__ = (function (){try{while(true){
var result__10245__auto__ = switch__10242__auto__(state_11871);
if(cljs.core.keyword_identical_QMARK_(result__10245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10245__auto__;
}
break;
}
}catch (e11892){var ex__10246__auto__ = e11892;
var statearr_11894_12979 = state_11871;
(statearr_11894_12979[(2)] = ex__10246__auto__);


if(cljs.core.seq((state_11871[(4)]))){
var statearr_11895_12980 = state_11871;
(statearr_11895_12980[(1)] = cljs.core.first((state_11871[(4)])));

} else {
throw ex__10246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12981 = state_11871;
state_11871 = G__12981;
continue;
} else {
return ret_value__10244__auto__;
}
break;
}
});
cljs$core$async$state_machine__10243__auto__ = function(state_11871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10243__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10243__auto____1.call(this,state_11871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10243__auto____0;
cljs$core$async$state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10243__auto____1;
return cljs$core$async$state_machine__10243__auto__;
})()
})();
var state__10377__auto__ = (function (){var statearr_11896 = f__10376__auto__();
(statearr_11896[(6)] = c__10375__auto___12968);

return statearr_11896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10377__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11906 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11906 = (function (f,ch,meta11907){
this.f = f;
this.ch = ch;
this.meta11907 = meta11907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11908,meta11907__$1){
var self__ = this;
var _11908__$1 = this;
return (new cljs.core.async.t_cljs$core$async11906(self__.f,self__.ch,meta11907__$1));
}));

(cljs.core.async.t_cljs$core$async11906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11908){
var self__ = this;
var _11908__$1 = this;
return self__.meta11907;
}));

(cljs.core.async.t_cljs$core$async11906.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11906.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async11906.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async11906.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11906.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11914 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11914 = (function (f,ch,meta11907,_,fn1,meta11915){
this.f = f;
this.ch = ch;
this.meta11907 = meta11907;
this._ = _;
this.fn1 = fn1;
this.meta11915 = meta11915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11916,meta11915__$1){
var self__ = this;
var _11916__$1 = this;
return (new cljs.core.async.t_cljs$core$async11914(self__.f,self__.ch,self__.meta11907,self__._,self__.fn1,meta11915__$1));
}));

(cljs.core.async.t_cljs$core$async11914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11916){
var self__ = this;
var _11916__$1 = this;
return self__.meta11915;
}));

(cljs.core.async.t_cljs$core$async11914.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11914.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async11914.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11914.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__11897_SHARP_){
var G__11927 = (((p1__11897_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__11897_SHARP_) : self__.f.call(null,p1__11897_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__11927) : f1.call(null,G__11927));
});
}));

(cljs.core.async.t_cljs$core$async11914.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11907","meta11907",594407662,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11906","cljs.core.async/t_cljs$core$async11906",119727612,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11915","meta11915",1238232622,null)], null);
}));

(cljs.core.async.t_cljs$core$async11914.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11914");

(cljs.core.async.t_cljs$core$async11914.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11914");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11914.
 */
cljs.core.async.__GT_t_cljs$core$async11914 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11914(f__$1,ch__$1,meta11907__$1,___$2,fn1__$1,meta11915){
return (new cljs.core.async.t_cljs$core$async11914(f__$1,ch__$1,meta11907__$1,___$2,fn1__$1,meta11915));
});

}

return (new cljs.core.async.t_cljs$core$async11914(self__.f,self__.ch,self__.meta11907,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__11935 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__11935) : self__.f.call(null,G__11935));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async11906.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11906.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async11906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11907","meta11907",594407662,null)], null);
}));

(cljs.core.async.t_cljs$core$async11906.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11906");

(cljs.core.async.t_cljs$core$async11906.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11906");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11906.
 */
cljs.core.async.__GT_t_cljs$core$async11906 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11906(f__$1,ch__$1,meta11907){
return (new cljs.core.async.t_cljs$core$async11906(f__$1,ch__$1,meta11907));
});

}

return (new cljs.core.async.t_cljs$core$async11906(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11938 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11938 = (function (f,ch,meta11939){
this.f = f;
this.ch = ch;
this.meta11939 = meta11939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11940,meta11939__$1){
var self__ = this;
var _11940__$1 = this;
return (new cljs.core.async.t_cljs$core$async11938(self__.f,self__.ch,meta11939__$1));
}));

(cljs.core.async.t_cljs$core$async11938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11940){
var self__ = this;
var _11940__$1 = this;
return self__.meta11939;
}));

(cljs.core.async.t_cljs$core$async11938.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11938.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async11938.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11938.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async11938.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11938.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async11938.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11939","meta11939",1346952042,null)], null);
}));

(cljs.core.async.t_cljs$core$async11938.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11938.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11938");

(cljs.core.async.t_cljs$core$async11938.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11938");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11938.
 */
cljs.core.async.__GT_t_cljs$core$async11938 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11938(f__$1,ch__$1,meta11939){
return (new cljs.core.async.t_cljs$core$async11938(f__$1,ch__$1,meta11939));
});

}

return (new cljs.core.async.t_cljs$core$async11938(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11943 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11943 = (function (p,ch,meta11944){
this.p = p;
this.ch = ch;
this.meta11944 = meta11944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11945,meta11944__$1){
var self__ = this;
var _11945__$1 = this;
return (new cljs.core.async.t_cljs$core$async11943(self__.p,self__.ch,meta11944__$1));
}));

(cljs.core.async.t_cljs$core$async11943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11945){
var self__ = this;
var _11945__$1 = this;
return self__.meta11944;
}));

(cljs.core.async.t_cljs$core$async11943.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11943.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async11943.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async11943.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11943.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async11943.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11943.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async11943.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11944","meta11944",927701235,null)], null);
}));

(cljs.core.async.t_cljs$core$async11943.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11943");

(cljs.core.async.t_cljs$core$async11943.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async11943");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11943.
 */
cljs.core.async.__GT_t_cljs$core$async11943 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11943(p__$1,ch__$1,meta11944){
return (new cljs.core.async.t_cljs$core$async11943(p__$1,ch__$1,meta11944));
});

}

return (new cljs.core.async.t_cljs$core$async11943(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__11953 = arguments.length;
switch (G__11953) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10375__auto___12983 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10376__auto__ = (function (){var switch__10242__auto__ = (function (state_11976){
var state_val_11977 = (state_11976[(1)]);
if((state_val_11977 === (7))){
var inst_11972 = (state_11976[(2)]);
var state_11976__$1 = state_11976;
var statearr_11978_12984 = state_11976__$1;
(statearr_11978_12984[(2)] = inst_11972);

(statearr_11978_12984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (1))){
var state_11976__$1 = state_11976;
var statearr_11979_12985 = state_11976__$1;
(statearr_11979_12985[(2)] = null);

(statearr_11979_12985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (4))){
var inst_11958 = (state_11976[(7)]);
var inst_11958__$1 = (state_11976[(2)]);
var inst_11959 = (inst_11958__$1 == null);
var state_11976__$1 = (function (){var statearr_11980 = state_11976;
(statearr_11980[(7)] = inst_11958__$1);

return statearr_11980;
})();
if(cljs.core.truth_(inst_11959)){
var statearr_11985_12986 = state_11976__$1;
(statearr_11985_12986[(1)] = (5));

} else {
var statearr_11986_12987 = state_11976__$1;
(statearr_11986_12987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (6))){
var inst_11958 = (state_11976[(7)]);
var inst_11963 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11958) : p.call(null,inst_11958));
var state_11976__$1 = state_11976;
if(cljs.core.truth_(inst_11963)){
var statearr_11991_12988 = state_11976__$1;
(statearr_11991_12988[(1)] = (8));

} else {
var statearr_11992_12989 = state_11976__$1;
(statearr_11992_12989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (3))){
var inst_11974 = (state_11976[(2)]);
var state_11976__$1 = state_11976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11976__$1,inst_11974);
} else {
if((state_val_11977 === (2))){
var state_11976__$1 = state_11976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11976__$1,(4),ch);
} else {
if((state_val_11977 === (11))){
var inst_11966 = (state_11976[(2)]);
var state_11976__$1 = state_11976;
var statearr_11997_12990 = state_11976__$1;
(statearr_11997_12990[(2)] = inst_11966);

(statearr_11997_12990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (9))){
var state_11976__$1 = state_11976;
var statearr_11998_12991 = state_11976__$1;
(statearr_11998_12991[(2)] = null);

(statearr_11998_12991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (5))){
var inst_11961 = cljs.core.async.close_BANG_(out);
var state_11976__$1 = state_11976;
var statearr_11999_12992 = state_11976__$1;
(statearr_11999_12992[(2)] = inst_11961);

(statearr_11999_12992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (10))){
var inst_11969 = (state_11976[(2)]);
var state_11976__$1 = (function (){var statearr_12000 = state_11976;
(statearr_12000[(8)] = inst_11969);

return statearr_12000;
})();
var statearr_12001_12993 = state_11976__$1;
(statearr_12001_12993[(2)] = null);

(statearr_12001_12993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (8))){
var inst_11958 = (state_11976[(7)]);
var state_11976__$1 = state_11976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11976__$1,(11),out,inst_11958);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10243__auto__ = null;
var cljs$core$async$state_machine__10243__auto____0 = (function (){
var statearr_12002 = [null,null,null,null,null,null,null,null,null];
(statearr_12002[(0)] = cljs$core$async$state_machine__10243__auto__);

(statearr_12002[(1)] = (1));

return statearr_12002;
});
var cljs$core$async$state_machine__10243__auto____1 = (function (state_11976){
while(true){
var ret_value__10244__auto__ = (function (){try{while(true){
var result__10245__auto__ = switch__10242__auto__(state_11976);
if(cljs.core.keyword_identical_QMARK_(result__10245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10245__auto__;
}
break;
}
}catch (e12003){var ex__10246__auto__ = e12003;
var statearr_12005_12994 = state_11976;
(statearr_12005_12994[(2)] = ex__10246__auto__);


if(cljs.core.seq((state_11976[(4)]))){
var statearr_12006_12995 = state_11976;
(statearr_12006_12995[(1)] = cljs.core.first((state_11976[(4)])));

} else {
throw ex__10246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12996 = state_11976;
state_11976 = G__12996;
continue;
} else {
return ret_value__10244__auto__;
}
break;
}
});
cljs$core$async$state_machine__10243__auto__ = function(state_11976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10243__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10243__auto____1.call(this,state_11976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10243__auto____0;
cljs$core$async$state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10243__auto____1;
return cljs$core$async$state_machine__10243__auto__;
})()
})();
var state__10377__auto__ = (function (){var statearr_12007 = f__10376__auto__();
(statearr_12007[(6)] = c__10375__auto___12983);

return statearr_12007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10377__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12013 = arguments.length;
switch (G__12013) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__10375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10376__auto__ = (function (){var switch__10242__auto__ = (function (state_12082){
var state_val_12083 = (state_12082[(1)]);
if((state_val_12083 === (7))){
var inst_12078 = (state_12082[(2)]);
var state_12082__$1 = state_12082;
var statearr_12088_12998 = state_12082__$1;
(statearr_12088_12998[(2)] = inst_12078);

(statearr_12088_12998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (20))){
var inst_12048 = (state_12082[(7)]);
var inst_12059 = (state_12082[(2)]);
var inst_12060 = cljs.core.next(inst_12048);
var inst_12034 = inst_12060;
var inst_12035 = null;
var inst_12036 = (0);
var inst_12037 = (0);
var state_12082__$1 = (function (){var statearr_12093 = state_12082;
(statearr_12093[(8)] = inst_12035);

(statearr_12093[(9)] = inst_12036);

(statearr_12093[(10)] = inst_12034);

(statearr_12093[(11)] = inst_12059);

(statearr_12093[(12)] = inst_12037);

return statearr_12093;
})();
var statearr_12098_12999 = state_12082__$1;
(statearr_12098_12999[(2)] = null);

(statearr_12098_12999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (1))){
var state_12082__$1 = state_12082;
var statearr_12099_13000 = state_12082__$1;
(statearr_12099_13000[(2)] = null);

(statearr_12099_13000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (4))){
var inst_12022 = (state_12082[(13)]);
var inst_12022__$1 = (state_12082[(2)]);
var inst_12023 = (inst_12022__$1 == null);
var state_12082__$1 = (function (){var statearr_12100 = state_12082;
(statearr_12100[(13)] = inst_12022__$1);

return statearr_12100;
})();
if(cljs.core.truth_(inst_12023)){
var statearr_12101_13001 = state_12082__$1;
(statearr_12101_13001[(1)] = (5));

} else {
var statearr_12102_13002 = state_12082__$1;
(statearr_12102_13002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (15))){
var state_12082__$1 = state_12082;
var statearr_12106_13003 = state_12082__$1;
(statearr_12106_13003[(2)] = null);

(statearr_12106_13003[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (21))){
var state_12082__$1 = state_12082;
var statearr_12107_13004 = state_12082__$1;
(statearr_12107_13004[(2)] = null);

(statearr_12107_13004[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (13))){
var inst_12035 = (state_12082[(8)]);
var inst_12036 = (state_12082[(9)]);
var inst_12034 = (state_12082[(10)]);
var inst_12037 = (state_12082[(12)]);
var inst_12044 = (state_12082[(2)]);
var inst_12045 = (inst_12037 + (1));
var tmp12103 = inst_12035;
var tmp12104 = inst_12036;
var tmp12105 = inst_12034;
var inst_12034__$1 = tmp12105;
var inst_12035__$1 = tmp12103;
var inst_12036__$1 = tmp12104;
var inst_12037__$1 = inst_12045;
var state_12082__$1 = (function (){var statearr_12108 = state_12082;
(statearr_12108[(8)] = inst_12035__$1);

(statearr_12108[(9)] = inst_12036__$1);

(statearr_12108[(14)] = inst_12044);

(statearr_12108[(10)] = inst_12034__$1);

(statearr_12108[(12)] = inst_12037__$1);

return statearr_12108;
})();
var statearr_12109_13005 = state_12082__$1;
(statearr_12109_13005[(2)] = null);

(statearr_12109_13005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (22))){
var state_12082__$1 = state_12082;
var statearr_12110_13006 = state_12082__$1;
(statearr_12110_13006[(2)] = null);

(statearr_12110_13006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (6))){
var inst_12022 = (state_12082[(13)]);
var inst_12032 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12022) : f.call(null,inst_12022));
var inst_12033 = cljs.core.seq(inst_12032);
var inst_12034 = inst_12033;
var inst_12035 = null;
var inst_12036 = (0);
var inst_12037 = (0);
var state_12082__$1 = (function (){var statearr_12111 = state_12082;
(statearr_12111[(8)] = inst_12035);

(statearr_12111[(9)] = inst_12036);

(statearr_12111[(10)] = inst_12034);

(statearr_12111[(12)] = inst_12037);

return statearr_12111;
})();
var statearr_12113_13007 = state_12082__$1;
(statearr_12113_13007[(2)] = null);

(statearr_12113_13007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (17))){
var inst_12048 = (state_12082[(7)]);
var inst_12052 = cljs.core.chunk_first(inst_12048);
var inst_12053 = cljs.core.chunk_rest(inst_12048);
var inst_12054 = cljs.core.count(inst_12052);
var inst_12034 = inst_12053;
var inst_12035 = inst_12052;
var inst_12036 = inst_12054;
var inst_12037 = (0);
var state_12082__$1 = (function (){var statearr_12114 = state_12082;
(statearr_12114[(8)] = inst_12035);

(statearr_12114[(9)] = inst_12036);

(statearr_12114[(10)] = inst_12034);

(statearr_12114[(12)] = inst_12037);

return statearr_12114;
})();
var statearr_12115_13008 = state_12082__$1;
(statearr_12115_13008[(2)] = null);

(statearr_12115_13008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (3))){
var inst_12080 = (state_12082[(2)]);
var state_12082__$1 = state_12082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12082__$1,inst_12080);
} else {
if((state_val_12083 === (12))){
var inst_12068 = (state_12082[(2)]);
var state_12082__$1 = state_12082;
var statearr_12116_13009 = state_12082__$1;
(statearr_12116_13009[(2)] = inst_12068);

(statearr_12116_13009[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (2))){
var state_12082__$1 = state_12082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12082__$1,(4),in$);
} else {
if((state_val_12083 === (23))){
var inst_12076 = (state_12082[(2)]);
var state_12082__$1 = state_12082;
var statearr_12117_13010 = state_12082__$1;
(statearr_12117_13010[(2)] = inst_12076);

(statearr_12117_13010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (19))){
var inst_12063 = (state_12082[(2)]);
var state_12082__$1 = state_12082;
var statearr_12118_13011 = state_12082__$1;
(statearr_12118_13011[(2)] = inst_12063);

(statearr_12118_13011[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (11))){
var inst_12034 = (state_12082[(10)]);
var inst_12048 = (state_12082[(7)]);
var inst_12048__$1 = cljs.core.seq(inst_12034);
var state_12082__$1 = (function (){var statearr_12121 = state_12082;
(statearr_12121[(7)] = inst_12048__$1);

return statearr_12121;
})();
if(inst_12048__$1){
var statearr_12122_13012 = state_12082__$1;
(statearr_12122_13012[(1)] = (14));

} else {
var statearr_12123_13013 = state_12082__$1;
(statearr_12123_13013[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (9))){
var inst_12070 = (state_12082[(2)]);
var inst_12071 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12082__$1 = (function (){var statearr_12127 = state_12082;
(statearr_12127[(15)] = inst_12070);

return statearr_12127;
})();
if(cljs.core.truth_(inst_12071)){
var statearr_12130_13014 = state_12082__$1;
(statearr_12130_13014[(1)] = (21));

} else {
var statearr_12132_13015 = state_12082__$1;
(statearr_12132_13015[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (5))){
var inst_12025 = cljs.core.async.close_BANG_(out);
var state_12082__$1 = state_12082;
var statearr_12133_13016 = state_12082__$1;
(statearr_12133_13016[(2)] = inst_12025);

(statearr_12133_13016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (14))){
var inst_12048 = (state_12082[(7)]);
var inst_12050 = cljs.core.chunked_seq_QMARK_(inst_12048);
var state_12082__$1 = state_12082;
if(inst_12050){
var statearr_12134_13017 = state_12082__$1;
(statearr_12134_13017[(1)] = (17));

} else {
var statearr_12135_13018 = state_12082__$1;
(statearr_12135_13018[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (16))){
var inst_12066 = (state_12082[(2)]);
var state_12082__$1 = state_12082;
var statearr_12138_13019 = state_12082__$1;
(statearr_12138_13019[(2)] = inst_12066);

(statearr_12138_13019[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12083 === (10))){
var inst_12035 = (state_12082[(8)]);
var inst_12037 = (state_12082[(12)]);
var inst_12042 = cljs.core._nth(inst_12035,inst_12037);
var state_12082__$1 = state_12082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12082__$1,(13),out,inst_12042);
} else {
if((state_val_12083 === (18))){
var inst_12048 = (state_12082[(7)]);
var inst_12057 = cljs.core.first(inst_12048);
var state_12082__$1 = state_12082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12082__$1,(20),out,inst_12057);
} else {
if((state_val_12083 === (8))){
var inst_12036 = (state_12082[(9)]);
var inst_12037 = (state_12082[(12)]);
var inst_12039 = (inst_12037 < inst_12036);
var inst_12040 = inst_12039;
var state_12082__$1 = state_12082;
if(cljs.core.truth_(inst_12040)){
var statearr_12142_13020 = state_12082__$1;
(statearr_12142_13020[(1)] = (10));

} else {
var statearr_12144_13021 = state_12082__$1;
(statearr_12144_13021[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10243__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10243__auto____0 = (function (){
var statearr_12145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12145[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10243__auto__);

(statearr_12145[(1)] = (1));

return statearr_12145;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10243__auto____1 = (function (state_12082){
while(true){
var ret_value__10244__auto__ = (function (){try{while(true){
var result__10245__auto__ = switch__10242__auto__(state_12082);
if(cljs.core.keyword_identical_QMARK_(result__10245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10245__auto__;
}
break;
}
}catch (e12146){var ex__10246__auto__ = e12146;
var statearr_12147_13022 = state_12082;
(statearr_12147_13022[(2)] = ex__10246__auto__);


if(cljs.core.seq((state_12082[(4)]))){
var statearr_12149_13023 = state_12082;
(statearr_12149_13023[(1)] = cljs.core.first((state_12082[(4)])));

} else {
throw ex__10246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13024 = state_12082;
state_12082 = G__13024;
continue;
} else {
return ret_value__10244__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10243__auto__ = function(state_12082){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10243__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10243__auto____1.call(this,state_12082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10243__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10243__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10243__auto__;
})()
})();
var state__10377__auto__ = (function (){var statearr_12150 = f__10376__auto__();
(statearr_12150[(6)] = c__10375__auto__);

return statearr_12150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10377__auto__);
}));

return c__10375__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12154 = arguments.length;
switch (G__12154) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__12160 = arguments.length;
switch (G__12160) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__12169 = arguments.length;
switch (G__12169) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10375__auto___13028 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10376__auto__ = (function (){var switch__10242__auto__ = (function (state_12197){
var state_val_12198 = (state_12197[(1)]);
if((state_val_12198 === (7))){
var inst_12192 = (state_12197[(2)]);
var state_12197__$1 = state_12197;
var statearr_12199_13029 = state_12197__$1;
(statearr_12199_13029[(2)] = inst_12192);

(statearr_12199_13029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (1))){
var inst_12174 = null;
var state_12197__$1 = (function (){var statearr_12200 = state_12197;
(statearr_12200[(7)] = inst_12174);

return statearr_12200;
})();
var statearr_12201_13030 = state_12197__$1;
(statearr_12201_13030[(2)] = null);

(statearr_12201_13030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (4))){
var inst_12177 = (state_12197[(8)]);
var inst_12177__$1 = (state_12197[(2)]);
var inst_12178 = (inst_12177__$1 == null);
var inst_12179 = cljs.core.not(inst_12178);
var state_12197__$1 = (function (){var statearr_12203 = state_12197;
(statearr_12203[(8)] = inst_12177__$1);

return statearr_12203;
})();
if(inst_12179){
var statearr_12205_13031 = state_12197__$1;
(statearr_12205_13031[(1)] = (5));

} else {
var statearr_12206_13032 = state_12197__$1;
(statearr_12206_13032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (6))){
var state_12197__$1 = state_12197;
var statearr_12207_13033 = state_12197__$1;
(statearr_12207_13033[(2)] = null);

(statearr_12207_13033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (3))){
var inst_12194 = (state_12197[(2)]);
var inst_12195 = cljs.core.async.close_BANG_(out);
var state_12197__$1 = (function (){var statearr_12208 = state_12197;
(statearr_12208[(9)] = inst_12194);

return statearr_12208;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12197__$1,inst_12195);
} else {
if((state_val_12198 === (2))){
var state_12197__$1 = state_12197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12197__$1,(4),ch);
} else {
if((state_val_12198 === (11))){
var inst_12177 = (state_12197[(8)]);
var inst_12186 = (state_12197[(2)]);
var inst_12174 = inst_12177;
var state_12197__$1 = (function (){var statearr_12209 = state_12197;
(statearr_12209[(10)] = inst_12186);

(statearr_12209[(7)] = inst_12174);

return statearr_12209;
})();
var statearr_12210_13034 = state_12197__$1;
(statearr_12210_13034[(2)] = null);

(statearr_12210_13034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (9))){
var inst_12177 = (state_12197[(8)]);
var state_12197__$1 = state_12197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12197__$1,(11),out,inst_12177);
} else {
if((state_val_12198 === (5))){
var inst_12177 = (state_12197[(8)]);
var inst_12174 = (state_12197[(7)]);
var inst_12181 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12177,inst_12174);
var state_12197__$1 = state_12197;
if(inst_12181){
var statearr_12214_13035 = state_12197__$1;
(statearr_12214_13035[(1)] = (8));

} else {
var statearr_12215_13036 = state_12197__$1;
(statearr_12215_13036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (10))){
var inst_12189 = (state_12197[(2)]);
var state_12197__$1 = state_12197;
var statearr_12216_13037 = state_12197__$1;
(statearr_12216_13037[(2)] = inst_12189);

(statearr_12216_13037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12198 === (8))){
var inst_12174 = (state_12197[(7)]);
var tmp12213 = inst_12174;
var inst_12174__$1 = tmp12213;
var state_12197__$1 = (function (){var statearr_12217 = state_12197;
(statearr_12217[(7)] = inst_12174__$1);

return statearr_12217;
})();
var statearr_12218_13038 = state_12197__$1;
(statearr_12218_13038[(2)] = null);

(statearr_12218_13038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10243__auto__ = null;
var cljs$core$async$state_machine__10243__auto____0 = (function (){
var statearr_12220 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12220[(0)] = cljs$core$async$state_machine__10243__auto__);

(statearr_12220[(1)] = (1));

return statearr_12220;
});
var cljs$core$async$state_machine__10243__auto____1 = (function (state_12197){
while(true){
var ret_value__10244__auto__ = (function (){try{while(true){
var result__10245__auto__ = switch__10242__auto__(state_12197);
if(cljs.core.keyword_identical_QMARK_(result__10245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10245__auto__;
}
break;
}
}catch (e12221){var ex__10246__auto__ = e12221;
var statearr_12222_13039 = state_12197;
(statearr_12222_13039[(2)] = ex__10246__auto__);


if(cljs.core.seq((state_12197[(4)]))){
var statearr_12223_13040 = state_12197;
(statearr_12223_13040[(1)] = cljs.core.first((state_12197[(4)])));

} else {
throw ex__10246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13041 = state_12197;
state_12197 = G__13041;
continue;
} else {
return ret_value__10244__auto__;
}
break;
}
});
cljs$core$async$state_machine__10243__auto__ = function(state_12197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10243__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10243__auto____1.call(this,state_12197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10243__auto____0;
cljs$core$async$state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10243__auto____1;
return cljs$core$async$state_machine__10243__auto__;
})()
})();
var state__10377__auto__ = (function (){var statearr_12225 = f__10376__auto__();
(statearr_12225[(6)] = c__10375__auto___13028);

return statearr_12225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10377__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12227 = arguments.length;
switch (G__12227) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10375__auto___13043 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10376__auto__ = (function (){var switch__10242__auto__ = (function (state_12265){
var state_val_12266 = (state_12265[(1)]);
if((state_val_12266 === (7))){
var inst_12261 = (state_12265[(2)]);
var state_12265__$1 = state_12265;
var statearr_12268_13044 = state_12265__$1;
(statearr_12268_13044[(2)] = inst_12261);

(statearr_12268_13044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (1))){
var inst_12228 = (new Array(n));
var inst_12229 = inst_12228;
var inst_12230 = (0);
var state_12265__$1 = (function (){var statearr_12270 = state_12265;
(statearr_12270[(7)] = inst_12230);

(statearr_12270[(8)] = inst_12229);

return statearr_12270;
})();
var statearr_12271_13045 = state_12265__$1;
(statearr_12271_13045[(2)] = null);

(statearr_12271_13045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (4))){
var inst_12233 = (state_12265[(9)]);
var inst_12233__$1 = (state_12265[(2)]);
var inst_12234 = (inst_12233__$1 == null);
var inst_12235 = cljs.core.not(inst_12234);
var state_12265__$1 = (function (){var statearr_12272 = state_12265;
(statearr_12272[(9)] = inst_12233__$1);

return statearr_12272;
})();
if(inst_12235){
var statearr_12273_13046 = state_12265__$1;
(statearr_12273_13046[(1)] = (5));

} else {
var statearr_12274_13047 = state_12265__$1;
(statearr_12274_13047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (15))){
var inst_12255 = (state_12265[(2)]);
var state_12265__$1 = state_12265;
var statearr_12275_13048 = state_12265__$1;
(statearr_12275_13048[(2)] = inst_12255);

(statearr_12275_13048[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (13))){
var state_12265__$1 = state_12265;
var statearr_12276_13049 = state_12265__$1;
(statearr_12276_13049[(2)] = null);

(statearr_12276_13049[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (6))){
var inst_12230 = (state_12265[(7)]);
var inst_12251 = (inst_12230 > (0));
var state_12265__$1 = state_12265;
if(cljs.core.truth_(inst_12251)){
var statearr_12277_13050 = state_12265__$1;
(statearr_12277_13050[(1)] = (12));

} else {
var statearr_12278_13051 = state_12265__$1;
(statearr_12278_13051[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (3))){
var inst_12263 = (state_12265[(2)]);
var state_12265__$1 = state_12265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12265__$1,inst_12263);
} else {
if((state_val_12266 === (12))){
var inst_12229 = (state_12265[(8)]);
var inst_12253 = cljs.core.vec(inst_12229);
var state_12265__$1 = state_12265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12265__$1,(15),out,inst_12253);
} else {
if((state_val_12266 === (2))){
var state_12265__$1 = state_12265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12265__$1,(4),ch);
} else {
if((state_val_12266 === (11))){
var inst_12245 = (state_12265[(2)]);
var inst_12246 = (new Array(n));
var inst_12229 = inst_12246;
var inst_12230 = (0);
var state_12265__$1 = (function (){var statearr_12279 = state_12265;
(statearr_12279[(10)] = inst_12245);

(statearr_12279[(7)] = inst_12230);

(statearr_12279[(8)] = inst_12229);

return statearr_12279;
})();
var statearr_12280_13052 = state_12265__$1;
(statearr_12280_13052[(2)] = null);

(statearr_12280_13052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (9))){
var inst_12229 = (state_12265[(8)]);
var inst_12243 = cljs.core.vec(inst_12229);
var state_12265__$1 = state_12265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12265__$1,(11),out,inst_12243);
} else {
if((state_val_12266 === (5))){
var inst_12233 = (state_12265[(9)]);
var inst_12238 = (state_12265[(11)]);
var inst_12230 = (state_12265[(7)]);
var inst_12229 = (state_12265[(8)]);
var inst_12237 = (inst_12229[inst_12230] = inst_12233);
var inst_12238__$1 = (inst_12230 + (1));
var inst_12239 = (inst_12238__$1 < n);
var state_12265__$1 = (function (){var statearr_12281 = state_12265;
(statearr_12281[(11)] = inst_12238__$1);

(statearr_12281[(12)] = inst_12237);

return statearr_12281;
})();
if(cljs.core.truth_(inst_12239)){
var statearr_12282_13053 = state_12265__$1;
(statearr_12282_13053[(1)] = (8));

} else {
var statearr_12283_13054 = state_12265__$1;
(statearr_12283_13054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (14))){
var inst_12258 = (state_12265[(2)]);
var inst_12259 = cljs.core.async.close_BANG_(out);
var state_12265__$1 = (function (){var statearr_12285 = state_12265;
(statearr_12285[(13)] = inst_12258);

return statearr_12285;
})();
var statearr_12288_13055 = state_12265__$1;
(statearr_12288_13055[(2)] = inst_12259);

(statearr_12288_13055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (10))){
var inst_12249 = (state_12265[(2)]);
var state_12265__$1 = state_12265;
var statearr_12289_13056 = state_12265__$1;
(statearr_12289_13056[(2)] = inst_12249);

(statearr_12289_13056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (8))){
var inst_12238 = (state_12265[(11)]);
var inst_12229 = (state_12265[(8)]);
var tmp12284 = inst_12229;
var inst_12229__$1 = tmp12284;
var inst_12230 = inst_12238;
var state_12265__$1 = (function (){var statearr_12290 = state_12265;
(statearr_12290[(7)] = inst_12230);

(statearr_12290[(8)] = inst_12229__$1);

return statearr_12290;
})();
var statearr_12291_13057 = state_12265__$1;
(statearr_12291_13057[(2)] = null);

(statearr_12291_13057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10243__auto__ = null;
var cljs$core$async$state_machine__10243__auto____0 = (function (){
var statearr_12292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12292[(0)] = cljs$core$async$state_machine__10243__auto__);

(statearr_12292[(1)] = (1));

return statearr_12292;
});
var cljs$core$async$state_machine__10243__auto____1 = (function (state_12265){
while(true){
var ret_value__10244__auto__ = (function (){try{while(true){
var result__10245__auto__ = switch__10242__auto__(state_12265);
if(cljs.core.keyword_identical_QMARK_(result__10245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10245__auto__;
}
break;
}
}catch (e12293){var ex__10246__auto__ = e12293;
var statearr_12294_13058 = state_12265;
(statearr_12294_13058[(2)] = ex__10246__auto__);


if(cljs.core.seq((state_12265[(4)]))){
var statearr_12295_13059 = state_12265;
(statearr_12295_13059[(1)] = cljs.core.first((state_12265[(4)])));

} else {
throw ex__10246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13060 = state_12265;
state_12265 = G__13060;
continue;
} else {
return ret_value__10244__auto__;
}
break;
}
});
cljs$core$async$state_machine__10243__auto__ = function(state_12265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10243__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10243__auto____1.call(this,state_12265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10243__auto____0;
cljs$core$async$state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10243__auto____1;
return cljs$core$async$state_machine__10243__auto__;
})()
})();
var state__10377__auto__ = (function (){var statearr_12297 = f__10376__auto__();
(statearr_12297[(6)] = c__10375__auto___13043);

return statearr_12297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10377__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12301 = arguments.length;
switch (G__12301) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10375__auto___13062 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__10376__auto__ = (function (){var switch__10242__auto__ = (function (state_12345){
var state_val_12346 = (state_12345[(1)]);
if((state_val_12346 === (7))){
var inst_12341 = (state_12345[(2)]);
var state_12345__$1 = state_12345;
var statearr_12347_13063 = state_12345__$1;
(statearr_12347_13063[(2)] = inst_12341);

(statearr_12347_13063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (1))){
var inst_12303 = [];
var inst_12304 = inst_12303;
var inst_12305 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12345__$1 = (function (){var statearr_12348 = state_12345;
(statearr_12348[(7)] = inst_12305);

(statearr_12348[(8)] = inst_12304);

return statearr_12348;
})();
var statearr_12349_13064 = state_12345__$1;
(statearr_12349_13064[(2)] = null);

(statearr_12349_13064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (4))){
var inst_12308 = (state_12345[(9)]);
var inst_12308__$1 = (state_12345[(2)]);
var inst_12309 = (inst_12308__$1 == null);
var inst_12310 = cljs.core.not(inst_12309);
var state_12345__$1 = (function (){var statearr_12350 = state_12345;
(statearr_12350[(9)] = inst_12308__$1);

return statearr_12350;
})();
if(inst_12310){
var statearr_12351_13065 = state_12345__$1;
(statearr_12351_13065[(1)] = (5));

} else {
var statearr_12352_13066 = state_12345__$1;
(statearr_12352_13066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (15))){
var inst_12335 = (state_12345[(2)]);
var state_12345__$1 = state_12345;
var statearr_12354_13067 = state_12345__$1;
(statearr_12354_13067[(2)] = inst_12335);

(statearr_12354_13067[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (13))){
var state_12345__$1 = state_12345;
var statearr_12355_13068 = state_12345__$1;
(statearr_12355_13068[(2)] = null);

(statearr_12355_13068[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (6))){
var inst_12304 = (state_12345[(8)]);
var inst_12330 = inst_12304.length;
var inst_12331 = (inst_12330 > (0));
var state_12345__$1 = state_12345;
if(cljs.core.truth_(inst_12331)){
var statearr_12356_13069 = state_12345__$1;
(statearr_12356_13069[(1)] = (12));

} else {
var statearr_12357_13070 = state_12345__$1;
(statearr_12357_13070[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (3))){
var inst_12343 = (state_12345[(2)]);
var state_12345__$1 = state_12345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12345__$1,inst_12343);
} else {
if((state_val_12346 === (12))){
var inst_12304 = (state_12345[(8)]);
var inst_12333 = cljs.core.vec(inst_12304);
var state_12345__$1 = state_12345;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12345__$1,(15),out,inst_12333);
} else {
if((state_val_12346 === (2))){
var state_12345__$1 = state_12345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12345__$1,(4),ch);
} else {
if((state_val_12346 === (11))){
var inst_12312 = (state_12345[(10)]);
var inst_12308 = (state_12345[(9)]);
var inst_12323 = (state_12345[(2)]);
var inst_12324 = [];
var inst_12325 = inst_12324.push(inst_12308);
var inst_12304 = inst_12324;
var inst_12305 = inst_12312;
var state_12345__$1 = (function (){var statearr_12358 = state_12345;
(statearr_12358[(7)] = inst_12305);

(statearr_12358[(11)] = inst_12325);

(statearr_12358[(8)] = inst_12304);

(statearr_12358[(12)] = inst_12323);

return statearr_12358;
})();
var statearr_12359_13071 = state_12345__$1;
(statearr_12359_13071[(2)] = null);

(statearr_12359_13071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (9))){
var inst_12304 = (state_12345[(8)]);
var inst_12321 = cljs.core.vec(inst_12304);
var state_12345__$1 = state_12345;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12345__$1,(11),out,inst_12321);
} else {
if((state_val_12346 === (5))){
var inst_12312 = (state_12345[(10)]);
var inst_12305 = (state_12345[(7)]);
var inst_12308 = (state_12345[(9)]);
var inst_12312__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12308) : f.call(null,inst_12308));
var inst_12314 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12312__$1,inst_12305);
var inst_12315 = cljs.core.keyword_identical_QMARK_(inst_12305,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12316 = ((inst_12314) || (inst_12315));
var state_12345__$1 = (function (){var statearr_12360 = state_12345;
(statearr_12360[(10)] = inst_12312__$1);

return statearr_12360;
})();
if(cljs.core.truth_(inst_12316)){
var statearr_12362_13072 = state_12345__$1;
(statearr_12362_13072[(1)] = (8));

} else {
var statearr_12364_13073 = state_12345__$1;
(statearr_12364_13073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (14))){
var inst_12338 = (state_12345[(2)]);
var inst_12339 = cljs.core.async.close_BANG_(out);
var state_12345__$1 = (function (){var statearr_12369 = state_12345;
(statearr_12369[(13)] = inst_12338);

return statearr_12369;
})();
var statearr_12370_13074 = state_12345__$1;
(statearr_12370_13074[(2)] = inst_12339);

(statearr_12370_13074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (10))){
var inst_12328 = (state_12345[(2)]);
var state_12345__$1 = state_12345;
var statearr_12371_13075 = state_12345__$1;
(statearr_12371_13075[(2)] = inst_12328);

(statearr_12371_13075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12346 === (8))){
var inst_12312 = (state_12345[(10)]);
var inst_12308 = (state_12345[(9)]);
var inst_12304 = (state_12345[(8)]);
var inst_12318 = inst_12304.push(inst_12308);
var tmp12367 = inst_12304;
var inst_12304__$1 = tmp12367;
var inst_12305 = inst_12312;
var state_12345__$1 = (function (){var statearr_12373 = state_12345;
(statearr_12373[(7)] = inst_12305);

(statearr_12373[(14)] = inst_12318);

(statearr_12373[(8)] = inst_12304__$1);

return statearr_12373;
})();
var statearr_12376_13076 = state_12345__$1;
(statearr_12376_13076[(2)] = null);

(statearr_12376_13076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10243__auto__ = null;
var cljs$core$async$state_machine__10243__auto____0 = (function (){
var statearr_12379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12379[(0)] = cljs$core$async$state_machine__10243__auto__);

(statearr_12379[(1)] = (1));

return statearr_12379;
});
var cljs$core$async$state_machine__10243__auto____1 = (function (state_12345){
while(true){
var ret_value__10244__auto__ = (function (){try{while(true){
var result__10245__auto__ = switch__10242__auto__(state_12345);
if(cljs.core.keyword_identical_QMARK_(result__10245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10245__auto__;
}
break;
}
}catch (e12380){var ex__10246__auto__ = e12380;
var statearr_12382_13077 = state_12345;
(statearr_12382_13077[(2)] = ex__10246__auto__);


if(cljs.core.seq((state_12345[(4)]))){
var statearr_12383_13078 = state_12345;
(statearr_12383_13078[(1)] = cljs.core.first((state_12345[(4)])));

} else {
throw ex__10246__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13079 = state_12345;
state_12345 = G__13079;
continue;
} else {
return ret_value__10244__auto__;
}
break;
}
});
cljs$core$async$state_machine__10243__auto__ = function(state_12345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10243__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10243__auto____1.call(this,state_12345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10243__auto____0;
cljs$core$async$state_machine__10243__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10243__auto____1;
return cljs$core$async$state_machine__10243__auto__;
})()
})();
var state__10377__auto__ = (function (){var statearr_12384 = f__10376__auto__();
(statearr_12384[(6)] = c__10375__auto___13062);

return statearr_12384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10377__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
