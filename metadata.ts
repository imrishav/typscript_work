import 'reflect-metadata';

@printMeta
class Plane {
  @markFun('/login')
  fly(): void {
    console.log('dsaads');
  }

  @markFun('/register')
  drown(): void {
    console.log('dsaads');
  }
}

function markFun(rou: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', rou, target, key);
  };
}

function printMeta(target: typeof Plane) {
  for (let ky in target.prototype) {
    const data = Reflect.getMetadata('secret', target.prototype, ky);
    console.log('data0, data', target.prototype);
    console.log('data0, data', ky);
  }
}
