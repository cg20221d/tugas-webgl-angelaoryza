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

//-----------------------ANGKA KEDUA-----------------------------//

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
    ];

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

    var bPosition = gl.getAttribLocation(shaderProgram2, "bPosition");
    gl.vertexAttribPointer(bPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(bPosition);
    gl.drawArrays(gl.LINE_LOOP, 0, 14); 

    //-----------------------HURUF PERTAMA-----------------------------//

    var vertices3 = [ 
        -0.75, -0.20, //A : Kanan atas
        -0.70, -0.20,
        -0.5915, -0.75,
        -0.65, -0.75
    ];

    var buffer = gl.createBuffer(); 
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // ini define alamat gpu
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices3), gl.STATIC_DRAW);
    //udah tersambung ke gpu (udah dipindah ke alam GPU)

    //Vertex Shaders
    var vertexShaderCode3 = 
    `
        attribute vec2 cPosition;
        void main() {
            float x = cPosition.x;
            float y = cPosition.y;
            gl_PointSize = 5.0;
            gl_Position = vec4(x, y, 0.0, 1.0);
            
        }
        `;

    var vertexShaderObject3 = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject3, vertexShaderCode3);
    gl.compileShader(vertexShaderObject3); // sampai sini udah jadi .o
    //Fragment Shaders
    var fragmentShaderCode3 = `
        void main() {
            precision mediump float;
            float r = 0.0;
            float g = 1.0;
            float b = 5.0;
            float a = 10.0;
            gl_FragColor = vec4(r, g, b, a);
        }
        `;

    var fragmentShaderObject3 = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShaderObject3, fragmentShaderCode3);
    gl.compileShader(fragmentShaderObject3); // sampai sini udah jadi .o

    var shaderProgram3 = gl.createProgram(); //membuat sebuah mangkok
    gl.attachShader(shaderProgram3, vertexShaderObject3); //semua object file tadi ditaruh ke mangkok yang sama
    gl.attachShader(shaderProgram3, fragmentShaderObject3);
    gl.linkProgram(shaderProgram3); 
    gl.useProgram(shaderProgram3);

    var cPosition = gl.getAttribLocation(shaderProgram3, "cPosition");
    gl.vertexAttribPointer(cPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(cPosition);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4); 

    var vertices4 = [ 
        -0.75, -0.20, //A : Kanan atas
        -0.70, -0.20,
        -0.60, -0.70,
        -0.50, -0.28,
        -0.45, -0.28,
        -0.35, -0.70,
        -0.25, -0.20,
        -0.20, -0.20,
        -0.30, -0.75,
        -0.40, -0.75,
        -0.475, -0.40,
        -0.55, -0.75,
        -0.65, -0.75
    ];

    var buffer = gl.createBuffer(); 
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // ini define alamat gpu
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices4), gl.STATIC_DRAW);
    //udah tersambung ke gpu (udah dipindah ke alam GPU)

    //Vertex Shaders
    var vertexShaderCode4 = 
    `
        attribute vec2 dPosition;
        void main() {
            float x = dPosition.x;
            float y = dPosition.y;
            gl_PointSize = 5.0;
            gl_Position = vec4(x, y, 0.0, 1.0);
            
        }
        `;

    var vertexShaderObject4 = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject4, vertexShaderCode4);
    gl.compileShader(vertexShaderObject4); // sampai sini udah jadi .o
    //Fragment Shaders
    var fragmentShaderCode4 = `
        void main() {
            precision mediump float;
            float r = 1.0;
            float g = 0.0;
            float b = 1.0;
            float a = 10.0;
            gl_FragColor = vec4(r, g, b, a);
        }
        `;

    var fragmentShaderObject4 = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShaderObject4, fragmentShaderCode4);
    gl.compileShader(fragmentShaderObject4); // sampai sini udah jadi .o

    var shaderProgram4 = gl.createProgram(); //membuat sebuah mangkok
    gl.attachShader(shaderProgram4, vertexShaderObject4); //semua object file tadi ditaruh ke mangkok yang sama
    gl.attachShader(shaderProgram4, fragmentShaderObject4);
    gl.linkProgram(shaderProgram4); 
    gl.useProgram(shaderProgram4);

    var dPosition = gl.getAttribLocation(shaderProgram4, "dPosition");
    gl.vertexAttribPointer(dPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(dPosition);
    gl.drawArrays(gl.LINE_LOOP, 0, 13); 

var vertices5 = [ 
    -0.615, -0.75,
    -0.50, -0.28,
    -0.45, -0.28,
    -0.55, -0.75
];

var buffer = gl.createBuffer(); 
gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // ini define alamat gpu
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices5), gl.STATIC_DRAW);
//udah tersambung ke gpu (udah dipindah ke alam GPU)

//Vertex Shaders
var vertexShaderCode5 = 
`
    attribute vec2 ePosition;
    void main() {
        float x = ePosition.x;
        float y = ePosition.y;
        gl_PointSize = 5.0;
        gl_Position = vec4(x, y, 0.0, 1.0);
        
    }
    `;

var vertexShaderObject5 = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShaderObject5, vertexShaderCode5);
gl.compileShader(vertexShaderObject5); // sampai sini udah jadi .o
//Fragment Shaders
var fragmentShaderCode5 = `
    void main() {
        precision mediump float;
        float r = 0.0;
        float g = 1.0;
        float b = 5.0;
        float a = 10.0;
        gl_FragColor = vec4(r, g, b, a);
    }
    `;

var fragmentShaderObject5 = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShaderObject5, fragmentShaderCode5);
gl.compileShader(fragmentShaderObject5); // sampai sini udah jadi .o

var shaderProgram5 = gl.createProgram(); //membuat sebuah mangkok
gl.attachShader(shaderProgram5, vertexShaderObject5); //semua object file tadi ditaruh ke mangkok yang sama
gl.attachShader(shaderProgram5, fragmentShaderObject5);
gl.linkProgram(shaderProgram5); 
gl.useProgram(shaderProgram5);

var ePosition = gl.getAttribLocation(shaderProgram5, "ePosition");
gl.vertexAttribPointer(ePosition, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(ePosition);
gl.drawArrays(gl.TRIANGLE_FAN, 0, 4); 

var vertices6 = [ 
    -0.45, -0.28,
    -0.337, -0.75,
    -0.40, -0.75,
    -0.475, -0.40,
];

var buffer = gl.createBuffer(); 
gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // ini define alamat gpu
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices6), gl.STATIC_DRAW);
//udah tersambung ke gpu (udah dipindah ke alam GPU)

//Vertex Shaders
var vertexShaderCode6 = 
`
    attribute vec2 fPosition;
    void main() {
        float x = fPosition.x;
        float y = fPosition.y;
        gl_PointSize = 5.0;
        gl_Position = vec4(x, y, 0.0, 1.0);
        
    }
    `;

var vertexShaderObject6 = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShaderObject6, vertexShaderCode6);
gl.compileShader(vertexShaderObject6); // sampai sini udah jadi .o
//Fragment Shaders
var fragmentShaderCode6 = `
    void main() {
        precision mediump float;
        float r = 0.0;
        float g = 1.0;
        float b = 5.0;
        float a = 10.0;
        gl_FragColor = vec4(r, g, b, a);
    }
    `;

var fragmentShaderObject6 = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShaderObject6, fragmentShaderCode6);
gl.compileShader(fragmentShaderObject6); // sampai sini udah jadi .o

var shaderProgram6 = gl.createProgram(); //membuat sebuah mangkok
gl.attachShader(shaderProgram6, vertexShaderObject6); //semua object file tadi ditaruh ke mangkok yang sama
gl.attachShader(shaderProgram6, fragmentShaderObject6);
gl.linkProgram(shaderProgram6); 
gl.useProgram(shaderProgram6);

var fPosition = gl.getAttribLocation(shaderProgram6, "fPosition");
gl.vertexAttribPointer(fPosition, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(fPosition);
gl.drawArrays(gl.TRIANGLE_FAN, 0, 4); 

var vertices7 = [ 
    -0.3585, -0.75,
    -0.25, -0.20,
    -0.20, -0.20,
    -0.30, -0.75,
];

var buffer = gl.createBuffer(); 
gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // ini define alamat gpu
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices7), gl.STATIC_DRAW);
//udah tersambung ke gpu (udah dipindah ke alam GPU)

//Vertex Shaders
var vertexShaderCode7 = 
`
    attribute vec2 gPosition;
    void main() {
        float x = gPosition.x;
        float y = gPosition.y;
        gl_PointSize = 5.0;
        gl_Position = vec4(x, y, 0.0, 1.0);
        
    }
    `;

var vertexShaderObject7 = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShaderObject7, vertexShaderCode7);
gl.compileShader(vertexShaderObject7); // sampai sini udah jadi .o
//Fragment Shaders
var fragmentShaderCode7 = `
    void main() {
        precision mediump float;
        float r = 0.0;
        float g = 1.0;
        float b = 5.0;
        float a = 10.0;
        gl_FragColor = vec4(r, g, b, a);
    }
    `;

var fragmentShaderObject7 = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShaderObject7, fragmentShaderCode7);
gl.compileShader(fragmentShaderObject7); // sampai sini udah jadi .o

var shaderProgram7 = gl.createProgram(); //membuat sebuah mangkok
gl.attachShader(shaderProgram7, vertexShaderObject7); //semua object file tadi ditaruh ke mangkok yang sama
gl.attachShader(shaderProgram7, fragmentShaderObject7);
gl.linkProgram(shaderProgram7); 
gl.useProgram(shaderProgram7);

var gPosition = gl.getAttribLocation(shaderProgram7, "gPosition");
gl.vertexAttribPointer(gPosition, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(gPosition);
gl.drawArrays(gl.TRIANGLE_FAN, 0, 4); 
}

window.onload = main;



