/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // دايماً بنعمل البحث الثنائي على المصفوفة الأصغر عشان الأداء ومايحصلش Out of bounds
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let m = nums1.length;
    let n = nums2.length;
    
    let left = 0;
    let right = m;
    
    // النص الإجمالي للأرقام (بنجمع 1 عشان يشتغل مع الزوجي والفردي)
    let halfLen = Math.floor((m + n + 1) / 2);

    while (left <= right) {
        // نقطة القطع في المصفوفة الأولى
        let i = Math.floor((left + right) / 2);
        // نقطة القطع في المصفوفة التانية (مكملة للنص الإجمالي)
        let j = halfLen - i;

        // بنجيب القيم اللي على يمين وشمال القطع في المصفوفتين
        // لو مفيش أرقام (يعني القطع في الأول أو الآخر)، بنحط -Infinity أو Infinity
        let maxLeft1 = (i === 0) ? -Infinity : nums1[i - 1];
        let minRight1 = (i === m) ? Infinity : nums1[i];
        
        let maxLeft2 = (j === 0) ? -Infinity : nums2[j - 1];
        let minRight2 = (j === n) ? Infinity : nums2[j];

        // بنختبر: هل القطع ده هو القطع المثالي؟
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // لقينا القطع المثالي!
            // لو مجموع طول المصفوفتين فردي
            if ((m + n) % 2 !== 0) {
                return Math.max(maxLeft1, maxLeft2);
            } 
            // لو مجموع طول المصفوفتين زوجي
            else {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            }
        } 
        // لو الرقم اللي على شمال القطع في الأولى أكبر، يبقى لازم نتحرك شمال
        else if (maxLeft1 > minRight2) {
            right = i - 1;
        } 
        // غير كده نتحرك يمين
        else {
            left = i + 1;
        }
    }
};