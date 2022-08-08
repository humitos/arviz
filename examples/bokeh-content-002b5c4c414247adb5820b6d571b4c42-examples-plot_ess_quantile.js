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
    
    
    const element = document.getElementById("b7fdc57d-db96-4988-81d3-ea5fca9ee7f4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b7fdc57d-db96-4988-81d3-ea5fca9ee7f4' but no matching script tag was found.")
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
                  const docs_json = '{"69754292-2716-4c07-b7f8-a73a8cc12dc0":{"defs":[],"roots":{"references":[{"attributes":{"toolbars":[{"id":"21749"}],"tools":[{"id":"21739"},{"id":"21740"},{"id":"21741"},{"id":"21742"},{"id":"21743"},{"id":"21744"},{"id":"21745"},{"id":"21746"}]},"id":"21780","type":"ProxyToolbar"},{"attributes":{"toolbar":{"id":"21780"},"toolbar_location":"above"},"id":"21781","type":"ToolbarBox"},{"attributes":{},"id":"21775","type":"Selection"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21764","type":"Span"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21759","type":"Circle"},{"attributes":{},"id":"21723","type":"DataRange1d"},{"attributes":{"children":[{"id":"21781"},{"id":"21779"}]},"id":"21782","type":"Column"},{"attributes":{"below":[{"id":"21731"}],"center":[{"id":"21734"},{"id":"21738"}],"height":500,"left":[{"id":"21735"}],"output_backend":"webgl","renderers":[{"id":"21762"},{"id":"21764"}],"title":{"id":"21765"},"toolbar":{"id":"21749"},"toolbar_location":null,"width":500,"x_range":{"id":"21723"},"x_scale":{"id":"21727"},"y_range":{"id":"21725"},"y_scale":{"id":"21729"}},"id":"21722","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"21772","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"21747"}},"id":"21741","type":"BoxZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21775"},"selection_policy":{"id":"21774"}},"id":"21758","type":"ColumnDataSource"},{"attributes":{},"id":"21732","type":"BasicTicker"},{"attributes":{"overlay":{"id":"21748"}},"id":"21743","type":"LassoSelectTool"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21772"},"group":null,"major_label_policy":{"id":"21773"},"ticker":{"id":"21732"}},"id":"21731","type":"LinearAxis"},{"attributes":{},"id":"21740","type":"PanTool"},{"attributes":{},"id":"21744","type":"UndoTool"},{"attributes":{"source":{"id":"21758"}},"id":"21763","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"21758"},"glyph":{"id":"21759"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21761"},"nonselection_glyph":{"id":"21760"},"view":{"id":"21763"}},"id":"21762","type":"GlyphRenderer"},{"attributes":{},"id":"21725","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21747","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21748","type":"PolyAnnotation"},{"attributes":{"children":[[{"id":"21722"},0,0]]},"id":"21779","type":"GridBox"},{"attributes":{},"id":"21727","type":"LinearScale"},{"attributes":{},"id":"21736","type":"BasicTicker"},{"attributes":{},"id":"21774","type":"UnionRenderers"},{"attributes":{},"id":"21770","type":"AllLabels"},{"attributes":{},"id":"21773","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21761","type":"Circle"},{"attributes":{"callback":null},"id":"21746","type":"HoverTool"},{"attributes":{"axis":{"id":"21731"},"coordinates":null,"group":null,"ticker":null},"id":"21734","type":"Grid"},{"attributes":{},"id":"21742","type":"WheelZoomTool"},{"attributes":{"tools":[{"id":"21739"},{"id":"21740"},{"id":"21741"},{"id":"21742"},{"id":"21743"},{"id":"21744"},{"id":"21745"},{"id":"21746"}]},"id":"21749","type":"Toolbar"},{"attributes":{"axis_label":"ESS for quantiles","coordinates":null,"formatter":{"id":"21769"},"group":null,"major_label_policy":{"id":"21770"},"ticker":{"id":"21736"}},"id":"21735","type":"LinearAxis"},{"attributes":{},"id":"21739","type":"ResetTool"},{"attributes":{"axis":{"id":"21735"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21738","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21760","type":"Circle"},{"attributes":{},"id":"21729","type":"LinearScale"},{"attributes":{"coordinates":null,"group":null,"text":"sigma"},"id":"21765","type":"Title"},{"attributes":{},"id":"21745","type":"SaveTool"},{"attributes":{},"id":"21769","type":"BasicTickFormatter"}],"root_ids":["21782"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"69754292-2716-4c07-b7f8-a73a8cc12dc0","root_ids":["21782"],"roots":{"21782":"b7fdc57d-db96-4988-81d3-ea5fca9ee7f4"}}];
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