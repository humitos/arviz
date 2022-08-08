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
    
    
    const element = document.getElementById("e20962ed-2841-43be-84d3-09bdfc9eeb04");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e20962ed-2841-43be-84d3-09bdfc9eeb04' but no matching script tag was found.")
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
                  const docs_json = '{"05b72291-6b91-44c5-ad86-7a701bb02f68":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18731","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18714","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":null},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18715","type":"Circle"},{"attributes":{},"id":"18741","type":"Selection"},{"attributes":{"label":{"value":"ELPD"},"renderers":[{"id":"18716"},{"id":"18722"}]},"id":"18727","type":"LegendItem"},{"attributes":{"toolbars":[{"id":"18689"}],"tools":[{"id":"18679"},{"id":"18680"},{"id":"18681"},{"id":"18682"},{"id":"18683"},{"id":"18684"},{"id":"18685"},{"id":"18686"}]},"id":"18748","type":"ProxyToolbar"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18713","type":"Circle"},{"attributes":{"coordinates":null,"dimension":"height","group":null,"line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.68796724389903},"id":"18724","type":"Span"},{"attributes":{"axis_label":"elpd_loo (log)","coordinates":null,"formatter":{"id":"18734"},"group":null,"major_label_policy":{"id":"18735"},"ticker":{"id":"18672"}},"id":"18671","type":"LinearAxis"},{"attributes":{},"id":"18735","type":"AllLabels"},{"attributes":{"overlay":{"id":"18688"}},"id":"18683","type":"LassoSelectTool"},{"attributes":{},"id":"18679","type":"ResetTool"},{"attributes":{},"id":"18742","type":"UnionRenderers"},{"attributes":{},"id":"18669","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18721","type":"MultiLine"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"18726"},{"id":"18727"}]},"id":"18725","type":"Legend"},{"attributes":{},"id":"18680","type":"PanTool"},{"attributes":{},"id":"18685","type":"SaveTool"},{"attributes":{"above":[{"id":"18725"}],"below":[{"id":"18671"}],"center":[{"id":"18674"},{"id":"18678"}],"height":500,"left":[{"id":"18675"}],"output_backend":"webgl","renderers":[{"id":"18704"},{"id":"18710"},{"id":"18716"},{"id":"18722"},{"id":"18724"}],"title":{"id":"18728"},"toolbar":{"id":"18689"},"toolbar_location":null,"width":500,"x_range":{"id":"18663"},"x_scale":{"id":"18667"},"y_range":{"id":"18665"},"y_scale":{"id":"18669"}},"id":"18662","subtype":"Figure","type":"Plot"},{"attributes":{"toolbar":{"id":"18748"},"toolbar_location":"above"},"id":"18749","type":"ToolbarBox"},{"attributes":{"source":{"id":"18712"}},"id":"18717","type":"CDSView"},{"attributes":{"callback":null},"id":"18686","type":"HoverTool"},{"attributes":{"coordinates":null,"data_source":{"id":"18718"},"glyph":{"id":"18719"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18721"},"nonselection_glyph":{"id":"18720"},"view":{"id":"18723"}},"id":"18722","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"18671"},"coordinates":null,"group":null,"ticker":null},"id":"18674","type":"Grid"},{"attributes":{"coordinates":null,"group":null,"text":"Model comparison\\nhigher is better"},"id":"18728","type":"Title"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18703","type":"Scatter"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18720","type":"MultiLine"},{"attributes":{"coordinates":null,"data_source":{"id":"18712"},"glyph":{"id":"18713"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18715"},"nonselection_glyph":{"id":"18714"},"view":{"id":"18717"}},"id":"18716","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18688","type":"PolyAnnotation"},{"attributes":{"end":0.5,"start":-1.5},"id":"18665","type":"DataRange1d"},{"attributes":{},"id":"18740","type":"UnionRenderers"},{"attributes":{"source":{"id":"18706"}},"id":"18711","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18708","type":"MultiLine"},{"attributes":{"children":[[{"id":"18662"},0,0]]},"id":"18747","type":"GridBox"},{"attributes":{"children":[{"id":"18749"},{"id":"18747"}]},"id":"18750","type":"Column"},{"attributes":{},"id":"18734","type":"BasicTickFormatter"},{"attributes":{"tools":[{"id":"18679"},{"id":"18680"},{"id":"18681"},{"id":"18682"},{"id":"18683"},{"id":"18684"},{"id":"18685"},{"id":"18686"}]},"id":"18689","type":"Toolbar"},{"attributes":{"data":{"x":{"__ndarray__":"hNBxwYDPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"18737"},"selection_policy":{"id":"18736"}},"id":"18700","type":"ColumnDataSource"},{"attributes":{},"id":"18739","type":"Selection"},{"attributes":{},"id":"18667","type":"LinearScale"},{"attributes":{},"id":"18743","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"18700"},"glyph":{"id":"18701"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18703"},"nonselection_glyph":{"id":"18702"},"view":{"id":"18705"}},"id":"18704","type":"GlyphRenderer"},{"attributes":{},"id":"18732","type":"AllLabels"},{"attributes":{"data":{"xs":[[-30.89672005978525,-30.724396750606648]],"ys":[[-0.75,-0.75]]},"selected":{"id":"18739"},"selection_policy":{"id":"18738"}},"id":"18706","type":"ColumnDataSource"},{"attributes":{},"id":"18736","type":"UnionRenderers"},{"attributes":{},"id":"18663","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18701","type":"Scatter"},{"attributes":{},"id":"18682","type":"WheelZoomTool"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18707","type":"MultiLine"},{"attributes":{"data":{"xs":[[-32.053182324911575,-29.322752162886484],[-32.237685546932575,-29.38343126345932]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"18743"},"selection_policy":{"id":"18742"}},"id":"18718","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"/kMNnx6wPsCE0HHBgM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18741"},"selection_policy":{"id":"18740"}},"id":"18712","type":"ColumnDataSource"},{"attributes":{},"id":"18672","type":"BasicTicker"},{"attributes":{},"id":"18737","type":"Selection"},{"attributes":{"axis_label":"ranked models","coordinates":null,"formatter":{"id":"18731"},"group":null,"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"18732"},"ticker":{"id":"18698"}},"id":"18675","type":"LinearAxis"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18719","type":"MultiLine"},{"attributes":{"ticks":[0.0,-1.0]},"id":"18698","type":"FixedTicker"},{"attributes":{"overlay":{"id":"18687"}},"id":"18681","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"18675"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"18678","type":"Grid"},{"attributes":{"source":{"id":"18718"}},"id":"18723","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18702","type":"Scatter"},{"attributes":{},"id":"18738","type":"UnionRenderers"},{"attributes":{},"id":"18684","type":"UndoTool"},{"attributes":{"label":{"value":"ELPD difference"},"renderers":[{"id":"18704"},{"id":"18710"}]},"id":"18726","type":"LegendItem"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18709","type":"MultiLine"},{"attributes":{"coordinates":null,"data_source":{"id":"18706"},"glyph":{"id":"18707"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18709"},"nonselection_glyph":{"id":"18708"},"view":{"id":"18711"}},"id":"18710","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18700"}},"id":"18705","type":"CDSView"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18687","type":"BoxAnnotation"}],"root_ids":["18750"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"05b72291-6b91-44c5-ad86-7a701bb02f68","root_ids":["18750"],"roots":{"18750":"e20962ed-2841-43be-84d3-09bdfc9eeb04"}}];
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