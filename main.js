function main() {
    var kanvas = document.getElementById("kanvas");
    var gl = kanvas.getContext("webgl");

    var vertices = [ 
        -0.75, 0.75, //A : Kanan atas
        -0.15, 0.75,
        -0.15, 0.50,
        -0.18, 0.45,
        -0.70, 0.45,
        -0.70, 0.25,
        -0.18, 0.25,
        -0.15, 0.20,
        -0.75, 0.20,
        -0.75, 0.45,
        -0.72, 0.50,
        -0.20, 0.50,
        -0.20, 0.70,
        -0.72, 0.70
//B : Bawah Tengah
    ];

    
    
    //buat array untuk segitiga, tapi ini masih di cpu

    var buffer = gl.createBuffer(); 
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // ini define alamat gpu
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    //udah tersambung ke gpu (udah dipindah ke alam GPU)

    //Vertex Shaders
    var vertexShaderCode = 
    `
        attribute vec2 aPosition;
        void main() {
            float x = aPosition.x;
            float y = aPosition.y;
            gl_PointSize = 10.0;
            gl_Position = vec4(x, y, 0.0, 1.0);
            
        }
        `;

    var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject, vertexShaderCode);
    gl.compileShader(vertexShaderObject); // sampai sini udah jadi .o
    //Fragment Shaders
    var fragmentShaderCode = `
        void main() {
            precision mediump float;
            float r = 5.0;
            float g = 1.0;
            float b = 0.0;
            float a = 1.0;
            gl_FragColor = vec4(r, g, b, a);
        }
        `;

    var fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShaderObject, fragmentShaderCode);
    gl.compileShader(fragmentShaderObject); // sampai sini udah jadi .o

    var shaderProgram = gl.createProgram(); //membuat sebuah mangkok
    gl.attachShader(shaderProgram, vertexShaderObject); //semua object file tadi ditaruh ke mangkok yang sama
    gl.attachShader(shaderProgram, fragmentShaderObject);
    gl.linkProgram(shaderProgram); 
    gl.useProgram(shaderProgram);

    //Mengajari GPU bagaimana caranya mengoleksi
    // nilai posisi dari ARRAY_BUFFER
    //untuk setiap verteks yang sedang diproses

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    //                      index   dimensi              warna
    gl.enableVertexAttribArray(aPosition);

    gl.clearColor(0.0,  0.0,    0.0,    1.0);
    //            Red   Green   Blue    Alpha(Opacity)
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.LINE_LOOP, 0, 14); 
    //          jenis      data     count



    var vertices2 = [ 
        0.15, 0.75, //A : Kanan atas
        0.75, 0.75,
        0.75, 0.50,
        0.72, 0.45,
        0.20, 0.45,
        0.20, 0.25,
        0.72, 0.25,
        0.75, 0.20,
        0.15, 0.20,
        0.15, 0.45,
        0.18, 0.50,
        0.70, 0.50,
        0.70, 0.70,
        0.18, 0.70
//B : Bawah Tengah
    ];

    
    
    //buat array untuk segitiga, tapi ini masih di cpu

    var buffer = gl.createBuffer(); 
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // ini define alamat gpu
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices2), gl.STATIC_DRAW);
    //udah tersambung ke gpu (udah dipindah ke alam GPU)

    //Vertex Shaders
    var vertexShaderCode2 = 
    `
        attribute vec2 bPosition;
        void main() {
            float x = bPosition.x;
            float y = bPosition.y;
            gl_PointSize = 10.0;
            gl_Position = vec4(x, y, 0.0, 1.0);
            
        }
        `;

    var vertexShaderObject2 = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject2, vertexShaderCode2);
    gl.compileShader(vertexShaderObject2); // sampai sini udah jadi .o
    //Fragment Shaders
    var fragmentShaderCode2 = `
        void main() {
            precision mediump float;
            float r = 1.0;
            float g = 0.0;
            float b = 1.0;
            float a = 10.0;
            gl_FragColor = vec4(r, g, b, a);
        }
        `;

    var fragmentShaderObject2 = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShaderObject2, fragmentShaderCode2);
    gl.compileShader(fragmentShaderObject2); // sampai sini udah jadi .o

    var shaderProgram2 = gl.createProgram(); //membuat sebuah mangkok
    gl.attachShader(shaderProgram2, vertexShaderObject2); //semua object file tadi ditaruh ke mangkok yang sama
    gl.attachShader(shaderProgram2, fragmentShaderObject2);
    gl.linkProgram(shaderProgram2); 
    gl.useProgram(shaderProgram2);

    //Mengajari GPU bagaimana caranya mengoleksi
    // nilai posisi dari ARRAY_BUFFER
    //untuk setiap verteks yang sedang diproses

    var bPosition = gl.getAttribLocation(shaderProgram2, "bPosition");
    gl.vertexAttribPointer(bPosition, 2, gl.FLOAT, false, 0, 0);
    //                      index   dimensi              warna
    gl.enableVertexAttribArray(bPosition);

    // gl.clearColor(0.0,  0.0,    0.0,    1.0);
    //            Red   Green   Blue    Alpha(Opacity)
    // gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.LINE_LOOP, 0, 14); 
    //          jenis      data     count
}

window.onload = main;

//LINE_LOOP : looping
//LINE_STRIP : ngga balik
//LINES : dua titik
