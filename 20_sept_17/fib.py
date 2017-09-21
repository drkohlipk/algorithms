def fib(n):
    memoized = {}

    def rec_helper(n):
        if n in (0, 1):
            return 1
        if n in memoized:
            return memoized[n]
        ans = rec_helper(n - 1) + rec_helper(n - 2)
        memoized[n] = ans
        return ans