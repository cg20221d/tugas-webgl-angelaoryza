function main() {
    var kanvas = document.getElementById("kanvas");
    var gl = kanvas.getContext("webgl");

    var vertices = [ 
        -0.75, 0.75, -1.0,//A : Kanan atas
        -0.15, 0.75, -1.0,
        -0.15, 0.50, -1.0,
        -0.18, 0.45, -1.0,
        -0.70, 0.45, -1.0,
        -0.70, 0.25, -1.0,
        -0.18, 0.25, -1.0,
        -0.15, 0.20, -1.0,
        -0.75, 0.20, -1.0,
        -0.75, 0.45, -1.0,
        -0.72, 0.50, -1.0,
        -0.20, 0.50, -1.0,
        -0.20, 0.70, -1.0,
        -0.72, 0.70, -1.0,
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
        attribute vec3 aPosition;
        void main() {
            float x = aPosition.x;
            float y = aPosition.y;
            float z = aPosition.z;
            gl_PointSize = 10.0;
            mat4 projectionMatrix = mat4(-0.7247, 0.0, 0.0, 0.0,
                0.0, -0.7247, 0.0, 0.0,
                0.0, 0.0, 1.22, -1,
                0.0, 0.0, 1.11, 0.0);
            mat4 viewMatrix = mat4(7.5, 0.0, 0.0, 0.0,
                0.0, 7.5, 0.0, 0.0,
                0.0, 0.0, 7.5, 0.0,
                0.0, 0.0, 0.0, 7.5);
            mat4 translation = mat4(1.0, 0.0, 0.0, 0.0,
                                   0.0, 1.0, 0.0, 0.0,
                                   0.0, 0.0, 1.0, 0.0,
                                   x,  y, 0.0,  1.0);
            gl_Position = projectionMatrix * viewMatrix * translation * vec4(x, y, z, 1.0);
            
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
    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0, 0);
    //                      index   dimensi              warna
    gl.enableVertexAttribArray(aPosition);

    gl.clearColor(0.0,  0.0,    0.0,    1.0);
    //            Red   Green   Blue    Alpha(Opacity)
    gl.clear(gl.COLOR_BUFFER_BIT);

    // var aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    // var zNear = 0.5;
    // var zFar = 50.0;
    // var projectionMatrix = m4.perspective(75, aspect, zNear, zFar);

    gl.drawArrays(gl.LINE_LOOP, 0, 14); 
    //          jenis      data     count

    var vertices3D1 = [ 
        -0.75, 0.75, -1.0, //A : Kanan atas
        -0.72, 0.79, -1.0,

        -0.72, 0.79, -1.0,
        -0.12, 0.79, -1.0,

        -0.15, 0.75, -1.0,
        -0.12, 0.79, -1.0,

        -0.12, 0.79, -1.0,
        -0.12, 0.54, -1.0,

        -0.15, 0.50, -1.0,
        -0.12, 0.54, -1.0,

        -0.20, 0.54, -1.0,
        -0.69, 0.54, -1.0,

        -0.69, 0.54, -1.0,
        -0.72, 0.50, -1.0,

        -0.70, 0.29, -1.0,
        -0.15, 0.29, -1.0,

        -0.15, 0.29, -1.0,
        -0.18, 0.25, -1.0,

        -0.15, 0.29, -1.0,
        -0.15, 0.20, -1.0,
//B : Bawah Tengah
    ];

    
    
    //buat array untuk segitiga, tapi ini masih di cpu

    var buffer = gl.createBuffer(); 
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // ini define alamat gpu
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices3D1), gl.STATIC_DRAW);
    //udah tersambung ke gpu (udah dipindah ke alam GPU)

    //Vertex Shaders
    var vertexShaderCode3D1 = 
    `
        attribute vec3 ThreeD1Position;
        void main() {
            float x = ThreeD1Position.x;
            float y = ThreeD1Position.y;
            float z = ThreeD1Position.z;
            gl_PointSize = 10.0;
            mat4 projectionMatrix = mat4(-0.7247, 0.0, 0.0, 0.0,
                0.0, -0.7247, 0.0, 0.0,
                0.0, 0.0, 1.22, -1,
                0.0, 0.0, 1.11, 0.0);
            mat4 viewMatrix = mat4(7.5, 0.0, 0.0, 0.0,
                0.0, 7.5, 0.0, 0.0,
                0.0, 0.0, 7.5, 0.0,
                0.0, 0.0, 0.0, 7.5);
            gl_PointSize = 10.0;
            gl_Position =  viewMatrix * projectionMatrix * vec4(x, y, z, 1.0);
            
        }
        `;

    var vertexShaderObject3D1 = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject3D1, vertexShaderCode3D1);
    gl.compileShader(vertexShaderObject3D1); // sampai sini udah jadi .o
    //Fragment Shaders
    var fragmentShaderCode3D1 = `
        void main() {
            precision mediump float;
            float r = 5.0;
            float g = 0.0;
            float b = 1.0;
            float a = 1.0;
            gl_FragColor = vec4(r, g, b, a);
        }
        `;

    var fragmentShaderObject3D1 = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShaderObject3D1, fragmentShaderCode3D1);
    gl.compileShader(fragmentShaderObject3D1); // sampai sini udah jadi .o

    var shaderProgram3D1 = gl.createProgram(); //membuat sebuah mangkok
    gl.attachShader(shaderProgram3D1, vertexShaderObject3D1); //semua object file tadi ditaruh ke mangkok yang sama
    gl.attachShader(shaderProgram3D1, fragmentShaderObject3D1);
    gl.linkProgram(shaderProgram3D1); 
    gl.useProgram(shaderProgram3D1);

    //Mengajari GPU bagaimana caranya mengoleksi
    // nilai posisi dari ARRAY_BUFFER
    //untuk setiap verteks yang sedang diproses

    var ThreeD1Position = gl.getAttribLocation(shaderProgram3D1, "ThreeD1Position");
    gl.vertexAttribPointer(ThreeD1Position, 3, gl.FLOAT, false, 0, 0);
    //                      index   dimensi              warna
    gl.enableVertexAttribArray(ThreeD1Position);

    gl.drawArrays(gl.LINES, 0, 20); 
    //          jenis      data     count

//-----------------------ANGKA KEDUA-----------------------------//

    var vertices2 = [ 
        0.15, 0.75, -1.0, //A : Kanan atas
        0.75, 0.75, -1.0,
        0.75, 0.50, -1.0,
        0.72, 0.45, -1.0,
        0.20, 0.45, -1.0,
        0.20, 0.25, -1.0,
        0.72, 0.25, -1.0,
        0.75, 0.20, -1.0,
        0.15, 0.20, -1.0,
        0.15, 0.45, -1.0,
        0.18, 0.50, -1.0,
        0.70, 0.50, -1.0,
        0.70, 0.70, -1.0,
        0.18, 0.70, -1.0
    ];

    var buffer = gl.createBuffer(); 
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // ini define alamat gpu
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices2), gl.STATIC_DRAW);
    //udah tersambung ke gpu (udah dipindah ke alam GPU)

    //Vertex Shaders
    var vertexShaderCode2 = 
    `
        attribute vec3 bPosition;
        void main() {
            float x = bPosition.x;
            float y = bPosition.y;
            float z = bPosition.z;
            gl_PointSize = 10.0;
            mat4 projectionMatrix = mat4(-0.7247, 0.0, 0.0, 0.0,
                0.0, -0.7247, 0.0, 0.0,
                0.0, 0.0, 1.22, -1,
                0.0, 0.0, 1.11, 0.0);
            mat4 viewMatrix = mat4(7.5, 0.0, 0.0, 0.0,
                0.0, 7.5, 0.0, 0.0,
                0.0, 0.0, 7.5, 0.0,
                0.0, 0.0, 0.0, 7.5);
            gl_Position = projectionMatrix * viewMatrix * vec4(x, y, z, 1.0);
            
        }
        `;

    var vertexShaderObject2 = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject2, vertexShaderCode2);
    gl.compileShader(vertexShaderObject2); // sampai sini udah jadi .o
    //Fragment Shaders
    var fragmentShaderCode2 = `
        void main() {
            precision mediump float;
            float r = 5.0;
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
    gl.vertexAttribPointer(bPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(bPosition);
    gl.drawArrays(gl.LINE_LOOP, 0, 14); 

    var vertices3D2 = [ 

        0.15, 0.75, -1.0,
        0.18, 0.79, -1.0,

        0.18, 0.79, -1.0,
        0.78, 0.79, -1.0,

        0.78, 0.79, -1.0,
        0.75, 0.75, -1.0,

        0.78, 0.79, -1.0,
        0.78, 0.54, -1.0,

        0.78, 0.54, -1.0,
        0.75, 0.50, -1.0,

        0.70, 0.54, -1.0,
        0.21, 0.54, -1.0,

        0.21, 0.54, -1.0,
        0.18, 0.50, -1.0,

        0.20, 0.29, -1.0,
        0.75, 0.29, -1.0,

        0.75, 0.29, -1.0,
        0.72, 0.25, -1.0,

        0.75, 0.29, -1.0,
        0.75, 0.20, -1.0
    ];

    var buffer = gl.createBuffer(); 
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // ini define alamat gpu
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices3D2), gl.STATIC_DRAW);
    //udah tersambung ke gpu (udah dipindah ke alam GPU)

    //Vertex Shaders
    var vertexShaderCode3D2 = 
    `
        attribute vec3 ThreeD2Position;
        void main() {
            float x = ThreeD2Position.x;
            float y = ThreeD2Position.y;
            float z = ThreeD2Position.z;
            mat4 projectionMatrix = mat4(-0.7247, 0.0, 0.0, 0.0,
                0.0, -0.7247, 0.0, 0.0,
                0.0, 0.0, 1.22, -1,
                0.0, 0.0, 1.11, 0.0);
            mat4 viewMatrix = mat4(7.5, 0.0, 0.0, 0.0,
                0.0, 7.5, 0.0, 0.0,
                0.0, 0.0, 7.5, 0.0,
                0.0, 0.0, 0.0, 7.5);
            gl_PointSize = 10.0;
            gl_Position = projectionMatrix * vec4(x, y, z, 1.0);
            
        }
        `;

    var vertexShaderObject3D2 = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject3D2, vertexShaderCode3D2);
    gl.compileShader(vertexShaderObject3D2); // sampai sini udah jadi .o
    //Fragment Shaders
    var fragmentShaderCode3D2 = `
        void main() {
            precision mediump float;
            float r = 5.0;
            float g = 1.0;
            float b = 0.0;
            float a = 10.0;
            gl_FragColor = vec4(r, g, b, a);
        }
        `;

    var fragmentShaderObject3D2 = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShaderObject3D2, fragmentShaderCode3D2);
    gl.compileShader(fragmentShaderObject3D2); // sampai sini udah jadi .o

    var shaderProgram3D2 = gl.createProgram(); //membuat sebuah mangkok
    gl.attachShader(shaderProgram3D2, vertexShaderObject3D2); //semua object file tadi ditaruh ke mangkok yang sama
    gl.attachShader(shaderProgram3D2, fragmentShaderObject3D2);
    gl.linkProgram(shaderProgram3D2); 
    gl.useProgram(shaderProgram3D2);

    var ThreeD2Position = gl.getAttribLocation(shaderProgram3D2, "ThreeD2Position");
    gl.vertexAttribPointer(ThreeD2Position, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(ThreeD2Position);
    gl.drawArrays(gl.LINES, 0, 20); 

    //-----------------------HURUF PERTAMA-----------------------------//

    var vertices3 = [ 
        -0.75, -0.20, -1.0, //A : Kanan atas
        -0.70, -0.20, -1.0
        -0.5915, -0.75, -1.0,
        -0.65, -0.75, -1.0
    ];

    var buffer = gl.createBuffer(); 
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // ini define alamat gpu
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices3), gl.STATIC_DRAW);
    //udah tersambung ke gpu (udah dipindah ke alam GPU)

    //Vertex Shaders
    var vertexShaderCode3 = 
    `
        attribute vec3 cPosition;
        void main() {
            float x = cPosition.x;
            float y = cPosition.y;
            float z = cPosition.z;
            mat4 projectionMatrix = mat4(-0.7247, 0.0, 0.0, 0.0,
                0.0, -0.7247, 0.0, 0.0,
                0.0, 0.0, 1.22, -1,
                0.0, 0.0, 1.11, 0.0);
            mat4 viewMatrix = mat4(7.5, 0.0, 0.0, 0.0,
                0.0, 7.5, 0.0, 0.0,
                0.0, 0.0, 7.5, 0.0,
                0.0, 0.0, 0.0, 7.5);
            gl_PointSize = 5.0;
            gl_Position = projectionMatrix * vec4(x, y, -1.0, 1.0);
            
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
            float b = 0.0;
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
    gl.vertexAttribPointer(cPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(cPosition);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4); 

    var vertices4 = [ 
        -0.75, -0.20, -1.0, //A : Kanan atas
        -0.70, -0.20, -1.0,
        -0.60, -0.70, -1.0,
        -0.50, -0.28, -1.0,
        -0.45, -0.28, -1.0,
        -0.35, -0.70, -1.0,
        -0.25, -0.20, -1.0,
        -0.20, -0.20, -1.0,
        -0.30, -0.75, -1.0,
        -0.40, -0.75, -1.0,
        -0.475, -0.40, -1.0,
        -0.55, -0.75, -1.0,
        -0.65, -0.75, -1.0,
    ];

    var buffer = gl.createBuffer(); 
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // ini define alamat gpu
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices4), gl.STATIC_DRAW);
    //udah tersambung ke gpu (udah dipindah ke alam GPU)

    //Vertex Shaders
    var vertexShaderCode4 = 
    `
        attribute vec3 dPosition;
        void main() {
            float x = dPosition.x;
            float y = dPosition.y;
            float z = dPosition.z;
            mat4 projectionMatrix = mat4(-0.7247, 0.0, 0.0, 0.0,
                0.0, -0.7247, 0.0, 0.0,
                0.0, 0.0, 1.22, -1,
                0.0, 0.0, 1.11, 0.0);
            mat4 viewMatrix = mat4(7.5, 0.0, 0.0, 0.0,
                0.0, 7.5, 0.0, 0.0,
                0.0, 0.0, 7.5, 0.0,
                0.0, 0.0, 0.0, 7.5);
            gl_PointSize = 5.0;
            gl_Position = projectionMatrix * vec4(x, y, z, 1.0);
            
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
    gl.vertexAttribPointer(dPosition, 3, gl.FLOAT, false, 0, 0);
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
        float r = 5.0;
        float g = 1.0;
        float b = 0.0;
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
        float r = 5.0;
        float g = 1.0;
        float b = 0.0;
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
        float r = 5.0;
        float g = 1.0;
        float b = 0.0;
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

var bayangan1 = [ 
    -0.75, -0.20, 
    -0.72, -0.16,
    -0.67, -0.16,
    -0.70, -0.20,
];

var buffer = gl.createBuffer(); 
gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // ini define alamat gpu
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bayangan1), gl.STATIC_DRAW);
//udah tersambung ke gpu (udah dipindah ke alam GPU)

//Vertex Shaders
var vertexShaderCodebayangan1 = 
`
    attribute vec2 hPosition;
    void main() {
        float x = hPosition.x;
        float y = hPosition.y;
        gl_PointSize = 5.0;
        gl_Position = vec4(x, y, 0.0, 1.0);
        
    }
    `;

var vertexShaderObjectbayangan1 = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShaderObjectbayangan1, vertexShaderCodebayangan1);
gl.compileShader(vertexShaderObjectbayangan1); // sampai sini udah jadi .o
//Fragment Shaders
var fragmentShaderCodebayangan1 = `
    void main() {
        precision mediump float;
        float r = 1.0;
        float g = 0.0;
        float b = 1.0;
        float a = 10.0;
        gl_FragColor = vec4(r, g, b, a);
    }
    `;

var fragmentShaderObjectbayangan1 = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShaderObjectbayangan1, fragmentShaderCodebayangan1);
gl.compileShader(fragmentShaderObjectbayangan1); // sampai sini udah jadi .o

var shaderProgrambayangan1 = gl.createProgram(); //membuat sebuah mangkok
gl.attachShader(shaderProgrambayangan1, vertexShaderObjectbayangan1); //semua object file tadi ditaruh ke mangkok yang sama
gl.attachShader(shaderProgrambayangan1, fragmentShaderObjectbayangan1);
gl.linkProgram(shaderProgrambayangan1); 
gl.useProgram(shaderProgrambayangan1);

var hPosition = gl.getAttribLocation(shaderProgrambayangan1, "hPosition");
gl.vertexAttribPointer(hPosition, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(hPosition);
gl.drawArrays(gl.TRIANGLE_FAN, 0, 4); 

var bayangan2 = [ 
    -0.70, -0.20,
    -0.67, -0.16,
    -0.585, -0.63,
    -0.60, -0.70
];

var buffer = gl.createBuffer(); 
gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // ini define alamat gpu
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bayangan2), gl.STATIC_DRAW);
//udah tersambung ke gpu (udah dipindah ke alam GPU)

//Vertex Shaders
var vertexShaderCodebayangan2 = 
`
    attribute vec2 iPosition;
    void main() {
        float x = iPosition.x;
        float y = iPosition.y;
        gl_PointSize = 5.0;
        gl_Position = vec4(x, y, 0.0, 1.0);
        
    }
    `;

var vertexShaderObjectbayangan2 = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShaderObjectbayangan2, vertexShaderCodebayangan2);
gl.compileShader(vertexShaderObjectbayangan2); // sampai sini udah jadi .o
//Fragment Shaders
var fragmentShaderCodebayangan2 = `
    void main() {
        precision mediump float;
        float r = 1.0;
        float g = 0.0;
        float b = 1.0;
        float a = 10.0;
        gl_FragColor = vec4(r, g, b, a);
    }
    `;

var fragmentShaderObjectbayangan2 = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShaderObjectbayangan2, fragmentShaderCodebayangan2);
gl.compileShader(fragmentShaderObjectbayangan2); // sampai sini udah jadi .o

var shaderProgrambayangan2 = gl.createProgram(); //membuat sebuah mangkok
gl.attachShader(shaderProgrambayangan2, vertexShaderObjectbayangan2); //semua object file tadi ditaruh ke mangkok yang sama
gl.attachShader(shaderProgrambayangan2, fragmentShaderObjectbayangan2);
gl.linkProgram(shaderProgrambayangan2); 
gl.useProgram(shaderProgrambayangan2);

var iPosition = gl.getAttribLocation(shaderProgrambayangan2, "iPosition");
gl.vertexAttribPointer(iPosition, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(iPosition);
gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);

var bayangan3 = [ 
    -0.50, -0.28,
    -0.47, -0.24,
    -0.42, -0.24,
    -0.45, -0.28
];

var buffer = gl.createBuffer(); 
gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // ini define alamat gpu
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bayangan3), gl.STATIC_DRAW);
//udah tersambung ke gpu (udah dipindah ke alam GPU)

//Vertex Shaders
var vertexShaderCodebayangan3 = 
`
    attribute vec2 jPosition;
    void main() {
        float x = jPosition.x;
        float y = jPosition.y;
        gl_PointSize = 5.0;
        gl_Position = vec4(x, y, 0.0, 1.0);
        
    }
    `;

var vertexShaderObjectbayangan3 = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShaderObjectbayangan3, vertexShaderCodebayangan3);
gl.compileShader(vertexShaderObjectbayangan3); // sampai sini udah jadi .o
//Fragment Shaders
var fragmentShaderCodebayangan3 = `
    void main() {
        precision mediump float;
        float r = 1.0;
        float g = 0.0;
        float b = 1.0;
        float a = 10.0;
        gl_FragColor = vec4(r, g, b, a);
    }
    `;

var fragmentShaderObjectbayangan3 = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShaderObjectbayangan3, fragmentShaderCodebayangan3);
gl.compileShader(fragmentShaderObjectbayangan3); // sampai sini udah jadi .o

var shaderProgrambayangan3 = gl.createProgram(); //membuat sebuah mangkok
gl.attachShader(shaderProgrambayangan3, vertexShaderObjectbayangan3); //semua object file tadi ditaruh ke mangkok yang sama
gl.attachShader(shaderProgrambayangan3, fragmentShaderObjectbayangan3);
gl.linkProgram(shaderProgrambayangan3); 
gl.useProgram(shaderProgrambayangan3);

var jPosition = gl.getAttribLocation(shaderProgrambayangan3, "jPosition");
gl.vertexAttribPointer(jPosition, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(jPosition);
gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);

var bayangan4 = [ 
    -0.42, -0.24,
    -0.45, -0.28,
    -0.35, -0.70,
    -0.3325, -0.63,
];

var buffer = gl.createBuffer(); 
gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // ini define alamat gpu
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bayangan4), gl.STATIC_DRAW);
//udah tersambung ke gpu (udah dipindah ke alam GPU)

//Vertex Shaders
var vertexShaderCodebayangan4 = 
`
    attribute vec2 kPosition;
    void main() {
        float x = kPosition.x;
        float y = kPosition.y;
        gl_PointSize = 5.0;
        gl_Position = vec4(x, y, 0.0, 1.0);
        
    }
    `;

var vertexShaderObjectbayangan4 = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShaderObjectbayangan4, vertexShaderCodebayangan4);
gl.compileShader(vertexShaderObjectbayangan4); // sampai sini udah jadi .o
//Fragment Shaders
var fragmentShaderCodebayangan4 = `
    void main() {
        precision mediump float;
        float r = 1.0;
        float g = 0.0;
        float b = 1.0;
        float a = 10.0;
        gl_FragColor = vec4(r, g, b, a);
    }
    `;

var fragmentShaderObjectbayangan4 = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShaderObjectbayangan4, fragmentShaderCodebayangan4);
gl.compileShader(fragmentShaderObjectbayangan4); // sampai sini udah jadi .o

var shaderProgrambayangan4 = gl.createProgram(); //membuat sebuah mangkok
gl.attachShader(shaderProgrambayangan4, vertexShaderObjectbayangan4); //semua object file tadi ditaruh ke mangkok yang sama
gl.attachShader(shaderProgrambayangan4, fragmentShaderObjectbayangan4);
gl.linkProgram(shaderProgrambayangan4); 
gl.useProgram(shaderProgrambayangan4);

var kPosition = gl.getAttribLocation(shaderProgrambayangan4, "kPosition");
gl.vertexAttribPointer(kPosition, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(kPosition);
gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);

var bayangan5 = [ 
    -0.55, -0.75,
    -0.51, -0.75,
    -0.455, -0.49,
    -0.475, -0.40,
];

var buffer = gl.createBuffer(); 
gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // ini define alamat gpu
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bayangan5), gl.STATIC_DRAW);
//udah tersambung ke gpu (udah dipindah ke alam GPU)

//Vertex Shaders
var vertexShaderCodebayangan5 = 
`
    attribute vec2 lPosition;
    void main() {
        float x = lPosition.x;
        float y = lPosition.y;
        gl_PointSize = 5.0;
        gl_Position = vec4(x, y, 0.0, 1.0);
        
    }
    `;

var vertexShaderObjectbayangan5 = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShaderObjectbayangan5, vertexShaderCodebayangan5);
gl.compileShader(vertexShaderObjectbayangan5); // sampai sini udah jadi .o
//Fragment Shaders
var fragmentShaderCodebayangan5 = `
    void main() {
        precision mediump float;
        float r = 1.0;
        float g = 0.0;
        float b = 1.0;
        float a = 10.0;
        gl_FragColor = vec4(r, g, b, a);
    }
    `;

var fragmentShaderObjectbayangan5 = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShaderObjectbayangan5, fragmentShaderCodebayangan5);
gl.compileShader(fragmentShaderObjectbayangan5); // sampai sini udah jadi .o

var shaderProgrambayangan5 = gl.createProgram(); //membuat sebuah mangkok
gl.attachShader(shaderProgrambayangan5, vertexShaderObjectbayangan5); //semua object file tadi ditaruh ke mangkok yang sama
gl.attachShader(shaderProgrambayangan5, fragmentShaderObjectbayangan5);
gl.linkProgram(shaderProgrambayangan5); 
gl.useProgram(shaderProgrambayangan5);

var lPosition = gl.getAttribLocation(shaderProgrambayangan5, "lPosition");
gl.vertexAttribPointer(lPosition, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(lPosition);
gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);

var bayangan6 = [ 
    -0.25, -0.20,
    -0.22, -0.16,
    -0.17, -0.16,
    -0.20, -0.20,
];

var buffer = gl.createBuffer(); 
gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // ini define alamat gpu
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bayangan6), gl.STATIC_DRAW);
//udah tersambung ke gpu (udah dipindah ke alam GPU)

//Vertex Shaders
var vertexShaderCodebayangan6 = 
`
    attribute vec2 mPosition;
    void main() {
        float x = mPosition.x;
        float y = mPosition.y;
        gl_PointSize = 5.0;
        gl_Position = vec4(x, y, 0.0, 1.0);
        
    }
    `;

var vertexShaderObjectbayangan6 = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShaderObjectbayangan6, vertexShaderCodebayangan6);
gl.compileShader(vertexShaderObjectbayangan6); // sampai sini udah jadi .o
//Fragment Shaders
var fragmentShaderCodebayangan6 = `
    void main() {
        precision mediump float;
        float r = 1.0;
        float g = 0.0;
        float b = 1.0;
        float a = 10.0;
        gl_FragColor = vec4(r, g, b, a);
    }
    `;

var fragmentShaderObjectbayangan6 = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShaderObjectbayangan6, fragmentShaderCodebayangan6);
gl.compileShader(fragmentShaderObjectbayangan6); // sampai sini udah jadi .o

var shaderProgrambayangan6 = gl.createProgram(); //membuat sebuah mangkok
gl.attachShader(shaderProgrambayangan6, vertexShaderObjectbayangan6); //semua object file tadi ditaruh ke mangkok yang sama
gl.attachShader(shaderProgrambayangan6, fragmentShaderObjectbayangan6);
gl.linkProgram(shaderProgrambayangan6); 
gl.useProgram(shaderProgrambayangan6);

var mPosition = gl.getAttribLocation(shaderProgrambayangan6, "mPosition");
gl.vertexAttribPointer(mPosition, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(mPosition);
gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);

var bayangan7 = [ 
    -0.17, -0.16,
    -0.20, -0.20,
    -0.30, -0.75,
    -0.27, -0.71
];

var buffer = gl.createBuffer(); 
gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // ini define alamat gpu
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bayangan7), gl.STATIC_DRAW);
//udah tersambung ke gpu (udah dipindah ke alam GPU)

//Vertex Shaders
var vertexShaderCodebayangan7 = 
`
    attribute vec2 nPosition;
    void main() {
        float x = nPosition.x;
        float y = nPosition.y;
        gl_PointSize = 5.0;
        gl_Position = vec4(x, y, 0.0, 1.0);
        
    }
    `;

var vertexShaderObjectbayangan7 = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShaderObjectbayangan7, vertexShaderCodebayangan7);
gl.compileShader(vertexShaderObjectbayangan7); // sampai sini udah jadi .o
//Fragment Shaders
var fragmentShaderCodebayangan7 = `
    void main() {
        precision mediump float;
        float r = 1.0;
        float g = 0.0;
        float b = 1.0;
        float a = 10.0;
        gl_FragColor = vec4(r, g, b, a);
    }
    `;

var fragmentShaderObjectbayangan7 = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShaderObjectbayangan7, fragmentShaderCodebayangan7);
gl.compileShader(fragmentShaderObjectbayangan7); // sampai sini udah jadi .o

var shaderProgrambayangan7 = gl.createProgram(); //membuat sebuah mangkok
gl.attachShader(shaderProgrambayangan7, vertexShaderObjectbayangan7); //semua object file tadi ditaruh ke mangkok yang sama
gl.attachShader(shaderProgrambayangan7, fragmentShaderObjectbayangan7);
gl.linkProgram(shaderProgrambayangan7); 
gl.useProgram(shaderProgrambayangan7);

var nPosition = gl.getAttribLocation(shaderProgrambayangan7, "nPosition");
gl.vertexAttribPointer(nPosition, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(nPosition);
gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);


//----------------------------HURUF O------------------------//
var hurufO = [];
for (var i=0.0; i<=360; i++) {
    var j = (i * Math.PI) / 180 ;

    var vert1 = [
      -0.27 * Math.sin(j) + 0.45,
      -0.31 * Math.cos(j) - 0.46,  
      -1
    ];

    var vert2 = [
        0.45,
        -0.45,
        -1
    ];

    hurufO = hurufO.concat(vert1);
    hurufO = hurufO.concat(vert2);
}
var n = hurufO.length / 2;

var buffer = gl.createBuffer(); 
gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // ini define alamat gpu
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(hurufO), gl.STATIC_DRAW);
//udah tersambung ke gpu (udah dipindah ke alam GPU)

//Vertex Shaders
var vertexShaderCodeHurufO = 
`
    attribute vec3 oPosition;
    void main() {
        float x = oPosition.x;
        float y = oPosition.y;
        float z = oPosition.z;
        gl_PointSize = 5.0;
        gl_Position = vec4(x, y, 0.0, 1.0);
        
    }
    `;

var vertexShaderObjectHurufO = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShaderObjectHurufO, vertexShaderCodeHurufO);
gl.compileShader(vertexShaderObjectHurufO); // sampai sini udah jadi .o
//Fragment Shaders
var fragmentShaderCodebayanganHurufO = `
    void main() {
        precision mediump float;
        float r = 5.0;
        float g = 1.0;
        float b = 0.0;
        float a = 10.0;
        gl_FragColor = vec4(r, g, b, a);
    }
    `;

var fragmentShaderObjectHurufO = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShaderObjectHurufO, fragmentShaderCodebayanganHurufO);
gl.compileShader(fragmentShaderObjectHurufO); // sampai sini udah jadi .o

var shaderProgramHurufO = gl.createProgram(); //membuat sebuah mangkok
gl.attachShader(shaderProgramHurufO, vertexShaderObjectHurufO); //semua object file tadi ditaruh ke mangkok yang sama
gl.attachShader(shaderProgramHurufO, fragmentShaderObjectHurufO);
gl.linkProgram(shaderProgramHurufO); 
gl.useProgram(shaderProgramHurufO);

var oPosition = gl.getAttribLocation(shaderProgramHurufO, "oPosition");
gl.vertexAttribPointer(oPosition, 3, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(oPosition);
gl.drawArrays(gl.TRIANGLE_STRIP, 0, n);

var hurufO2 = [];
for (var i=0.0; i<=360; i++) {
    var j = (i * Math.PI) / 180 ;

    var vert12 = [
      -0.22 * Math.sin(j) + 0.45,
      -0.26 * Math.cos(j) - 0.46,  
    ];

    var vert22 = [
        0.45,
        -0.45
    ];

    hurufO2 = hurufO2.concat(vert12);
    hurufO2 = hurufO2.concat(vert22);
}
var p = hurufO2.length / 2;

var buffer = gl.createBuffer(); 
gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // ini define alamat gpu
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(hurufO2), gl.STATIC_DRAW);
//udah tersambung ke gpu (udah dipindah ke alam GPU)

//Vertex Shaders
var vertexShaderCodeHurufO2 = 
`
    attribute vec2 pPosition;
    void main() {
        float x = pPosition.x;
        float y = pPosition.y;
        gl_PointSize = 5.0;
        gl_Position = vec4(x, y, 0.0, 1.0);
        
    }
    `;

var vertexShaderObjectHurufO2 = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShaderObjectHurufO2, vertexShaderCodeHurufO2);
gl.compileShader(vertexShaderObjectHurufO2); // sampai sini udah jadi .o
//Fragment Shaders
var fragmentShaderCodebayanganHurufO2 = `
    void main() {
        precision mediump float;
        float r = 1.0;
        float g = 0.0;
        float b = 1.0;
        float a = 10.0;
        gl_FragColor = vec4(r, g, b, a);
    }
    `;

var fragmentShaderObjectHurufO2 = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShaderObjectHurufO2, fragmentShaderCodebayanganHurufO2);
gl.compileShader(fragmentShaderObjectHurufO2); // sampai sini udah jadi .o

var shaderProgramHurufO2 = gl.createProgram(); //membuat sebuah mangkok
gl.attachShader(shaderProgramHurufO2, vertexShaderObjectHurufO2); //semua object file tadi ditaruh ke mangkok yang sama
gl.attachShader(shaderProgramHurufO2, fragmentShaderObjectHurufO2);
gl.linkProgram(shaderProgramHurufO2); 
gl.useProgram(shaderProgramHurufO2);

var pPosition = gl.getAttribLocation(shaderProgramHurufO2, "pPosition");
gl.vertexAttribPointer(pPosition, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(pPosition);
gl.drawArrays(gl.TRIANGLE_STRIP, 0, p);

var m4 = {

    perspective: function(fieldOfViewInRadians, aspect, near, far) {
      ;
      var rangeInv = 1.0 / (near - far);
  
      return [
        f / aspect, 0, 0, 0,
        0, f, 0, 0,
        0, 0, (near + far) * rangeInv, -1,
        0, 0, near * far * rangeInv * 2, 0
      ];
    },
}
}


// -0.75, -0.20, //A : Kanan atas
// -0.70, -0.20,
// -0.60, -0.70,
// -0.50, -0.28,
// -0.45, -0.28,
// -0.35, -0.70,
// -0.25, -0.20,
// -0.20, -0.20,
// 
// -0.40, -0.75,
// -0.475, -0.40,
// -0.55, -0.75,
// -0.65, -0.75




window.onload = main;



