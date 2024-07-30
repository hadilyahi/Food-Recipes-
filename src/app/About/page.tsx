import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
      <h1 className="text-8xl font-itim p-20">About Us</h1>

      <div className="flex  gap-40">
      <div className="w-[900px] flex flex-col items-center justify-center">
          <Image src="/chefs.jpg" alt="Chefs" width={400} height={400} layout="responsive" />
        </div>
        <div className="w-[450px] h-[800px] shadow-custom rounded-[5px] text-center p-[20px]">

        <div className="w-[400px] text-center">
          <p className="font-arabicTypesetting text-4xl">
            من نحن؟ مرحبًا بكم في موقعنا، المصدر الأول للوصفات الشهية والمتنوعة
            من مختلف الفئات! نحن فريق من عشاق الطهي الذين يجمعهم شغف تقديم أطيب
            الوصفات بأسهل الطرق. نهدف إلى توفير تجربة طهي ممتعة ومثمرة للجميع،
            سواء كنت مبتدئًا أو طاهٍ محترف.
          </p>
          <p className="font-arabicTypesetting text-4xl mt-8">
            ما هي القيم والمبادئ التي نؤمن بها؟<br /> نؤمن بأن الطعام يجمع الناس ويخلق
            ذكريات لا تُنسى. لذا، نحن نلتزم بتقديم وصفات ذات جودة عالية وسهلة
            التحضير، مع التركيز على <br />
            البساطة: وصفات يمكن للجميع اتباعها بسهولة.
            التنوع: مجموعة واسعة من الوصفات من مختلف الثقافات والمطابخ. الجودة:
            استخدام مكونات طازجة وصحية لضمان أفضل النتائج. <br />الإبداع: تشجيع الطهاة
            على الابتكار وتقديم لمساتهم الخاصة. <br />نحن هنا لدعمك في رحلتك الطهوية
            وتقديم كل ما تحتاجه لتحضير وجبات لذيذة وسعيدة.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
