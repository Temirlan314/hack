function createFormData(obj, formData, subKeyStr = "") {
    for (let i in obj) {
        let value = obj[i];
        let subKeyStrTrans = subKeyStr ? subKeyStr + "[" + i + "]" : i;
        console.log(subKeyStrTrans, value)
        if (typeof value === "string" || typeof value === "number" || value instanceof File) {
            formData.append(subKeyStrTrans, value);
        } else if (typeof value === "object") {
            createFormData(value, formData, subKeyStrTrans);
        }
    }
};
export default function objectToFormData(obj, formData = new FormData()) {
    createFormData(obj, formData);
    return formData;
}
