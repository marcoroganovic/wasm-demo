int add(int x, int y) {
  return x + y;
}

int mult(int x, int y) {
  return x * y;
}

int sub(int x, int y) {
  return x - y;
}

int divide(int x, int y) {
  return x / y;
}

int addAllPositive(int num) {
  int sum = 0;
  
  for(int i = num; i > 0; i--) {
    sum += i;
  }
  
  return sum;
}
