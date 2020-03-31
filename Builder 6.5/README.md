# 用 Builder 封装 Composite

- 动机

  - 简化创建复杂对象的客户代码
  - 对客户代码和 Composite 代码解耦合
  - 将一个复杂对象的构建与它的表示分离，使得同样的构造过程可以创建不同的表示

- 优点

  - 简化了构造 Composite 的客户代码
  - 减少了创建 Composite 的重复和易出错的本性
  - 在客户代码和 Composite 之间实现了松耦合
  - 允许对已封装的 Composite 或复杂对象创建不同的表示

- 缺点

  - 接口可能不会很清楚地表达其意图

- 做法

  - 前提

    - 已经拥有了 Compasite 的构造代码，并且希望使用 Builder 对这些代码进行封装

  - 1. 创建一个生成器

    - 生成器可以创建出一个单点 Composite

  - 2. 是生成器可以创建子类型

    - 编写多个方法使得用户可以方便地创建和布置子类型

  - 3. 生成器要有和 Composite 构造代码一样的功能

  - 4. 生成器代码要足够的简单

  - 5. 把 Composite 构造代码重构为使用新的生成器

    - 符合 Builder: Client 和 Builder: Director 关系