//Exercise #1
/* กำหนดให้ getJohnProfile เป็น Function ที่ดึงข้อมูลมาจาก Server ซึ่งมีรายละเอียดดังนี้

Return ผลลัพธ์ออกมาเป็น Promise Function

Function getJohnProfile ดึงข้อมูลจาก Server สำเร็จเสมอ 
*/

let getJohnProfile = () => {
    return new Promise(function (resolve) {
    setTimeout(
        () =>
        resolve({
            name: "John",
            age: 20,
            hobbies: ["Coding", "Football"],
        }),
        1000
    );
    });
};

/* ในที่นี้เราไม่ต้องไปสนใจโค้ดข้างใน Function getJohnProfile 
ให้นึกซะว่า Function นี้มี Built-in fetch อยู่ข้างใน

ให้แสดงผลข้อมูลที่ Resolve จาก Promise ที่ Return มาจาก Function 
getJohnProfile ด้วยวิธี Promise Property ปกติ ด้วย console.log()
เราจะเห็นผลลัพธ์ของโปรแกรมออกมาทางหน้าจอแบบนี้ 

{
  name: 'John',
  age: 20,
  hobbies: [ 'Coding', 'Football' ]
}

*/

// Start coding here
getJohnProfile().then((data)=> {
  console.log(data); 
})
