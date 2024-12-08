(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{335:function(a,s,t){"use strict";t.r(s);var e=t(8),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),s("p",[a._v("本文由ChatGPT生成，请自行甄别。")])]),a._v(" "),s("p",[a._v("在 CMake 项目中，决定使用 "),s("code",[a._v("find_package()")]),a._v(" 查找库还是手动指定库的路径，取决于库的支持情况、CMake 的功能以及项目的需求。以下是一些具体的场景分析和判断依据，帮助你决定何时使用 "),s("code",[a._v("find_package()")]),a._v(" 查找库，何时手动指定库路径。")]),a._v(" "),s("h3",{attrs:{id:"_1-使用-find-package-的场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用-find-package-的场景"}},[a._v("#")]),a._v(" 1. "),s("strong",[a._v("使用 "),s("code",[a._v("find_package()")]),a._v(" 的场景：")])]),a._v(" "),s("h4",{attrs:{id:"_1-1-库支持-cmake-配置或-cmake-自带查找模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-库支持-cmake-配置或-cmake-自带查找模块"}},[a._v("#")]),a._v(" 1.1 库支持 CMake 配置或 CMake 自带查找模块")]),a._v(" "),s("ul",[s("li",[s("p",[s("strong",[a._v("CMake 配置文件（Config Mode）")]),a._v("：")]),a._v(" "),s("ul",[s("li",[a._v("如果你使用的库有官方提供的 "),s("strong",[a._v("CMake 配置文件")]),a._v("，比如 "),s("code",[a._v("<LibraryName>Config.cmake")]),a._v(" 或 "),s("code",[a._v("<LibraryName>-config.cmake")]),a._v("，你可以使用 "),s("code",[a._v("find_package()")]),a._v(" 直接查找它。")]),a._v(" "),s("li",[a._v("库提供的 CMake 配置文件通常包含了关于该库的头文件路径、库文件路径、编译选项等信息，方便集成。")]),a._v(" "),s("li",[a._v("典型库："),s("strong",[a._v("Boost")]),a._v("（配置模式）、"),s("strong",[a._v("Qt")]),a._v("、"),s("strong",[a._v("gRPC")]),a._v("、"),s("strong",[a._v("Protobuf")]),a._v("、"),s("strong",[a._v("OpenCV")]),a._v("、"),s("strong",[a._v("Eigen")]),a._v(" 等等。")])]),a._v(" "),s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language-cmake line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("find_package")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Protobuf REQUIRED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("find_package")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("OpenCV REQUIRED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("CMake 自带查找模块（Module Mode）")]),a._v("：")]),a._v(" "),s("ul",[s("li",[a._v("对于一些常用的库，CMake 自带了查找模块文件（如 "),s("code",[a._v("FindBoost.cmake")]),a._v("、"),s("code",[a._v("FindZLIB.cmake")]),a._v(" 等）。这些模块会帮助你自动查找库的头文件和库文件，甚至在库没有提供 CMake 配置文件时也能使用。")]),a._v(" "),s("li",[a._v("在这种情况下，CMake 自带的查找模块已经定义好如何查找这些库，只需调用 "),s("code",[a._v("find_package()")]),a._v(" 即可。")])]),a._v(" "),s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language-cmake line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("find_package")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ZLIB REQUIRED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("find_package")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Boost REQUIRED COMPONENTS filesystem system"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])])])]),a._v(" "),s("h4",{attrs:{id:"_1-2-使用跨平台或依赖管理工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-使用跨平台或依赖管理工具"}},[a._v("#")]),a._v(" 1.2 使用跨平台或依赖管理工具")]),a._v(" "),s("ul",[s("li",[s("p",[s("strong",[a._v("包管理器集成")]),a._v("：")]),a._v(" "),s("ul",[s("li",[a._v("如果你使用跨平台包管理工具（如 "),s("code",[a._v("vcpkg")]),a._v("、"),s("code",[a._v("Conan")]),a._v("、"),s("code",[a._v("Hunter")]),a._v(" 等），这些工具通常会通过 CMake 配置库来自动查找和集成依赖。你只需调用 "),s("code",[a._v("find_package()")]),a._v(" 即可找到这些库，而无需手动指定路径。")]),a._v(" "),s("li",[a._v("例如，使用 "),s("code",[a._v("vcpkg")]),a._v(" 时，你可以通过 "),s("code",[a._v("find_package()")]),a._v(" 查找到并链接库，因为 "),s("code",[a._v("vcpkg")]),a._v(" 已将这些库的路径配置到 CMake 中。")])]),a._v(" "),s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language-cmake line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("find_package")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("fmt CONFIG REQUIRED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("find_package")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("spdlog CONFIG REQUIRED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])])])]),a._v(" "),s("h4",{attrs:{id:"_1-3-动态或复杂依赖的项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-动态或复杂依赖的项目"}},[a._v("#")]),a._v(" 1.3 动态或复杂依赖的项目")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("自动处理依赖关系")]),a._v("：\n"),s("ul",[s("li",[a._v("使用 "),s("code",[a._v("find_package()")]),a._v(" 查找库时，CMake 能自动处理库之间的依赖关系。例如，链接 "),s("code",[a._v("Boost::filesystem")]),a._v(" 时，CMake 会自动链接 "),s("code",[a._v("Boost::system")]),a._v("，因为它是依赖库的一部分。")]),a._v(" "),s("li",[a._v("这不仅减少了手动管理依赖的复杂度，还确保了库之间的依赖关系在不同平台和构建类型下被正确处理。")])])])]),a._v(" "),s("h4",{attrs:{id:"_1-4-库安装路径标准化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-库安装路径标准化"}},[a._v("#")]),a._v(" 1.4 库安装路径标准化")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("标准化安装库")]),a._v("：\n"),s("ul",[s("li",[a._v("当库按照标准的方式进行安装（例如使用 "),s("code",[a._v("cmake --install")]),a._v(" 安装到系统路径或特定目录），通常会生成相应的 CMake 配置文件供 "),s("code",[a._v("find_package()")]),a._v(" 使用。在这种情况下，"),s("code",[a._v("find_package()")]),a._v(" 是查找库的最佳方式，因为它能自动找到库的安装路径，并处理所有的编译和链接信息。")])])])]),a._v(" "),s("hr"),a._v(" "),s("h3",{attrs:{id:"_2-手动指定库路径的场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-手动指定库路径的场景"}},[a._v("#")]),a._v(" 2. "),s("strong",[a._v("手动指定库路径的场景：")])]),a._v(" "),s("h4",{attrs:{id:"_2-1-库没有-cmake-支持或-cmake-查找模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-库没有-cmake-支持或-cmake-查找模块"}},[a._v("#")]),a._v(" 2.1 库没有 CMake 支持或 CMake 查找模块")]),a._v(" "),s("ul",[s("li",[s("p",[s("strong",[a._v("没有 CMake 配置文件")]),a._v("：")]),a._v(" "),s("ul",[s("li",[a._v("如果库没有提供 CMake 配置文件，也没有 CMake 自带的查找模块，那么你可能需要手动指定头文件和库文件的路径。这种情况下，CMake 无法通过 "),s("code",[a._v("find_package()")]),a._v(" 自动找到库的路径。")]),a._v(" "),s("li",[a._v("例如，一些比较小众或定制的库可能没有官方提供的 CMake 支持。")])]),a._v(" "),s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language-cmake line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 手动指定头文件和库文件路径")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("include_directories")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("/path/to/custom_lib/include"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("link_directories")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("/path/to/custom_lib/lib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("target_link_libraries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("${")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("PROJECT_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("PRIVATE")]),a._v(" custom_lib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])])])]),a._v(" "),s("h4",{attrs:{id:"_2-2-手动编译的库-未安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-手动编译的库-未安装"}},[a._v("#")]),a._v(" 2.2 手动编译的库（未安装）")]),a._v(" "),s("ul",[s("li",[s("p",[s("strong",[a._v("未安装的库")]),a._v("：")]),a._v(" "),s("ul",[s("li",[a._v("如果你在某个目录下手动编译了一个库，而没有执行安装步骤，库的 CMake 配置文件（"),s("code",[a._v("<LibraryName>Config.cmake")]),a._v("）不会被正确生成或安装。")]),a._v(" "),s("li",[a._v("在这种情况下，你需要手动指定库的头文件和库文件路径。")])]),a._v(" "),s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language-cmake line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("target_include_directories")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("${")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("PROJECT_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("PRIVATE")]),a._v(" /path/to/yourlib/include"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("target_link_libraries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("${")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("PROJECT_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("PRIVATE")]),a._v(" /path/to/yourlib/libyourlib.a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])])])]),a._v(" "),s("h4",{attrs:{id:"_2-3-不同平台下的手动库路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-不同平台下的手动库路径"}},[a._v("#")]),a._v(" 2.3 不同平台下的手动库路径")]),a._v(" "),s("ul",[s("li",[s("p",[s("strong",[a._v("跨平台或自定义库路径")]),a._v("：")]),a._v(" "),s("ul",[s("li",[a._v("如果库在不同的平台上安装到了不同的路径，或者库文件的名称和格式不统一（比如 "),s("code",[a._v(".lib")]),a._v(" 和 "),s("code",[a._v(".dll")]),a._v(" 在 Windows 上，"),s("code",[a._v(".so")]),a._v(" 在 Linux 上），你可能需要手动为每个平台指定不同的路径和库文件。")])]),a._v(" "),s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language-cmake line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("WIN32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("target_link_libraries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("${")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("PROJECT_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("PRIVATE")]),a._v(" C:/path/to/libyourlib.lib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("elseif")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("UNIX")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("target_link_libraries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("${")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("PROJECT_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("PRIVATE")]),a._v(" /path/to/libyourlib.so"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("endif")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])])])]),a._v(" "),s("h4",{attrs:{id:"_2-4-临时或本地开发版本的库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-临时或本地开发版本的库"}},[a._v("#")]),a._v(" 2.4 临时或本地开发版本的库")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("开发中版本的库")]),a._v("：\n"),s("ul",[s("li",[a._v("在某些情况下，你可能正在开发或测试库的特定版本，而该版本尚未安装到系统路径或包管理器路径中。这时你可以手动指定库的位置，而不是依赖 "),s("code",[a._v("find_package()")]),a._v("。")])])])]),a._v(" "),s("hr"),a._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结：")]),a._v(" "),s("ul",[s("li",[s("p",[s("strong",[a._v("使用 "),s("code",[a._v("find_package()")]),a._v("：")])]),a._v(" "),s("ul",[s("li",[a._v("库提供了 "),s("strong",[a._v("CMake 配置文件")]),a._v("（Config Mode）或 CMake 自带了 "),s("strong",[a._v("查找模块")]),a._v("（Module Mode）。")]),a._v(" "),s("li",[a._v("库是通过 "),s("strong",[a._v("包管理器")]),a._v(" 安装的，或者已经在系统中安装。")]),a._v(" "),s("li",[a._v("需要跨平台或处理复杂依赖关系时。")])]),a._v(" "),s("p",[a._v("这是推荐的方式，能够减少手动配置库的复杂性，并提升项目的移植性。")])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("手动指定路径：")])]),a._v(" "),s("ul",[s("li",[a._v("库没有提供 CMake 支持或没有 CMake 查找模块。")]),a._v(" "),s("li",[a._v("库未安装或在特定路径下手动编译。")]),a._v(" "),s("li",[a._v("开发或测试阶段使用库的特定版本，且该版本没有标准化安装路径。")])])])]),a._v(" "),s("p",[a._v("CMake 提供了丰富的工具来查找和管理库，尽可能利用 "),s("code",[a._v("find_package()")]),a._v(" 和 CMake 目标来简化项目配置，并减少跨平台问题。如果库无法通过 "),s("code",[a._v("find_package()")]),a._v(" 找到，则可以手动指定路径作为备选方案。")])])}),[],!1,null,null,null);s.default=n.exports}}]);