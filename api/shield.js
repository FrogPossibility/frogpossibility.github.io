<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3498db;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2980b9;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Facce del cubo -->
  <polygon points="100,100 250,100 300,200 150,200" 
           fill="url(#gradient)" 
           stroke="black" 
           stroke-width="2" 
           opacity="0.9"/>
  
  <polygon points="250,100 300,200 300,250 250,150" 
           fill="url(#gradient)" 
           stroke="black" 
           stroke-width="2" 
           opacity="0.7"/>
  
  <polygon points="100,100 150,200 150,250 100,150" 
           fill="url(#gradient)" 
           stroke="black" 
           stroke-width="2" 
           opacity="0.5"/>

  <!-- Testo 3D al centro -->
  <text x="175" y="175" 
        font-family="Arial" 
        font-size="40" 
        font-weight="bold" 
        text-anchor="middle" 
        fill="white" 
        stroke="black" 
        stroke-width="1">
    3D TEXT
  </text>
</svg>
