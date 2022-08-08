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
    
    
    const element = document.getElementById("c8cfb5bd-0558-410e-851f-468c4da2609c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c8cfb5bd-0558-410e-851f-468c4da2609c' but no matching script tag was found.")
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
                  const docs_json = '{"ea09f421-05bc-4b5a-bdc6-36dc1a76f456":{"defs":[],"roots":{"references":[{"attributes":{"toolbar":{"id":"21072"},"toolbar_location":"above"},"id":"21073","type":"ToolbarBox"},{"attributes":{"children":[{"id":"21073"},{"id":"21071"}]},"id":"21074","type":"Column"},{"attributes":{"source":{"id":"21028"}},"id":"21033","type":"CDSView"},{"attributes":{"below":[{"id":"21001"}],"center":[{"id":"21004"},{"id":"21008"}],"height":360,"left":[{"id":"21005"}],"match_aspect":true,"output_backend":"webgl","renderers":[{"id":"21032"},{"id":"21038"},{"id":"21044"},{"id":"21050"}],"title":{"id":"21052"},"toolbar":{"id":"21019"},"toolbar_location":null,"width":720,"x_range":{"id":"20993"},"x_scale":{"id":"20997"},"y_range":{"id":"20995"},"y_scale":{"id":"20999"}},"id":"20992","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"21009","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"21043","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"21048","type":"Circle"},{"attributes":{},"id":"21067","type":"Selection"},{"attributes":{},"id":"21055","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"21034"}},"id":"21039","type":"CDSView"},{"attributes":{"toolbars":[{"id":"21019"}],"tools":[{"id":"21009"},{"id":"21010"},{"id":"21011"},{"id":"21012"},{"id":"21013"},{"id":"21014"},{"id":"21015"},{"id":"21016"}]},"id":"21072","type":"ProxyToolbar"},{"attributes":{},"id":"20993","type":"DataRange1d"},{"attributes":{"data":{"x":[-1.9040259413199274,1.8078221014364193],"y":[0,0]},"selected":{"id":"21061"},"selection_policy":{"id":"21060"}},"id":"21028","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"21046"},"glyph":{"id":"21047"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21049"},"nonselection_glyph":{"id":"21048"},"view":{"id":"21051"}},"id":"21050","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"21031","type":"Line"},{"attributes":{},"id":"21056","type":"AllLabels"},{"attributes":{"source":{"id":"21046"}},"id":"21051","type":"CDSView"},{"attributes":{"children":[[{"id":"20992"},0,0]]},"id":"21071","type":"GridBox"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.2},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"21049","type":"Circle"},{"attributes":{},"id":"21065","type":"Selection"},{"attributes":{},"id":"21014","type":"UndoTool"},{"attributes":{"coordinates":null,"formatter":{"id":"21055"},"group":null,"major_label_policy":{"id":"21056"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"21006"}},"id":"21005","type":"LinearAxis"},{"attributes":{"source":{"id":"21040"}},"id":"21045","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"21030","type":"Line"},{"attributes":{},"id":"21058","type":"BasicTickFormatter"},{"attributes":{},"id":"21062","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"FRx+8A5uAsDsq3R/ipD6v+yrdH+KkPq/7Kt0f4qQ+r80ET6N8b3yvzQRPo3xvfK/NBE+jfG98r80ET6N8b3yv6IYAQonyui/ohgBCifK6L+iGAEKJ8rov6IYAQonyui/ohgBCifK6L+iGAEKJ8rov3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP456/k5DI+Q/jnr+TkMj5D+Oev5OQyPkP456/k5DI+Q/jnr+TkMj5D/ZQm3RXADwP9lCbdFcAPA/2UJt0VwA8D/ZQm3RXADwP9By6jDXYPY/0HLqMNdg9j/Qcuow12D2P2DXuW8eufw/YNe5bx65/D+lK8ris3EDQA==","dtype":"float64","order":"little","shape":[50]},"y":{"__ndarray__":"Hkoo7ZC0xD8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Px5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Pzi8sMC10gBAHkoo7ZC0xD8tb7xj2Q7fP6Zccii14ek/2kCDz/4d8j9iU80KI0v3P+plF0ZHePw/OLywwLXSAEAeSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yP2JTzQojS/c/6mUXRkd4/D84vLDAtdIAQB5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpPx5KKO2QtMQ/LW+8Y9kO3z8eSijtkLTEPw==","dtype":"float64","order":"little","shape":[50]}},"selected":{"id":"21067"},"selection_policy":{"id":"21066"}},"id":"21046","type":"ColumnDataSource"},{"attributes":{"tools":[{"id":"21009"},{"id":"21010"},{"id":"21011"},{"id":"21012"},{"id":"21013"},{"id":"21014"},{"id":"21015"},{"id":"21016"}]},"id":"21019","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#fa7c17"},"hatch_color":{"value":"#fa7c17"},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"21047","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"21036","type":"Line"},{"attributes":{},"id":"20999","type":"LinearScale"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"21037","type":"Line"},{"attributes":{"axis":{"id":"21001"},"coordinates":null,"group":null,"ticker":null},"id":"21004","type":"Grid"},{"attributes":{"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"21035","type":"Line"},{"attributes":{},"id":"21061","type":"Selection"},{"attributes":{},"id":"21060","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"21042","type":"Circle"},{"attributes":{},"id":"20995","type":"DataRange1d"},{"attributes":{},"id":"21066","type":"UnionRenderers"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21018","type":"PolyAnnotation"},{"attributes":{"coordinates":null,"formatter":{"id":"21058"},"group":null,"major_label_policy":{"id":"21059"},"ticker":{"id":"21002"}},"id":"21001","type":"LinearAxis"},{"attributes":{},"id":"21010","type":"PanTool"},{"attributes":{"coordinates":null,"data_source":{"id":"21040"},"glyph":{"id":"21041"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21043"},"nonselection_glyph":{"id":"21042"},"view":{"id":"21045"}},"id":"21044","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"21018"}},"id":"21013","type":"LassoSelectTool"},{"attributes":{},"id":"21063","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"21065"},"selection_policy":{"id":"21064"}},"id":"21040","type":"ColumnDataSource"},{"attributes":{},"id":"21002","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21017","type":"BoxAnnotation"},{"attributes":{},"id":"21012","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"data_source":{"id":"21028"},"glyph":{"id":"21029"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21031"},"nonselection_glyph":{"id":"21030"},"view":{"id":"21033"}},"id":"21032","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"21005"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21008","type":"Grid"},{"attributes":{"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"21029","type":"Line"},{"attributes":{},"id":"21064","type":"UnionRenderers"},{"attributes":{"data":{"x":[-0.667808853419204,0.6382905789859445],"y":[0,0]},"selected":{"id":"21063"},"selection_policy":{"id":"21062"}},"id":"21034","type":"ColumnDataSource"},{"attributes":{},"id":"20997","type":"LinearScale"},{"attributes":{"overlay":{"id":"21017"}},"id":"21011","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"21016","type":"HoverTool"},{"attributes":{"coordinates":null,"group":null},"id":"21052","type":"Title"},{"attributes":{},"id":"21015","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"21041","type":"Circle"},{"attributes":{},"id":"21006","type":"BasicTicker"},{"attributes":{},"id":"21059","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"21034"},"glyph":{"id":"21035"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21037"},"nonselection_glyph":{"id":"21036"},"view":{"id":"21039"}},"id":"21038","type":"GlyphRenderer"}],"root_ids":["21074"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"ea09f421-05bc-4b5a-bdc6-36dc1a76f456","root_ids":["21074"],"roots":{"21074":"c8cfb5bd-0558-410e-851f-468c4da2609c"}}];
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