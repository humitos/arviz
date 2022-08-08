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
    
    
    const element = document.getElementById("ada9b382-5b23-4ede-898e-de96374ea59c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ada9b382-5b23-4ede-898e-de96374ea59c' but no matching script tag was found.")
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
                  const docs_json = '{"e5761ce7-4120-4b85-bc13-4cfd42879637":{"defs":[],"roots":{"references":[{"attributes":{},"id":"42395","type":"AllLabels"},{"attributes":{},"id":"42415","type":"UnionRenderers"},{"attributes":{},"id":"42397","type":"BasicTickFormatter"},{"attributes":{},"id":"42310","type":"WheelZoomTool"},{"attributes":{},"id":"42416","type":"Selection"},{"attributes":{},"id":"42398","type":"AllLabels"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"42384","type":"Span"},{"attributes":{},"id":"42308","type":"PanTool"},{"attributes":{},"id":"42331","type":"LinearScale"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"42315","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"data_source":{"id":"42377"},"glyph":{"id":"42378"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"42380"},"nonselection_glyph":{"id":"42379"},"view":{"id":"42382"}},"id":"42381","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"42383","type":"Span"},{"attributes":{"coordinates":null,"data_source":{"id":"42372"},"glyph":{"id":"42371"},"group":null,"hover_glyph":null,"view":{"id":"42374"}},"id":"42373","type":"GlyphRenderer"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"42402"},"selection_policy":{"id":"42401"}},"id":"42372","type":"ColumnDataSource"},{"attributes":{},"id":"42399","type":"UnionRenderers"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"42370","type":"Span"},{"attributes":{"coordinates":null,"data_source":{"id":"42362"},"glyph":{"id":"42363"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"42365"},"nonselection_glyph":{"id":"42364"},"view":{"id":"42367"}},"id":"42366","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"42365","type":"Circle"},{"attributes":{},"id":"42400","type":"Selection"},{"attributes":{},"id":"42291","type":"DataRange1d"},{"attributes":{"end":1,"start":-0.05},"id":"42293","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"42364","type":"Circle"},{"attributes":{"source":{"id":"42362"}},"id":"42367","type":"CDSView"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"42371","type":"Scatter"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"42369","type":"Span"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"42408"},"group":null,"major_label_policy":{"id":"42409"},"ticker":{"id":"42340"}},"id":"42339","type":"LinearAxis"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"42375","type":"Title"},{"attributes":{"callback":null},"id":"42350","type":"HoverTool"},{"attributes":{"source":{"id":"42372"}},"id":"42374","type":"CDSView"},{"attributes":{"source":{"id":"42387"}},"id":"42389","type":"CDSView"},{"attributes":{},"id":"42327","type":"DataRange1d"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"42397"},"group":null,"major_label_policy":{"id":"42398"},"ticker":{"id":"42300"}},"id":"42299","type":"LinearAxis"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"42385","type":"Span"},{"attributes":{"tools":[{"id":"42307"},{"id":"42308"},{"id":"42309"},{"id":"42310"},{"id":"42311"},{"id":"42312"},{"id":"42313"},{"id":"42314"}]},"id":"42317","type":"Toolbar"},{"attributes":{"end":1,"start":-0.05},"id":"42329","type":"DataRange1d"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"42416"},"selection_policy":{"id":"42415"}},"id":"42387","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"42387"},"glyph":{"id":"42386"},"group":null,"hover_glyph":null,"view":{"id":"42389"}},"id":"42388","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"42316","type":"PolyAnnotation"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"42390","type":"Title"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"42386","type":"Scatter"},{"attributes":{"axis":{"id":"42339"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"42342","type":"Grid"},{"attributes":{},"id":"42401","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"42317"},{"id":"42353"}],"tools":[{"id":"42307"},{"id":"42308"},{"id":"42309"},{"id":"42310"},{"id":"42311"},{"id":"42312"},{"id":"42313"},{"id":"42314"},{"id":"42343"},{"id":"42344"},{"id":"42345"},{"id":"42346"},{"id":"42347"},{"id":"42348"},{"id":"42349"},{"id":"42350"}]},"id":"42421","type":"ProxyToolbar"},{"attributes":{},"id":"42340","type":"BasicTicker"},{"attributes":{"overlay":{"id":"42352"}},"id":"42347","type":"LassoSelectTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"42400"},"selection_policy":{"id":"42399"}},"id":"42362","type":"ColumnDataSource"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"42411"},"group":null,"major_label_policy":{"id":"42412"},"ticker":{"id":"42336"}},"id":"42335","type":"LinearAxis"},{"attributes":{},"id":"42402","type":"Selection"},{"attributes":{"toolbar":{"id":"42421"},"toolbar_location":"above"},"id":"42422","type":"ToolbarBox"},{"attributes":{},"id":"42333","type":"LinearScale"},{"attributes":{},"id":"42408","type":"BasicTickFormatter"},{"attributes":{},"id":"42336","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"42363","type":"Circle"},{"attributes":{"axis":{"id":"42335"},"coordinates":null,"group":null,"ticker":null},"id":"42338","type":"Grid"},{"attributes":{},"id":"42409","type":"AllLabels"},{"attributes":{"overlay":{"id":"42316"}},"id":"42311","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"42368","type":"Span"},{"attributes":{},"id":"42411","type":"BasicTickFormatter"},{"attributes":{},"id":"42412","type":"AllLabels"},{"attributes":{"children":[{"id":"42422"},{"id":"42420"}]},"id":"42423","type":"Column"},{"attributes":{},"id":"42312","type":"UndoTool"},{"attributes":{"tools":[{"id":"42343"},{"id":"42344"},{"id":"42345"},{"id":"42346"},{"id":"42347"},{"id":"42348"},{"id":"42349"},{"id":"42350"}]},"id":"42353","type":"Toolbar"},{"attributes":{},"id":"42295","type":"LinearScale"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"42352","type":"PolyAnnotation"},{"attributes":{"source":{"id":"42377"}},"id":"42382","type":"CDSView"},{"attributes":{"callback":null},"id":"42314","type":"HoverTool"},{"attributes":{},"id":"42413","type":"UnionRenderers"},{"attributes":{},"id":"42300","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"42379","type":"Circle"},{"attributes":{},"id":"42414","type":"Selection"},{"attributes":{"axis":{"id":"42299"},"coordinates":null,"group":null,"ticker":null},"id":"42302","type":"Grid"},{"attributes":{"below":[{"id":"42299"}],"center":[{"id":"42302"},{"id":"42306"}],"height":500,"left":[{"id":"42303"}],"output_backend":"webgl","renderers":[{"id":"42366"},{"id":"42368"},{"id":"42369"},{"id":"42370"},{"id":"42373"}],"title":{"id":"42375"},"toolbar":{"id":"42317"},"toolbar_location":null,"width":500,"x_range":{"id":"42291"},"x_scale":{"id":"42295"},"y_range":{"id":"42293"},"y_scale":{"id":"42297"}},"id":"42290","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"42348","type":"UndoTool"},{"attributes":{"below":[{"id":"42335"}],"center":[{"id":"42338"},{"id":"42342"}],"height":500,"left":[{"id":"42339"}],"output_backend":"webgl","renderers":[{"id":"42381"},{"id":"42383"},{"id":"42384"},{"id":"42385"},{"id":"42388"}],"title":{"id":"42390"},"toolbar":{"id":"42353"},"toolbar_location":null,"width":500,"x_range":{"id":"42327"},"x_scale":{"id":"42331"},"y_range":{"id":"42329"},"y_scale":{"id":"42333"}},"id":"42326","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"42394"},"group":null,"major_label_policy":{"id":"42395"},"ticker":{"id":"42304"}},"id":"42303","type":"LinearAxis"},{"attributes":{"children":[[{"id":"42290"},0,0],[{"id":"42326"},0,1]]},"id":"42420","type":"GridBox"},{"attributes":{"overlay":{"id":"42351"}},"id":"42345","type":"BoxZoomTool"},{"attributes":{},"id":"42307","type":"ResetTool"},{"attributes":{},"id":"42297","type":"LinearScale"},{"attributes":{},"id":"42344","type":"PanTool"},{"attributes":{},"id":"42304","type":"BasicTicker"},{"attributes":{},"id":"42343","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"42378","type":"Circle"},{"attributes":{},"id":"42313","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"42380","type":"Circle"},{"attributes":{},"id":"42349","type":"SaveTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"42414"},"selection_policy":{"id":"42413"}},"id":"42377","type":"ColumnDataSource"},{"attributes":{},"id":"42346","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"42303"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"42306","type":"Grid"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"42351","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"42315"}},"id":"42309","type":"BoxZoomTool"},{"attributes":{},"id":"42394","type":"BasicTickFormatter"}],"root_ids":["42423"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"e5761ce7-4120-4b85-bc13-4cfd42879637","root_ids":["42423"],"roots":{"42423":"ada9b382-5b23-4ede-898e-de96374ea59c"}}];
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