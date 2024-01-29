TypeScript Typed Validator zod Demo
===========================

据说在type层面有点慢，但通常使用应该没什么问题。生态比较好。

api还比较简单，报错也可以，但是不能直接生成json schema，需要用插件

```
npm install
npm run demo
```

Note:

`esModuleInterop` is recommended to set to `true`,
since we can have consistent importing syntax with babel,
always use:

```
import some from 'some'
```

