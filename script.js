// Language switching (English + Arabic).
(function () {
  var rtlLanguages = ["ar", "he", "fa", "ur"];
  var langSelect = document.getElementById("lang-select");

  var translations = {
    en: {
      nav_products: "Products",
      nav_support: "Support",
      nav_solutions: "Solutions",
      nav_developers: "Developers",
      nav_partners: "Partners",
      nav_foundry: "Foundry",
      hero_title: "Sustainability Through the Ages",
      hero_desc:
        "Explore Intel's journey through time, discovering how our commitment to innovation has shaped a more sustainable future for technology and our planet.",
      rise_title: "RISE Strategy",
      rise_desc:
        "Under its RISE (Responsible, Inclusive, Sustainable, Enabling) strategy, Intel sets ambitious 2030 goals, including driving industry-wide progress on climate action, water stewardship, and waste reduction.",
      commitment_title: "Commitment",
      commitment_desc:
        "In 2022, Intel pledged to achieve net-zero greenhouse gas emissions (Scope 1 and 2) by 2040. This commitment builds on decades of environmental initiatives and partnerships across the semiconductor industry.",
      water_title: "Water & Waste",
      water_desc:
        "Intel conserves billions of gallons of water annually and collaborates with local communities to restore watersheds. Intel also upcycles and recycles materials to reduce waste and advance a circular economy.",
      learn_more: "Learn More",
      card1_title: "Intel Founded",
      card1_desc:
        "Robert Noyce and Gordon Moore rename the newly formed company NM Electronics to Intel Corporation, laying the foundation for decades of technological innovation.",
      card2_title: "First Microprocessor",
      card2_desc:
        "Intel debuts the 4004, the world's first commercial microprocessor, igniting the microprocessor revolution and propelling the future of computing devices.",
      card3_title: "8086 Processor",
      card3_desc:
        "Launch of the 8086 processor, establishing the x86 architecture that drives countless PCs and servers in the modern era.",
      card4_title: "386 Processor",
      card4_desc:
        "Intel introduces the 386 processor with 32-bit architecture, ushering in a new era of performance and multitasking for personal computers.",
      card5_title: "Peak GHG Emissions",
      card5_desc:
        "This year marks Intel's highest annual greenhouse gas emissions for operations. Over subsequent years, Intel invests heavily in chemical abatement, renewable energy, and energy-efficient manufacturing to reverse this trend.",
      card6_title: "RISE Strategy",
      card6_desc:
        "Intel launches its RISE (Responsible, Inclusive, Sustainable, Enabling) strategy and 2030 goals, aiming to drive industry-wide progress on climate action, water stewardship, and waste reduction.",
      card7_title: "Net-Zero By 2040",
      card7_desc:
        "Intel announces its commitment to achieve net-zero greenhouse gas emissions (Scope 1 and 2) across its global operations by 2040, building on years of environmental initiatives.",
      card8_title: "Renewable Electricity",
      card8_desc:
        "The company achieves 99% renewable electricity usage worldwide, helping to drastically lower carbon emissions and driving progress toward Intel's long-term sustainability goals.",
      card9_title: "Sustainability Summit",
      card9_desc:
        "Intel hosts its first Sustainability Summit, uniting suppliers, government officials, and industry leaders to collaborate on next-generation sustainable semiconductor manufacturing.",
      scroll_hint: "Scroll to view timeline | Hover over cards to learn more!",
      footer_thanks: "Thanks for exploring Intel's sustainability timeline.",
      footer_link: "See our Latest News",
      form_title: "Subscribe to our Newsletter",
      form_label_name: "Full Name",
      form_label_email: "Email Address",
      form_label_company: "Company (Optional)",
      form_placeholder_name: "Your name",
      form_placeholder_email: "you@example.com",
      form_placeholder_company: "Company name",
      form_submit: "Submit",
      legal_notice:
        "Intel technologies may require enabled hardware, software or service activation. // No product or component can be absolutely secure. // Your costs and results may vary. // Performance varies by use, configuration, and other factors. Learn more at intel.com/performanceindex. // See our complete legal Notices and Disclaimers. // Intel is committed to respecting human rights and avoiding causing or contributing to adverse impacts on human rights. See Intel's Global Human Rights Principles. Intel's products and software are intended only to be used in applications that do not cause or contribute to adverse impacts on human rights."
    },
    ar: {
      nav_products: "المنتجات",
      nav_support: "الدعم",
      nav_solutions: "الحلول",
      nav_developers: "المطورون",
      nav_partners: "الشركاء",
      nav_foundry: "المسبك",
      hero_title: "الاستدامة عبر العصور",
      hero_desc:
        "استكشف رحلة إنتل عبر الزمن، واكتشف كيف شكّل التزامنا بالابتكار مستقبلًا أكثر استدامة للتكنولوجيا وكوكبنا.",
      rise_title: "استراتيجية RISE",
      rise_desc:
        "ضمن استراتيجية RISE (المسؤولة، الشاملة، المستدامة، الممكنة)، تحدد إنتل أهداف 2030 الطموحة، بما في ذلك دفع التقدم على مستوى القطاع في العمل المناخي وإدارة المياه وتقليل النفايات.",
      commitment_title: "الالتزام",
      commitment_desc:
        "في عام 2022، تعهّدت إنتل بتحقيق صافي انبعاثات صفرية (النطاقان 1 و2) بحلول 2040. يبني هذا الالتزام على عقود من المبادرات البيئية والشراكات عبر صناعة أشباه الموصلات.",
      water_title: "المياه والنفايات",
      water_desc:
        "تحافظ إنتل على مليارات الجالونات من المياه سنويًا وتتعاون مع المجتمعات المحلية لاستعادة الأحواض المائية. كما تعيد استخدام المواد وتدويرها لتقليل النفايات وتعزيز الاقتصاد الدائري.",
      learn_more: "اعرف المزيد",
      card1_title: "تأسيس إنتل",
      card1_desc:
        "أعاد روبرت نويس وغوردون مور تسمية الشركة التي تأسست حديثًا من NM Electronics إلى Intel Corporation، واضعين الأساس لعقود من الابتكار التقني.",
      card2_title: "أول معالج دقيق",
      card2_desc:
        "كشفت إنتل عن المعالج 4004، أول معالج دقيق تجاري في العالم، ما أشعل ثورة المعالجات الدقيقة ودفع مستقبل أجهزة الحوسبة.",
      card3_title: "معالج 8086",
      card3_desc:
        "إطلاق معالج 8086، الذي رسّخ معمارية x86 التي تشغّل عددًا لا يحصى من أجهزة الحاسوب والخوادم الحديثة.",
      card4_title: "معالج 386",
      card4_desc:
        "قدّمت إنتل معالج 386 بمعمارية 32-بت، مطلقة عصرًا جديدًا من الأداء وتعدد المهام لأجهزة الحاسوب الشخصية.",
      card5_title: "ذروة انبعاثات غازات الدفيئة",
      card5_desc:
        "يمثل هذا العام أعلى انبعاثات سنوية لغازات الدفيئة من عمليات إنتل. وفي السنوات اللاحقة استثمرت إنتل بكثافة في أنظمة معالجة المواد الكيميائية والطاقة المتجددة والتصنيع الموفّر للطاقة لعكس هذا الاتجاه.",
      card6_title: "استراتيجية RISE",
      card6_desc:
        "أطلقت إنتل استراتيجية RISE وأهداف 2030، سعيًا إلى دفع التقدم على مستوى الصناعة في العمل المناخي وإدارة المياه وتقليل النفايات.",
      card7_title: "صافي صفر بحلول 2040",
      card7_desc:
        "أعلنت إنتل التزامها بتحقيق صافي انبعاثات غازات الدفيئة (النطاقان 1 و2) عبر عملياتها العالمية بحلول 2040، بناءً على سنوات من المبادرات البيئية.",
      card8_title: "كهرباء متجددة",
      card8_desc:
        "حققت الشركة استخدامًا بنسبة 99% للكهرباء المتجددة عالميًا، ما ساعد على خفض الانبعاثات الكربونية ودفع التقدم نحو أهداف الاستدامة طويلة الأجل لإنتل.",
      card9_title: "قمة الاستدامة",
      card9_desc:
        "استضافت إنتل أول قمة للاستدامة، جامعةً الموردين والمسؤولين الحكوميين وقادة الصناعة للتعاون في تصنيع أشباه موصلات مستدام من الجيل التالي.",
      scroll_hint: "مرر لعرض الخط الزمني | مرر المؤشر فوق البطاقات لمعرفة المزيد!",
      footer_thanks: "شكرًا لاستكشافك الخط الزمني لاستدامة إنتل.",
      footer_link: "شاهد أحدث الأخبار",
      form_title: "اشترك في نشرتنا الإخبارية",
      form_label_name: "الاسم الكامل",
      form_label_email: "البريد الإلكتروني",
      form_label_company: "الشركة (اختياري)",
      form_placeholder_name: "اسمك",
      form_placeholder_email: "بريدك@example.com",
      form_placeholder_company: "اسم الشركة",
      form_submit: "إرسال",
      legal_notice:
        "قد تتطلب تقنيات إنتل تمكين الأجهزة أو البرامج أو تفعيل الخدمة. // لا يمكن لأي منتج أو مكون أن يكون آمنًا بشكل مطلق. // قد تختلف التكاليف والنتائج. // يختلف الأداء حسب الاستخدام والإعدادات وعوامل أخرى. اعرف المزيد على intel.com/performanceindex. // راجع الإشعارات والتنبيهات القانونية الكاملة. // تلتزم إنتل باحترام حقوق الإنسان وتجنب التسبب أو المساهمة في آثار سلبية على حقوق الإنسان. راجع مبادئ إنتل العالمية لحقوق الإنسان. // تُستخدم منتجات إنتل وبرمجياتها فقط في التطبيقات التي لا تسبب أو تسهم في آثار سلبية على حقوق الإنسان."
    }
  };

  function applyTranslations(lang) {
    var textItems = document.querySelectorAll("[data-i18n]");
    textItems.forEach(function (item) {
      var key = item.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        item.textContent = translations[lang][key];
      }
    });

    var placeholders = document.querySelectorAll("[data-i18n-placeholder]");
    placeholders.forEach(function (item) {
      var key = item.getAttribute("data-i18n-placeholder");
      if (translations[lang] && translations[lang][key]) {
        item.setAttribute("placeholder", translations[lang][key]);
      }
    });
  }

  function setLanguage(lang) {
    var chosenLang = translations[lang] ? lang : "en";
    document.documentElement.lang = chosenLang;
    document.documentElement.dir =
      rtlLanguages.indexOf(chosenLang) !== -1 ? "rtl" : "ltr";
    applyTranslations(chosenLang);
  }

  var savedLang = localStorage.getItem("siteLang") || "en";

  if (langSelect) {
    langSelect.value = savedLang;
    langSelect.addEventListener("change", function () {
      var selectedLang = langSelect.value;
      localStorage.setItem("siteLang", selectedLang);
      setLanguage(selectedLang);
    });
  }

  setLanguage(savedLang);
})();

// Show/hide the subscribe form when the button or X is clicked.
(function () {
  var openButton = document.getElementById("subscribe-button");
  var closeButton = document.getElementById("subscribe-close");
  var formSection = document.getElementById("subscribe-form");

  if (openButton && closeButton && formSection) {
    formSection.classList.add("is-hidden");
    openButton.addEventListener("click", function (event) {
      event.preventDefault();
      formSection.classList.remove("d-none");
      // Let the browser apply styles before fading in.
      window.setTimeout(function () {
        formSection.classList.remove("is-hidden");
      }, 10);
      formSection.scrollIntoView({ behavior: "smooth" });
    });

    closeButton.addEventListener("click", function () {
      formSection.classList.add("is-hidden");
      window.setTimeout(function () {
        formSection.classList.add("d-none");
      }, 300);
    });
  }
})();
