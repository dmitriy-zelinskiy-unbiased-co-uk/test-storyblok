(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{451:function(t,e,n){"use strict";n.r(e);n(42);var r=n(9),o={data:function(){return{story:{content:{}}}},mounted:function(){var t=this;this.$storybridge.on("input",(function(e){e.story.id===t.story.id&&(t.story.content=e.story.content)})),this.$storybridge.on(["published","change"],(function(e){t.$nuxt.$router.go({path:t.$nuxt.$router.currentRoute,force:!0})}))},fetch:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("1"===t.store.state.articles.loaded){e.next=6;break}return e.next=3,t.app.$storyapi.get("cdn/stories/",{starts_with:"articles/",version:"draft"});case 3:n=e.sent,t.store.commit("articles/setArticles",n.data.stories),t.store.commit("articles/setLoaded","1");case 6:case"end":return e.stop()}}),e)})))()},asyncData:function(t){return t.app.$storyapi.get("cdn/stories/home",{version:"draft"}).then((function(t){return t.data})).catch((function(e){e.response?(console.error(e.response.data),t.error({statusCode:e.response.status,message:e.response.data})):(console.error(e),t.error({statusCode:404,message:"Failed to receive content form api"}))}))}},c=n(4),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",[this.story.content.component?e(this.story.content.component,{key:this.story.content._uid,tag:"component",attrs:{blok:this.story.content}}):this._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);