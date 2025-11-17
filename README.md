# TypeScript Questions and Answers

## 1. What are some differences between interfaces and types in TypeScript?

**Answer:**  
Interface মূলত object-এর structure define করার জন্য ব্যবহৃত হয়। এটি extend করা যায় এবং একই নামের interface-গুলো merge করা সম্ভব। যেমন, দুইটা interface-কে একসাথে combine করে নতুন property add করা যায়। Type alias আরও general; এটি শুধু object নয়, primitive, union, tuple, বা কোনো combination টাইপও define করতে পারে। তবে type alias merge করা যায় না। এছাড়া interface-এ সাধারণত method declare করা সহজ হয়, type alias-এ method declare করতে হয় type এর ভিতরে।  

---

## 2. Explain the difference between any, unknown, and never types in TypeScript.

**Answer:**  
- **any** টাইপ মানে হলো যেকোনো value রাখতে পারা যায়। এটা সহজ, কিন্তু unsafe।  
- **unknown** টাইপও যেকোনো value রাখে, কিন্তু এখানে আগে TypeScript চেক করে কোন ধরনের value।  
- **never** টাইপ এমন জিনিসের জন্য যেটি কখনো value return করবে না, যেমন error throw করা বা infinite loop।  
