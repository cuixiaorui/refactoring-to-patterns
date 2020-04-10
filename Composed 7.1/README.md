# 组合方法

- 实现

  - 把方法的逻辑转换成几个同一细节层面上的、能够说明意图的步骤

- 难点

  - 如何决定提取出来的方法要包含哪些代码
  - 当小函数过多时，需要考虑提炼成类

- 优点

  - 清晰地描述了一个方法所实现的功能以及如何实现
  - 把方法分解成命名良好的、处在细节的同一层面上的行为模块，以此来简化方法

- 缺点

  - 可能会产生过多的小方法
  - 可能会使调试变得困难，因为程序的逻辑分散在许多小方法中

- 做法

  - Composed Method 都很小

    - 很少超过 10 行，一般都在 5 行左右

  - 删除重复代码和死代码

    - 除去明显的和微妙的代码重复
    - 除去没有被使用的代码，减少方法的代码量

  - 表达意图

    - 清晰地命名程序中的变量、方法和参数

  - 简化

    - 转换代码，使它尽可能简单

  - 使用细节的同一层面