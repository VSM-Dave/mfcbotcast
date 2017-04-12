const podcast = (sort, datetime) => {

    

  return Promise.resolve(
    { type: 'text', content: `sort: ${sort}, datetime: ${datetime}` }
  )
}

module.exports = podcast