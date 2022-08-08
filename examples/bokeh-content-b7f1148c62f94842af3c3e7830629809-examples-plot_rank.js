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
    
    
    const element = document.getElementById("4f5f7637-39ed-4b1c-b146-efda797a9d6d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4f5f7637-39ed-4b1c-b146-efda797a9d6d' but no matching script tag was found.")
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
                  const docs_json = '{"932f385c-b122-4993-abfd-be1ac5905c5a":{"defs":[],"roots":{"references":[{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48906","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48901","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48898"},"glyph":{"id":"48899"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48901"},"nonselection_glyph":{"id":"48900"},"view":{"id":"48903"}},"id":"48902","type":"GlyphRenderer"},{"attributes":{"source":{"id":"48905"}},"id":"48910","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48900","type":"VBar"},{"attributes":{"source":{"id":"48898"}},"id":"48903","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48908","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.41666666666666663},"id":"48904","type":"Span"},{"attributes":{"source":{"id":"48912"}},"id":"48917","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48971"},"selection_policy":{"id":"48970"}},"id":"48905","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4166666666666665},"id":"48911","type":"Span"},{"attributes":{"coordinates":null,"data_source":{"id":"48905"},"glyph":{"id":"48906"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48908"},"nonselection_glyph":{"id":"48907"},"view":{"id":"48910"}},"id":"48909","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48915","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48907","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48913","type":"VBar"},{"attributes":{"source":{"id":"48919"}},"id":"48924","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48973"},"selection_policy":{"id":"48972"}},"id":"48912","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.4166666666666665},"id":"48918","type":"Span"},{"attributes":{},"id":"48963","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"data_source":{"id":"48912"},"glyph":{"id":"48913"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48915"},"nonselection_glyph":{"id":"48914"},"view":{"id":"48917"}},"id":"48916","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48922","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48914","type":"VBar"},{"attributes":{},"id":"48964","type":"AllLabels"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48920","type":"VBar"},{"attributes":{},"id":"48966","type":"BasicTickFormatter"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48975"},"selection_policy":{"id":"48974"}},"id":"48919","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.4166666666666665},"id":"48925","type":"Span"},{"attributes":{"coordinates":null,"data_source":{"id":"48919"},"glyph":{"id":"48920"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48922"},"nonselection_glyph":{"id":"48921"},"view":{"id":"48924"}},"id":"48923","type":"GlyphRenderer"},{"attributes":{},"id":"48967","type":"AllLabels"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48921","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48938","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48986"},"selection_policy":{"id":"48985"}},"id":"48930","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48930"},"glyph":{"id":"48931"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48933"},"nonselection_glyph":{"id":"48932"},"view":{"id":"48935"}},"id":"48934","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48933","type":"VBar"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48931","type":"VBar"},{"attributes":{"source":{"id":"48937"}},"id":"48942","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48932","type":"VBar"},{"attributes":{"source":{"id":"48930"}},"id":"48935","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48940","type":"VBar"},{"attributes":{"below":[{"id":"48837"}],"center":[{"id":"48840"},{"id":"48844"},{"id":"48904"},{"id":"48911"},{"id":"48918"},{"id":"48925"}],"height":331,"left":[{"id":"48841"}],"output_backend":"webgl","renderers":[{"id":"48902"},{"id":"48909"},{"id":"48916"},{"id":"48923"}],"title":{"id":"48928"},"toolbar":{"id":"48855"},"toolbar_location":null,"width":496,"x_range":{"id":"48829"},"x_scale":{"id":"48833"},"y_range":{"id":"48831"},"y_scale":{"id":"48835"}},"id":"48828","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.48076923076923067},"id":"48936","type":"Span"},{"attributes":{"source":{"id":"48944"}},"id":"48949","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48988"},"selection_policy":{"id":"48987"}},"id":"48937","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"48998"},{"id":"48996"}]},"id":"48999","type":"Column"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4807692307692308},"id":"48943","type":"Span"},{"attributes":{"coordinates":null,"data_source":{"id":"48937"},"glyph":{"id":"48938"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48940"},"nonselection_glyph":{"id":"48939"},"view":{"id":"48942"}},"id":"48941","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48947","type":"VBar"},{"attributes":{},"id":"48968","type":"UnionRenderers"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48939","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48945","type":"VBar"},{"attributes":{},"id":"48969","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48990"},"selection_policy":{"id":"48989"}},"id":"48944","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.480769230769231},"id":"48950","type":"Span"},{"attributes":{"coordinates":null,"data_source":{"id":"48944"},"glyph":{"id":"48945"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48947"},"nonselection_glyph":{"id":"48946"},"view":{"id":"48949"}},"id":"48948","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48954","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48946","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48952","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48992"},"selection_policy":{"id":"48991"}},"id":"48951","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"48855"},{"id":"48889"}],"tools":[{"id":"48845"},{"id":"48846"},{"id":"48847"},{"id":"48848"},{"id":"48849"},{"id":"48850"},{"id":"48851"},{"id":"48852"},{"id":"48879"},{"id":"48880"},{"id":"48881"},{"id":"48882"},{"id":"48883"},{"id":"48884"},{"id":"48885"},{"id":"48886"}]},"id":"48997","type":"ProxyToolbar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48953","type":"VBar"},{"attributes":{"toolbar":{"id":"48997"},"toolbar_location":"above"},"id":"48998","type":"ToolbarBox"},{"attributes":{},"id":"48970","type":"UnionRenderers"},{"attributes":{},"id":"48971","type":"Selection"},{"attributes":{},"id":"48829","type":"DataRange1d"},{"attributes":{},"id":"48985","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"48828"},0,0],[{"id":"48864"},0,1]]},"id":"48996","type":"GridBox"},{"attributes":{},"id":"48986","type":"Selection"},{"attributes":{},"id":"48833","type":"LinearScale"},{"attributes":{"ticks":[0,1,2,3]},"id":"48958","type":"FixedTicker"},{"attributes":{},"id":"48972","type":"UnionRenderers"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"48928","type":"Title"},{"attributes":{},"id":"48973","type":"Selection"},{"attributes":{},"id":"48831","type":"DataRange1d"},{"attributes":{},"id":"48838","type":"BasicTicker"},{"attributes":{},"id":"48987","type":"UnionRenderers"},{"attributes":{},"id":"48988","type":"Selection"},{"attributes":{"source":{"id":"48951"}},"id":"48956","type":"CDSView"},{"attributes":{"axis":{"id":"48837"},"coordinates":null,"group":null,"ticker":null},"id":"48840","type":"Grid"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48854","type":"PolyAnnotation"},{"attributes":{},"id":"48974","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"48951"},"glyph":{"id":"48952"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48954"},"nonselection_glyph":{"id":"48953"},"view":{"id":"48956"}},"id":"48955","type":"GlyphRenderer"},{"attributes":{},"id":"48975","type":"Selection"},{"attributes":{"axis":{"id":"48841"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48844","type":"Grid"},{"attributes":{},"id":"48989","type":"UnionRenderers"},{"attributes":{"tools":[{"id":"48879"},{"id":"48880"},{"id":"48881"},{"id":"48882"},{"id":"48883"},{"id":"48884"},{"id":"48885"},{"id":"48886"}]},"id":"48889","type":"Toolbar"},{"attributes":{},"id":"48990","type":"Selection"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48966"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48967"},"ticker":{"id":"48838"}},"id":"48837","type":"LinearAxis"},{"attributes":{"callback":null},"id":"48852","type":"HoverTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48887","type":"BoxAnnotation"},{"attributes":{},"id":"48846","type":"PanTool"},{"attributes":{},"id":"48884","type":"UndoTool"},{"attributes":{},"id":"48980","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"48888"}},"id":"48883","type":"LassoSelectTool"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48963"},"group":null,"major_label_policy":{"id":"48964"},"ticker":{"id":"48926"}},"id":"48841","type":"LinearAxis"},{"attributes":{},"id":"48882","type":"WheelZoomTool"},{"attributes":{},"id":"48835","type":"LinearScale"},{"attributes":{},"id":"48885","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48899","type":"VBar"},{"attributes":{},"id":"48981","type":"AllLabels"},{"attributes":{"below":[{"id":"48871"}],"center":[{"id":"48874"},{"id":"48878"},{"id":"48936"},{"id":"48943"},{"id":"48950"},{"id":"48957"}],"height":331,"left":[{"id":"48875"}],"output_backend":"webgl","renderers":[{"id":"48934"},{"id":"48941"},{"id":"48948"},{"id":"48955"}],"title":{"id":"48960"},"toolbar":{"id":"48889"},"toolbar_location":null,"width":496,"x_range":{"id":"48829"},"x_scale":{"id":"48867"},"y_range":{"id":"48831"},"y_scale":{"id":"48869"}},"id":"48864","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"48853"}},"id":"48847","type":"BoxZoomTool"},{"attributes":{},"id":"48879","type":"ResetTool"},{"attributes":{},"id":"48880","type":"PanTool"},{"attributes":{"ticks":[0,1,2,3]},"id":"48926","type":"FixedTicker"},{"attributes":{"overlay":{"id":"48887"}},"id":"48881","type":"BoxZoomTool"},{"attributes":{},"id":"48983","type":"BasicTickFormatter"},{"attributes":{},"id":"48845","type":"ResetTool"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48969"},"selection_policy":{"id":"48968"}},"id":"48898","type":"ColumnDataSource"},{"attributes":{},"id":"48851","type":"SaveTool"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"48960","type":"Title"},{"attributes":{},"id":"48848","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"48875"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48878","type":"Grid"},{"attributes":{},"id":"48984","type":"AllLabels"},{"attributes":{"overlay":{"id":"48854"}},"id":"48849","type":"LassoSelectTool"},{"attributes":{},"id":"48991","type":"UnionRenderers"},{"attributes":{},"id":"48850","type":"UndoTool"},{"attributes":{"tools":[{"id":"48845"},{"id":"48846"},{"id":"48847"},{"id":"48848"},{"id":"48849"},{"id":"48850"},{"id":"48851"},{"id":"48852"}]},"id":"48855","type":"Toolbar"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48983"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48984"},"ticker":{"id":"48872"}},"id":"48871","type":"LinearAxis"},{"attributes":{},"id":"48992","type":"Selection"},{"attributes":{"callback":null},"id":"48886","type":"HoverTool"},{"attributes":{},"id":"48869","type":"LinearScale"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48853","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"48871"},"coordinates":null,"group":null,"ticker":null},"id":"48874","type":"Grid"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48980"},"group":null,"major_label_policy":{"id":"48981"},"ticker":{"id":"48958"}},"id":"48875","type":"LinearAxis"},{"attributes":{},"id":"48867","type":"LinearScale"},{"attributes":{},"id":"48872","type":"BasicTicker"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.480769230769231},"id":"48957","type":"Span"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48888","type":"PolyAnnotation"}],"root_ids":["48999"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"932f385c-b122-4993-abfd-be1ac5905c5a","root_ids":["48999"],"roots":{"48999":"4f5f7637-39ed-4b1c-b146-efda797a9d6d"}}];
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