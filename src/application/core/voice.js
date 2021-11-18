const information = [`Application run in ${NODE_ENV} mode!`]
try {
  const buildDate = new Date(BUILD_DATE)
  information.push(
    `${buildDate.toLocaleDateString()}, ${buildDate.toLocaleTimeString()}`
  )
} catch (e) {}
console.log('%c%s', 'color: #78F27B;', information.join('\n'))
