int h = 0;
int w = 0;

// constants
int halfwayH = 750 / 2;

void setup() {
  size(1500, 750);
  strokeWeight(4);
  h = height;
  w = width;
  
}

// While this has no purpose in staying here, I'll keep it for future reference.

void draw() {
  
  // pencil shape
  
  // stroke color, darker yellow
  sc(#EDF442);
  // no fill, pencil outline
  box(650, 725, halfwayH + 200, halfwayH - 200);
  // let's try a shader, we do this by picking a darker color and changing the values a tad!
  sc(#A2A552);
  strokeWeight(2);
  box(652, 723, halfwayH + 198, halfwayH - 198);
  
}

void qe(int wid, int hei, int x, int y) {
   ellipse(wid, hei, x, y); 
}



void f(color c) {
   fill(c); 
}

void sc(color c) {
    stroke(c); 
}
void box(int left, int right, int bottomy, int topy) {
      //x1, y1, x2, y2
      // draw top line
      line(left, topy, right, topy);
      
      // bottom line
      line(left, bottomy, right, bottomy);
      
      // draw left side to bottomy
      line(left, bottomy, left, topy);
      
      // draw right side to bottomy
      line(right, bottomy, right, topy);
     
}
