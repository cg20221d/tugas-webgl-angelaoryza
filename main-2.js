function main() {
    var kanvas = document.getElementById("kanvas");
    var gl = kanvas.getContext("webgl");
  
    var vertices2 = [
      // Num 2 Outer Front   // White
      -0.75, 0.75, 0.0,      5.0, 1.0, 0.0,  //Index 0
      -0.15, 0.75, 0.0,      5.0, 1.0, 0.0,  //Index 1
      -0.15, 0.50, 0.0,      5.0, 1.0, 0.0,  //Index 2
      -0.18, 0.45, 0.0,      5.0, 1.0, 0.0,  //Index 3
      -0.70, 0.45, 0.0,      5.0, 1.0, 0.0,  //Index 4
      -0.70, 0.25, 0.0,      5.0, 1.0, 0.0,  //Index 5
      -0.18, 0.25, 0.0,      5.0, 1.0, 0.0,  //Index 6
      -0.15, 0.20, 0.0,      5.0, 1.0, 0.0,  //Index 7
      -0.75, 0.20, 0.0,      5.0, 1.0, 0.0,  //Index 8
      -0.75, 0.45, 0.0,      5.0, 1.0, 0.0,  //Index 9
      -0.72, 0.50, 0.0,      5.0, 1.0, 0.0,  //Index 10
      -0.20, 0.50, 0.0,      5.0, 1.0, 0.0,  //Index 11
      -0.20, 0.70, 0.0,      5.0, 1.0, 0.0,  //Index 12
      -0.72, 0.70, 0.0,      5.0, 1.0, 0.0,  //Index 13
    ];
  
    var indices2 = [
        0,1,12,     0,13,12,
        13,0,1,     13,12,1,
        12,1,2,     12,11,2,
        2,11,3,     2,3,11,
        3,4,11,     4,10,11,
        4,9,10,     4,10,9,
        11,10,4,    11,3,4,
        9,8,5,      9,4,5,
        5,8,7,      5,6,7,
        4,9,8,      4,5,8,
        8,5,6,      8,7,6,
        1,12,13,    1,0,13,
        6,7,8,      6,5,8,
        7,8,5,      7,6,5,
        1,12,2,     1,2,12,
        12,11,2,    12,2,11,
        8,7,6,      8,5,6,
        5,8,6,      5,7,6,
    
    ];
  
    var vertices23D = [
        -0.75, 0.75, 0.0,       5.0, 0.0, 1.0,//Index 0
        -0.72, 0.79, 0.0,       5.0, 0.0, 1.0,//Index 1

        -0.72, 0.79, 0.0,       5.0, 0.0, 1.0,//Index 2
        -0.12, 0.79, 0.0,       5.0, 0.0, 1.0,//Index 3

        -0.15, 0.75, 0.0,       5.0, 0.0, 1.0,//Index 4
        -0.12, 0.79, 0.0,       5.0, 0.0, 1.0,//Index 5

        -0.12, 0.79, 0.0,       5.0, 0.0, 1.0,//Index 6
        -0.12, 0.54, 0.0,       5.0, 0.0, 1.0,//Index 7

        -0.15, 0.50, 0.0,       5.0, 0.0, 1.0,//Index 8
        -0.12, 0.54, 0.0,       5.0, 0.0, 1.0,//Index 9

        -0.20, 0.54, 0.0,       5.0, 0.0, 1.0,//Index 10
        -0.69, 0.54, 0.0,       5.0, 0.0, 1.0,//Index 11

        -0.69, 0.54, 0.0,       5.0, 0.0, 1.0,//Index 12
        -0.72, 0.50, 0.0,       5.0, 0.0, 1.0,//Index 13

        -0.70, 0.29, 0.0,       5.0, 0.0, 1.0,//Index 14
        -0.15, 0.29, 0.0,       5.0, 0.0, 1.0,//Index 15

        -0.15, 0.29, 0.0,       5.0, 0.0, 1.0,//Index 16
        -0.18, 0.25, 0.0,       5.0, 0.0, 1.0,//Index 17

        -0.15, 0.29, 0.0,       5.0, 0.0, 1.0,//Index 18
        -0.15, 0.20, 0.0,       5.0, 0.0, 1.0,//Index 19
    ];
  
    var indices23D = [
        0,1,3,      0,4,3,
        0,2,3,      0,4,3,
        0,3,4,      
        1,0,3,      1,3,0,
        4,3,7,      4,8,7,
        4,7,8,      4,8,7,
        4,3,7,      4,7,3,
        7,6,8,      6,8,7,
        10,11,13,   10,12,13,
        14,17,18,   18,17,14,
        17,19,18,   18,19,17,
        14,18,17,   17,18,14,
        18,14,17,   18,19,17,
        19,18,14,    18,14,19,
    ];
  
    var vertices21 = [
        0.15, 0.75, 0.0,       5.0, 0.0, 1.0, //A : Kanan atas
        0.75, 0.75, 0.0,       5.0, 0.0, 1.0,
        0.75, 0.50, 0.0,       5.0, 0.0, 1.0,
        0.72, 0.45, 0.0,       5.0, 0.0, 1.0,
        0.20, 0.45, 0.0,       5.0, 0.0, 1.0,
        0.20, 0.25, 0.0,       5.0, 0.0, 1.0,
        0.72, 0.25, 0.0,       5.0, 0.0, 1.0,
        0.75, 0.20, 0.0,       5.0, 0.0, 1.0,
        0.15, 0.20, 0.0,       5.0, 0.0, 1.0,
        0.15, 0.45, 0.0,       5.0, 0.0, 1.0,
        0.18, 0.50, 0.0,       5.0, 0.0, 1.0,
        0.70, 0.50, 0.0,       5.0, 0.0, 1.0,
        0.70, 0.70, 0.0,       5.0, 0.0, 1.0,
        0.18, 0.70, 0.0,       5.0, 0.0, 1.0,
    ]
  
    var indices21 = [
        0,1,12,     0,13,12,
        13,0,1,     13,12,1,
        12,1,2,     12,11,2,
        2,11,3,     2,3,11,
        3,4,11,     4,10,11,
        4,9,10,     4,10,9,
        11,10,4,    11,3,4,
        9,8,5,      9,4,5,
        5,8,7,      5,6,7,
        4,9,8,      4,5,8,
        8,5,6,      8,7,6,
        1,12,13,    1,0,13,
        6,7,8,      6,5,8,
        7,8,5,      7,6,5,
        1,12,2,     1,2,12,
        12,11,2,    12,2,11,
        8,7,6,      8,5,6,
        5,8,6,      5,7,6,
    ];

    var vertices213D = [
        0.15, 0.75, 0.0,      5.0, 1.0, 0.0,       
        0.18, 0.79, 0.0,      5.0, 1.0, 0.0, 

        0.18, 0.79, 0.0,      5.0, 1.0, 0.0, 
        0.78, 0.79, 0.0,      5.0, 1.0, 0.0, 

        0.78, 0.79, 0.0,      5.0, 1.0, 0.0, 
        0.75, 0.75, 0.0,      5.0, 1.0, 0.0, 

        0.78, 0.79, 0.0,      5.0, 1.0, 0.0, 
        0.78, 0.54, 0.0,      5.0, 1.0, 0.0, 

        0.78, 0.54, 0.0,      5.0, 1.0, 0.0, 
        0.75, 0.50, 0.0,      5.0, 1.0, 0.0, 

        0.70, 0.54, 0.0,      5.0, 1.0, 0.0, 
        0.21, 0.54, 0.0,      5.0, 1.0, 0.0, 

        0.21, 0.54, 0.0,      5.0, 1.0, 0.0, 
        0.18, 0.50, 0.0,      5.0, 1.0, 0.0, 

        0.20, 0.29, 0.0,      5.0, 1.0, 0.0, 
        0.75, 0.29, 0.0,      5.0, 1.0, 0.0, 

        0.75, 0.29, 0.0,      5.0, 1.0, 0.0, 
        0.72, 0.25, 0.0,      5.0, 1.0, 0.0, 

        0.75, 0.29, 0.0,      5.0, 1.0, 0.0, 
        0.75, 0.20, 0.0,      5.0, 1.0, 0.0, 
    ]

    var indices213D = [
        0,1,3,      0,4,3,
        0,2,3,      0,4,3,
        0,3,4,      
        1,0,3,      1,3,0,
        4,3,7,      4,8,7,
        4,7,8,      4,8,7,
        4,3,7,      4,7,3,
        7,6,8,      6,8,7,
        10,11,13,   10,12,13,
        14,17,18,   18,17,14,
        17,19,18,   18,19,17,
        14,18,17,   17,18,14,
        18,14,17,   18,19,17,
        19,18,14,    18,14,19,
        7,9,8,      8,9,7,
      ];
    
  

  
    var objects = [
      {
        name: '2',
        vertices: vertices2,
        indices: indices2,
        length: 14,
        type: gl.LINES,
      },
      {
        name: '2',
        vertices: vertices23D,
        indices: indices23D,
        length: 20,
        type: gl.LINES,
      },
      {
        name: '22',
        vertices: vertices21,
        indices: indices21,
        length: 14,
        type: gl.LINES,
      },
      {
        name: '22',
        vertices: vertices213D,
        indices: indices213D,
        length: 20,
        type: gl.LINES,
      },
    
    ]
  
  
    // Vertex shader
    var vertexShaderCode =  `
    attribute vec3 aPosition;   // Sebelumnya vec2, makanya tidak tergambar kubus :D
    attribute vec3 aColor;
    uniform mat4 uModel;
    uniform mat4 uView;
    uniform mat4 uProjection;
    varying vec3 vColor;
    void main() {
        gl_Position = uProjection * uView * uModel * vec4(aPosition, 1.0);
        vColor = aColor;
    }
    `;
    var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject, vertexShaderCode);
    gl.compileShader(vertexShaderObject);   // sampai sini sudah jadi .o
  
    // Fragment shader
    var fragmentShaderCode = `
    precision mediump float;
    varying vec3 vColor;
    void main() {
        gl_FragColor = vec4(vColor, 1.0);
    }
    `;
    var fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShaderObject, fragmentShaderCode);
    gl.compileShader(fragmentShaderObject);   // sampai sini sudah jadi .o
  
    var shaderProgram = gl.createProgram(); // wadah dari executable (.exe)
    gl.attachShader(shaderProgram, vertexShaderObject);
    gl.attachShader(shaderProgram, fragmentShaderObject);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);
  

    var theta = 0.0;
    var freeze = false;
    var frameWidth = 9;
    var horizontalSpeed = 0.0022; // NRP akhir 022
    var verticalSpeed = 0.0;
    var horizontalDelta = 0.0;
    var verticalDelta = 0.0;
    var scaleDelta = 0.0;
    var scaleSpeed = 0.05;
    var freezeN = 0;
    var freezeO = 0;
    var thetaX = 0.0;
    var thetaY = 0.0;
  
    // Variabel pointer ke GLSL
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    // View
    var cameraX = 0.0;
    var cameraZ = 7.5;
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var view = mat4.create();
    mat4.lookAt(
        view,
        [cameraX, 0.0, cameraZ],    // the location of the eye or the camera
        [cameraX, 0.0, -10],        // the point where the camera look at
        [0.0, 1.0, 0.0]
    );
    // Projection
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
    var perspective = mat4.create();
    
    mat4.perspective(perspective, Math.PI/3, 1.0, 0.5, 50);
  
    function drawing (vertices, indices, start=0, end, glType=gl.LINE_LOOP) { 
      const buffer = gl.createBuffer();
      const indexBuffer = gl.createBuffer();
  
      // bind buffer
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
      
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
      
      const aPosition = gl.getAttribLocation(shaderProgram, 'aPosition');
      const aColor = gl.getAttribLocation(shaderProgram, 'aColor');
      // variable pointer ke GLSL
      gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 
          6 * Float32Array.BYTES_PER_ELEMENT, 
          0 * Float32Array.BYTES_PER_ELEMENT
      );
      gl.enableVertexAttribArray(aPosition);
      
      // gl.drawArrays(glType, start, end);
      
      gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 
          6 * Float32Array.BYTES_PER_ELEMENT, 
          3 * Float32Array.BYTES_PER_ELEMENT 
          );
      gl.enableVertexAttribArray(aColor);
      
      gl.drawElements(glType, indices.length - 11, gl.UNSIGNED_SHORT, 0);
    }
  
    function animate2(i) {
      var model = mat4.create();
  
      if (horizontalDelta >= (frameWidth/2) || horizontalDelta <= (-frameWidth/2+1)) {
          horizontalSpeed = horizontalSpeed * -1;
      }
      horizontalDelta += horizontalSpeed;
      mat4.translate(model, model, [horizontalDelta, verticalDelta, 0.0]);
      
      var uModel = gl.getUniformLocation(shaderProgram, "uModel");
      var uView = gl.getUniformLocation(shaderProgram, "uView");
      var uProjection = gl.getUniformLocation(shaderProgram, "uProjection"); 
      gl.uniformMatrix4fv(uModel,false, model);
      gl.uniformMatrix4fv(uView, false, view);
      gl.uniformMatrix4fv(uProjection, false, perspective);
      drawing(objects[i].vertices, objects[i].indices, 0, objects[i].length, objects[i].type);
    }
  
    function animate21(i) {
      var model = mat4.create();
  
      if (scaleDelta >= 2 || scaleDelta <= -0.5) {
          scaleSpeed = scaleSpeed * -1;
      }
      scaleDelta += scaleSpeed;
      mat4.translate(model, model, [0, 0, scaleDelta]);
      
      var uModel = gl.getUniformLocation(shaderProgram, "uModel");
      var uView = gl.getUniformLocation(shaderProgram, "uView");
      var uProjection = gl.getUniformLocation(shaderProgram, "uProjection"); 
      gl.uniformMatrix4fv(uModel,false, model);
      gl.uniformMatrix4fv(uView, false, view);
      gl.uniformMatrix4fv(uProjection, false, perspective);
      drawing(objects[i].vertices, objects[i].indices, 0, objects[i].length, objects[i].type);
    }
  
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 
        6 * Float32Array.BYTES_PER_ELEMENT, 
        0);
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 
        6 * Float32Array.BYTES_PER_ELEMENT, 
        3 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);
  

  
    function render() {
        gl.enable(gl.DEPTH_TEST);
        gl.clearColor(0.0,      0.0,    0.0,    1.0);  // Oranye
        //            Merah     Hijau   Biru    Transparansi
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        if (!freeze) {
            theta += 0.005;
        }
        horizontalDelta += horizontalSpeed;
        verticalDelta -= verticalSpeed;
        var model = mat4.create(); // Membuat matriks identitas
        mat4.translate(
            model, model, [horizontalDelta, verticalDelta, 0.0]
        );
        mat4.rotateX(
            model, model, theta
        );
        mat4.rotateY(
            model, model, theta
        );
        mat4.rotateZ(
            model, model, theta
        );
        gl.uniformMatrix4fv(uModel, false, model);
        gl.uniformMatrix4fv(uView, false, view);
        gl.uniformMatrix4fv(uProjection, false, perspective);

        animate2(0)
        animate2(1)
        animate21(2);
        animate21(3);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }