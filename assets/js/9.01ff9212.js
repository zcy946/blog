(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{323:function(s,t,a){"use strict";a.r(t);var n=a(8),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("本文由ChatGPT生成，请自行甄别。")])]),s._v(" "),t("p",[s._v("在 C++ 中，**省略拷贝（Copy Elision）"),t("strong",[s._v("和")]),s._v("返回值优化（Return Value Optimization，RVO）**是两个编译器优化技术，它们都旨在减少不必要的对象拷贝，从而提高程序的性能。下面我将通过实例详细解释这两个技术及其原理。")]),s._v(" "),t("h3",{attrs:{id:"一、拷贝省略-copy-elision"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、拷贝省略-copy-elision"}},[s._v("#")]),s._v(" 一、拷贝省略（Copy Elision）")]),s._v(" "),t("p",[s._v("拷贝省略是指编译器在某些情况下自动省略对象的拷贝构造或移动构造，以减少不必要的性能开销。拷贝省略并不是语言标准强制要求的，它通常是通过编译器的优化来实现的。")]),s._v(" "),t("h4",{attrs:{id:"示例1-返回局部变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例1-返回局部变量"}},[s._v("#")]),s._v(" 示例1：返回局部变量")]),s._v(" "),t("p",[s._v("假设我们有一个函数返回一个局部变量对象：")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("<iostream>")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyClass")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("MyClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("cout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Constructor\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("MyClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" MyClass"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("cout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Copy Constructor\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("MyClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("MyClass"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("noexcept")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("cout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Move Constructor\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nMyClass "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createMyClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    MyClass obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    MyClass obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createMyClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h4",{attrs:{id:"解释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解释"}},[s._v("#")]),s._v(" 解释：")]),s._v(" "),t("p",[s._v("在上面的代码中，"),t("code",[s._v("createMyClass()")]),s._v(" 返回了一个局部对象 "),t("code",[s._v("obj")]),s._v("。根据 C++ 的标准，在这种情况下编译器可以通过拷贝省略将 "),t("code",[s._v("obj")]),s._v(" 直接构造到 "),t("code",[s._v("main()")]),s._v(" 中的 "),t("code",[s._v("obj")]),s._v(" 变量，而不需要调用拷贝构造函数或移动构造函数。这样，编译器可以省去创建临时对象和进行拷贝或移动操作的开销。")]),s._v(" "),t("h4",{attrs:{id:"编译器优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译器优化"}},[s._v("#")]),s._v(" 编译器优化：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("拷贝省略（Copy Elision）")]),s._v("：在返回 "),t("code",[s._v("obj")]),s._v(" 时，编译器直接将 "),t("code",[s._v("obj")]),s._v(" 的值拷贝或移动到返回的地方，而不会额外调用拷贝构造函数或移动构造函数。")]),s._v(" "),t("li",[s._v("在此情况下，我们并不看到 "),t("code",[s._v("Copy Constructor")]),s._v(" 或 "),t("code",[s._v("Move Constructor")]),s._v(" 的输出，因为编译器已经自动省略了这些操作。")])]),s._v(" "),t("h4",{attrs:{id:"现代编译器行为"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#现代编译器行为"}},[s._v("#")]),s._v(" 现代编译器行为：")]),s._v(" "),t("p",[s._v("现代 C++ 编译器，如 GCC、Clang 和 MSVC，通常会进行拷贝省略，但这并不是在所有情况下都保证的。具体是否省略拷贝取决于编译器实现和优化级别。")]),s._v(" "),t("h3",{attrs:{id:"二、返回值优化-rvo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、返回值优化-rvo"}},[s._v("#")]),s._v(" 二、返回值优化（RVO）")]),s._v(" "),t("p",[s._v("返回值优化（Return Value Optimization，RVO）是指编译器优化返回值的拷贝操作。与拷贝省略不同，RVO 特别针对函数返回局部对象时，优化对象的构造过程。")]),s._v(" "),t("h4",{attrs:{id:"示例2-返回局部变量-rvo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例2-返回局部变量-rvo"}},[s._v("#")]),s._v(" 示例2：返回局部变量（RVO）")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("<iostream>")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyClass")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("MyClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("cout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Constructor\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("MyClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" MyClass"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("cout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Copy Constructor\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("MyClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("MyClass"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("noexcept")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("cout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Move Constructor\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nMyClass "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createMyClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    MyClass obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// RVO 可能会应用")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    MyClass obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createMyClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h4",{attrs:{id:"解释-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解释-2"}},[s._v("#")]),s._v(" 解释：")]),s._v(" "),t("p",[s._v("在上面的代码中，"),t("code",[s._v("createMyClass()")]),s._v(" 返回了一个局部变量 "),t("code",[s._v("obj")]),s._v("。如果编译器支持 RVO，它可能会直接在 "),t("code",[s._v("main()")]),s._v(" 函数中的 "),t("code",[s._v("obj")]),s._v(" 上构造 "),t("code",[s._v("obj")]),s._v("，而不会创建一个临时对象并执行拷贝或移动构造。")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("RVO 优化")]),s._v("：编译器会避免创建一个临时对象并进行拷贝或移动构造，直接在 "),t("code",[s._v("main()")]),s._v(" 中构造返回值。")])]),s._v(" "),t("h4",{attrs:{id:"编译器优化-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译器优化-2"}},[s._v("#")]),s._v(" 编译器优化：")]),s._v(" "),t("p",[s._v("RVO 是针对函数返回的局部对象的优化。它在返回时直接在目标变量上构造对象，避免了拷贝和移动构造的额外开销。")]),s._v(" "),t("h3",{attrs:{id:"三、命名返回值优化-nrvo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、命名返回值优化-nrvo"}},[s._v("#")]),s._v(" 三、命名返回值优化（NRVO）")]),s._v(" "),t("p",[s._v("命名返回值优化（Named Return Value Optimization，NRVO）是 RVO 的一个变种，适用于函数内命名的局部变量的返回。")]),s._v(" "),t("h4",{attrs:{id:"示例3-命名返回值优化-nrvo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例3-命名返回值优化-nrvo"}},[s._v("#")]),s._v(" 示例3：命名返回值优化（NRVO）")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("<iostream>")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyClass")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("MyClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("cout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Constructor\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("MyClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" MyClass"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("cout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Copy Constructor\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("MyClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("MyClass"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("noexcept")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("cout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Move Constructor\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nMyClass "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createMyClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    MyClass obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Do some work with obj")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// NRVO 可能会应用")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    MyClass obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createMyClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("h4",{attrs:{id:"解释-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解释-3"}},[s._v("#")]),s._v(" 解释：")]),s._v(" "),t("p",[s._v("在这个例子中，"),t("code",[s._v("obj")]),s._v(" 是一个命名的局部变量。当函数 "),t("code",[s._v("createMyClass()")]),s._v(" 返回 "),t("code",[s._v("obj")]),s._v(" 时，编译器有可能使用 NRVO 来避免额外的拷贝或移动构造。")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("NRVO 优化")]),s._v("：编译器直接将 "),t("code",[s._v("obj")]),s._v(" 构造到返回值的目标位置，而不是先创建一个临时对象再进行拷贝或移动。")])]),s._v(" "),t("h3",{attrs:{id:"四、c-17-规范对拷贝省略的要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、c-17-规范对拷贝省略的要求"}},[s._v("#")]),s._v(" 四、C++17 规范对拷贝省略的要求")]),s._v(" "),t("p",[s._v("C++17 标准对拷贝省略做了更明确的规定，在某些情况下，编译器必须执行拷贝省略。")]),s._v(" "),t("h4",{attrs:{id:"c-17-规定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-17-规定"}},[s._v("#")]),s._v(" C++17 规定：")]),s._v(" "),t("ul",[t("li",[s._v("当返回值是命名的局部变量时，编译器应该使用 NRVO。")]),s._v(" "),t("li",[s._v("如果符合条件，编译器应该应用 RVO 和 NRVO 优化。")])]),s._v(" "),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结：")]),s._v(" "),t("ol",[t("li",[t("p",[t("strong",[s._v("拷贝省略（Copy Elision）")]),s._v("：是编译器优化技术，自动省略不必要的对象拷贝。例如，返回局部变量时，编译器可以避免临时对象的创建，直接将值传递给目标对象。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("返回值优化（RVO）")]),s._v("：是针对函数返回局部变量的特殊优化，编译器可以直接在返回值位置构造对象，避免额外的拷贝或移动。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("命名返回值优化（NRVO）")]),s._v("：是对命名的局部变量进行的优化，避免不必要的拷贝或移动构造。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("C++17标准")]),s._v("明确要求编译器在满足条件的情况下应用这些优化。")])])]),s._v(" "),t("p",[s._v("通过这些优化，程序性能可以得到显著提升，尤其是在对象较为复杂或大量创建和销毁的场景中。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("在C++17之前，"),t("strong",[s._v("GCC 和 Clang")]),s._v(" 提供了 "),t("code",[s._v("-fno-elide-constructors")]),s._v(" 选项来禁用拷贝省略和 RVO。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);