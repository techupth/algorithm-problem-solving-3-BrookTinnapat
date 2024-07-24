function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < customers.length - 1; i++) {
    for (let j = 0; j < customers.length - 1; j++) {
      if (customers[j] > customers[j + 1]) {
        let temp = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = temp;
      }
    }
  }
  return customers;
}
customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];
console.log(sortCustomerName(customers));
// Needed Answer [ "Arthit", "Napasorn", "Pimchanok", "Somchai", "Suchada"]

// ตอบคำถามตรงนี้จ้า
// มี Big o เป็น On^2 เพราะ nested loop ทำให้มีการทำงานซ้อนกัน 2 ครั้ง
