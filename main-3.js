function main() {
    var kanvas = document.getElementById("kanvas");
    var gl = kanvas.getContext("webgl");
  
    var vertices2 = [
      // Num 2 Outer Front   // White
      -0.75, 0.75, 0.0,      5.0, 1.0, 0.0,   0, 0, -1,      0, 0, -1,   //Index 0
      -0.15, 0.75, 0.0,      5.0, 1.0, 0.0,   0, 0, -1,   //Index 1
      -0.15, 0.50, 0.0,      5.0, 1.0, 0.0,   0, 0, -1,   //Index 2
      -0.18, 0.45, 0.0,      5.0, 1.0, 0.0,   0, 0, -1,   //Index 3
      -0.70, 0.45, 0.0,      5.0, 1.0, 0.0,   0, 0, -1,   //Index 4
      -0.70, 0.25, 0.0,      5.0, 1.0, 0.0,   0, 0, -1,   //Index 5
      -0.18, 0.25, 0.0,      5.0, 1.0, 0.0,   0, 0, -1,   //Index 6
      -0.15, 0.20, 0.0,      5.0, 1.0, 0.0,   0, 0, -1,   //Index 7
      -0.75, 0.20, 0.0,      5.0, 1.0, 0.0,   0, 0, -1,   //Index 8
      -0.75, 0.45, 0.0,      5.0, 1.0, 0.0,   0, 0, -1,   //Index 9
      -0.72, 0.50, 0.0,      5.0, 1.0, 0.0,   0, 0, -1,   //Index 10
      -0.20, 0.50, 0.0,      5.0, 1.0, 0.0,   0, 0, -1,   //Index 11
      -0.20, 0.70, 0.0,      5.0, 1.0, 0.0,   0, 0, -1,   //Index 12
      -0.72, 0.70, 0.0,      5.0, 1.0, 0.0,   0, 0, -1,   //Index 13
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
  

  
    var vertices21 = [
        0.15, 0.75, 0.0,       5.0, 0.0, 1.0,       0, 0, -1,  //A : Kanan atas
        0.75, 0.75, 0.0,       5.0, 0.0, 1.0,       0, 0, -1, 
        0.75, 0.50, 0.0,       5.0, 0.0, 1.0,       0, 0, -1, 
        0.72, 0.45, 0.0,       5.0, 0.0, 1.0,       0, 0, -1, 
        0.20, 0.45, 0.0,       5.0, 0.0, 1.0,       0, 0, -1, 
        0.20, 0.25, 0.0,       5.0, 0.0, 1.0,       0, 0, -1, 
        0.72, 0.25, 0.0,       5.0, 0.0, 1.0,       0, 0, -1, 
        0.75, 0.20, 0.0,       5.0, 0.0, 1.0,       0, 0, -1, 
        0.15, 0.20, 0.0,       5.0, 0.0, 1.0,       0, 0, -1, 
        0.15, 0.45, 0.0,       5.0, 0.0, 1.0,       0, 0, -1, 
        0.18, 0.50, 0.0,       5.0, 0.0, 1.0,       0, 0, -1, 
        0.70, 0.50, 0.0,       5.0, 0.0, 1.0,       0, 0, -1, 
        0.70, 0.70, 0.0,       5.0, 0.0, 1.0,       0, 0, -1, 
        0.18, 0.70, 0.0,       5.0, 0.0, 1.0,       0, 0, -1, 
    ]
  

    var vertices213D = [
        0.15, 0.75, 0.0,      5.0, 1.0, 0.0,        0, 0, 1,        
        0.18, 0.79, 0.0,      5.0, 1.0, 0.0,        0, 0, 1,  

        0.18, 0.79, 0.0,      5.0, 1.0, 0.0,        0, 0, 1,  
        0.78, 0.79, 0.0,      5.0, 1.0, 0.0,        0, 0, 1,  

        0.78, 0.79, 0.0,      5.0, 1.0, 0.0,        0, 0, 1,  
        0.75, 0.75, 0.0,      5.0, 1.0, 0.0,        0, 0, 1,  

        0.78, 0.79, 0.0,      5.0, 1.0, 0.0,        0, 0, 1,  
        0.78, 0.54, 0.0,      5.0, 1.0, 0.0,        0, 0, 1,  

        0.78, 0.54, 0.0,      5.0, 1.0, 0.0,        0, 0, 1,  
        0.75, 0.50, 0.0,      5.0, 1.0, 0.0,        0, 0, 1,  

        0.70, 0.54, 0.0,      5.0, 1.0, 0.0,        0, 0, 1,  
        0.21, 0.54, 0.0,      5.0, 1.0, 0.0,        0, 0, 1,  

        0.21, 0.54, 0.0,      5.0, 1.0, 0.0,        0, 0, 1,  
        0.18, 0.50, 0.0,      5.0, 1.0, 0.0,        0, 0, 1,  

        0.20, 0.29, 0.0,      5.0, 1.0, 0.0,        0, 0, 1,  
        0.75, 0.29, 0.0,      5.0, 1.0, 0.0,        0, 0, 1,  

        0.75, 0.29, 0.0,      5.0, 1.0, 0.0,        0, 0, 1,  
        0.72, 0.25, 0.0,      5.0, 1.0, 0.0,        0, 0, 1,  

        0.75, 0.29, 0.0,      5.0, 1.0, 0.0,        0, 0, 1,  
        0.75, 0.20, 0.0,      5.0, 1.0, 0.0,        0, 0, 1,  
    ]

  
    var verticesW1 = [
        -0.75, -0.20,  0.0,      0.0, 1.0, 5.0,     1, 0, 1,  //A : Kanan atas
        -0.70, -0.20,  0.0,      0.0, 1.0, 5.0,     1, 0, 1, 
        -0.5915, -0.75,  0.0,    0.0, 1.0, 5.0,     1, 0, 1, 
        -0.65, -0.75,  0.0,      0.0, 1.0, 5.0,     1, 0, 1, 
    ];
    var verticesW2 = [
        -0.615, -0.75,  0.0,      0.0, 1.0, 5.0,    1, 0, 1,    
        -0.50, -0.28,  0.0,      0.0, 1.0, 5.0,   1, 0, 1,
        -0.45, -0.28,  0.0,      0.0, 1.0, 5.0,   1, 0, 1,
        -0.55, -0.75,  0.0,      0.0, 1.0, 5.0,   1, 0, 1,
    ];
    var verticesW3 = [
        -0.45, -0.28,  0.0,      0.0, 1.0, 5.0,    -1, 0, 1,  
        -0.337, -0.75,  0.0,      0.0, 1.0, 5.0,     -1, 0, 1,  
        -0.40, -0.75,  0.0,      0.0, 1.0, 5.0,    -1, 0, 1,  
        -0.475, -0.40,  0.0,      0.0, 1.0, 5.0,     -1, 0, 1,  
    ];
    var verticesW4 = [
        -0.3585, -0.75,  0.0,      0.0, 1.0, 5.0,     -1, 0, 1,  
        -0.25, -0.20,  0.0,      0.0, 1.0, 5.0,     -1, 0, 1,  
        -0.20, -0.20,  0.0,      0.0, 1.0, 5.0,     -1, 0, 1,  
        -0.30, -0.75,  0.0,      0.0, 1.0, 5.0,     -1, 0, 1,  
    ];

    var verticesW1B1 = [
        -0.75, -0.20,   0.0,      0.0, 0.0, 5.0,    1, 0, -1,    
        -0.72, -0.16,   0.0,      0.0, 0.0, 5.0,    1, 0, -1,
        -0.67, -0.16,   0.0,      0.0, 0.0, 5.0,    1, 0, -1,
        -0.70, -0.20,   0.0,      0.0, 0.0, 5.0,    1, 0, -1,
    ];
    var verticesW1B2 = [
        -0.70, -0.20,  0.0,       0.0, 0.0, 5.0,    1, 0, -1,
        -0.67, -0.16,  0.0,       0.0, 0.0, 5.0,    1, 0, -1,
        -0.585, -0.63,  0.0,       0.0, 0.0, 5.0,   1, 0, -1,
        -0.60, -0.70,  0.0,       0.0, 0.0, 5.0,    1, 0, -1,
    ];
    var verticesW1B3 = [
        -0.50, -0.28,  0.0,       0.0, 0.0, 5.0,    1, 0, -1,
        -0.47, -0.24,  0.0,       0.0, 0.0, 5.0,    1, 0, -1,
        -0.42, -0.24,  0.0,       0.0, 0.0, 5.0,    1, 0, -1,
        -0.45, -0.28,  0.0,       0.0, 0.0, 5.0,    1, 0, -1,
    ];
    var verticesW1B4 = [
        -0.42, -0.24,  0.0,       0.0, 0.0, 5.0,    1, 0, -1,
        -0.45, -0.28,  0.0,       0.0, 0.0, 5.0,    1, 0, -1,
        -0.35, -0.70,  0.0,       0.0, 0.0, 5.0,    1, 0, -1,
        -0.3325, -0.63,  0.0,       0.0, 0.0, 5.0,    1, 0, -1,
    ];
    var verticesW1B5 = [
        -0.55, -0.75,  0.0,       0.0, 0.0, 5.0,      -1, 0, -1,
        -0.51, -0.75,  0.0,       0.0, 0.0, 5.0,      -1, 0, -1,
        -0.455, -0.49,  0.0,       0.0, 0.0, 5.0,     -1, 0, -1,
        -0.475, -0.40,  0.0,       0.0, 0.0, 5.0,     -1, 0, -1,
    ];
    var verticesW1B6 = [
        -0.25, -0.20,  0.0,       0.0, 0.0, 5.0,      -1, 0, -1,
        -0.22, -0.16,  0.0,       0.0, 0.0, 5.0,      -1, 0, -1,
        -0.17, -0.16,  0.0,       0.0, 0.0, 5.0,      -1, 0, -1,
        -0.20, -0.20,  0.0,       0.0, 0.0, 5.0,      -1, 0, -1,
    ];
    var verticesW1B7 = [
        -0.17, -0.16,  0.0,       0.0, 0.0, 5.0,      -1, 0, -1,
        -0.20, -0.20,  0.0,       0.0, 0.0, 5.0,      -1, 0, -1,
        -0.30, -0.75,  0.0,       0.0, 0.0, 5.0,      -1, 0, -1,
        -0.27, -0.71,  0.0,       0.0, 0.0, 5.0,      -1, 0, -1,
    ];

    var verticesO1 = [
        0.5, -0.20,  1.0,       0.0, 0.0, 5.0,      -1, 0, -1,
        1.0, -0.20,  1.0,       0.0, 0.0, 5.0,      -1, 0, -1,
        1.0, -0.71,  1.0,       0.0, 0.0, 5.0,      -1, 0, -1,
        0.5, -0.71,  1.0,       0.0, 0.0, 5.0,      -1, 0, -1,
    ];

    var vertices_cube = [
      // Face A       // Red
      -0.2, -0.2, -0.2,     0.0, 0.0, 5.0,     0, 0, -1,    // Index:  0    
       0.2, -0.2, -0.2,     0.0, 0.0, 5.0,     0, 0, -1,     // Index:  1
       0.2,  0.2, -0.2,     0.0, 0.0, 5.0,     0, 0, -1,     // Index:  2
      -0.2,  0.2, -0.2,     0.0, 0.0, 5.0,     0, 0, -1,     // Index:  3
      // Face B       // Yellow
      -0.2, -0.2,  0.2,     1.0, 1.0, 1.0,     0, 0, 1,    // Index:  4
       0.2, -0.2,  0.2,     1.0, 1.0, 1.0,     0, 0, 1,    // Index:  5
       0.2,  0.2,  0.2,     1.0, 1.0, 1.0,     0, 0, 1,    // Index:  6
      -0.2,  0.2,  0.2,     1.0, 1.0, 1.0,     0, 0, 1,    // Index:  7
      // Face C       // Green
      -0.2, -0.2, -0.2,     0.0, 0.0, 5.0,    -1, 0, 0,     // Index:  8
      -0.2,  0.2, -0.2,     0.0, 0.0, 5.0,    -1, 0, 0,    // Index:  9
      -0.2,  0.2,  0.2,     0.0, 0.0, 5.0,    -1, 0, 0,      // Index: 10
      -0.2, -0.2,  0.2,     0.0, 0.0, 5.0,    -1, 0, 0,      // Index: 11
      // Face D       // Blue
      0.2, -0.2, -0.2,     1.0, 1.0, 1.0,     1, 0, 0,     // Index: 12
      0.2,  0.2, -0.2,     1.0, 1.0, 1.0,     1, 0, 0,     // Index: 13
      0.2,  0.2,  0.2,     1.0, 1.0, 1.0,     1, 0, 0,     // Index: 14
      0.2, -0.2,  0.2,     1.0, 1.0, 1.0,     1, 0, 0,    // Index: 15
      // Face E       // Orange
      -0.2, -0.2, -0.2,     0.0, 0.0, 5.0,    0, -1, 0,   // Index: 16
      -0.2, -0.2,  0.2,     0.0, 0.0, 5.0,    0, -1, 0,   // Index: 17
      0.2, -0.2,  0.2,     0.0, 0.0, 5.0,     0, -1, 0,   // Index: 18
      0.2, -0.2, -0.2,     0.0, 0.0, 5.0,     0, -1, 0,   // Index: 19
      // Face F       // White
      -0.2,  0.2, -0.2,    1.0, 1.0, 1.0,     0, 1, 0,    // Index: 20
      -0.2,  0.2,  0.2,    1.0, 1.0, 1.0,     0, 1, 0,    // Index: 21
      0.2,  0.2,  0.2,    1.0, 1.0, 1.0,      0, 1, 0,    // Index: 22
      0.2,  0.2, -0.2,    1.0, 1.0, 1.0,      0, 1, 0,     // Index: 23
  ];


    
    var objects = [
      {
        name: '2',
        vertices: vertices2,
        length: 14,
        type: gl.LINE_LOOP,
      },
      {
        name: '2',
        vertices: vertices23D,
        length: 20,
        type: gl.LINES,
      },
      {
        name: '22',
        vertices: vertices21,
        length: 14,
        type: gl.LINE_LOOP,
      },
      {
        name: '22',
        vertices: vertices213D,
        length: 20,
        type: gl.LINES,
      },
      {
        name: 'W',
        vertices: verticesW1,
        length: 4,
        type: gl.TRIANGLE_FAN,
      },
      {
        name: 'W',
        vertices: verticesW2,
        length: 4,
        type: gl.TRIANGLE_FAN,
      },
      {
        name: 'W',
        vertices: verticesW3,
        length: 4,
        type: gl.TRIANGLE_FAN,
      },
      {
        name: 'W',
        vertices: verticesW4,
        length: 4,
        type: gl.TRIANGLE_FAN,
      },
      {
        name: 'WB',
        vertices: verticesW1B1,
        length: 4,
        type: gl.TRIANGLE_FAN,
      },
      {
        name: 'WB',
        vertices: verticesW1B2,
        length: 4,
        type: gl.TRIANGLE_FAN,
      },
      {
        name: 'WB',
        vertices: verticesW1B3,
        length: 4,
        type: gl.TRIANGLE_FAN,
      },
      {
        name: 'WB',
        vertices: verticesW1B4,
        length: 4,
        type: gl.TRIANGLE_FAN,
      },
      {
        name: 'WB',
        vertices: verticesW1B5,
        length: 4,
        type: gl.TRIANGLE_FAN,
      },
      {
        name: 'WB',
        vertices: verticesW1B6,
        length: 4,
        type: gl.TRIANGLE_FAN,
      },
      {
        name: 'WB',
        vertices: verticesW1B7,
        length: 4,
        type: gl.TRIANGLE_FAN,
      },
      {
        name: '0',
        vertices: verticesO1,
        length: 4,
        type: gl.TRIANGLE_FAN,
      },
      {
        name: 'vertices_cube',
        vertices: vertices_cube,
        length: 24,
        type: gl.TRIANGLE_FAN,
      },

    ]
  
  
    // Vertex shader
    var vertexShaderCode =  `
    attribute vec3 aPosition;   // Sebelumnya vec2, makanya tidak tergambar kubus :D
    attribute vec3 aColor;
    attribute vec3 aNormal;
    uniform mat4 uModel;
    uniform mat4 uView;
    uniform mat4 uProjection;
    varying vec3 vPosition;
    varying vec3 vColor;
    varying vec3 vNormal;
    void main() {
        gl_Position = uProjection * uView * uModel * vec4(aPosition, 1.0);
        vColor = aColor;
        vNormal = aNormal;
        vPosition = (uModel * vec4(aPosition, 1.0)).xyz;
    }
    `;
    var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject, vertexShaderCode);
    gl.compileShader(vertexShaderObject);   // sampai sini sudah jadi .o
  
    // Fragment shader
    var fragmentShaderCode = `
    precision mediump float;
    varying vec3 vColor;
    uniform vec3 uLightConstant; // merepresentasikan warna sumber cahaya
    uniform float uAmbientIntensity;    // merepresentasikan intensitas cahaya sekitar
    varying vec3 vNormal;
    varying vec3 vPosition;             // titik fragmen
    uniform vec3 uLightPosition;        // titik lokasi sumber cahaya
    uniform mat3 uNormalModel;
    void main() {
      vec3 ambient = uLightConstant * uAmbientIntensity;
      vec3 lightRay = vPosition - uLightPosition;
      vec3 normalizedLight = normalize(-lightRay);
      vec3 normalizedNormal = normalize(uNormalModel * vNormal);
      float cosTheta = dot(normalizedNormal, normalizedLight);
      vec3 diffuse = vec3(0.0, 0.0, 0.0);
      if (cosTheta > 0.0) {
          float diffuseIntensity = cosTheta;
          diffuse = uLightConstant * diffuseIntensity;
      }
      vec3 phong = ambient + diffuse;
        gl_FragColor = vec4(phong * vColor, 1.0);
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
  
    // Variabel lokal
    var theta = 0.0;
    var freeze = false;
    var frameWidth = 9;
    var horizontalSpeed = 0.0022; // NRP akhir 097
    var verticalSpeed = 0.0;
    var horizontalDelta = 0.0;
    var verticalDelta = 0.0;
    var scaleDelta = 0.0;
    var scaleSpeed = 0.022;
    var freezeW = 0;
    var freezeO = 0;
    var moveX = 0.0;
    var moveZ = 0.0;
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
  

        function drawing_again (vertices, glType, length) { 
        const buffer = gl.createBuffer();
    
        // bind buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        
        
        const aPosition = gl.getAttribLocation(shaderProgram, 'aPosition');

        gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 
          9 * Float32Array.BYTES_PER_ELEMENT, 
          0 * Float32Array.BYTES_PER_ELEMENT
      );
      gl.enableVertexAttribArray(aPosition);


        const aColor = gl.getAttribLocation(shaderProgram, 'aColor');

        gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 
          9 * Float32Array.BYTES_PER_ELEMENT, 
          3 * Float32Array.BYTES_PER_ELEMENT 
          );
      gl.enableVertexAttribArray(aColor);
        // variable pointer ke GLSL

        var aNormal = gl.getAttribLocation(shaderProgram, "aNormal");
        gl.vertexAttribPointer(aNormal, 3, gl.FLOAT, false, 
            9 * Float32Array.BYTES_PER_ELEMENT, 
            6 * Float32Array.BYTES_PER_ELEMENT);
        gl.enableVertexAttribArray(aNormal);

        var uLightConstant = gl.getUniformLocation(shaderProgram, "uLightConstant");
        var uAmbientIntensity = gl.getUniformLocation(shaderProgram, "uAmbientIntensity");
        gl.uniform3fv(uLightConstant, [1.0, 1.0, 1.0]);   // warna sumber cahaya: putih
        gl.uniform1f(uAmbientIntensity, 0.322);               // intensitas cahaya: 40%
        

        var uLightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
        gl.uniform3fv(uLightPosition, [2.0, 0.0, 0.0]);
        var uNormalModel = gl.getUniformLocation(shaderProgram, "uNormalModel");
        
        var normalModel = mat3.create();
        mat3.normalFromMat4(normalModel, uModel);
        gl.uniformMatrix3fv(uNormalModel, false, normalModel);

        gl.drawArrays(glType, 0, length);
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
      drawing_again(objects[i].vertices, objects[i].type, objects[i].length);
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
      drawing_again(objects[i].vertices, objects[i].type, objects[i].length);
    }
  
    function onKeyPress(event) {
      if (event.keyCode == 38) { // left arrow
        freezeO = 1;
      } else if(event.keyCode == 40) { // right arrow
        freezeO = 2;
      } if (event.keyCode == 37) { // up arrow
        freezeW = 1;
      } else if (event.keyCode == 39) { // down arrow
        freezeW = 2;
      }
      if (event.keyCode == 73) { // i / arrow kiri
        moveZ -= 0.2;
      } else if (event.keyCode == 75) { // k / arrow kanan
        moveZ += 0.2;
      }
  
      if (event.keyCode == 74) { // j / arrow kiri
        moveX -= 0.2;
      } else if (event.keyCode == 76) { // l / arrow kanan
        moveX += 0.2;
      }
    }
  
    document.addEventListener("keydown", onKeyPress, false);
  
    function animateO(i)  {
        var modelx = mat4.create();
        mat4.rotateX(modelx, modelx, thetaX);
        if (freezeO == 1) {
          thetaX -= 0.01;
        } else if (freezeO == 2) {
          thetaX += 0.01;
        }
    
        var uModel = gl.getUniformLocation(shaderProgram, "uModel");
        var uView = gl.getUniformLocation(shaderProgram, "uView");
        var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
        gl.uniformMatrix4fv(uModel, false, modelx);
        gl.uniformMatrix4fv(uView, false, view);
        gl.uniformMatrix4fv(uProjection, false, perspective);
        drawing_again(objects[i].vertices, objects[i].type, objects[i].length);
      }

      function animate_cube(i)  {
        var model = mat4.create();

        mat4.translate(model, model, [moveX, 0.0, moveZ]);
    
        var uModel = gl.getUniformLocation(shaderProgram, "uModel");
        var uView = gl.getUniformLocation(shaderProgram, "uView");
        var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
    
        gl.uniformMatrix4fv(uModel,false, model);
        gl.uniformMatrix4fv(uView, false, view);
        gl.uniformMatrix4fv(uProjection, false, perspective);
        drawing_again(objects[i].vertices, objects[i].type, objects[i].length);
      }

    function animateW(i)  {
      var modely = mat4.create();
      mat4.rotateY(modely, modely, thetaY);
  
      if (freezeW == 1) {
        thetaY -= 0.01;
      } else if (freezeW == 2) {
        thetaY += 0.01;
      }
  
      var uModel = gl.getUniformLocation(shaderProgram, "uModel");
      var uView = gl.getUniformLocation(shaderProgram, "uView");
      var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
      gl.uniformMatrix4fv(uModel, false, modely);
      gl.uniformMatrix4fv(uView, false, view);
      gl.uniformMatrix4fv(uProjection, false, perspective);
      drawing_again(objects[i].vertices, objects[i].type, objects[i].length);
    }

 
  

    function onMouseClick(event) {
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick);
    // Papan ketuk
    function onKeydown(event) {
        if (event.keyCode == 32) freeze = !freeze;  // spasi
        // Gerakan horizontal: a ke kiri, d ke kanan
        if (event.keyCode == 65) {  // a
            horizontalSpeed = -0.01;
        } else if (event.keyCode == 68) {   // d
            horizontalSpeed = 0.01;
        }
        // Gerakan vertikal: w ke atas, s ke bawah
        if (event.keyCode == 87) {  // w
            verticalSpeed = -0.01;
        } else if (event.keyCode == 83) {   // s
            verticalSpeed = 0.01;
        }
    }
    function onKeyup(event) {
        if (event.keyCode == 32) freeze = !freeze;
        if (event.keyCode == 65 || event.keyCode == 68) horizontalSpeed = 0.0;
        if (event.keyCode == 87 || event.keyCode == 83) verticalSpeed = 0.0;
    }
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);
  
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
        // gl.drawElements(gl.LINE_LOOP, indices.length, gl.UNSIGNED_SHORT, 0);
        // animate2(0);
        // animate2(1);
        animate21(2);
        animate21(3);
        animateW(4);
        animateW(5);
        animateW(6);
        animateW(7);
        animateW(8);
        animateW(9);
        animateW(10);
        animateW(11);
        animateW(12);
        animateW(13);
        animateW(14);
        // animateO(15);
        animate_cube(16);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }