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
    
    
    const element = document.getElementById("0ac876c7-4335-49a5-9ec8-bb034e6d8057");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0ac876c7-4335-49a5-9ec8-bb034e6d8057' but no matching script tag was found.")
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
                  const docs_json = '{"89084e43-df51-4dd9-ab59-53d6112786ab":{"defs":[],"roots":{"references":[{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21522"},"selection_policy":{"id":"21521"}},"id":"21488","type":"ColumnDataSource"},{"attributes":{},"id":"21449","type":"DataRange1d"},{"attributes":{},"id":"21526","type":"Selection"},{"attributes":{},"id":"21447","type":"DataRange1d"},{"attributes":{},"id":"21518","type":"AllLabels"},{"attributes":{},"id":"21524","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"21494"},"glyph":{"id":"21495"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21497"},"nonselection_glyph":{"id":"21496"},"view":{"id":"21499"}},"id":"21498","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21471","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21506","type":"Span"},{"attributes":{},"id":"21456","type":"BasicTicker"},{"attributes":{"axis":{"id":"21455"},"coordinates":null,"group":null,"ticker":null},"id":"21458","type":"Grid"},{"attributes":{},"id":"21519","type":"UnionRenderers"},{"attributes":{},"id":"21463","type":"ResetTool"},{"attributes":{},"id":"21514","type":"BasicTickFormatter"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"21489","type":"Line"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"21504"},{"id":"21498"}]},"id":"21509","type":"LegendItem"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21524"},"selection_policy":{"id":"21523"}},"id":"21494","type":"ColumnDataSource"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"21495","type":"Line"},{"attributes":{},"id":"21460","type":"BasicTicker"},{"attributes":{"coordinates":null,"data_source":{"id":"21500"},"glyph":{"id":"21501"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21503"},"nonselection_glyph":{"id":"21502"},"view":{"id":"21505"}},"id":"21504","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21472","type":"PolyAnnotation"},{"attributes":{},"id":"21464","type":"PanTool"},{"attributes":{"coordinates":null,"data_source":{"id":"21482"},"glyph":{"id":"21483"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21485"},"nonselection_glyph":{"id":"21484"},"view":{"id":"21487"}},"id":"21486","type":"GlyphRenderer"},{"attributes":{},"id":"21521","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"21470","type":"HoverTool"},{"attributes":{"coordinates":null,"data_source":{"id":"21488"},"glyph":{"id":"21489"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21491"},"nonselection_glyph":{"id":"21490"},"view":{"id":"21493"}},"id":"21492","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"21491","type":"Line"},{"attributes":{"fill_color":{"value":"orange"},"hatch_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21501","type":"Circle"},{"attributes":{"children":[{"id":"21532"},{"id":"21530"}]},"id":"21533","type":"Column"},{"attributes":{"toolbars":[{"id":"21473"}],"tools":[{"id":"21463"},{"id":"21464"},{"id":"21465"},{"id":"21466"},{"id":"21467"},{"id":"21468"},{"id":"21469"},{"id":"21470"}]},"id":"21531","type":"ProxyToolbar"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"21496","type":"Line"},{"attributes":{"axis_label":"ESS","coordinates":null,"formatter":{"id":"21514"},"group":null,"major_label_policy":{"id":"21515"},"ticker":{"id":"21460"}},"id":"21459","type":"LinearAxis"},{"attributes":{},"id":"21466","type":"WheelZoomTool"},{"attributes":{"above":[{"id":"21507"}],"below":[{"id":"21455"}],"center":[{"id":"21458"},{"id":"21462"}],"height":500,"left":[{"id":"21459"}],"output_backend":"webgl","renderers":[{"id":"21486"},{"id":"21492"},{"id":"21498"},{"id":"21504"},{"id":"21506"}],"title":{"id":"21510"},"toolbar":{"id":"21473"},"toolbar_location":null,"width":500,"x_range":{"id":"21447"},"x_scale":{"id":"21451"},"y_range":{"id":"21449"},"y_scale":{"id":"21453"}},"id":"21446","subtype":"Figure","type":"Plot"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"21508"},{"id":"21509"}],"location":"center_right","orientation":"horizontal"},"id":"21507","type":"Legend"},{"attributes":{},"id":"21515","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21503","type":"Circle"},{"attributes":{},"id":"21525","type":"UnionRenderers"},{"attributes":{},"id":"21451","type":"LinearScale"},{"attributes":{"toolbar":{"id":"21531"},"toolbar_location":"above"},"id":"21532","type":"ToolbarBox"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21484","type":"Circle"},{"attributes":{"axis_label":"Total number of draws","coordinates":null,"formatter":{"id":"21517"},"group":null,"major_label_policy":{"id":"21518"},"ticker":{"id":"21456"}},"id":"21455","type":"LinearAxis"},{"attributes":{"tools":[{"id":"21463"},{"id":"21464"},{"id":"21465"},{"id":"21466"},{"id":"21467"},{"id":"21468"},{"id":"21469"},{"id":"21470"}]},"id":"21473","type":"Toolbar"},{"attributes":{"coordinates":null,"group":null,"text":"b"},"id":"21510","type":"Title"},{"attributes":{"source":{"id":"21488"}},"id":"21493","type":"CDSView"},{"attributes":{},"id":"21520","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21483","type":"Circle"},{"attributes":{"children":[[{"id":"21446"},0,0]]},"id":"21530","type":"GridBox"},{"attributes":{"overlay":{"id":"21471"}},"id":"21465","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.2,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"21497","type":"Line"},{"attributes":{},"id":"21517","type":"BasicTickFormatter"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21526"},"selection_policy":{"id":"21525"}},"id":"21500","type":"ColumnDataSource"},{"attributes":{},"id":"21468","type":"UndoTool"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"21486"},{"id":"21492"}]},"id":"21508","type":"LegendItem"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21520"},"selection_policy":{"id":"21519"}},"id":"21482","type":"ColumnDataSource"},{"attributes":{"source":{"id":"21494"}},"id":"21499","type":"CDSView"},{"attributes":{},"id":"21469","type":"SaveTool"},{"attributes":{},"id":"21522","type":"Selection"},{"attributes":{"overlay":{"id":"21472"}},"id":"21467","type":"LassoSelectTool"},{"attributes":{},"id":"21453","type":"LinearScale"},{"attributes":{"source":{"id":"21500"}},"id":"21505","type":"CDSView"},{"attributes":{"axis":{"id":"21459"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21462","type":"Grid"},{"attributes":{"source":{"id":"21482"}},"id":"21487","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"21490","type":"Line"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21485","type":"Circle"},{"attributes":{},"id":"21523","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21502","type":"Circle"}],"root_ids":["21533"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"89084e43-df51-4dd9-ab59-53d6112786ab","root_ids":["21533"],"roots":{"21533":"0ac876c7-4335-49a5-9ec8-bb034e6d8057"}}];
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