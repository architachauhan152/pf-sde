import React from "react";
import data from "../1-input.json";

const BalanceSheet = () => {
  function D(y, m) {
    let currentdate = new Date(`${y}-${m}-01T00:00:00.000Z`).toString();
    return currentdate;
  }
  let inpData = {
    revenue: [
      {
        janRev: 0,
        janDate: D("2020", "01"),
      },
      {
        febRev: 0,
        febDate: D("2020", "02"),
      },
      {
        marRev: 0,
        marDate: D("2020", "03"),
      },
      {
        aprRev: 0,
        aprDate: D("2020", "04"),
      },
      {
        mayRev: 0,
        mayDate: D("2020", "05"),
      },
      {
        junRev: 0,
        junDate: D("2020", "06"),
      },
      {
        julRev: 0,
        julDate: D("2020", "07"),
      },
      {
        augRev: 0,
        augDate: D("2020", "08"),
      },
      {
        septRev: 0,
        septDate: D("2020", "09"),
      },
      {
        octRev: 0,
        octDate: D("2020", "10"),
      },
      {
        novRev: 0,
        novDate: D("2020", "11"),
      },
      {
        decRev: 0,
        decDate: D("2020", "12"),
      },
    ],

    expense: [
      {
        janExp: 0,
        janDate: D("2020", "01"),
      },
      {
        febExp: 0,
        febDate: D("2020", "02"),
      },
      {
        marExp: 0,
        marDate: D("2020", "03"),
      },
      {
        aprExp: 0,
        aprDate: D("2020", "04"),
      },
      {
        mayExp: 0,
        mayDate: D("2020", "05"),
      },
      {
        junExp: 0,
        junDate: D("2020", "06"),
      },
      {
        julExp: 0,
        julDate: D("2020", "07"),
      },
      {
        augExp: 0,
        augDate: D("2020", "08"),
      },
      {
        septExp: 0,
        septDate: D("2020", "09"),
      },
      {
        octExp: 0,
        octDate: D("2020", "10"),
      },
      {
        novExp: 0,
        novDate: D("2020", "11"),
      },
      {
        decExp: 0,
        decDate: D("2020", "12"),
      },
    ],
  };

  data.revenueData.forEach(
    (el) => (el.startDate = new Date(el.startDate).toString())
  );
  data.expenseData.forEach(
    (el) => (el.startDate = new Date(el.startDate).toString())
  );

  data.revenueData.forEach((el) => {
    if (el.startDate.includes("Jan")) {
      inpData.revenue[0].janRev += el.amount;
      inpData.revenue[0].janDate = el.startDate;
    } else if (el.startDate.includes("Feb")) {
      inpData.revenue[1].febRev += el.amount;
      inpData.revenue[1].febDate = el.startDate;
    } else if (el.startDate.includes("Mar")) {
      inpData.revenue[2].marRev += el.amount;
      inpData.revenue[2].marDate = el.startDate;
    } else if (el.startDate.includes("Apr")) {
      inpData.revenue[3].aprRev += el.amount;
      inpData.revenue[3].aprDate = el.startDate;
    } else if (el.startDate.includes("May")) {
      inpData.revenue[4].mayRev += el.amount;
      inpData.revenue[4].mayDate = el.startDate;
    } else if (el.startDate.includes("Jun")) {
      inpData.revenue[5].junRev += el.amount;
      inpData.revenue[5].junDate = el.startDate;
    } else if (el.startDate.includes("Jul")) {
      inpData.revenue[6].julRev += el.amount;
      inpData.revenue[6].julDate = el.startDate;
    } else if (el.startDate.includes("Aug")) {
      inpData.revenue[7].augRev += el.amount;
      inpData.revenue[7].augDate = el.startDate;
    } else if (el.startDate.includes("Sep")) {
      inpData.revenue[8].septRev += el.amount;
      inpData.revenue[8].septDate = el.startDate;
    } else if (el.startDate.includes("Oct")) {
      inpData.revenue[9].octRev += el.amount;
      inpData.revenue[9].octDate = el.startDate;
    } else if (el.startDate.includes("Nov")) {
      inpData.revenue[10].novRev += el.amount;
      inpData.revenue[10].novDate = el.startDate;
    } else if (el.startDate.includes("Dec")) {
      inpData.revenue[11].decRev += el.amount;
      inpData.revenue[11].decDate = el.startDate;
    }
  });

  data.expenseData.forEach((el) => {
    if (el.startDate.includes("Jan")) {
      inpData.expense[0].janExp += el.amount;
      inpData.expense[0].janDate = el.startDate;
    } else if (el.startDate.includes("Feb")) {
      inpData.expense[1].febExp += el.amount;
      inpData.expense[1].febDate = el.startDate;
    } else if (el.startDate.includes("Mar")) {
      inpData.expense[2].marExp += el.amount;
      inpData.expense[2].marDate = el.startDate;
    } else if (el.startDate.includes("Apr")) {
      inpData.expense[3].aprExp += el.amount;
      inpData.expense[3].aprDate = el.startDate;
    } else if (el.startDate.includes("May")) {
      inpData.expense[4].mayExp += el.amount;
      inpData.expense[4].mayDate = el.startDate;
    } else if (el.startDate.includes("Jun")) {
      inpData.expense[5].junExp += el.amount;
      inpData.expense[5].junDate = el.startDate;
    } else if (el.startDate.includes("Jul")) {
      inpData.expense[6].julExp += el.amount;
      inpData.expense[6].julDate = el.startDate;
    } else if (el.startDate.includes("Aug")) {
      inpData.expense[7].augExp += el.amount;
      inpData.expense[7].augDate = el.startDate;
    } else if (el.startDate.includes("Sep")) {
      inpData.expense[8].septExp += el.amount;
      inpData.expense[8].septDate = el.startDate;
    } else if (el.startDate.includes("Oct")) {
      inpData.expense[9].octExp += el.amount;
      inpData.expense[9].octDate = el.startDate;
    } else if (el.startDate.includes("Nov")) {
      inpData.expense[10].novExp += el.amount;
      inpData.expense[10].novDate = el.startDate;
    } else if (el.startDate.includes("Dec")) {
      inpData.expense[11].decExp += el.amount;
      inpData.expense[11].decDate = el.startDate;
    }
  });

  let balance = [
    {
      amount: inpData.revenue[0].janRev - inpData.expense[0].janExp,
      startDate:
        new Date(inpData.revenue[0].janDate).toISOString() ||
        new Date(inpData.expense[0].janDate).toISOString(),
    },
    {
      amount: inpData.revenue[1].febRev - inpData.expense[1].febExp,
      startDate:
      new Date(inpData.revenue[1].febDate).toISOString() ||
      new Date(inpData.expense[1].febDate).toISOString(),
    },
    {
      amount: inpData.revenue[2].marRev - inpData.expense[2].marExp,
      startDate:
      new Date(inpData.revenue[2].marDate).toISOString() ||
      new Date(inpData.expense[2].marDate).toISOString(),
    },
    {
      amount: inpData.revenue[3].aprRev - inpData.expense[3].aprExp,
      startDate:
        new Date(inpData.revenue[3].aprDate).toISOString() ||
        new Date(inpData.expense[3].aprDate).toISOString(),
    },
    {
      amount: inpData.revenue[4].mayRev - inpData.expense[4].mayExp,
      startDate:
      new Date(inpData.revenue[4].mayDate).toISOString() ||
      new Date(inpData.expense[4].mayDate).toISOString(),
    },
    {
      amount: inpData.revenue[5].junRev - inpData.expense[5].junExp,
      startDate:
        new Date(inpData.revenue[5].junDate).toISOString() ||
        new Date(inpData.expense[5].junDate).toISOString(),
    },
    {
      amount: inpData.revenue[6].julRev - inpData.expense[6].julExp,
      startDate:
        new Date(inpData.revenue[6].julDate).toISOString() ||
        new Date(inpData.expense[6].julDate).toISOString(),
    },
    {
      amount: inpData.revenue[7].augRev - inpData.expense[7].augExp,
      startDate:
        new Date(inpData.revenue[7].augDate).toISOString() ||
        new Date(inpData.expense[7].augDate).toISOString(),
    },
    {
      amount: inpData.revenue[8].septRev - inpData.expense[8].septExp,
      startDate:
        new Date(inpData.revenue[8].septDate).toISOString() ||
        new Date(inpData.expense[8].septDate).toISOString(),
    },
    {
      amount: inpData.revenue[9].octRev - inpData.expense[9].octExp,
      startDate:
        new Date(inpData.revenue[9].octDate).toISOString() ||
        new Date(inpData.expense[9].octDate).toISOString(),
    },
    {
      amount: inpData.revenue[10].novRev - inpData.expense[10].novExp,
      startDate:
        new Date(inpData.revenue[10].novDate).toISOString() ||
        new Date(inpData.expense[10].novDate).toISOString(),
    },
    {
      amount: inpData.revenue[11].decRev - inpData.expense[11].decExp,
      startDate:
        new Date(inpData.revenue[11].decDate).toISOString() ||
        new Date(inpData.expense[11].decDate).toISOString(),
    },
  ];


  console.log("Balance",balance.sort((a,b)=>a.startDate-b.startDate));
  // balance.map((el)=>console.log(el))

  return <div>
    <h1>Balabce Sheet</h1>
    <table border = "1" cellPadding = "10" cellSpacing={"5"} style={{marginLeft:"36%"}} >
      <tbody>
         <tr>
            <th>Month</th>
            <th>Revenue</th>
            <th>Expense</th>
            <th>Balance</th>
         </tr>
                     
         <tr>
            <td>{"Jan"}</td>
            <td>{inpData.revenue[0].janRev}</td>
            <td>{inpData.expense[0].janExp}</td>
            <td>{balance[0].amount}</td>
         </tr>
         <tr>
            <td>{"Feb"}</td>
            <td>{inpData.revenue[1].febRev}</td>
            <td>{inpData.expense[1].febExp}</td>
            <td>{balance[1].amount}</td>
         </tr>
         <tr>
            <td>{"Mar"}</td>
            <td>{inpData.revenue[2].marRev}</td>
            <td>{inpData.expense[2].marExp}</td>
            <td>{balance[2].amount}</td>
         </tr>
         <tr>
            <td>{"Apr"}</td>
            <td>{inpData.revenue[3].aprRev}</td>
            <td>{inpData.expense[3].aprExp}</td>
            <td>{balance[3].amount}</td>
         </tr>
         <tr>
            <td>{"May"}</td>
            <td>{inpData.revenue[4].mayRev}</td>
            <td>{inpData.expense[4].mayExp}</td>
            <td>{balance[4].amount}</td>
         </tr>
         <tr>
            <td>{"Jun"}</td>
            <td>{inpData.revenue[5].junRev}</td>
            <td>{inpData.expense[5].junExp}</td>
            <td>{balance[5].amount}</td>
         </tr>
         <tr>
            <td>{"Jul"}</td>
            <td>{inpData.revenue[6].julRev}</td>
            <td>{inpData.expense[6].julExp}</td>
            <td>{balance[6].amount}</td>
         </tr>
         <tr>
            <td>{"Aug"}</td>
            <td>{inpData.revenue[7].augRev}</td>
            <td>{inpData.expense[7].augExp}</td>
            <td>{balance[7].amount}</td>
         </tr>
         <tr>
            <td>{"Sept"}</td>
            <td>{inpData.revenue[8].septRev}</td>
            <td>{inpData.expense[8].septExp}</td>
            <td>{balance[8].amount}</td>
         </tr>
         <tr>
            <td>{"Oct"}</td>
            <td>{inpData.revenue[9].octRev}</td>
            <td>{inpData.expense[9].octExp}</td>
            <td>{balance[9].amount}</td>
         </tr>
         <tr>
            <td>{"Nov"}</td>
            <td>{inpData.revenue[10].novRev}</td>
            <td>{inpData.expense[10].novExp}</td>
            <td>{balance[10].amount}</td>
         </tr>
         <tr>
            <td>{"Dec"}</td>
            <td>{inpData.revenue[11].decRev}</td>
            <td>{inpData.expense[11].decExp}</td>
            <td>{balance[11].amount}</td>
         </tr>
         </tbody>
      </table>
  </div>;
};

export default BalanceSheet;
