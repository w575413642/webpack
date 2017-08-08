Html Webpack Plugin:
<pre>
  Error: Child compilation failed:
  Module not found: Error: Can't resolve 'babel' in 'D:\phpStudy\WWW\webpack\web  Test'
  BREAKING CHANGE: It's no longer allowed to omit the '-loader' suffix when usin  g loaders.
                   You need to specify 'babel-loader' instead of 'babel',
                   see https://webpack.js.org/guides/migrating/#automatic-loader  -module-name-extension-removed:
  Error: Can't resolve 'babel' in 'D:\phpStudy\WWW\webpack\webTest'
  BREAKING CHANGE: It's no longer allowed to omit the '-loader' suffix when usin  g loaders.
                   You need to specify 'babel-loader' instead of 'babel',
                   see https://webpack.js.org/guides/migrating/#automatic-loader  -module-name-extension-removed
  
  - compiler.js:76 
    [webTest]/[html-webpack-plugin]/lib/compiler.js:76:16
  
  - Compiler.js:304 compile
    [webTest]/[webpack]/lib/Compiler.js:304:11
  
  - Compiler.js:520 applyPluginsAsync.err
    [webTest]/[webpack]/lib/Compiler.js:520:14
  
  - Tapable.js:202 next
    [webTest]/[tapable]/lib/Tapable.js:202:11
  
  - CachePlugin.js:62 Compiler.<anonymous>
    [webTest]/[webpack]/lib/CachePlugin.js:62:5
  
  - Tapable.js:206 Compiler.applyPluginsAsyncSeries
    [webTest]/[tapable]/lib/Tapable.js:206:13
  
  - Compiler.js:517 compilation.seal.err
    [webTest]/[webpack]/lib/Compiler.js:517:11
  
  - Tapable.js:195 Compilation.applyPluginsAsyncSeries
    [webTest]/[tapable]/lib/Tapable.js:195:46
  
  - Compilation.js:654 self.applyPluginsAsync.err
    [webTest]/[webpack]/lib/Compilation.js:654:19
  
  - Tapable.js:195 Compilation.applyPluginsAsyncSeries
    [webTest]/[tapable]/lib/Tapable.js:195:46
  
  - Compilation.js:645 self.applyPluginsAsync.err
    [webTest]/[webpack]/lib/Compilation.js:645:11
  
  - Tapable.js:195 Compilation.applyPluginsAsyncSeries
    [webTest]/[tapable]/lib/Tapable.js:195:46
  
  - Compilation.js:640 self.applyPluginsAsync.err
    [webTest]/[webpack]/lib/Compilation.js:640:10
  
  - Tapable.js:195 Compilation.applyPluginsAsyncSeries
    [webTest]/[tapable]/lib/Tapable.js:195:46
  
  - Compilation.js:636 sealPart2
    [webTest]/[webpack]/lib/Compilation.js:636:9
  
  - Tapable.js:195 Compilation.applyPluginsAsyncSeries
    [webTest]/[tapable]/lib/Tapable.js:195:46
  
  - Compilation.js:579 Compilation.seal
    [webTest]/[webpack]/lib/Compilation.js:579:8
  
  - Compiler.js:514 applyPluginsParallel.err
    [webTest]/[webpack]/lib/Compiler.js:514:17
  
  - Tapable.js:289 
    [webTest]/[tapable]/lib/Tapable.js:289:11
  
  - Compilation.js:481 _addModuleChain
    [webTest]/[webpack]/lib/Compilation.js:481:11
  
  - Compilation.js:452 processModuleDependencies.err
    [webTest]/[webpack]/lib/Compilation.js:452:13
  
  - next_tick.js:73 _combinedTickCallback
    internal/process/next_tick.js:73:7
  
  - next_tick.js:104 process._tickCallback
    internal/process/next_tick.js:104:9
  
</pre>