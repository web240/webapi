﻿Common 类库项目 定义联系人的数据类型 会被WebApi和ConsoleApp使用
WebApi 类库项目 表现为HttpController类型的WebAPI就定义在此，具有对Common项目的引用
WebHost ASP.NET Web应用 它实现了针对ASP.NET Web API的Web Host寄宿，具有针对WebApi的项目引用
SelfHost 控制台应用 旨在模拟ASP.NET Web API的Self Host寄宿模式，具有针对WebApi的项目引用
WebApp ASP.NET Web应用 代表联系人管理器的网页就在此，联系人管理功能通过Ajax的形式调用WebAPI来完成
ConsoleApp 控制台应用 用来模拟如何利用客户端代理来实现对Web API的远程调用，具有针对Common的项目引用