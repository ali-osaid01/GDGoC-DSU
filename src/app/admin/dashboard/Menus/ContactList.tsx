import { useState, useEffect } from 'react';
import { Table, Pagination, Button, Modal, Spinner, Alert } from 'flowbite-react';
import { BASE_URL } from '../../../../util/constant';

const ITEMS_PER_PAGE = 3;

export default function ContactList() {
    const [contacts, setContacts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch(`${BASE_URL}/contact`);
                if (!response.ok) {
                    throw new Error('Failed to fetch contacts');
                }
                const data = await response.json();
                setContacts(data.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchContacts();
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleDetailsClick = (contact) => {
        setSelectedContact(contact);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedContact(null);
    };

    const getShortMessage = (message) => {
        const words = message.split(' ');
        if (words.length > 5) {
            return words.slice(0, 3).join(' ') + '...';
        }
        return message;
    };

    const displayedContacts = contacts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner aria-label="Loading spinner" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Alert color="failure">
                    <span>
                        <strong>Error:</strong> {error}
                    </span>
                </Alert>
            </div>
        );
    }

    return (
        <>
            <div className="overflow-x-auto">
                <Table striped={true} hoverable={true}>
                    <Table.Head>
                        <Table.HeadCell>First Name</Table.HeadCell>
                        <Table.HeadCell>Last Name</Table.HeadCell>
                        <Table.HeadCell>Email Address</Table.HeadCell>
                        <Table.HeadCell>Message</Table.HeadCell>
                        <Table.HeadCell>Action</Table.HeadCell>
                    </Table.Head>
                    <Table.Body>
                        {displayedContacts.map((contact, index) => (
                            <Table.Row key={index}>
                                <Table.Cell>{contact.firstName}</Table.Cell>
                                <Table.Cell>{contact.lastName}</Table.Cell>
                                <Table.Cell>{contact.email}</Table.Cell>
                                <Table.Cell>{getShortMessage(contact.message)}</Table.Cell>
                                <Table.Cell>
                                    <Button color="blue" onClick={() => handleDetailsClick(contact)}>Details</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(contacts.length / ITEMS_PER_PAGE)}
                    onPageChange={handlePageChange}
                />
            </div>
            
            {selectedContact && (
                <Modal show={showModal} onClose={handleCloseModal}>
                    <Modal.Header>
                        Contact Details
                    </Modal.Header>
                    <Modal.Body>
                        <p><strong>First Name:</strong> {selectedContact.firstName}</p>
                        <p><strong>Last Name:</strong> {selectedContact.lastName}</p>
                        <p><strong>Email:</strong> {selectedContact.email}</p>
                        <p><strong>Message:</strong> {selectedContact.message}</p>
                    </Modal.Body>
                </Modal>
            )}
        </>
    );
}
