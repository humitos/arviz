(function() {
  const fn = function() {
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
    const element = document.getElementById("7f5c1dea-4621-4d05-b22d-b9de5794d446");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7f5c1dea-4621-4d05-b22d-b9de5794d446' but no matching script tag was found.")
        }
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.3.min.js"];
      const css_urls = [];
    
      const inline_js = [    function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                  const docs_json = '{"1ae06608-8ab9-44df-abed-11d6ace122f7":{"defs":[],"roots":{"references":[{"attributes":{},"id":"21662","type":"Selection"},{"attributes":{},"id":"21609","type":"LinearScale"},{"attributes":{"overlay":{"id":"21628"}},"id":"21623","type":"LassoSelectTool"},{"attributes":{},"id":"21622","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"21615"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21618","type":"Grid"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21649","type":"Span"},{"attributes":{"children":[{"id":"21668"},{"id":"21666"}]},"id":"21669","type":"Column"},{"attributes":{},"id":"21661","type":"UnionRenderers"},{"attributes":{},"id":"21619","type":"ResetTool"},{"attributes":{"coordinates":null,"data_source":{"id":"21645"},"glyph":{"id":"21644"},"group":null,"hover_glyph":null,"view":{"id":"21647"}},"id":"21646","type":"GlyphRenderer"},{"attributes":{},"id":"21655","type":"AllLabels"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"21650","type":"Title"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21657"},"group":null,"major_label_policy":{"id":"21658"},"ticker":{"id":"21612"}},"id":"21611","type":"LinearAxis"},{"attributes":{"tools":[{"id":"21619"},{"id":"21620"},{"id":"21621"},{"id":"21622"},{"id":"21623"},{"id":"21624"},{"id":"21625"},{"id":"21626"}]},"id":"21629","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21641","type":"Circle"},{"attributes":{"below":[{"id":"21611"}],"center":[{"id":"21614"},{"id":"21618"}],"height":500,"left":[{"id":"21615"}],"output_backend":"webgl","renderers":[{"id":"21642"},{"id":"21646"},{"id":"21648"},{"id":"21649"}],"title":{"id":"21650"},"toolbar":{"id":"21629"},"toolbar_location":null,"width":500,"x_range":{"id":"21603"},"x_scale":{"id":"21607"},"y_range":{"id":"21605"},"y_scale":{"id":"21609"}},"id":"21602","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"21624","type":"UndoTool"},{"attributes":{},"id":"21612","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21639","type":"Circle"},{"attributes":{},"id":"21616","type":"BasicTicker"},{"attributes":{"axis":{"id":"21611"},"coordinates":null,"group":null,"ticker":null},"id":"21614","type":"Grid"},{"attributes":{},"id":"21605","type":"DataRange1d"},{"attributes":{"coordinates":null,"data_source":{"id":"21638"},"glyph":{"id":"21639"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21641"},"nonselection_glyph":{"id":"21640"},"view":{"id":"21643"}},"id":"21642","type":"GlyphRenderer"},{"attributes":{},"id":"21654","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"21667"},"toolbar_location":"above"},"id":"21668","type":"ToolbarBox"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21640","type":"Circle"},{"attributes":{},"id":"21620","type":"PanTool"},{"attributes":{},"id":"21625","type":"SaveTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21628","type":"PolyAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21660"},"selection_policy":{"id":"21659"}},"id":"21638","type":"ColumnDataSource"},{"attributes":{"axis_label":"ESS for small intervals","coordinates":null,"formatter":{"id":"21654"},"group":null,"major_label_policy":{"id":"21655"},"ticker":{"id":"21616"}},"id":"21615","type":"LinearAxis"},{"attributes":{"source":{"id":"21638"}},"id":"21643","type":"CDSView"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"21644","type":"Scatter"},{"attributes":{},"id":"21659","type":"UnionRenderers"},{"attributes":{},"id":"21660","type":"Selection"},{"attributes":{},"id":"21607","type":"LinearScale"},{"attributes":{"source":{"id":"21645"}},"id":"21647","type":"CDSView"},{"attributes":{"toolbars":[{"id":"21629"}],"tools":[{"id":"21619"},{"id":"21620"},{"id":"21621"},{"id":"21622"},{"id":"21623"},{"id":"21624"},{"id":"21625"},{"id":"21626"}]},"id":"21667","type":"ProxyToolbar"},{"attributes":{"children":[[{"id":"21602"},0,0]]},"id":"21666","type":"GridBox"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"21648","type":"Span"},{"attributes":{},"id":"21603","type":"DataRange1d"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"21662"},"selection_policy":{"id":"21661"}},"id":"21645","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"21627"}},"id":"21621","type":"BoxZoomTool"},{"attributes":{},"id":"21657","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21627","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"21626","type":"HoverTool"},{"attributes":{},"id":"21658","type":"AllLabels"}],"root_ids":["21669"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"1ae06608-8ab9-44df-abed-11d6ace122f7","root_ids":["21669"],"roots":{"21669":"7f5c1dea-4621-4d05-b22d-b9de5794d446"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
    function(Bokeh) {
        }
      ];
    
      function run_inline_js() {
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();