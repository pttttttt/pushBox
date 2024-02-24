export const bgc = [{
  wall: 'red',
  inner: 'pink'
},
{
  wall: '#1c25de',
  inner: '#44bae1'
},
{
  wall: '#1f1f1f',
  inner: '#8cdcda'
}]

export const roleColor = {
  bgc: 'black',
  border: 'white'
}

export const door = [{
  id: 0,
  top: 0,
  left: 42,
  width: 16,
  height: 10
},
{
  id: 1,
  top: 42,
  left: 90,
  width: 10,
  height: 16
},
{
  id: 2,
  top: 90,
  left: 42,
  width: 16,
  height: 10
},
{
  id: 3,
  top: 42,
  left: 0,
  width: 10,
  height: 16
}]

export const boxArr = [{
  id: 0,
  bgc: 0,
  role: {
    show: true,
    x: 2,
    y: 2
  },
  door: { 0: 2 },
  children: { 1: [0, 0]}
},
{
  id: 1,
  bgc: 1,
  role: {
    show: false,
    x: 0,
    y: 0
  },
  door: { 2: 0 },
  children: { 2: [3, 4] }
},
{
  id: 2,
  bgc: 2,
  role: {
    show: false,
    x: 0,
    y: 0
  },
  door: { 1: 1 },
  children: { 0: [3, 4] }
}]