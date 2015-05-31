Tests for the Booster package

    testAsyncMulti 'Basic csv - happy path', [
      (test, expect) ->
        csv = 'this, is, a, csv, thingy'
        parsed = Baby.parse csv
        test.equal parsed.data, [ [ 'this', ' is', ' a', ' csv', ' thingy' ] ]
    ]
