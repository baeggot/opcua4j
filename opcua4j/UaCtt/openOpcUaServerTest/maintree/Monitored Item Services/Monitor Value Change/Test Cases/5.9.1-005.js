/*  Test 5.9.1 Test 5; prepared by Nathan Pocock; nathan.pocock@opcfoundation.org
    Description:
        CreateMonitoredItems uses the following parameter values:
            MODE   = MonitoringMode.Disabled;
            FILTER = null;
            QUEUE  = 0;
            TIMES  = TimestampsToReturn.Server;
        Expected to succeed.

        subscription is created and deleted in initialize and cleanup scripts

    Revision History
        16-Sep-2009 NP: Initial version.
        16-Nov-2009 NP: REVIEWED.
        18-Nov-2009 DP: Moved global consts to function scope.
*/

function createMonitoredItems591005()
{
    const       MODE   = MonitoringMode.Disabled;
    const       FILTER = null;
    const       QUEUE  = 0;
    const       TIMES  = TimestampsToReturn.Server;
    
    basicCreateMonitoredItemsTest( MODE, FILTER, QUEUE, TIMES );
}

safelyInvoke( createMonitoredItems591005 );