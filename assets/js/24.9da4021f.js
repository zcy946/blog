(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{338:function(a,s,t){"use strict";t.r(s);var e=t(8),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),s("p",[a._v("本文由ChatGPT生成，请自行甄别。")])]),a._v(" "),s("h3",{attrs:{id:"步骤-1-安装依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤-1-安装依赖"}},[a._v("#")]),a._v(" 步骤 1: 安装依赖")]),a._v(" "),s("p",[a._v("确保你安装了以下依赖：")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("CMake")]),a._v(": 用于构建。")]),a._v(" "),s("li",[s("strong",[a._v("Protobuf")]),a._v(": gRPC 使用 Protocol Buffers 作为默认序列化格式。")])]),a._v(" "),s("p",[a._v("可以从其官方网站下载并安装它们，或者使用包管理工具（如 vcpkg 或 conan）进行安装。")]),a._v(" "),s("h3",{attrs:{id:"步骤-2-获取-grpc-源代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤-2-获取-grpc-源代码"}},[a._v("#")]),a._v(" 步骤 2: 获取 gRPC 源代码")]),a._v(" "),s("p",[a._v("你可以通过 Git 克隆 gRPC 的源代码：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone --recurse-submodules "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v(" v1.51.0 https://github.com/grpc/grpc\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" grpc\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("确保使用 "),s("code",[a._v("--recurse-submodules")]),a._v(" 选项来克隆所有子模块。")]),a._v(" "),s("h3",{attrs:{id:"步骤-3-使用-cmake-构建-grpc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤-3-使用-cmake-构建-grpc"}},[a._v("#")]),a._v(" 步骤 3: 使用 CMake 构建 gRPC")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("创建构建目录：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" build\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" build\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("运行 CMake 配置：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("cmake "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-G")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"MinGW Makefiles"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-DgRPC_INSTALL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ON "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-DgRPC_BUILD_TESTS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("OFF "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Dprotobuf_BUILD_TESTS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("OFF\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("构建 gRPC：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mingw32-make\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("安装 gRPC：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mingw32-make "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])]),a._v(" "),s("h3",{attrs:{id:"步骤-4-设置环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤-4-设置环境变量"}},[a._v("#")]),a._v(" 步骤 4: 设置环境变量")]),a._v(" "),s("p",[a._v("确保将 gRPC 和 Protobuf 的 "),s("code",[a._v("include")]),a._v(" 和 "),s("code",[a._v("lib")]),a._v(" 目录添加到你的编译器路径中，以便在你的项目中引用它们。")]),a._v(" "),s("h3",{attrs:{id:"步骤-5-验证安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤-5-验证安装"}},[a._v("#")]),a._v(" 步骤 5: 验证安装")]),a._v(" "),s("p",[a._v("创建一个简单的 gRPC 示例项目，确保可以编译并运行。")])])}),[],!1,null,null,null);s.default=r.exports}}]);