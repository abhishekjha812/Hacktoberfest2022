class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        res=[[]]
        for i in nums:
            for j in range(len(res)):
                res.append(res[j]+[i])
        return res
        return res
