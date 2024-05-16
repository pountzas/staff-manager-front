import { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

type Props = {
  business?: boolean;
  businessId?: number | null;
};
export function AddButtonModal({ business = false, businessId }: Props) {
  console.log(businessId, "businessId");
  const [showModal, setShowModal] = useState(false);
  const [formDataBusiness, setFormDataBusiness] = useState({
    name: "",
    location: "",
    type: ""
  });
  const [formDataStaff, setFormDataStaff] = useState({
    email: "",
    first_name: "",
    last_name: "",
    position: "",
    phone_number: "",
    business_id: 0
  });

  useEffect(() => {
    if (typeof businessId === "number") {
      setFormDataStaff((prevFormDataStaff) => ({
        ...prevFormDataStaff,
        business_id: businessId
      }));
    }
  }, [businessId]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (business) {
      const response = await fetch("http://localhost:3001/api/businesses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataBusiness)
      });
      const data = await response.json();
      console.log(data);
    } else {
      const response = await fetch("http://localhost:3001/api/staff", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataStaff)
      });
      const data = await response.json();
      console.log(data);
    }
    setShowModal(false);
  };

  return (
    <>
      <button
        className="text-3xl text-slate-800 pb-4"
        onClick={() => setShowModal(true)}
      >
        <IoIosAddCircle />
      </button>
      {showModal && (
        <div className="modal pb-8">
          <form onSubmit={handleFormSubmit} className="text-xs font-medium">
            {business ? (
              <div className="space-y-2">
                <div className="space-x-2">
                  <label>
                    Name:
                    <input
                      type="text"
                      required
                      onChange={(e) =>
                        setFormDataBusiness({
                          ...formDataBusiness,
                          name: e.target.value
                        })
                      }
                    />
                  </label>
                  <label>
                    Location:
                    <input
                      type="text"
                      required
                      onChange={(e) =>
                        setFormDataBusiness({
                          ...formDataBusiness,
                          location: e.target.value
                        })
                      }
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Type:
                    <select
                      onChange={(e) =>
                        setFormDataBusiness({
                          ...formDataBusiness,
                          type: e.target.value
                        })
                      }
                    >
                      <option value="">Select a type</option>
                      <option value="bar">Bar</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="club">Club</option>
                      <option value="hotel">Hotel</option>
                      <option value="cafe">Cafe</option>
                    </select>
                  </label>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <button className="bg-slate-500 rounded p-0.5" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <div className="space-x-2">
                    <label>
                      Email:
                      <input
                        type="email"
                        required
                        onChange={(e) =>
                          setFormDataStaff({
                            ...formDataStaff,
                            email: e.target.value
                          })
                        }
                      />
                    </label>
                    <label>
                      First Name:
                      <input
                        type="text"
                        required
                        onChange={(e) =>
                          setFormDataStaff({
                            ...formDataStaff,
                            first_name: e.target.value
                          })
                        }
                      />
                    </label>
                    <label>
                      Last Name:
                      <input
                        type="text"
                        required
                        onChange={(e) =>
                          setFormDataStaff({
                            ...formDataStaff,
                            last_name: e.target.value
                          })
                        }
                      />
                    </label>
                    <label>
                      Phone Number:
                      <input
                        type="text"
                        onChange={(e) =>
                          setFormDataStaff({
                            ...formDataStaff,
                            phone_number: e.target.value
                          })
                        }
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Position:
                      <select
                        onChange={(e) =>
                          setFormDataStaff({
                            ...formDataStaff,
                            position: e.target.value
                          })
                        }
                      >
                        <option value="">Select a position</option>
                        <option value="kitchen">Kitchen</option>
                        <option value="service">Service</option>
                        <option value="PR">PR</option>
                      </select>
                    </label>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <button
                      className="bg-slate-500 rounded p-0.5"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
      )}
    </>
  );
}
