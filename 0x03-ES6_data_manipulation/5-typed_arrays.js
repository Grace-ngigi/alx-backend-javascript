export default function createInt8TypedArray(length, position, value){
    const buffer = new ArrayBuffer(length);

    // Create an Int8Array view on the buffer
    const int8Array = new Int8Array(buffer);
  
    // Set the Int8 value at the specified position
    int8Array[position] = value;
  
    return buffer;
}