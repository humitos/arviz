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
    
    
    const element = document.getElementById("73ba2115-1811-4d1b-9eda-01083391d3d2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '73ba2115-1811-4d1b-9eda-01083391d3d2' but no matching script tag was found.")
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
                  const docs_json = '{"b745f2b3-784f-4d83-af3c-674d5d06942d":{"defs":[],"roots":{"references":[{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"21183","type":"Scatter"},{"attributes":{},"id":"21148","type":"DataRange1d"},{"attributes":{},"id":"21165","type":"PanTool"},{"attributes":{"callback":null},"id":"21171","type":"HoverTool"},{"attributes":{"children":[{"id":"21203"},{"id":"21201"}]},"id":"21204","type":"Column"},{"attributes":{"axis":{"id":"21156"},"coordinates":null,"group":null,"ticker":null},"id":"21159","type":"Grid"},{"attributes":{},"id":"21167","type":"WheelZoomTool"},{"attributes":{},"id":"21154","type":"LinearScale"},{"attributes":{},"id":"21169","type":"UndoTool"},{"attributes":{"overlay":{"id":"21172"}},"id":"21166","type":"BoxZoomTool"},{"attributes":{"source":{"id":"21184"}},"id":"21186","type":"CDSView"},{"attributes":{},"id":"21170","type":"SaveTool"},{"attributes":{"coordinates":null,"data_source":{"id":"21184"},"glyph":{"id":"21183"},"group":null,"hover_glyph":null,"view":{"id":"21186"}},"id":"21185","type":"GlyphRenderer"},{"attributes":{},"id":"21195","type":"AllLabels"},{"attributes":{"axis":{"id":"21160"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21163","type":"Grid"},{"attributes":{},"id":"21192","type":"AllLabels"},{"attributes":{},"id":"21194","type":"BasicTickFormatter"},{"attributes":{"toolbars":[{"id":"21174"}],"tools":[{"id":"21164"},{"id":"21165"},{"id":"21166"},{"id":"21167"},{"id":"21168"},{"id":"21169"},{"id":"21170"},{"id":"21171"}]},"id":"21202","type":"ProxyToolbar"},{"attributes":{},"id":"21157","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21172","type":"BoxAnnotation"},{"attributes":{},"id":"21197","type":"Selection"},{"attributes":{},"id":"21161","type":"BasicTicker"},{"attributes":{},"id":"21196","type":"UnionRenderers"},{"attributes":{},"id":"21191","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"formatter":{"id":"21194"},"group":null,"major_label_policy":{"id":"21195"},"ticker":{"id":"21157"}},"id":"21156","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"21202"},"toolbar_location":"above"},"id":"21203","type":"ToolbarBox"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"21191"},"group":null,"major_label_policy":{"id":"21192"},"ticker":{"id":"21161"}},"id":"21160","type":"LinearAxis"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21173","type":"PolyAnnotation"},{"attributes":{"overlay":{"id":"21173"}},"id":"21168","type":"LassoSelectTool"},{"attributes":{},"id":"21152","type":"LinearScale"},{"attributes":{"below":[{"id":"21156"}],"center":[{"id":"21159"},{"id":"21163"}],"height":288,"left":[{"id":"21160"}],"output_backend":"webgl","renderers":[{"id":"21185"}],"title":{"id":"21187"},"toolbar":{"id":"21174"},"toolbar_location":null,"width":432,"x_range":{"id":"21148"},"x_scale":{"id":"21152"},"y_range":{"id":"21150"},"y_scale":{"id":"21154"}},"id":"21147","subtype":"Figure","type":"Plot"},{"attributes":{"tools":[{"id":"21164"},{"id":"21165"},{"id":"21166"},{"id":"21167"},{"id":"21168"},{"id":"21169"},{"id":"21170"},{"id":"21171"}]},"id":"21174","type":"Toolbar"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gB+QFygcqb8AkvbM2OqMvwDAPZTAZEQ/ABNdkUAak78AFo4kwaykPwDgu3qf/FM/QBB6xSIVsb8AEruac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"21197"},"selection_policy":{"id":"21196"}},"id":"21184","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"text":"Centered eight - Non centered eight"},"id":"21187","type":"Title"},{"attributes":{"children":[[{"id":"21147"},0,0]]},"id":"21201","type":"GridBox"},{"attributes":{},"id":"21150","type":"DataRange1d"},{"attributes":{},"id":"21164","type":"ResetTool"}],"root_ids":["21204"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"b745f2b3-784f-4d83-af3c-674d5d06942d","root_ids":["21204"],"roots":{"21204":"73ba2115-1811-4d1b-9eda-01083391d3d2"}}];
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