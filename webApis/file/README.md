# Notes

**File** is object which inherits `Blob` and extended with file-system

Usage: `new File(fileParts, fileName, [options])`

* fileParts – is an array of Blob/BufferSource/String values.
* fileName – file name string.
* options – optional object:
* lastModified – the timestamp (integer date) of last modification.

More often usage from web using `<input type="file" />`

**FileReader** is an object with the sole purpose of reading data from Blob (and hence File too) objects.
Allow to read files from disk, or accept file with methods: 

* readAsArrayBuffer(blob) – read the data in binary format ArrayBuffer.
* readAsText(blob, [encoding]) – read the data as a text string with the given encoding (utf-8 by default).
* readAsDataURL(blob) – read the binary data and encode it as base64 data url.
* abort() – cancel the operation.

**FormData** uses to collect data from form and send them through network.
Methods: 
* .append(key, value)
* .append(name, blob, fileName)
* .set(key, value) - rewrite key value with new value
* .delete(key) - remove key
* .has(key) - search for key and return true of false
* .get(key) - return key