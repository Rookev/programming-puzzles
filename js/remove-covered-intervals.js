/**
 * Given a list of intervals, remove all intervals that are covered by another interval in the list.
 * 
 * Interval [a,b) is covered by interval [c,d) if and only if c <= a and b <= d.
 * 
 * After doing so, return the number of remaining intervals.
 * 
 * @param {*} aIntervals 
 */
function removeCoveredIntervals(aIntervals) {
    var nCoveredIntervals = 0;
    for (var i = 0; i < aIntervals.length; i++) {
        var aCurrentInterval = aIntervals[i];

        for (var j = 0; j < aIntervals.length; j++) {
            if (i === j) {
                continue;
            }

            if (isIntervalCovered(aCurrentInterval, aIntervals[j])) {
                nCoveredIntervals++;
                // Important break, because multiple coverage leads always to 1 removal (and not to multiple removals)
                break;
            }

        }
    }

    return aIntervals.length - nCoveredIntervals;
}

function isIntervalCovered(aInterval, aCoveredByInterval) {
    return ((aInterval[0] >= aCoveredByInterval[0]) && (aInterval[1] <= aCoveredByInterval[1]));
}

module.exports = {
    removeCoveredIntervals: removeCoveredIntervals
};