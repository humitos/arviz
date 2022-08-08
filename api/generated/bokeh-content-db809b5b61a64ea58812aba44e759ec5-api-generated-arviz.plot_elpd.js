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
    
    
    const element = document.getElementById("31e7ec15-e8f2-4b23-ae4f-f0d2566fc163");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '31e7ec15-e8f2-4b23-ae4f-f0d2566fc163' but no matching script tag was found.")
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
                  const docs_json = '{"9ed2f711-c2bc-4f2c-a0e1-15d292e00af1":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"data_source":{"id":"17904"},"glyph":{"id":"17903"},"group":null,"hover_glyph":null,"view":{"id":"17906"}},"id":"17905","type":"GlyphRenderer"},{"attributes":{},"id":"17911","type":"BasicTickFormatter"},{"attributes":{},"id":"17912","type":"AllLabels"},{"attributes":{"below":[{"id":"17876"}],"center":[{"id":"17879"},{"id":"17883"}],"height":288,"left":[{"id":"17880"}],"output_backend":"webgl","renderers":[{"id":"17905"}],"title":{"id":"17907"},"toolbar":{"id":"17894"},"toolbar_location":null,"width":432,"x_range":{"id":"17868"},"x_scale":{"id":"17872"},"y_range":{"id":"17870"},"y_scale":{"id":"17874"}},"id":"17867","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17903","type":"Scatter"},{"attributes":{"tools":[{"id":"17884"},{"id":"17885"},{"id":"17886"},{"id":"17887"},{"id":"17888"},{"id":"17889"},{"id":"17890"},{"id":"17891"}]},"id":"17894","type":"Toolbar"},{"attributes":{},"id":"17914","type":"BasicTickFormatter"},{"attributes":{},"id":"17889","type":"UndoTool"},{"attributes":{},"id":"17887","type":"WheelZoomTool"},{"attributes":{},"id":"17915","type":"AllLabels"},{"attributes":{"coordinates":null,"group":null,"text":"centered model - non centered model"},"id":"17907","type":"Title"},{"attributes":{"toolbars":[{"id":"17894"}],"tools":[{"id":"17884"},{"id":"17885"},{"id":"17886"},{"id":"17887"},{"id":"17888"},{"id":"17889"},{"id":"17890"},{"id":"17891"}]},"id":"17922","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17893","type":"PolyAnnotation"},{"attributes":{},"id":"17868","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17892","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"17880"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"17883","type":"Grid"},{"attributes":{},"id":"17884","type":"ResetTool"},{"attributes":{},"id":"17890","type":"SaveTool"},{"attributes":{"toolbar":{"id":"17922"},"toolbar_location":"above"},"id":"17923","type":"ToolbarBox"},{"attributes":{},"id":"17916","type":"UnionRenderers"},{"attributes":{"children":[{"id":"17923"},{"id":"17921"}]},"id":"17924","type":"Column"},{"attributes":{"overlay":{"id":"17892"}},"id":"17886","type":"BoxZoomTool"},{"attributes":{},"id":"17885","type":"PanTool"},{"attributes":{},"id":"17917","type":"Selection"},{"attributes":{"overlay":{"id":"17893"}},"id":"17888","type":"LassoSelectTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gB+QFygcqb8AkvbM2OqMvwDAPZTAZEQ/ABNdkUAak78AFo4kwaykPwDgu3qf/FM/QBB6xSIVsb8AEruac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17917"},"selection_policy":{"id":"17916"}},"id":"17904","type":"ColumnDataSource"},{"attributes":{},"id":"17881","type":"BasicTicker"},{"attributes":{},"id":"17870","type":"DataRange1d"},{"attributes":{"axis":{"id":"17876"},"coordinates":null,"group":null,"ticker":null},"id":"17879","type":"Grid"},{"attributes":{},"id":"17872","type":"LinearScale"},{"attributes":{},"id":"17874","type":"LinearScale"},{"attributes":{},"id":"17877","type":"BasicTicker"},{"attributes":{"callback":null},"id":"17891","type":"HoverTool"},{"attributes":{"children":[[{"id":"17867"},0,0]]},"id":"17921","type":"GridBox"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"17911"},"group":null,"major_label_policy":{"id":"17912"},"ticker":{"id":"17881"}},"id":"17880","type":"LinearAxis"},{"attributes":{"coordinates":null,"formatter":{"id":"17914"},"group":null,"major_label_policy":{"id":"17915"},"ticker":{"id":"17877"}},"id":"17876","type":"LinearAxis"},{"attributes":{"source":{"id":"17904"}},"id":"17906","type":"CDSView"}],"root_ids":["17924"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"9ed2f711-c2bc-4f2c-a0e1-15d292e00af1","root_ids":["17924"],"roots":{"17924":"31e7ec15-e8f2-4b23-ae4f-f0d2566fc163"}}];
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