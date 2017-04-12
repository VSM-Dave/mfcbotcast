const podcast = (sort, datetime) => {

    if (sort) {
        ep_sort = sort.raw
    }
    if (datetime) {
        ep_datetime = datetime.raw
    }

  return Promise.resolve(
    { type: 'text', content: `sort: ${ep_sort}, datetime: ${ep_datetime}` }
  )
}

module.exports = podcast